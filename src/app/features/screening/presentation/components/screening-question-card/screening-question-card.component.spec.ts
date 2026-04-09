import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningQuestionCardComponent } from './screening-question-card.component';

describe('ScreeningQuestionCardComponent', () => {
  let component: ScreeningQuestionCardComponent;
  let fixture: ComponentFixture<ScreeningQuestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningQuestionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
