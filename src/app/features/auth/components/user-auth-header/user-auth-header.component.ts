import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-user-auth-header',
  imports: [TranslateModule, CommonModule, RouterLink],
  templateUrl: './user-auth-header.component.html',
  styleUrl: './user-auth-header.component.css'
})
export class UserAuthHeaderComponent {
  langService = inject(LanguageService);
  reload() {
    window.location.reload();
  }


  toggleLanguage() {
    this.reload();
    this.langService.switchLanguage();
  }
}
