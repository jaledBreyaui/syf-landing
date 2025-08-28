"use client";
import { I18nextProvider } from "react-i18next";
import { initI18n } from "@/i18n/config";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    const i18n = initI18n();
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
