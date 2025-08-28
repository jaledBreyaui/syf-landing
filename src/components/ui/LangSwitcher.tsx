"use client";
import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
    const { i18n } = useTranslation();
    const current = (i18n.resolvedLanguage || i18n.language || "es") as "es" | "en";
    const next = current === "es" ? "en" : "es";

    const toggleLang = () => {
        i18n.changeLanguage(next);
        // opcional: reflejar en <html lang="">
        document.documentElement.lang = next;
    };

    return (
        <button
            onClick={toggleLang}
            className="relative rounded-full bg-[#00733E] px-4 py-2 font-semibold text-white hover:brightness-110 transition"
            aria-label="Toggle language ES/EN"
        >
            {current.toUpperCase()}
        </button>
    );
}


