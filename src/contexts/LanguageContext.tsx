
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../translations';

export type Language = 'en' | 'fr';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    
    // Handle nested translations with dot notation (e.g., "general.home")
    if (keys.length > 1 && translations[keys[0]]?.[keys[1]]) {
      return translations[keys[0]][keys[1]][language];
    }
    
    // Handle flat translations (legacy format)
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
