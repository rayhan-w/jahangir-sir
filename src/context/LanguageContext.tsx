"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_LOCALE, formatNumber, getTranslation, Locale } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  toggleLocale: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  formatNum: (input: number | string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  toggleLocale: () => {},
  t: (key) => key,
  formatNum: (input) => String(input),
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const saved = localStorage.getItem("efa_locale") as Locale | null;
    if (saved === "bn" || saved === "en") {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = DEFAULT_LOCALE;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("efa_locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  const toggleLocale = () => {
    const next = locale === "bn" ? "en" : "bn";
    setLocale(next);
  };

  const t = (key: string, params?: Record<string, string | number>) => {
    return getTranslation(key, locale, params);
  };

  const formatNum = (input: number | string) => {
    return formatNumber(input, locale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t, formatNum }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
