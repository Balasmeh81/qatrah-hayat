import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/public-layout/public-layout.component')
      .then(c => c.PublicLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/landing/pages/landing-page/landing-page.component')
          .then(c => c.LandingPageComponent),
      },
      {
        path: 'campaigns',
        loadComponent: () => import('./features/landing/pages/campaigns-guest-page/campaigns-guest-page.component')
          .then(c => c.CampaignsGuestPageComponent),
      },
      {
        path: 'donation-requests',
        loadComponent: () => import('./features/landing/pages/donation-requests-guest-page/donation-requests-guest-page.component')
          .then(c => c.DonationRequestsGuestPageComponent),
      },
      {
        path: 'contact-us',
        loadComponent: () => import('./features/landing/pages/contact-us-page/contact-us-page.component')
          .then(c => c.ContactUsPageComponent),
      },
      {
        path: 'privacy-policy',
        loadComponent: () => import('./features/landing/pages/privacy-page/privacy-page.component')
          .then(c => c.PrivacyPageComponent),
      },
      {
        path: 'terms-and-conditions',
        loadComponent: () => import('./features/landing/pages/terms-and-conditions-page/terms-and-conditions-page.component')
          .then(c => c.TermsAndConditionsPageComponent),
      }
    ],
  },

  {
    path: 'user-auth',
    loadComponent: () => import('./layouts/user-auth-layout/user-auth-layout.component')
      .then(c => c.UserAuthLayoutComponent),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/pages/user-login-page/user-login-page.component')
          .then(c => c.UserLoginPageComponent),
      },
      {
        path: 'signup',
        loadComponent: () => import('./features/auth/pages/user-sign-up-page/user-sign-up-page.component')
          .then(c => c.UserSignUpPageComponent),
      },
    ],
  }

];
