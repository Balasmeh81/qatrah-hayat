import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCardDashboardComponent } from './status-card-dashboard.component';

describe('StatusCardDashboardComponent', () => {
  let component: StatusCardDashboardComponent;
  let fixture: ComponentFixture<StatusCardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusCardDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
