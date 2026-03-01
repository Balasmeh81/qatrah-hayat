import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type Lang = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly key = 'lang';
  constructor(private translate: TranslateService) {

    const browserLang = this.translate.getBrowserLang() as Lang;

    const savedLang =
      (localStorage.getItem(this.key) as Lang) ||
      (browserLang === 'ar' ? 'ar' : 'en');

    this.translate.setFallbackLang('en');
    this.setLanguage(savedLang);
  }

  switchLanguage(): void {
    const newLang: Lang = this.currentLang === 'en' ? 'ar' : 'en';
    this.setLanguage(newLang);
  }

  setLanguage(lang: Lang): void {

    this.translate.use(lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    localStorage.setItem(this.key, lang);
  }

  get currentLang(): Lang {
    return (this.translate.getCurrentLang() as Lang) || 'en';
  }
}
