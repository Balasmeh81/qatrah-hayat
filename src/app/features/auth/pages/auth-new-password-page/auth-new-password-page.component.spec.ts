import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNewPasswordPageComponent } from './auth-new-password-page.component';

describe('AuthNewPasswordPageComponent', () => {
  let component: AuthNewPasswordPageComponent;
  let fixture: ComponentFixture<AuthNewPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthNewPasswordPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthNewPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
