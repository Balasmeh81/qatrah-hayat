import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsSwiperComponent } from './campaigns-swiper.component';

describe('CampaignsComponent', () => {
  let component: CampaignsSwiperComponent;
  let fixture: ComponentFixture<CampaignsSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CampaignsSwiperComponent]
    });
    fixture = TestBed.createComponent(CampaignsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
