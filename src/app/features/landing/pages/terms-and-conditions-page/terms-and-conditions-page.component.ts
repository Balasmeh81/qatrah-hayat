import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Collapse } from 'bootstrap';

interface TocItem {
  id: string;
  collapseId: string;
  titleKey: string;
}


@Component({
  selector: 'app-terms-and-conditions-page',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './terms-and-conditions-page.component.html',
  styleUrl: './terms-and-conditions-page.component.css'
})
export class TermsAndConditionsPageComponent
{
  lastUpdated = '2026-03-04';

  toc: TocItem[] = [
    { id: 'terms-overview', collapseId: 't1', titleKey: 'TERMS_SEC_OVERVIEW' },
    { id: 'terms-accept', collapseId: 't2', titleKey: 'TERMS_SEC_ACCEPT' },
    { id: 'terms-eligibility', collapseId: 't3', titleKey: 'TERMS_SEC_ELIGIBILITY' },
    { id: 'terms-accounts', collapseId: 't4', titleKey: 'TERMS_SEC_ACCOUNTS' },
    { id: 'terms-requests', collapseId: 't5', titleKey: 'TERMS_SEC_REQUESTS' },
    { id: 'terms-notifications', collapseId: 't6', titleKey: 'TERMS_SEC_NOTIFICATIONS' },
    { id: 'terms-user-resp', collapseId: 't7', titleKey: 'TERMS_SEC_USER_RESP' },
    { id: 'terms-prohibited', collapseId: 't8', titleKey: 'TERMS_SEC_PROHIBITED' },
    { id: 'terms-disclaimer', collapseId: 't9', titleKey: 'TERMS_SEC_DISCLAIMER' },
    { id: 'terms-availability', collapseId: 't10', titleKey: 'TERMS_SEC_AVAILABILITY' },
    { id: 'terms-changes', collapseId: 't11', titleKey: 'TERMS_SEC_CHANGES' },
    { id: 'terms-contact', collapseId: 't12', titleKey: 'TERMS_SEC_CONTACT' },
  ];

  goTo(item: TocItem) {
    // 1) Scroll
    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // 2) Open accordion section
    const collapseEl = document.getElementById(item.collapseId);
    if (!collapseEl) return;
    const inst = Collapse.getOrCreateInstance(collapseEl, { toggle: false });
    inst.show();
  }
}
