import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-faq-section',
  imports: [CommonModule, TranslateModule],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.css'
})
export class FaqSectionComponent {
  faqs = [
    { q: 'FAQ_Q1', a: 'FAQ_A1', id: 'faq1' },
    { q: 'FAQ_Q2', a: 'FAQ_A2', id: 'faq2' },
    { q: 'FAQ_Q3', a: 'FAQ_A3', id: 'faq3' },
    { q: 'FAQ_Q4', a: 'FAQ_A4', id: 'faq4' },
  ];
}
