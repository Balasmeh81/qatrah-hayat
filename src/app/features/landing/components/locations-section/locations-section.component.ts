import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
type LocationItem = {
  id: string;
  titleKey: string;
  descKey: string;
  cityKey: string;
  addressKey: string;
  hoursKey: string;
  phoneKey: string;
};
@Component({
  selector: 'app-locations-section',
  imports: [TranslateModule, CommonModule],
  templateUrl: './locations-section.component.html',
  styleUrl: './locations-section.component.css'
})
export class LocationsSectionComponent {
  copied = false;

  locations: LocationItem[] = [
    {
      id: 'amman',
      titleKey: 'LOC_1_TITLE',
      descKey: 'LOC_1_DESC',
      cityKey: 'LOC_1_CITY',
      addressKey: 'LOC_1_ADDR',
      hoursKey: 'LOC_1_HOURS',
      phoneKey: 'LOC_1_PHONE'
    },
    {
      id: 'irbid',
      titleKey: 'LOC_2_TITLE',
      descKey: 'LOC_2_DESC',
      cityKey: 'LOC_2_CITY',
      addressKey: 'LOC_2_ADDR',
      hoursKey: 'LOC_2_HOURS',
      phoneKey: 'LOC_2_PHONE'
    }
  ];

  selectedLocation: LocationItem = this.locations[0];

  selectLocation(loc: LocationItem) {
    this.selectedLocation = loc;
  }

  async copyAddress() {
    try {
      const text = this.selectedLocation.addressKey; // key
      // الأفضل: انسخ النص المترجم، لكن هذا يحتاج TranslateService
      // خليها بسيطة الآن: انسخ العنوان كنص ثابت لاحقًا
      await navigator.clipboard.writeText(text);
      this.copied = true;
      setTimeout(() => (this.copied = false), 1200);
    } catch {
      // fallback (no-op)
      this.copied = true;
      setTimeout(() => (this.copied = false), 1200);
    }
  }

  openMap() {
    // placeholder: later open Google Maps with coordinates
    alert('Open map (placeholder)');
  }
}
