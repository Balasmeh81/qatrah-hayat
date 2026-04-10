import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodRequestPageComponent } from './blood-request-page.component';

describe('BloodRequestPageComponent', () => {
  let component: BloodRequestPageComponent;
  let fixture: ComponentFixture<BloodRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodRequestPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
