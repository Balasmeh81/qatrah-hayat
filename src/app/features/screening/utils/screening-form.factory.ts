import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ScreeningQuestion } from '../data/models/screening-question.model';

export type ScreeningAnswerFormGroup = FormGroup<{
  screeningQuestionId: FormControl<number>;
  answer: FormControl<boolean | null>;
  additionalText: FormControl<string | null>;
  conditionalDateValue: FormControl<string | null>;
}>;

export type ScreeningFormGroup = FormGroup<{
  answers: FormArray<ScreeningAnswerFormGroup>;
}>;

export class ScreeningFormFactory {
  static createForm(questions: ScreeningQuestion[]): ScreeningFormGroup {
    const answerGroups = questions.map((question) => {
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
      answers: new FormArray(answerGroups)
    });
  }
}
