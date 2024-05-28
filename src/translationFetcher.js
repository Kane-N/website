import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import common_en from "./locales/en/translation.json";

i18n
    .use(LanguageDetector) // detect language
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: 'en',
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        },
        resources: {
            en: {
                common: common_en
            }
        },
    });

export default i18n;