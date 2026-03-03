import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-header',
  imports: [TranslateModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.css'
})
export class LandingHeaderComponent {

  reload() {
    window.location.reload();
  }

  langService = inject(LanguageService);

  toggleLanguage() {
    this.reload();
    this.langService.switchLanguage();
  }

}
