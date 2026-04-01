import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CheckBoxInputComponent } from "../../../../shared/components/check-box-input/check-box-input.component";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forget-password-and-remember-me',
  imports: [TranslateModule, RouterLink, CheckBoxInputComponent],
  templateUrl: './forget-password-and-remember-me.component.html',
  styleUrl: './forget-password-and-remember-me.component.css'
})
export class ForgetPasswordAndRememberMeComponent {
  rememberMeControl = new FormControl(false);

}
