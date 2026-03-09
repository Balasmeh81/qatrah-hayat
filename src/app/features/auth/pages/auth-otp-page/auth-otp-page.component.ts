import { Component, inject } from '@angular/core';
import { UserAuthContainerHeadingComponent } from "../../components/user-auth-container-heading/user-auth-container-heading.component";
import { AppPrimaryButtonComponent } from "../../../../shared/components/app-primary-button/app-primary-button.component";
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OtpInputComponent } from "../../../../shared/components/otp-input/otp-input.component";
import { Router } from '@angular/router';
import { FormErrorMessageComponent } from "../../../../shared/components/form-error-message/form-error-message.component";

@Component({
  selector: 'app-auth-otp-page',
  imports: [UserAuthContainerHeadingComponent, AppPrimaryButtonComponent, TranslateModule, ReactiveFormsModule, OtpInputComponent, FormErrorMessageComponent],
  templateUrl: './auth-otp-page.component.html',
  styleUrl: './auth-otp-page.component.css'
})
export class AuthOtpPageComponent {
  router = inject(Router);
  otpForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  constructor(private fb: FormBuilder) {
    this.otpForm = this.fb.group({
      otp: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern('^[0-9]{6}$')
        ]
      ]
    });
  }

  get otpControl(): FormControl {
    return this.otpForm.get('otp') as FormControl;
  }

  onOtpChange(otp: string) {
    this.otpControl.setValue(otp);
    this.otpControl.markAsDirty();
    this.otpControl.markAsTouched();
  }
  onSubmit(): void {

    this.otpForm.markAllAsTouched();

    if (this.otpForm.invalid) {
      return;
    }

    this.isLoading = true;

    const otp = this.otpForm.value.otp;

    console.log('OTP:', otp);

    setTimeout(() => {
      this.router.navigate(['/user-auth/new-password']);
    }, 1000);

  }
}
