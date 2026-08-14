"use client";

import { useLanguage, Language } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-2 font-mono text-xs text-muted">
      <button
        onClick={() => handleLanguageChange("pt")}
        className={`transition-colors hover:text-fog ${language === "pt" ? "text-fog font-bold" : ""}`}
      >
        PT
      </button>
      <span>/</span>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`transition-colors hover:text-fog ${language === "en" ? "text-fog font-bold" : ""}`}
      >
        EN
      </button>
      <span>/</span>
      <button
        onClick={() => handleLanguageChange("es")}
        className={`transition-colors hover:text-fog ${language === "es" ? "text-fog font-bold" : ""}`}
      >
        ES
      </button>
    </div>
  );
}
