"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "@/types/language"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  sections: Record<string, Record<Language, string>>
  translate: (key: string, fallback?: string) => string
}

// Define all section titles in both languages
const sectionTitles = {
  // Navigation
  home: {
    ru: "Главная",
    bg: "Начало",
  },
  paintings: {
    ru: "Картины",
    bg: "Картини",
  },
  wallpapers: {
    ru: "Фотообои",
    bg: "Фототапети",
  },
  metalDecor: {
    ru: "Металлические декорации",
    bg: "Метални декорации",
  },
  about: {
    ru: "О нас",
    bg: "За нас",
  },
  aboutCompany: {
    ru: "О компании",
    bg: "За компанията",
  },
  bestSellers: {
    ru: "Самые продаваемые",
    bg: "Най-продавани",
  },
  mission: {
    ru: "Наша миссия",
    bg: "Нашата мисия",
  },
  contacts: {
    ru: "Контакты",
    bg: "Контакти",
  },
  categories: {
    ru: "Категории",
    bg: "Категории",
  },
  subscribe: {
    ru: "Подпишитесь на новости",
    bg: "Абонирайте се за новини",
  },
  // Button texts
  viewAll: {
    ru: "Смотреть все",
    bg: "Вижте всички",
  },
  addToCart: {
    ru: "В корзину",
    bg: "Добави в кошницата",
  },
  learnMore: {
    ru: "Узнать больше",
    bg: "Научете повече",
  },
  viewCollection: {
    ru: "Смотреть коллекцию",
    bg: "Разгледайте колекцията",
  },
  subscribe_button: {
    ru: "Подписаться",
    bg: "Абонирай се",
  },
  // Product categories
  category_paintings: {
    ru: "Картины",
    bg: "Картини",
  },
  category_wallpapers: {
    ru: "Фотообои",
    bg: "Фототапети",
  },
  category_metalDecor: {
    ru: "Металлические декорации",
    bg: "Метални декорации",
  },
  // Footer links
  new: {
    ru: "Новинки",
    bg: "Нови продукти",
  },
  sale: {
    ru: "Распродажа",
    bg: "Разпродажба",
  },
  delivery: {
    ru: "Доставка",
    bg: "Доставка",
  },
  payment: {
    ru: "Оплата",
    bg: "Плащане",
  },
  returns: {
    ru: "Возврат",
    bg: "Връщане",
  },
  // Other texts
  email: {
    ru: "Ваш email",
    bg: "Вашият имейл",
  },
  address: {
    ru: "София, бул. Витоша 42",
    bg: "София, бул. Витоша 42",
  },
  rights: {
    ru: "Все права защищены",
    bg: "Всички права запазени",
  },
  subscribeText: {
    ru: "Получайте информацию о новых коллекциях и специальных предложениях",
    bg: "Получавайте информация за нови колекции и специални оферти",
  },
  telegramBot: {
    ru: "Наш Telegram бот",
    bg: "Нашият Telegram бот",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

type LanguageProviderProps = {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("ru")

  // Save language preference to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("artello-language", language)
    } catch (error) {
      console.error("Failed to save language preference:", error)
    }
  }, [language])

  // Load language preference from localStorage on initial render
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("artello-language") as Language | null
      if (savedLanguage && (savedLanguage === "ru" || savedLanguage === "bg")) {
        setLanguage(savedLanguage)
      }
    } catch (error) {
      console.error("Failed to load language preference:", error)
    }
  }, [])

  // Translation helper function
  const translate = (key: string, fallback?: string): string => {
    if (sectionTitles[key] && sectionTitles[key][language]) {
      return sectionTitles[key][language]
    }
    return fallback || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, sections: sectionTitles, translate }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
