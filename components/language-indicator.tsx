"use client"

import { useLanguage } from "@/contexts/language-context"

export function LanguageIndicator() {
  const { language } = useLanguage()

  return (
    <div className="fixed bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-[#6d5d50] shadow-sm border border-[#e5ddd5] z-50">
      {language === "ru" ? "Русский" : "Български"}
    </div>
  )
}
