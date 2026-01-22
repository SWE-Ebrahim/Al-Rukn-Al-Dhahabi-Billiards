'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Translations } from '@/types/i18n';
import { getTranslations } from '@/lib/i18n';

type LanguageContextType = {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLanguage }: { children: ReactNode; initialLanguage: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [translations, setTranslations] = useState<Translations>(getTranslations(initialLanguage));

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    setTranslations(getTranslations(newLanguage));
    document.cookie = `language=${newLanguage}; path=/; max-age=31536000`;
  };

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}