import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../../../../core/services/api.service';
import { AuthTokenService } from './auth-token.service';
import { API_ENDPOINTS } from '../../../../core/constants/api.constants';
import { RegisterRequestModel } from '../models/register-request.model';
import { AuthResponseModel } from '../models/auth-response.model';
import { LoginRequestModel } from '../models/login-request.model';
import { AuthStateService } from './auth-state.service';
import { AuthUserStorageService } from './auth-user-storage.service';
import { mapAuthResponseToCurrentUser } from '../mappers/map-auth-response-to-current-user.mapper';
import { CurrentUserModel } from '../../../../shared/models/current-user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly api = inject(ApiService);
  private readonly tokenService = inject(AuthTokenService);
  private readonly authStateService = inject(AuthStateService);
  private readonly authUserStorageService = inject(AuthUserStorageService);

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

        const user = mapAuthResponseToCurrentUser(response);
        this.authStateService.setCurrentUser(user);
        this.authUserStorageService.setUser(user);
      })
    );
  }

  getCurrentUser(): Observable<AuthResponseModel> {
    return this.api.get<AuthResponseModel>(this.currentUserUrl);
  }
  restoreUserFromStorage(): void {
    const token = this.tokenService.getToken();
    const user = this.authUserStorageService.getUser();

    if (token && user) {
      this.authStateService.setCurrentUser(user);
    }
  }

  setCurrentUser(user: CurrentUserModel): void {
    this.authStateService.setCurrentUser(user);
    this.authUserStorageService.setUser(user);
  }

  logout(): void {
    this.tokenService.clear();
    this.authUserStorageService.clear();
    this.authStateService.clear();

  }
}
