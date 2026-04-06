import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { API_ENDPOINTS } from '../../../../core/constants/api.constants';
import { Observable } from 'rxjs';
import { CitizenResponseDto } from '../dots/citizen-response.dto';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  private readonly api = inject(ApiService);
  private readonly civilStatusUrl = API_ENDPOINTS.civilStatus.get;

  getCivilStatus(nationalId: string): Observable<CitizenResponseDto> {
    const url = this.civilStatusUrl.replace('{nationalId}', nationalId);
    return this.api.get<CitizenResponseDto>(url);
  }
}
