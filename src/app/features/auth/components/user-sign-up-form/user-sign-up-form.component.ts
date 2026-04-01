import { Component } from '@angular/core';
import { AppPrimaryButtonComponent } from '../../../../shared/components/app-primary-button/app-primary-button.component';
import { FormErrorMessageComponent } from '../../../../shared/components/form-error-message/form-error-message.component';
import { PasswordTextFieldComponent } from '../../../../shared/components/password-text-field/password-text-field.component';
import { TextFieldComponent } from '../../../../shared/components/text-field/text-field.component';
import { SharedForAuth } from '../../../../shared/shared-imports/shared';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DateTextFieldComponent } from "../../../../shared/components/date-text-field/date-text-field.component";
import { MaritalStatusRadioGroupComponent } from "../marital-status-radio-group/marital-status-radio-group.component";
import { CheckBoxInputComponent } from "../../../../shared/components/check-box-input/check-box-input.component";

@Component({
  selector: 'app-user-sign-up-form',
  imports: [SharedForAuth, TextFieldComponent, PasswordTextFieldComponent, AppPrimaryButtonComponent, FormErrorMessageComponent, DateTextFieldComponent, MaritalStatusRadioGroupComponent, CheckBoxInputComponent],
  templateUrl: './user-sign-up-form.component.html',
  styleUrl: './user-sign-up-form.component.css'
})
export class UserSignUpFormComponent {
  signUpForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      nationalId: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]],
      fullNameAr: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      fullNameEn: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]],
      bloodType: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      job: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      maritalStatus: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(64)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(64)]],
      iAgree: [false, [Validators.requiredTrue]],
      iConfirm: [false, [Validators.requiredTrue]],
    });
  }
  get nationalIdControl(): FormControl {
    return this.signUpForm.get('nationalId') as FormControl;
  }
  get fullNameArControl(): FormControl {
    return this.signUpForm.get('fullNameAr') as FormControl;
  }
  get fullNameEnControl(): FormControl {
    return this.signUpForm.get('fullNameEn') as FormControl;
  }
  get emailControl(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }
  get phoneControl(): FormControl {
    return this.signUpForm.get('phone') as FormControl;
  }
  get bloodTypeControl(): FormControl {
    return this.signUpForm.get('bloodType') as FormControl;
  }
  get birthDateControl(): FormControl {
    return this.signUpForm.get('birthDate') as FormControl;
  }
  get genderControl(): FormControl {
    return this.signUpForm.get('gender') as FormControl;
  }
  get addressControl(): FormControl {
    return this.signUpForm.get('address') as FormControl;
  }
  get jobControl(): FormControl {
    return this.signUpForm.get('job') as FormControl;
  }
  get maritalStatusControl(): FormControl {
    return this.signUpForm.get('MaritalStatus') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }
  get confirmPasswordControl(): FormControl {
    return this.signUpForm.get('confirmPassword') as FormControl;
  }
  get iAgreeControl(): FormControl {
    return this.signUpForm.get('iAgree') as FormControl;
  }
  get iConfirmControl(): FormControl {
    return this.signUpForm.get('iConfirm') as FormControl;
  }
}
