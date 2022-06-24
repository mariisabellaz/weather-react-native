import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from '@os-team/i18next-react-native-language-detector';

import { translate as ptTranslate } from './pt/index';
import { translate as esTranslate } from './es/index';
import { translate as enTranslate } from './en/index';

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources: {
            en: {
                translation: { ...enTranslate },
            },
            'pt-BR': {
                translation: { ...ptTranslate },
            },
            pt: {
                translation: { ...ptTranslate },
            },
            es: {
                translation: { ...esTranslate },
            },
        },

        fallbackLng: 'en',
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18next;
