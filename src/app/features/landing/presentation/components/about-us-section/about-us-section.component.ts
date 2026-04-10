import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us-section',
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './about-us-section.component.html',
  styleUrl: './about-us-section.component.css'
})
export class AboutUsSectionComponent {
  donorsCount = 12480;
  activeRequests = 86;
  campaignsCount = 14;
  lastUpdatedLabel = 'قبل دقيقة';

  ngOnInit() {
    this.animateTo('donorsCount', 12480, 650);
    this.animateTo('activeRequests', 86, 500);
    this.animateTo('campaignsCount', 14, 450);
  }

  private animateTo(
    key: 'donorsCount' | 'activeRequests' | 'campaignsCount',
    target: number,
    durationMs: number
  ) {
    const start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const value = Math.floor(start + (target - start) * progress);
      (this as any)[key] = value;

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}
