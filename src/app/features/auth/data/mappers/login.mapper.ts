import { LoginFormValueModel } from "../models/login-form-value-model";
import { LoginRequestModel } from "../models/login-request.model";



export function mapLoginFormToLoginRequest(
  formValue: LoginFormValueModel
): LoginRequestModel {
  return {
    nationalId: formValue.nationalId.trim(),
    password: formValue.password
  };
}


