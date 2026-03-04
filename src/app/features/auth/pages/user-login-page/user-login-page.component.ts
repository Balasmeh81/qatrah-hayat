import { Component, inject } from '@angular/core';
import { SharedForAuth } from '../../../../shared/shared-imports/shared';
import { LanguageService } from '../../../../core/services/language.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login-page',
  imports: [SharedForAuth],
  templateUrl: './user-login-page.component.html',
  styleUrl: './user-login-page.component.css'
})
export class UserLoginPageComponent {
  langService = inject(LanguageService);
  loginForm: FormGroup;
  showPassword: boolean = false;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    console.log(this.showPassword);
  }

  isRequired(controlName: string): boolean {
    const control = this.loginForm?.get(controlName);
    return !!control && control.getError('required') && (control.dirty || control.touched);
  }

  hasError(controlName: string, errorType: string): boolean {
    const control = this.loginForm?.get(controlName);
    return !!control && control.hasError(errorType) && (control.dirty || control.touched);
  }



  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log(this.loginForm);
    }
  }
}
