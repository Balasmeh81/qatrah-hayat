import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthTokenService } from '../../features/auth/data/services/auth-token.service';

export const guestGuard: CanActivateFn = () => {
  const authTokenService = inject(AuthTokenService);
  const router = inject(Router);
  if (!authTokenService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/user/dashboard']);
};
