import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale } from '../types';
import { TRANSLATIONS } from '../content/translations';

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: typeof TRANSLATIONS['pt'];
  isPt: boolean;
  isEn: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      if (langParam === 'en' || langParam === 'pt') return langParam;
      const stored = localStorage.getItem('nomad_lp_lang');
      if (stored === 'en' || stored === 'pt') return stored;
      if (navigator.language.startsWith('en')) return 'en';
    }
    return 'pt';
  });

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem('nomad_lp_lang', l);
      document.documentElement.lang = l;
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value: LocaleContextType = {
    locale,
    setLocale,
    t: TRANSLATIONS[locale],
    isPt: locale === 'pt',
    isEn: locale === 'en',
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

