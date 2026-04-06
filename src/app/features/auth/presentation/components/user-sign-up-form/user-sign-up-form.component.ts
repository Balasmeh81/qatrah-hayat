import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { finalize } from 'rxjs';

import { matchFieldsValidator } from '../../../../../core/utils/validators/password-match.validator';
import { AppPrimaryButtonComponent } from '../../../../../shared/components/app-primary-button/app-primary-button.component';
import { CheckBoxInputComponent } from '../../../../../shared/components/check-box-input/check-box-input.component';
import { FormErrorMessageComponent } from '../../../../../shared/components/form-error-message/form-error-message.component';
import { PasswordTextFieldComponent } from '../../../../../shared/components/password-text-field/password-text-field.component';
import { TextFieldComponent } from '../../../../../shared/components/text-field/text-field.component';
import { SharedForAuth } from '../../../../../shared/shared-imports/shared';
import { SignUpFormModel } from '../../../domain/models/signup-form-model';
import { AuthService } from '../../../data/services/auth.service';
import { MaritalStatusRadioGroupComponent } from '../marital-status-radio-group/marital-status-radio-group.component';
import { BloodTypeEnum } from '../../../domain/enums/blood-type-enum';
import { GenderEnum } from '../../../domain/enums/gender-enum';
import { MaritalStatusEnum } from '../../../domain/enums/marital-status-enum';
import { Failure } from '../../../../../core/errors/failure';
import { mapSignUpFormToRegisterRequest } from '../../../data/mapper/register.mapper';
import { SignUpFormValue } from '../../../domain/models/sign-up-form-value.model';
import { CitizenService } from '../../../data/services/citizen.service';
import { CitizenResponseDto } from '../../../data/dots/citizen-response.dto';
import { TranslateService } from '@ngx-translate/core';
import { getBloodTypeLabel } from '../../../../../core/utils/helper/get.blood.type.label.helper';
import { getGenderLabel } from '../../../../../core/utils/helper/get.gender.labe.helper';

@Component({
  selector: 'app-user-sign-up-form',
  imports: [
    SharedForAuth,
    TextFieldComponent,
    AppPrimaryButtonComponent,
    PasswordTextFieldComponent,
    MaritalStatusRadioGroupComponent,
    CheckBoxInputComponent,
    FormErrorMessageComponent
  ],
  templateUrl: './user-sign-up-form.component.html',
  styleUrl: './user-sign-up-form.component.css'
})
export class UserSignUpFormComponent {
  private readonly authService = inject(AuthService);
  private readonly citizenService = inject(CitizenService);
  private readonly fb = inject(FormBuilder);
  private readonly translate = inject(TranslateService);




  serverErrorMessage = '';
  civilStatusErrorMessage = '';

  isFetchingCitizenData = false;
  isSubmitting = false;
  isCitizenVerified = false;

  signUpForm: FormGroup<SignUpFormModel>;

  constructor() {
    this.signUpForm = this.fb.group({
      nationalId: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^\d{10}$/)
      ]),

      fullNameAr: this.fb.nonNullable.control('', [
        Validators.minLength(3),
        Validators.maxLength(256)
      ]),

      fullNameEn: this.fb.nonNullable.control('', [
        Validators.minLength(3),
        Validators.maxLength(256)
      ]),

      email: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/)
      ]),

      phoneNumber: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^\d{10}$/)
      ]),

      bloodType: this.fb.control<BloodTypeEnum | null>(null),
      bloodTypeDisplay: this.fb.nonNullable.control(''),

      dateOfBirth: this.fb.nonNullable.control(''),

      gender: this.fb.control<GenderEnum | null>(null),
      genderDisplay: this.fb.nonNullable.control(''),

      address: this.fb.nonNullable.control('', [
        Validators.minLength(3),
        Validators.maxLength(255)
      ]),

      jobTitle: this.fb.nonNullable.control('', [
        Validators.minLength(3),
        Validators.maxLength(64)
      ]),

      maritalStatus: this.fb.control<MaritalStatusEnum | null>(null, [
        Validators.required
      ]),

      password: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.maxLength(64),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,64}$/)
      ]),

      confirmPassword: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.maxLength(64)
      ]),

      iAgree: this.fb.nonNullable.control(false, [Validators.requiredTrue]),
      iConfirm: this.fb.nonNullable.control(false, [Validators.requiredTrue]),
    }, {
      validators: [matchFieldsValidator('password', 'confirmPassword', 'passwordMismatch')]
    });

    this.watchNationalIdChanges();
  }

  // Watch for changes in the national ID field to reset citizen data and verification status
  private watchNationalIdChanges(): void {
    this.signUpForm.controls.nationalId.valueChanges.subscribe(() => {
      this.isCitizenVerified = false;
      this.civilStatusErrorMessage = '';

      this.signUpForm.patchValue({
        fullNameAr: '',
        fullNameEn: '',
        dateOfBirth: '',
        bloodType: null,
        bloodTypeDisplay: '',
        gender: null,
        genderDisplay: ''
      });
    }).unsubscribe();
  }

  // Fill the form with citizen data retrieved from the service
  private fillCitizenData(response: CitizenResponseDto): void {
    const bloodType = response.bloodType as BloodTypeEnum;
    const gender = response.gender as GenderEnum;
    this.signUpForm.patchValue({
      nationalId: response.nationalId,
      fullNameAr: response.fullNameAr,
      fullNameEn: response.fullNameEn,
      dateOfBirth: this.formatDateForInput(response.dateOfBirth),
      bloodType,
      bloodTypeDisplay: getBloodTypeLabel(bloodType),
      gender,
      genderDisplay: this.translate.instant(getGenderLabel(gender))
    });
  }
  // Fetch citizen data based on the national ID and handle the response
  onFetchCitizenData(): void {
    this.civilStatusErrorMessage = '';
    this.serverErrorMessage = '';
    this.isCitizenVerified = false;

    const nationalIdControl = this.signUpForm.controls.nationalId;
    nationalIdControl.markAsTouched();

    if (nationalIdControl.invalid) {
      return;
    }

    const nationalId = nationalIdControl.getRawValue();

    this.isFetchingCitizenData = true;

    this.citizenService.getCivilStatus(nationalId)
      .pipe(
        finalize(() => {
          this.isFetchingCitizenData = false;
        })
      )
      .subscribe({
        next: (response: CitizenResponseDto) => {
          this.fillCitizenData(response);
          this.isCitizenVerified = true;
        },
        error: (error: Failure) => {
          this.civilStatusErrorMessage =
            error.message || 'تعذر جلب بيانات السجل الوطني.';
          console.error('Civil status error:', error);
        }
      });
  }






  private formatDateForInput(isoDate: string): string {
    if (!isoDate) return '';
    return isoDate.split('T')[0];
  }

  onSubmit(): void {
    this.serverErrorMessage = '';
    this.civilStatusErrorMessage = '';
    this.signUpForm.markAllAsTouched();

    if (!this.isCitizenVerified) {
      this.serverErrorMessage = 'يجب التحقق من بيانات السجل الوطني أولاً.';
      return;
    }

    if (this.signUpForm.invalid) {
      return;
    }

    const formValue = this.signUpForm.getRawValue() as SignUpFormValue;
    const request = mapSignUpFormToRegisterRequest(formValue);

    this.isSubmitting = true;

    this.authService.signUp(request)
      .pipe(
        finalize(() => {
          this.isSubmitting = false;
        })
      )
      .subscribe({
        next: (response) => {
          console.log('Register success:', response);
          // this.router.navigate(['/']);
        },
        error: (error: Failure) => {
          this.serverErrorMessage = error.message || 'Failed to create account.';
          console.error('Register error:', error);
        }
      });
  }
}
