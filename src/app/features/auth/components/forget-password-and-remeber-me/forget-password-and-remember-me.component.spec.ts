import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordAndRememberMeComponent } from './forget-password-and-remeber-me.component';

describe('ForgetPasswordAndRemeberMeComponent', () => {
  let component: ForgetPasswordAndRememberMeComponent;
  let fixture: ComponentFixture<ForgetPasswordAndRememberMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPasswordAndRememberMeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordAndRememberMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
