export interface ScreeningAnswerModel {
  screeningQuestionId: number,
  answer: boolean,
  conditionalDateValue: string | null,
  additionalText: string | null
}
