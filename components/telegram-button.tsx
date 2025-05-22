"use client"

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function TelegramButton() {
  const { language } = useLanguage()

  // Telegram bot URL - replace with your actual bot username
  const telegramBotUrl = "https://t.me/artella_bot"

  const buttonText = language === "ru" ? "Написать в Telegram" : "Пишете в Telegram"

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer" className="block">
        <Button className="bg-[#c4a99d] hover:bg-[#b39588] text-white rounded-full p-3 shadow-lg">
          <Send className="h-5 w-5" />
          <span className="sr-only">{buttonText}</span>
        </Button>
      </a>
    </div>
  )
}
