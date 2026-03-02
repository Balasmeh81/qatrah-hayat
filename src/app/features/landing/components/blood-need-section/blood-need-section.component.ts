import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-blood-need-section',
  imports: [CommonModule, TranslateModule],
  templateUrl: './blood-need-section.component.html',
  styleUrl: './blood-need-section.component.css'
})
export class BloodNeedSectionComponent {
  needs = [
    { type: 'O-', level: 90 },
    { type: 'A-', level: 70 },
    { type: 'B-', level: 55 },
    { type: 'AB-', level: 40 },
    { type: 'O+', level: 30 },
    { type: 'A+', level: 20 },
    { type: 'B+', level: 10 },
    { type: 'AB+', level: 5 },
  ];
}
