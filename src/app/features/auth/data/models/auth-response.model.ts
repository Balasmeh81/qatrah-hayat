import { GenderEnum } from "../enums/gender-enum";

export interface AuthResponseModel {
  userId: number;
  email: string;
  fullNameAr: string;
  fullNameEn: string;
  gender: GenderEnum;
  isProfileCompleted: boolean;
  role: string;
  token: string;
}
