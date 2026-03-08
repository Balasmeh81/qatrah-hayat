import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordTextFieldComponent } from '../../../../shared/components/password-text-field/password-text-field.component';
import { TextFieldComponent } from '../../../../shared/components/text-field/text-field.component';
import { SharedForAuth } from '../../../../shared/shared-imports/shared';
import { AppPrimaryButtonComponent } from "../../../../shared/components/app-primary-button/app-primary-button.component";
import { FormErrorMessageComponent } from "../../../../shared/components/form-error-message/form-error-message.component";
import { ForgetPasswordAndRememberMeComponent } from "../forget-password-and-remeber-me/forget-password-and-remeber-me.component";

@Component({
  selector: 'app-user-login-form',
  imports: [SharedForAuth, TextFieldComponent, PasswordTextFieldComponent, AppPrimaryButtonComponent, FormErrorMessageComponent, ForgetPasswordAndRememberMeComponent],
  templateUrl: './user-login-form.component.html',
  styleUrl: './user-login-form.component.css'
})
export class UserLoginFormComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      nationalId: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]],
      password: ['', [Validators.required, Validators.maxLength(64)]]
    });
  }

  get nationalIdControl(): FormControl {
    return this.loginForm.get('nationalId') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { nationalId, password } = this.loginForm.value;
      console.log({ nationalId, password });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
