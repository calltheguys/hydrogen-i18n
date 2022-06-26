import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import hydrogenConfig from '../hydrogen.config';

// i18n translations
import en from './assets/locales/en/translation.json';
import es from './assets/locales/es/translation.json';
import de from './assets/locales/de/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: hydrogenConfig.defaultLanguage,
    debug: false,
    react: {useSuspense: true},
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {translation: en},
      es: {translation: es},
      de: {translation: de},
    },
  });

export default i18n;
