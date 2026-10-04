"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Language } from '@/lib/translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id')

  // Load saved language from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'en' || saved === 'id')) {
      setLanguage(saved)
    }
  }, [])

  // Save language to localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
