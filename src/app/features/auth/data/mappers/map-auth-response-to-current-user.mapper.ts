import { CurrentUserModel } from '../../../../shared/models/current-user.model';
import { AuthResponseModel } from '../models/auth-response.model';

export function mapAuthResponseToCurrentUser(response: AuthResponseModel): CurrentUserModel {
  return {
    userId: response.userId,
    email: response.email,
    fullNameAr: response.fullNameAr,
    fullNameEn: response.fullNameEn,
    gender: response.gender,
    isProfileCompleted: response.isProfileCompleted,
    role: response.role
  };
}
