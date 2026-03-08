import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordTextFieldComponent } from './password-text-field.component';

describe('PasswordTextFieldComponent', () => {
  let component: PasswordTextFieldComponent;
  let fixture: ComponentFixture<PasswordTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordTextFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
