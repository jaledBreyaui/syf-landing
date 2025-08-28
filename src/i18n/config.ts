import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "@/messages/es.json";
import en from "@/messages/en.json";

let initialized = false;

export function initI18n() {
    if (initialized || i18n.isInitialized) return i18n;

    i18n
        .use(initReactI18next)
        .init({
            resources: {
                es: { translation: es },
                en: { translation: en }
            },
            lng: "es",              // arranca en ES
            fallbackLng: "es",
            supportedLngs: ["es", "en"],
            interpolation: { escapeValue: false }
        });

    initialized = true;
    return i18n;
}
