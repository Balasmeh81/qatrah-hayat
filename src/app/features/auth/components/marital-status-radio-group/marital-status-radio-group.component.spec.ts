import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalStatusRadioGroupComponent } from './marital-status-radio-group.component';

describe('MaritalStatusRadioGroupComponent', () => {
  let component: MaritalStatusRadioGroupComponent;
  let fixture: ComponentFixture<MaritalStatusRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaritalStatusRadioGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaritalStatusRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
