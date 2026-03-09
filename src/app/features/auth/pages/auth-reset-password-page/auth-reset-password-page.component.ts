import { Component, inject } from '@angular/core';
import { UserAuthContainerHeadingComponent } from "../../components/user-auth-container-heading/user-auth-container-heading.component";
import { TranslateModule } from '@ngx-translate/core';
import { TextFieldComponent } from "../../../../shared/components/text-field/text-field.component";
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormErrorMessageComponent } from "../../../../shared/components/form-error-message/form-error-message.component";
import { AppPrimaryButtonComponent } from "../../../../shared/components/app-primary-button/app-primary-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-reset-password-page',
  imports: [UserAuthContainerHeadingComponent, TranslateModule, TextFieldComponent, ReactiveFormsModule, FormErrorMessageComponent, AppPrimaryButtonComponent],
  templateUrl: './auth-reset-password-page.component.html',
  styleUrl: './auth-reset-password-page.component.css'
})
export class AuthResetPasswordPageComponent {
  router = inject(Router);
  isLoading = false;
  resetPasswordForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]]
    });
  }

  get emailControl(): FormControl {
    return this.resetPasswordForm.get('email') as FormControl;
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      const { email } = this.resetPasswordForm.value;
      this.isLoading = true;
      console.log({ email });
      this.router.navigate(['/user-auth/reset-password-confirmation']);
    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  }
}
