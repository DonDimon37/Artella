"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useToast } from "@/hooks/use-toast"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, translate } = useLanguage()
  const { toast } = useToast()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Define menu items with proper section keys
  const menuItems = [
    { key: "home", href: "/" },
    { key: "paintings", href: "#paintings" },
    { key: "wallpapers", href: "#wallpapers" },
    { key: "metalDecor", href: "#metal-decor" },
    { key: "about", href: "#about-company" },
    { key: "contacts", href: "#footer" },
  ]

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

        // Close mobile menu if open
        if (isMenuOpen) {
          setIsMenuOpen(false)
        }
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

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-semibold text-[#6d5d50]">Artella</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-[#8a7a6d] hover:text-[#6d5d50] transition-colors"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {translate(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMenu}>
            <span className="sr-only">Toggle Menu</span>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 border-b">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-semibold text-[#6d5d50]">Artella</span>
              </Link>
              <Button variant="ghost" size="sm" onClick={toggleMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="container mx-auto mt-8 px-4">
              <ul className="flex flex-col space-y-6">
                {menuItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-[#8a7a6d] hover:text-[#6d5d50] transition-colors"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {translate(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
