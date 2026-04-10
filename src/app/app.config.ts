import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LanguageService } from './core/services/language.service';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ),
    provideTranslateService({
      fallbackLang: 'ar'
    }),
    provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    }),
    provideAppInitializer(() => {
      return inject(LanguageService).init();
    })
  ]
};
