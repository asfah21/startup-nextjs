"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../i18n/dictionaries/en.json";
import id from "../i18n/dictionaries/id.json";
import cn from "../i18n/dictionaries/cn.json";

type Locale = "en" | "id" | "cn";

const dictionaries = { en, id, cn };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && (savedLocale === "en" || savedLocale === "id" || savedLocale === "cn")) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: any = dictionaries[locale];

    for (const key of keys) {
      if (current[key] === undefined) {
        return path; // Return key if not found
      }
      current = current[key];
    }

    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
