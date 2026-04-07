import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../../../../core/services/api.service';
import { AuthResponseDto } from '../dots/auth-response.dto';
import { RegisterRequestDto } from '../dots/register-request.dto';
import { AuthTokenService } from './auth-token.service';
import { API_ENDPOINTS } from '../../../../core/constants/api.constants';
import { LoginRequestDto } from '../dots/login-request.dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly api = inject(ApiService);
  private readonly tokenService = inject(AuthTokenService);

  private readonly registerUrl = API_ENDPOINTS.auth.register;
  private readonly loginUrl = API_ENDPOINTS.auth.login;
  private readonly currentUserUrl = API_ENDPOINTS.auth.me;

  signUp(request: RegisterRequestDto): Observable<AuthResponseDto> {
    return this.api.post<RegisterRequestDto, AuthResponseDto>(
      this.registerUrl,
      request
    );
  }

  login(request: LoginRequestDto): Observable<AuthResponseDto> {
    return this.api.post<LoginRequestDto, AuthResponseDto>(
      this.loginUrl,
      request
    ).pipe(
      tap((response) => {
        this.tokenService.setToken(response.token);
      })
    );
  }

  getCurrentUser(): Observable<AuthResponseDto> {
    throw new Error('Method not implemented.');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
