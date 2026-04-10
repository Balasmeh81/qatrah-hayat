import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/public-layout/public-layout.component')
      .then(c => c.PublicLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/landing/presentation/pages/landing-page/landing-page.component')
          .then(c => c.LandingPageComponent),
      },
      {
        path: 'campaigns',
        loadComponent: () => import('./features/landing/presentation/pages/campaigns-guest-page/campaigns-guest-page.component')
          .then(c => c.CampaignsGuestPageComponent),
      },
      {
        path: 'donation-requests',
        loadComponent: () => import('./features/landing/presentation/pages/donation-requests-guest-page/donation-requests-guest-page.component')
          .then(c => c.DonationRequestsGuestPageComponent),
      },
      {
        path: 'contact-us',
        loadComponent: () => import('./features/landing/presentation/pages/contact-us-page/contact-us-page.component')
          .then(c => c.ContactUsPageComponent),
      },
      {
        path: 'privacy-policy',
        loadComponent: () => import('./features/landing/presentation/pages/privacy-page/privacy-page.component')
          .then(c => c.PrivacyPageComponent),
      },
      {
        path: 'terms-and-conditions',
        loadComponent: () => import('./features/landing/presentation/pages/terms-and-conditions-page/terms-and-conditions-page.component')
          .then(c => c.TermsAndConditionsPageComponent),
      }
    ],
  },

  {
    path: 'user-auth',
    canActivate: [guestGuard],
    loadComponent: () => import('./layouts/user-auth-layout/user-auth-layout.component')
      .then(c => c.UserAuthLayoutComponent),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/presentation/pages/user-login-page/user-login-page.component')
          .then(c => c.UserLoginPageComponent),
      },
      {
        path: 'signup',
        loadComponent: () => import('./features/auth/presentation/pages/user-sign-up-page/user-sign-up-page.component')
          .then(c => c.UserSignUpPageComponent),
      },
      {
        path: 'reset-password',
        loadComponent: () => import('./features/auth/presentation/pages/auth-reset-password-page/auth-reset-password-page.component')
          .then(c => c.AuthResetPasswordPageComponent),
      },
      {
        path: 'reset-password-confirmation',
        loadComponent: () => import('./features/auth/presentation/pages/auth-otp-page/auth-otp-page.component')
          .then(c => c.AuthOtpPageComponent),
      },
      {
        path: 'new-password',
        loadComponent: () => import('./features/auth/presentation/pages/auth-new-password-page/auth-new-password-page.component')
          .then(c => c.AuthNewPasswordPageComponent),
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ],
  },

  {
    path: 'user',
    canActivate: [authGuard],
    loadComponent: () => import('./layouts/user-layout/user-layout.component')
      .then(c => c.UserLayoutComponent),
    children: [
      {
        path: 'screening',
        loadComponent: () => import('./features/screening/presentation/pages/screening-page/screening-page.component')
          .then(c => c.ScreeningPageComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/user/presentation/pages/user-dashboard/user-dashboard.component')
          .then(c => c.UserDashboardComponent),
      },
      {
        path: 'donate',
        loadComponent: () => import('./features/user/presentation/pages/donate-page/donate-page.component')
          .then(c => c.DonatePageComponent)
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ],
  },

  {
    path: '**',
    redirectTo: ''
  }
];
