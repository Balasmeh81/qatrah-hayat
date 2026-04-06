import { BloodTypeEnum } from '../../domain/enums/blood-type-enum';
import { GenderEnum } from '../../domain/enums/gender-enum';
import { MaritalStatusEnum } from '../../domain/enums/marital-status-enum';

export interface SignUpFormValue {
  nationalId: string;
  fullNameAr: string;
  fullNameEn: string;
  dateOfBirth: string;
  bloodType: BloodTypeEnum;
  gender: GenderEnum;
  maritalStatus: MaritalStatusEnum;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  address: string;
  password: string;
  confirmPassword: string;
  iAgree: boolean;
  iConfirm: boolean;
}
