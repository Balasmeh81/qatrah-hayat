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
    ]
  }
];
