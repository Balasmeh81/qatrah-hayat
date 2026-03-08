import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrimaryButtonComponent } from './app-primary-button.component';

describe('AppPrimaryButtonComponent', () => {
  let component: AppPrimaryButtonComponent;
  let fixture: ComponentFixture<AppPrimaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPrimaryButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPrimaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
