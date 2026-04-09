import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgetPasswordAndRememberMeComponent } from "../forget-password-and-remember-me/forget-password-and-remember-me.component";
import { AppPrimaryButtonComponent } from '../../../../../shared/components/app-primary-button/app-primary-button.component';
import { FormErrorMessageComponent } from '../../../../../shared/components/form-error-message/form-error-message.component';
import { PasswordTextFieldComponent } from '../../../../../shared/components/password-text-field/password-text-field.component';
import { TextFieldComponent } from '../../../../../shared/components/text-field/text-field.component';
import { SharedForAuth } from '../../../../../shared/shared-imports/shared';
import { LoginFormModel } from '../../../data/models/login-form.model';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { finalize, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../../data/services/auth.service';
import { LoginFormValueModel } from '../../../data/models/login-form-value-model';
import { mapLoginFormToLoginRequest } from '../../../data/mapper/login.mapper';
import { Failure } from '../../../../../core/errors/failure';
import { ScreeningSessionType } from '../../../../screening/data/enums/screening-session-type.enum';

@Component({
  selector: 'app-user-login-form',
  imports: [SharedForAuth, TextFieldComponent, PasswordTextFieldComponent, AppPrimaryButtonComponent, FormErrorMessageComponent, ForgetPasswordAndRememberMeComponent],
  templateUrl: './user-login-form.component.html',
  styleUrl: './user-login-form.component.css'
})
export class UserLoginFormComponent {

  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  loginForm: FormGroup<LoginFormModel>;

  serverErrorMessage = '';
  isLoading = false;
  constructor() {
    this.loginForm = this.fb.group({
      nationalId: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^\d{10}$/)
      ]),

      password: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.maxLength(64),
      ]),

    }
    );
  }



  onSubmit(): void {
    this.serverErrorMessage = '';

    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }

    const formValue = this.loginForm.getRawValue() as LoginFormValueModel;
    const request = mapLoginFormToLoginRequest(formValue);
    this.isLoading = true;
    this.authService.login(request).pipe(
      takeUntil(this.destroy$),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log('Login response:', response);
        this.clearData();
        if (!response.isProfileCompleted) {
          this.router.navigate(['//user/screening'], {
            queryParams: {
              sessionType: ScreeningSessionType.Registration,
              isForFemaleOnly: response.gender === 2
            }
          });
          return;
        }
        this.router.navigate(['/user']);
      },
      error: (error: Failure) => {
        this.isLoading = false;
        if (error.message === "Invalid email/National ID or password.") {
          this.serverErrorMessage = this.translate.instant('invalidCredentials');
        } else if (error.message === "This account is inactive.") {
          this.serverErrorMessage = this.translate.instant('InactiveAccount');
        } else {
          this.serverErrorMessage = this.translate.instant('Generic_Error_Login');
        }
        console.error('Login error:', error);
      }
    });

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  clearData(): void {
    this.loginForm.reset();
    this.serverErrorMessage = '';
  }
}
