import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CampaignsCardComponent } from '../campaigns-card/campaigns-card.component';

@Component({
  selector: 'app-campaigns-swiper',
  standalone: true,
  imports: [CommonModule, TranslateModule, CampaignsCardComponent],
  templateUrl: './campaigns-swiper.component.html',
  styleUrls: ['./campaigns-swiper.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CampaignsSwiperComponent implements AfterViewInit {
  @ViewChild('swiperEl', { static: true }) swiperEl!: ElementRef<any>;

  ngAfterViewInit(): void {
    const el = this.swiperEl.nativeElement;

    const params = {
      effect: 'creative',
      creativeEffect: {
        prev: { translate: ['-20%', 0, -1], opacity: 0.6, scale: 0.95 },
        next: { translate: ['20%', 0, -1], opacity: 0.6, scale: 0.95 }
      },
      speed: 650,
      centeredSlides: true,
      loop: true,
      grabCursor: true,
      slideToClickedSlide: true,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },

      pagination: {
        clickable: true,
        dynamicBullets: true
      },

      navigation: true,

      coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: false,
      },
    };

    Object.assign(el, params);
    el.initialize();
  }
}
