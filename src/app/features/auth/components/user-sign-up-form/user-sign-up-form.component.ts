import { Component } from '@angular/core';
import { AppPrimaryButtonComponent } from '../../../../shared/components/app-primary-button/app-primary-button.component';
import { FormErrorMessageComponent } from '../../../../shared/components/form-error-message/form-error-message.component';
import { PasswordTextFieldComponent } from '../../../../shared/components/password-text-field/password-text-field.component';
import { TextFieldComponent } from '../../../../shared/components/text-field/text-field.component';
import { SharedForAuth } from '../../../../shared/shared-imports/shared';

@Component({
  selector: 'app-user-sign-up-form',
  imports: [SharedForAuth, TextFieldComponent, PasswordTextFieldComponent, AppPrimaryButtonComponent, FormErrorMessageComponent,],
  templateUrl: './user-sign-up-form.component.html',
  styleUrl: './user-sign-up-form.component.css'
})
export class UserSignUpFormComponent {

}
