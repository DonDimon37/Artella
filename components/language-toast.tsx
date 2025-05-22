"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/hooks/use-toast"

export function LanguageToast() {
  const { language } = useLanguage()
  const { toast } = useToast()

  useEffect(() => {
    const message = language === "ru" ? "Язык изменен на русский" : "Езикът е променен на български"

    toast({
      title: message,
      duration: 2000,
    })
  }, [language, toast])

  return null
}
