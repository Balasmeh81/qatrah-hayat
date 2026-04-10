import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsGuestPageComponent } from './campaigns-guest-page.component';

describe('CampaignsGuestPageComponent', () => {
  let component: CampaignsGuestPageComponent;
  let fixture: ComponentFixture<CampaignsGuestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignsGuestPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignsGuestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
