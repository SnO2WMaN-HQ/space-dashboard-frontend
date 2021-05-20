import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';
import {i18n as i18nConfig} from '../next-i18next.config.js';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: i18nConfig.defaultLocale,
    defaultNS: i18nConfig.defaultNS,
    ns: ['common', 'index', 'register', 'user'],
    interpolation: i18nConfig.interpolation,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
