import { Component, inject } from '@angular/core';
import { SharedForAuth } from '../../../../shared/shared-imports/shared';
import { LanguageService } from '../../../../core/services/language.service';
import { UserLoginFormComponent } from '../../components/user-login-form/user-login-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { UserAuthContainerHeadingComponent } from "../../components/user-auth-container-heading/user-auth-container-heading.component";
import { UserAuthContainerFooterComponent } from "../../components/user-auth-container-footer/user-auth-container-footer.component";

@Component({
  selector: 'app-user-login-page',
  imports: [TranslateModule, UserLoginFormComponent, UserAuthContainerHeadingComponent, UserAuthContainerFooterComponent],
  templateUrl: './user-login-page.component.html',
  styleUrl: './user-login-page.component.css'
})
export class UserLoginPageComponent {
  langService = inject(LanguageService);

}
