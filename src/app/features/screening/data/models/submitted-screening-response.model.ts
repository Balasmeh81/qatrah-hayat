import { EligibilityStatus } from "../../../../core/enums/eligibility-status.enum";
import { ScreeningSessionType } from "../enums/screening-session-type.enum";

export interface SubmittedScreeningResponseModel {
  screeningSessionId: number,
  sessionType: ScreeningSessionType,
  isProfileCompleted: boolean,
  resultEligibilityStatus: EligibilityStatus,
  createdAt: Date,
  savedAnswersCount: number
}
