import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentBloodNeedsComponent } from './urgent-blood-needs.component';

describe('UrgentBloodNeedsComponent', () => {
  let component: UrgentBloodNeedsComponent;
  let fixture: ComponentFixture<UrgentBloodNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrgentBloodNeedsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrgentBloodNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
