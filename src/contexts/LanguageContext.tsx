
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, LanguageCode, TranslationKeys } from '../translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: TranslationKeys;
}

const defaultLanguage: LanguageCode = 'en';

const getInitialLanguage = (): LanguageCode => {
  const savedLanguage = localStorage.getItem('language') as LanguageCode;
  if (savedLanguage && ['en', 'es', 'de'].includes(savedLanguage)) {
    return savedLanguage;
  }
  
  // Try to detect browser language
  const browserLang = navigator.language.split('-')[0] as LanguageCode;
  if (['en', 'es', 'de'].includes(browserLang)) {
    return browserLang;
  }
  
  return defaultLanguage;
};

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: translations[defaultLanguage]
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(getInitialLanguage);
  const [t, setTranslations] = useState<TranslationKeys>(translations[getInitialLanguage()]);
  
  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    setTranslations(translations[lang]);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };
  
  useEffect(() => {
    // Set initial HTML lang attribute
    document.documentElement.lang = language;
  }, []);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
