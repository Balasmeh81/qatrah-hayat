import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthResetPasswordPageComponent } from './auth-reset-password-page.component';

describe('AuthResetPasswordPageComponent', () => {
  let component: AuthResetPasswordPageComponent;
  let fixture: ComponentFixture<AuthResetPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthResetPasswordPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthResetPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
