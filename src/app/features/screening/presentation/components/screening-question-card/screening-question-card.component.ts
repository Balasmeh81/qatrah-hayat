import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ScreeningQuestion } from '../../../data/models/screening-question.model';
import { ScreeningAnswerFormGroup } from '../../../utils/screening-form.factory';

@Component({
  selector: 'app-screening-question-card',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './screening-question-card.component.html',
  styleUrl: './screening-question-card.component.css'
})
export class ScreeningQuestionCardComponent {
  @Input({ required: true }) question!: ScreeningQuestion;
  @Input({ required: true }) group!: ScreeningAnswerFormGroup;
}
