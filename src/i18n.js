import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import hydrogenConfig from '../hydrogen.config';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: hydrogenConfig.defaultLanguage,
    debug: false,
    backend: {
      loadPath: 'http://localhost:3000/api/locales?lng={{lng}}',
    },
    react: {useSuspense: true},
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
