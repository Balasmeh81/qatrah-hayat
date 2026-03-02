import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItsWorkSectionComponent } from './how-its-work-section.component';

describe('HowItsWorkSectionComponent', () => {
  let component: HowItsWorkSectionComponent;
  let fixture: ComponentFixture<HowItsWorkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowItsWorkSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItsWorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
