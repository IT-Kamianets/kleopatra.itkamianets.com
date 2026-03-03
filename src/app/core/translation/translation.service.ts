import { Injectable, signal, computed } from '@angular/core';
import { Lang, Translations } from '../../i18n/translations.type';
import { UK } from '../../i18n/uk';
import { EN } from '../../i18n/en';
import { PL } from '../../i18n/pl';

const TRANSLATIONS: Record<Lang, Translations> = { uk: UK, en: EN, pl: PL };

@Injectable({ providedIn: 'root' })
export class TranslationService {
  currentLang = signal<Lang>(
    (localStorage.getItem('lang') as Lang) || 'uk'
  );

  translations = computed(() => TRANSLATIONS[this.currentLang()]);

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }

  t(key: string): string {
    const parts = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let val: any = this.translations();
    for (const part of parts) {
      if (val == null) return key;
      val = val[part];
    }
    return typeof val === 'string' ? val : key;
  }
}
