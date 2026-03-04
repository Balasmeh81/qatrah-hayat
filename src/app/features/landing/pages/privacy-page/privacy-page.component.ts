import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface TocItem {
  id: string;
  titleKey: string;
}


@Component({
  selector: 'app-privacy-page',
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy-page.component.html',
  styleUrl: './privacy-page.component.css'
})
export class PrivacyPageComponent
{
  lastUpdated = '2026-03-04';

  toc: TocItem[] = [
    { id: 'privacy-overview', titleKey: 'PRIVACY_SEC_OVERVIEW' },
    { id: 'privacy-data', titleKey: 'PRIVACY_SEC_DATA' },
    { id: 'privacy-use', titleKey: 'PRIVACY_SEC_USE' },
    { id: 'privacy-email', titleKey: 'PRIVACY_SEC_EMAIL' },
    { id: 'privacy-sharing', titleKey: 'PRIVACY_SEC_SHARING' },
    { id: 'privacy-security', titleKey: 'PRIVACY_SEC_SECURITY' },
    { id: 'privacy-retention', titleKey: 'PRIVACY_SEC_RETENTION' },
    { id: 'privacy-rights', titleKey: 'PRIVACY_SEC_RIGHTS' },
    { id: 'privacy-children', titleKey: 'PRIVACY_SEC_CHILDREN' },
    { id: 'privacy-changes', titleKey: 'PRIVACY_SEC_CHANGES' },
    { id: 'privacy-contact', titleKey: 'PRIVACY_SEC_CONTACT' },
  ];

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
