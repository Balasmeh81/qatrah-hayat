import { ScreeningSessionType } from "../enums/screening-session-type.enum"

export interface GetScreeningQuestionsResponseModel {

  Id: number,
  TextAr: string,
  TextEn: string,
  SessionType: ScreeningSessionType,
  DisplayOrder: number,

  IsForFemaleOnly: boolean,
  RequiresAdditionalText: boolean,
  RequiresDateValue: boolean,

  ConditionalDateLabelAr: string | null,
  ConditionalDateLabelEn: string | null,

  AdditionalTextLabelAr: string | null,
  AdditionalTextLabelEn: string | null
}
