import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ScreeningQuestion } from '../data/models/screening-question.model';
import { ScreeningFormGroup, ScreeningAnswerFormGroup } from '../data/models/screening-form.model';

export class ScreeningFormFactory {
  static createForm(questions: ScreeningQuestion[]): ScreeningFormGroup {
    const answerGroups: ScreeningAnswerFormGroup[] = questions.map((question) => {
      return new FormGroup({
        screeningQuestionId: new FormControl(question.id, {
          nonNullable: true,
          validators: [Validators.required]
        }),
        answer: new FormControl<boolean | null>(null, {
          validators: [Validators.required]
        }),
        additionalText: new FormControl<string | null>(null),
        conditionalDateValue: new FormControl<string | null>(null)
      });
    });

    return new FormGroup({
      answers: new FormArray(answerGroups),
      iConfirm: new FormControl(false, {
        nonNullable: true,
        validators: [Validators.requiredTrue]
      })
    });
  }
}
