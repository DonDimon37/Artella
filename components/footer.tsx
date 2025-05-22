"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/hooks/use-toast"

export function Footer() {
  const { language, translate } = useLanguage()
  const { toast } = useToast()

  // Handle smooth scrolling for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle anchor links
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Smooth scroll to the element
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset to account for header
          behavior: "smooth",
        })
      } else {
        // Show toast if section not found
        toast({
          title: language === "ru" ? "Раздел в разработке" : "Раздел в разработка",
          description:
            language === "ru"
              ? "Этот раздел сайта находится в разработке и будет доступен в ближайшее время."
              : "Този раздел на сайта е в процес на разработка и ще бъде достъпен скоро.",
          duration: 3000,
        })
      }
    }
  }

  const categoryLinks = [
    { key: "category_paintings", href: "#paintings" },
    { key: "category_wallpapers", href: "#wallpapers" },
    { key: "category_metalDecor", href: "#metal-decor" },
    { key: "new", href: "#new" },
    { key: "sale", href: "#sale" },
  ]

  const aboutLinks = [
    { key: "aboutCompany", href: "#about-company" },
    { key: "mission", href: "#mission" },
    { key: "delivery", href: "#delivery" },
    { key: "payment", href: "#payment" },
  ]

  // Telegram bot URL - replace with your actual bot username
  const telegramBotUrl = "https://t.me/artella_bot"

  return (
    <footer className="bg-[#f8f5f2] pt-12 pb-6" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium text-[#6d5d50] mb-4">{translate("categories")}</h3>
            <ul className="space-y-2">
              {categoryLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8a7a6d] hover:text-[#6d5d50] transition-colors"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {translate(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#6d5d50] mb-4">{translate("about")}</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8a7a6d] hover:text-[#6d5d50] transition-colors"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {translate(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#6d5d50] mb-4">{translate("contacts")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+359877079075"
                  className="flex items-center text-sm text-[#8a7a6d] hover:text-[#6d5d50] transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +359 877 079 075
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@artella.com"
                  className="flex items-center text-sm text-[#8a7a6d] hover:text-[#6d5d50] transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@artella.com
                </a>
              </li>
              <li>
                <div className="flex items-start text-sm text-[#8a7a6d]">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <span>{translate("address")}</span>
                </div>
              </li>
              <li className="flex space-x-3 pt-2">
                <a
                  href="#"
                  className="text-[#8a7a6d] hover:text-[#6d5d50] transition-colors"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-[#8a7a6d] hover:text-[#6d5d50] transition-colors"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={telegramBotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8a7a6d] hover:text-[#6d5d50] transition-colors"
                  aria-label="Telegram Bot"
                  title={language === "ru" ? "Наш Telegram бот" : "Нашият Telegram бот"}
                >
                  <Send className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-[#6d5d50] mb-4">{translate("subscribe")}</h3>
            <p className="text-sm text-[#8a7a6d] mb-4">{translate("subscribeText")}</p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder={translate("email")} className="border-[#c4a99d] focus:ring-[#c4a99d]" />
              <Button className="bg-[#c4a99d] hover:bg-[#b39588] text-white">{translate("subscribe_button")}</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e5ddd5] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-semibold text-[#6d5d50]">Artella</span>
              </Link>
            </div>
            <div className="text-sm text-[#8a7a6d]">
              &copy; {new Date().getFullYear()} Artella. {translate("rights")}.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
