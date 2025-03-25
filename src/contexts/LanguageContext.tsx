
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available languages
export type Language = 'en' | 'es' | 'de';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get saved language from localStorage, default to 'en'
  const [language, setLanguage] = useState<Language>('en');
  
  // Load language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'es', 'de'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (['en', 'es', 'de'].includes(browserLang as Language)) {
        setLanguage(browserLang as Language);
      }
    }
  }, []);
  
  // Save language preference to localStorage when it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
