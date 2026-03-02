import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register } from 'swiper/element/bundle';
import * as AOS from 'aos';
register();
bootstrapApplication(AppComponent, appConfig).then(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 120
  });
});
