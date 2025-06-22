import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_home from './locales/en/homepage.json';
import en_services from './locales/en/services.json';
import de_home from './locales/de/homepage.json';
import de_services from './locales/de/services.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                homepage: en_home,
                services: en_services
            },
            de: {
                homepage: de_home,
                services: de_services
            }
        },
        lng: 'de',
        fallbackLng: 'de',
        ns: ['homepage', 'services'],
        defaultNS: 'homepage',
        interpolation: { escapeValue: false }
    });

export default i18n;
