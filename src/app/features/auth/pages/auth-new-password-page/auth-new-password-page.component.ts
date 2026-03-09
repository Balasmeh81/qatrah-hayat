import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { AppPrimaryButtonComponent } from "../../../../shared/components/app-primary-button/app-primary-button.component";
import { FormErrorMessageComponent } from "../../../../shared/components/form-error-message/form-error-message.component";
import { PasswordTextFieldComponent } from "../../../../shared/components/password-text-field/password-text-field.component";
import { TextFieldComponent } from "../../../../shared/components/text-field/text-field.component";
import { UserAuthContainerHeadingComponent } from "../../components/user-auth-container-heading/user-auth-container-heading.component";
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
function passwordMatchValidator(group: FormGroup) {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;

  return password === confirmPassword
    ? null
    : { passwordMismatch: true };
}
@Component({
  selector: 'app-auth-new-password-page',
  imports: [TranslateModule, ReactiveFormsModule, AppPrimaryButtonComponent, FormErrorMessageComponent, PasswordTextFieldComponent, UserAuthContainerHeadingComponent],
  templateUrl: './auth-new-password-page.component.html',
  styleUrl: './auth-new-password-page.component.css'
})
export class AuthNewPasswordPageComponent {
  langService = inject(LanguageService);
  newPasswordForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.newPasswordForm = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
        confirmPassword: ['', [Validators.required, Validators.maxLength(64), Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}$')]]
      },
      { validators: passwordMatchValidator }
    );
  }
  get passwordControl(): FormControl {
    return this.newPasswordForm.get('password') as FormControl;
  }
  get confirmPasswordControl(): FormControl {
    return this.newPasswordForm.get('confirmPassword') as FormControl;
  }



  onSubmit(): void {

    this.newPasswordForm.markAllAsTouched();

    if (this.newPasswordForm.invalid) {
      return;
    }

    this.isLoading = true;

    const { password } = this.newPasswordForm.value;

    console.log('New Password:', password);

  }
}
