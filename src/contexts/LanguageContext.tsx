import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';
import type { TranslationKey } from '../types/i18n';

type LanguageContextType = {
  language: TranslationKey;
  setLanguage: (lang: TranslationKey) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<TranslationKey>(() => {
    // Try to get language from localStorage first
    const stored = localStorage.getItem('language');
    if (stored === 'pt-BR' || stored === 'pt-PT') {
      return stored;
    }
    
    // Then try to detect from browser
    const browserLang = navigator.language;
    const detectedLang = browserLang.startsWith('pt-PT') ? 'pt-PT' : 'pt-BR';
    
    // Store the detected language
    localStorage.setItem('language', detectedLang);
    return detectedLang;
  });

  const t = (path: string): string => {
    if (!path) return '';
    
    try {
      const keys = path.split('.');
      let current: any = translations[language];
      
      for (const key of keys) {
        if (!current || current[key] === undefined) {
          console.warn(`Translation key not found: ${path} in ${language}`);
          // Fallback to pt-BR if key not found in pt-PT
          if (language === 'pt-PT') {
            current = translations['pt-BR'];
            for (const fallbackKey of keys) {
              if (!current || current[fallbackKey] === undefined) {
                return path;
              }
              current = current[fallbackKey];
            }
            return current;
          }
          return path;
        }
        current = current[key];
      }
      
      return current || path;
    } catch (error) {
      console.warn(`Error accessing translation: ${path}`, error);
      return path;
    }
  };

  useEffect(() => {
    // Update HTML lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  const handleLanguageChange = (lang: TranslationKey) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    // Force reload to ensure proper language initialization
    window.location.reload();
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
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