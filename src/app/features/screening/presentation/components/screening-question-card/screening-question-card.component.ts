import { LanguageService } from './../../../../../core/services/language.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScreeningQuestion } from '../../../data/models/screening-question.model';
import { TranslateModule } from '@ngx-translate/core';
import { FormErrorMessageComponent } from "../../../../../shared/components/form-error-message/form-error-message.component";
import { ScreeningAnswerFormGroup } from '../../../data/models/screening-form.model';
import { DateTextFieldComponent } from "../../../../../shared/components/date-text-field/date-text-field.component";
import { TextFieldComponent } from "../../../../../shared/components/text-field/text-field.component";

@Component({
  selector: 'app-screening-question-card',
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, FormErrorMessageComponent, DateTextFieldComponent, TextFieldComponent],
  templateUrl: './screening-question-card.component.html',
  styleUrl: './screening-question-card.component.css'
})
export class ScreeningQuestionCardComponent {
  @Input({ required: true }) question!: ScreeningQuestion;
  @Input({ required: true }) group!: ScreeningAnswerFormGroup;

  LanguageService = inject(LanguageService);
  get isArabicLang(): boolean {
    return this.LanguageService.currentLang === 'ar';
  }

}
