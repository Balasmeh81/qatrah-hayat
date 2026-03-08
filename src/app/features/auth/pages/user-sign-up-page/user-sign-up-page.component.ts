import { Component } from '@angular/core';
import { UserAuthContainerHeadingComponent } from "../../components/user-auth-container-heading/user-auth-container-heading.component";
import { UserLoginFormComponent } from "../../components/user-login-form/user-login-form.component";
import { UserAuthContainerFooterComponent } from "../../components/user-auth-container-footer/user-auth-container-footer.component";
import { TranslateModule } from '@ngx-translate/core';
import { UserSignUpFormComponent } from "../../components/user-sign-up-form/user-sign-up-form.component";

@Component({
  selector: 'app-user-sign-up-page',
  imports: [TranslateModule, UserAuthContainerHeadingComponent, UserAuthContainerFooterComponent, UserSignUpFormComponent],
  templateUrl: './user-sign-up-page.component.html',
  styleUrl: './user-sign-up-page.component.css'
})
export class UserSignUpPageComponent {

}
