import { ScreeningSessionType } from "../enums/screening-session-type.enum";

export interface ScreeningQuestion {
  id: number;
  textAr: string;
  textEn: string;
  sessionType: ScreeningSessionType;
  displayOrder: number;

  isForFemaleOnly: boolean;
  requiresAdditionalText: boolean;
  requiresDateValue: boolean;

  conditionalDateLabelAr?: string | null;
  conditionalDateLabelEn?: string | null;

  additionalTextLabelAr?: string | null;
  additionalTextLabelEn?: string | null;
}
