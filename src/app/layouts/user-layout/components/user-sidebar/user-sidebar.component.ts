import { AuthService } from './../../../../features/auth/data/services/auth.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthStateService } from '../../../../features/auth/data/services/auth-state.service';
import { getUserInitials } from '../../../../core/utils/helper/get-user-initials.helper';

@Component({
  selector: 'app-user-sidebar',
  imports: [TranslateModule, CommonModule, RouterModule],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.css'
})
export class UserSidebarComponent {
  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  readonly authService = inject(AuthService);
  readonly langService = inject(LanguageService);
  readonly authState = inject(AuthStateService);
  private readonly router = inject(Router);
  close(): void {
    this.closeSidebar.emit();
  }

  get isArabic(): boolean {
    return this.langService.currentLang === 'ar';
  }

  getUserAvatar(fullName: string | null | undefined): string {
    return getUserInitials(fullName);
  }

  onLogout(): void {
    this.authState.clear();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
