import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthStateService } from '../../../../auth/data/services/auth-state.service';
import { LanguageService } from '../../../../../core/services/language.service';
import { getUserInitialsTwoPart } from '../../../../../core/utils/helper/get-user-initials.helper';

@Component({
  selector: 'app-user-hero',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './user-hero.component.html',
  styleUrl: './user-hero.component.css'
})
export class UserHeroComponent {
  readonly langService = inject(LanguageService);
  readonly authState = inject(AuthStateService);

  get isArabic(): boolean {
    return this.langService.currentLang === 'ar';
  }

  getUserNameTwoPart(fullName: string | null | undefined): string {
    return getUserInitialsTwoPart(fullName);
  }
}
