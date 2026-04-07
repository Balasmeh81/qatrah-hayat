import { LoginFormValueModel } from "../../domain/models/login-form-value-model";
import { LoginRequestDto } from "../dots/login-request.dto";


export function mapLoginFormToLoginRequest(
  formValue: LoginFormValueModel
): LoginRequestDto {
  return {
    nationalId: formValue.nationalId.trim(),
    password: formValue.password
  };
}


