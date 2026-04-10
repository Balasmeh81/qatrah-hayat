import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsCardComponent } from './campaigns-card.component';

describe('CampaignsCardComponent', () => {
  let component: CampaignsCardComponent;
  let fixture: ComponentFixture<CampaignsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CampaignsCardComponent]
    });
    fixture = TestBed.createComponent(CampaignsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
