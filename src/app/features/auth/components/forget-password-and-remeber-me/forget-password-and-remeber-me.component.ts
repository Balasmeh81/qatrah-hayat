import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-forget-password-and-remember-me',
  imports: [TranslateModule, RouterLink],
  templateUrl: './forget-password-and-remember-me.component.html',
  styleUrl: './forget-password-and-remember-me.component.css'
})
export class ForgetPasswordAndRememberMeComponent {

}
