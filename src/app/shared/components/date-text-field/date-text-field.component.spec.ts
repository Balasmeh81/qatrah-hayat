import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTextFieldComponent } from './date-text-field.component';

describe('DateTextFieldComponent', () => {
  let component: DateTextFieldComponent;
  let fixture: ComponentFixture<DateTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateTextFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
