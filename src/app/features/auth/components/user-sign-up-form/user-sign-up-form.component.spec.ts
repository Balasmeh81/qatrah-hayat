import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignUpFormComponent } from './user-sign-up-form.component';

describe('UserSignUpFormComponent', () => {
  let component: UserSignUpFormComponent;
  let fixture: ComponentFixture<UserSignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSignUpFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
