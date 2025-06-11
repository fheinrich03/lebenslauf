import React, { createContext, useContext, useState, ReactNode } from 'react';
import { germanData } from '../german';
import { englishData } from '../english';
import { ResumeData } from '../types';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  resumeData: ResumeData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const resumeData = language === 'de' ? germanData : englishData;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, resumeData }}>
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