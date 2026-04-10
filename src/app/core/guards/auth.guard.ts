import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthTokenService } from '../../features/auth/data/services/auth-token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authTokenService = inject(AuthTokenService);
  const router = inject(Router);

  if (authTokenService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/user-auth/login'], {
    queryParams: { returnUrl: state.url }
  });
};
