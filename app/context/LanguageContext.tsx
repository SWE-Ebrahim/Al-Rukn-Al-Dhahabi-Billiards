'use client';

import { createContext, useContext, useState, useCallback, useMemo, ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Language, Translations } from '@/types/i18n';
import { getTranslations } from '@/lib/i18n';

type LanguageContextType = {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Pre-load translations for both languages to avoid lag
const TRANSLATIONS_CACHE: Record<Language, Translations> = {
  en: getTranslations('en'),
  ar: getTranslations('ar'),
};

export function LanguageProvider({ children, initialLanguage }: { children: ReactNode; initialLanguage: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [translations, setTranslations] = useState<Translations>(TRANSLATIONS_CACHE[initialLanguage]);
  const pathname = usePathname();
  const router = useRouter();

  // Pre-fetch translations on mount to ensure they're ready
  useEffect(() => {
    // Ensure both language translations are loaded
    if (!TRANSLATIONS_CACHE.en) {
      TRANSLATIONS_CACHE.en = getTranslations('en');
    }
    if (!TRANSLATIONS_CACHE.ar) {
      TRANSLATIONS_CACHE.ar = getTranslations('ar');
    }
  }, []);

  const setLanguage = useCallback((newLanguage: Language) => {
    // Use cached translations for instant switch
    const cachedTranslations = TRANSLATIONS_CACHE[newLanguage];
    
    // 1. Update state immediately (no lag)
    setLanguageState(newLanguage);
    setTranslations(cachedTranslations);
    
    // 2. Set cookie with correct key 'locale'
    document.cookie = `locale=${newLanguage}; path=/; max-age=31536000; SameSite=Lax`;
    
    // 3. Update URL to new locale path (use replace instead of push to avoid history bloat)
    const segments = pathname.split('/');
    segments[1] = newLanguage;
    const newPathname = segments.join('/') || `/${newLanguage}`;
    
    // Add a small delay to ensure cookie is set before navigation
    // This prevents the middleware from reading stale cookie values
    setTimeout(() => {
      router.replace(newPathname);
    }, 0);
  }, [pathname, router]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    language,
    translations,
    setLanguage,
  }), [language, translations, setLanguage]);

  return (
    <LanguageContext.Provider value={contextValue}>
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