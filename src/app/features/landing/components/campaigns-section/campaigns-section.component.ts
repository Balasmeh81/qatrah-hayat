import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CampaignsSwiperComponent } from '../campaigns-swiper/campaigns-swiper.component';

@Component({
  selector: 'app-campaigns-section',
  imports: [CommonModule, RouterLink, TranslateModule, CampaignsSwiperComponent],
  templateUrl: './campaigns-section.component.html',
  styleUrl: './campaigns-section.component.css',
})
export class CampaignsSectionComponent {

}
