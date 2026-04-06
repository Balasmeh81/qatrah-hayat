import { Component, inject, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'app-user-auth-container-heading',
  imports: [TranslateModule],
  templateUrl: './user-auth-container-heading.component.html',
  styleUrl: './user-auth-container-heading.component.css'
})
export class UserAuthContainerHeadingComponent {
  langService = inject(LanguageService);
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
