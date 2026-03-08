import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthContainerFooterComponent } from './user-auth-container-footer.component';

describe('UserAuthContainerFooterComponent', () => {
  let component: UserAuthContainerFooterComponent;
  let fixture: ComponentFixture<UserAuthContainerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAuthContainerFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAuthContainerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
