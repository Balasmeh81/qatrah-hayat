import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../../../../core/services/api.service';
import { AuthTokenService } from './auth-token.service';
import { API_ENDPOINTS } from '../../../../core/constants/api.constants';
import { RegisterRequestModel } from '../models/register-request.model';
import { AuthResponseModel } from '../models/auth-response.model';
import { LoginRequestModel } from '../models/login-request.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly api = inject(ApiService);
  private readonly tokenService = inject(AuthTokenService);

  private readonly registerUrl = API_ENDPOINTS.auth.register;
  private readonly loginUrl = API_ENDPOINTS.auth.login;
  private readonly currentUserUrl = API_ENDPOINTS.auth.me;

  signUp(request: RegisterRequestModel): Observable<AuthResponseModel> {
    return this.api.post<RegisterRequestModel, AuthResponseModel>(
      this.registerUrl,
      request
    );
  }

  login(request: LoginRequestModel): Observable<AuthResponseModel> {
    return this.api.post<LoginRequestModel, AuthResponseModel>(
      this.loginUrl,
      request
    ).pipe(
      tap((response) => {
        this.tokenService.setToken(response.token);
      })
    );
  }

  getCurrentUser(): Observable<AuthResponseModel> {
    throw new Error('Method not implemented.');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
