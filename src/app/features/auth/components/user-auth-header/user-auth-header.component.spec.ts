import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthHeaderComponent } from './user-auth-header.component';

describe('UserAuthHeaderComponent', () => {
  let component: UserAuthHeaderComponent;
  let fixture: ComponentFixture<UserAuthHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAuthHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAuthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
