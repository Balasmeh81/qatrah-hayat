import { ScreeningSessionType } from "../enums/screening-session-type.enum";
import { ScreeningAnswerModel } from "./screening-answer.model";

export interface SubmittedScreeningQuestionsRequestModel {
  sessionType: ScreeningSessionType,
  donationIntentId: number | null,
  answers: ScreeningAnswerModel[]
}
