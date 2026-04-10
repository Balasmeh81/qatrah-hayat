import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodNeedSectionComponent } from './blood-need-section.component';

describe('BloodNeedSectionComponent', () => {
  let component: BloodNeedSectionComponent;
  let fixture: ComponentFixture<BloodNeedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodNeedSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodNeedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
