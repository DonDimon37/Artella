"use client"

import { Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function TopBar() {
  const { language, t } = useLanguage()

  const translations = {
    contactUs: {
      ru: "Свяжитесь с нами",
      bg: "Свържете се с нас",
    },
  }

  return (
    <div className="w-full bg-[#f8f5f2] py-2 px-4">
      <div className="container mx-auto flex justify-end">
        <a
          href="tel:+359877079075"
          className="flex items-center text-sm text-[#8a7a6d] hover:text-[#6d5d50] transition-colors"
        >
          <Phone className="h-3 w-3 mr-2" />
          +359 877 079 075
        </a>
      </div>
    </div>
  )
}
