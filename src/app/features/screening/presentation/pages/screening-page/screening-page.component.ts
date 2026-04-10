import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreeningSessionType } from '../../../data/enums/screening-session-type.enum';
import { ScreeningQuestion } from '../../../data/models/screening-question.model';
import { ScreeningService } from '../../../data/services/screening.service';
import { ScreeningFormFactory } from '../../../utils/screening-form.factory';
import { SubmittedScreeningQuestionsRequestModel } from '../../../data/models/submitted-screening-questions-request.model';
import { CommonModule } from '@angular/common';
import { ScreeningQuestionCardComponent } from "../../components/screening-question-card/screening-question-card.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoadingComponent } from "../../../../../shared/components/loading/loading.component";
import { AppPrimaryButtonComponent } from "../../../../../shared/components/app-primary-button/app-primary-button.component";
import { ScreeningFormGroup, ScreeningAnswerFormGroup } from '../../../data/models/screening-form.model';
import { CheckBoxInputComponent } from "../../../../../shared/components/check-box-input/check-box-input.component";
import { FormErrorMessageComponent } from "../../../../../shared/components/form-error-message/form-error-message.component";

@Component({
  selector: 'app-screening-page',
  imports: [CommonModule, ReactiveFormsModule, ScreeningQuestionCardComponent, TranslateModule, LoadingComponent, AppPrimaryButtonComponent, CheckBoxInputComponent, FormErrorMessageComponent],
  templateUrl: './screening-page.component.html',
  styleUrl: './screening-page.component.css'
})
export class ScreeningPageComponent implements OnInit {
  private readonly screeningService = inject(ScreeningService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly translate = inject(TranslateService);
  protected readonly isLoading = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly questions = signal<ScreeningQuestion[]>([]);

  protected form!: ScreeningFormGroup;

  protected sessionType!: ScreeningSessionType;
  protected isForFemaleOnly = false;
  protected donationIntentId: number | null = null;

  protected readonly answersArray = computed(() => {
    return this.form?.controls.answers;
  });

  ngOnInit(): void {
    const isValid = this.readRouteData();
    if (!isValid) return;

    this.loadQuestions();
  }

  private readRouteData(): boolean {
    const sessionTypeParam = this.route.snapshot.queryParamMap.get('sessionType');
    const isForFemaleOnlyParam = this.route.snapshot.queryParamMap.get('isForFemaleOnly');
    const donationIntentIdParam = this.route.snapshot.queryParamMap.get('donationIntentId');

    if (!sessionTypeParam) {
      this.errorMessage.set(this.translate.instant('Failed_to_load_screening_questions'));
      return false;
    }

    this.sessionType = Number(sessionTypeParam) as ScreeningSessionType;
    this.isForFemaleOnly = isForFemaleOnlyParam === 'true';
    this.donationIntentId = donationIntentIdParam ? Number(donationIntentIdParam) : null;
    return true;
  }

  private loadQuestions(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.screeningService.getScreeningQuestions(this.sessionType, this.isForFemaleOnly).subscribe({
      next: (questions) => {
        const sortedQuestions = [...questions].sort((a, b) => a.displayOrder - b.displayOrder);
        this.questions.set(sortedQuestions);
        this.form = ScreeningFormFactory.createForm(sortedQuestions);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.errorMessage.set(this.translate.instant('Failed_to_load_screening_questions'));
        this.isLoading.set(false);
      }
    });
  }

  protected get answersFormArray(): FormArray<ScreeningAnswerFormGroup> {
    return this.form.controls.answers;
  }

  protected onSubmit(): void {
    if (!this.form) return;

    this.applyConditionalValidationBeforeSubmit();

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: SubmittedScreeningQuestionsRequestModel = {
      sessionType: this.sessionType,
      donationIntentId: this.donationIntentId,
      answers: this.form.getRawValue().answers.map((answer) => ({
        screeningQuestionId: answer.screeningQuestionId,
        answer: !!answer.answer,
        additionalText: answer.additionalText?.trim() || null,
        conditionalDateValue: answer.conditionalDateValue || null
      }))
    };

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    this.screeningService.submitScreeningQuestions(payload).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);

        this.router.navigate(['/screening/result'], {
          state: { response }
        });
      },
      error: (error) => {
        this.isSubmitting.set(false);
        this.errorMessage.set(this.translate.instant('Failed_to_load_screening_questions'));
      }
    });
  }

  private applyConditionalValidationBeforeSubmit(): void {
    const questions = this.questions();

    this.answersFormArray.controls.forEach((group, index) => {
      const question = questions[index];
      const answerValue = group.controls.answer.value;

      const additionalTextControl = group.controls.additionalText;
      const dateValueControl = group.controls.conditionalDateValue;

      additionalTextControl.clearValidators();
      dateValueControl.clearValidators();

      if (answerValue === true && question.requiresAdditionalText) {
        additionalTextControl.addValidators([Validators.required]);
      }

      if (answerValue === true && question.requiresDateValue) {
        dateValueControl.addValidators([Validators.required]);
      }

      additionalTextControl.updateValueAndValidity({ emitEvent: false });
      dateValueControl.updateValueAndValidity({ emitEvent: false });
    });
  }
}
