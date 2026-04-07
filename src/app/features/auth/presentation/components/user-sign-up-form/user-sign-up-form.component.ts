import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { finalize, Subject, takeUntil } from 'rxjs';

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
import { Failure, NotFoundFailure } from '../../../../../core/errors/failure';
import { mapSignUpFormToRegisterRequest } from '../../../data/mapper/register.mapper';
import { SignUpFormValue } from '../../../domain/models/sign-up-form-value.model';
import { CitizenService } from '../../../data/services/citizen.service';
import { CitizenResponseDto } from '../../../data/dots/citizen-response.dto';
import { TranslateService } from '@ngx-translate/core';
import { getBloodTypeLabel } from '../../../../../core/utils/helper/get.blood.type.label.helper';
import { getGenderLabel } from '../../../../../core/utils/helper/get.gender.labe.helper';
import { formatDateForInput } from '../../../../../core/utils/helper/format.date.for.input.helper';
import { Router } from '@angular/router';

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
  private readonly router = inject(Router);

  private readonly destroy$ = new Subject<void>();


  serverErrorMessage = '';
  civilStatusErrorMessage = '';


  showSuccessMessage = false;
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
        Validators.pattern(/^07\d{8}$/)
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



  //Phase 1 In Registration
  // Fetch citizen data based on the national ID and handle the response
  onFetchCitizenData(): void {
    //Step 1: Reset error messages and verification status
    this.civilStatusErrorMessage = '';
    this.serverErrorMessage = '';
    this.isCitizenVerified = false;

    //Step 2: Validate the national ID field
    const nationalIdControl = this.signUpForm.controls.nationalId;
    nationalIdControl.markAsTouched();

    if (nationalIdControl.invalid) {
      return;
    }
    //Step 3: If valid, call the citizen service to fetch data
    const nationalId = nationalIdControl.getRawValue();

    this.isFetchingCitizenData = true;

    this.citizenService.getCivilStatus(nationalId)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this.isFetchingCitizenData = false;
        })
      )
      .subscribe({
        //Step 4: Handle success by filling the form and setting verification status
        next: (response: CitizenResponseDto) => {
          this.fillCitizenData(response);
          this.isCitizenVerified = true;
        },
        error: (error: Failure) => {
          //Step 5: Handle errors by setting appropriate error messages based on error type
          if (error instanceof NotFoundFailure) {
            this.civilStatusErrorMessage = this.translate.instant('National_ID_Not_Found');
          } else {
            this.civilStatusErrorMessage = this.translate.instant('National_ID_Server_Error');
          }
          console.error('Civil status error:', error);
        }
      });
  }

  //Phase 2 In Registration part 1
  // Fill the form with citizen data retrieved from the service
  private fillCitizenData(response: CitizenResponseDto): void {
    const bloodType = response.bloodType as BloodTypeEnum;
    const gender = response.gender as GenderEnum;
    this.signUpForm.patchValue({
      nationalId: response.nationalId,
      fullNameAr: response.fullNameAr,
      fullNameEn: response.fullNameEn,
      dateOfBirth: formatDateForInput(response.dateOfBirth),
      bloodType: bloodType,
      bloodTypeDisplay: getBloodTypeLabel(bloodType),
      gender: gender,
      genderDisplay: this.translate.instant(getGenderLabel(gender))
    });
  }
  //Phase 2 In Registration part 2
  // Watch for changes in the national ID field to reset citizen data and verification status
  private watchNationalIdChanges(): void {
    this.signUpForm.controls.nationalId.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
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
    });
  }


  //Phase 3 In Registration
  onSubmit(): void {
    //Step 1: Reset error messages and mark all fields as touched to trigger validation
    this.serverErrorMessage = '';
    this.civilStatusErrorMessage = '';

    //Step 2: Check if the citizen data has been verified before allowing form submission
    if (!this.isCitizenVerified) {
      this.serverErrorMessage = this.translate.instant('isCitizenVerifiedError');
      return;
    }
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.invalid) {
      return;
    }
    //Step 3: If valid, map the form values to the registration request format and call the auth service to submit the data
    const formValue = this.signUpForm.getRawValue() as SignUpFormValue;
    const request = mapSignUpFormToRegisterRequest(formValue);
    this.isSubmitting = true;

    this.authService.signUp(request)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this.isSubmitting = false;
        })
      )
      .subscribe({
        //Step 4: Handle success by logging the response and optionally navigating to another page
        next: (response) => {
          console.log('Register success:', response);
          this.clearData();
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.router.navigate(['/user-auth/login']);
          }, 3000);

        },
        error: (error: Failure) => {
          //Step 5: Handle errors by setting a generic error message and logging the error details for debugging
          if (error.message === 'Only Jordanian citizens can register.') {
            this.serverErrorMessage = this.translate.instant('Only_Jordanian_citizens_can_register');
          } else if (error.message === 'Email is already registered.') {
            this.serverErrorMessage = this.translate.instant('Email_is_already_registered');
          } else if (error.message === 'National ID is already registered.') {
            this.serverErrorMessage = this.translate.instant('National_ID_is_already_registered');
          } else {
            this.serverErrorMessage = this.translate.instant('Generic_Error_Signup');
          }
          console.error('Register error:', error);
        }
      });
  }

  clearData(): void {
    this.signUpForm.reset();
    this.signUpForm.patchValue({
      maritalStatus: null,
    });
    this.isCitizenVerified = false;
    this.civilStatusErrorMessage = '';
    this.serverErrorMessage = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
