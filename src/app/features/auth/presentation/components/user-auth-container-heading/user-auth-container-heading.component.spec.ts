import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthContainerHeadingComponent } from './user-auth-container-heading.component';

describe('UserAuthContainerHeadingComponent', () => {
  let component: UserAuthContainerHeadingComponent;
  let fixture: ComponentFixture<UserAuthContainerHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAuthContainerHeadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAuthContainerHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
