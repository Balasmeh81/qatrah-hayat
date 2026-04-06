import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignUpPageComponent } from './user-sign-up-page.component';

describe('UserSignUpPageComponent', () => {
  let component: UserSignUpPageComponent;
  let fixture: ComponentFixture<UserSignUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSignUpPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
