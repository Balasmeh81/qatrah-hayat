import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationRequestsGuestPageComponent } from './donation-requests-guest-page.component';

describe('DonationRequestsGuestPageComponent', () => {
  let component: DonationRequestsGuestPageComponent;
  let fixture: ComponentFixture<DonationRequestsGuestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationRequestsGuestPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationRequestsGuestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
