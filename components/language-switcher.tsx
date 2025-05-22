"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/hooks/use-toast"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const { toast } = useToast()

  const handleLanguageChange = (newLanguage: "ru" | "bg") => {
    setLanguage(newLanguage)

    // Show toast notification
    const message = newLanguage === "ru" ? "Язык изменен на русский" : "Езикът е променен на български"

    toast({
      title: message,
      duration: 2000,
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          {language.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("ru")}>Русский</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("bg")}>Български</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
