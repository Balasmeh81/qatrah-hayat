import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxInputComponent } from './check-box-input.component';

describe('CheckBoxInputComponent', () => {
  let component: CheckBoxInputComponent;
  let fixture: ComponentFixture<CheckBoxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckBoxInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBoxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
