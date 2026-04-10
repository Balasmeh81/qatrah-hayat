import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  imports: [TranslateModule, CommonModule, RouterModule],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.css'
})
export class UserSidebarComponent {
  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  readonly langService = inject(LanguageService);

  close(): void {
    this.closeSidebar.emit();
  }

  get isArabic(): boolean {
    return this.langService.currentLang === 'ar';
  }
}
