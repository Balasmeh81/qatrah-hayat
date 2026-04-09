import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { API_ENDPOINTS } from '../../../../core/constants/api.constants';
import { SubmittedScreeningQuestionsRequestModel } from '../models/submitted-screening-questions-request.model';
import { Observable } from 'rxjs';
import { SubmittedScreeningResponseModel } from '../models/submitted-screening-response.model';
import { ScreeningSessionType } from '../enums/screening-session-type.enum';
import { ScreeningQuestion } from '../models/screening-question.model';

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {
  private readonly api = inject(ApiService);
  private readonly submitScreeningUrl = API_ENDPOINTS.screening.submit;
  private readonly getScreeningUrl = API_ENDPOINTS.screening.get;


  submitScreeningQuestions(request: SubmittedScreeningQuestionsRequestModel): Observable<SubmittedScreeningResponseModel> {
    this.api.post<SubmittedScreeningQuestionsRequestModel, SubmittedScreeningResponseModel>(
      this.submitScreeningUrl,
      request
    );
    return new Observable<SubmittedScreeningResponseModel>();
  }
  getScreeningQuestions(sessionType: ScreeningSessionType,
    isForFemaleOnly: boolean): Observable<ScreeningQuestion[]> {
    const url = `${this.getScreeningUrl}?sessionType=${sessionType}&isForFemaleOnly=${isForFemaleOnly}`;
    return this.api.get<ScreeningQuestion[]>(url);
  }
}
