import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// Language Context
interface LanguageContextType {
  language: 'en' | 'kh';
  setLanguage: (lang: 'en' | 'kh') => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<'en' | 'kh'>(() => {
    const saved = localStorage.getItem('language') as 'en' | 'kh';
    return saved && (saved === 'en' || saved === 'kh') ? saved : 'en';
  });

  const setLanguage = (lang: 'en' | 'kh') => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kh' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};