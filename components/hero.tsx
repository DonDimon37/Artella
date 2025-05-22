"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { language, translate } = useLanguage()

  const content = {
    ru: {
      title: "Создайте уютный дом с Artella",
      subtitle: "Декоративные элементы, которые подчеркнут индивидуальность вашего интерьера",
    },
    bg: {
      title: "Създайте уютен дом с Artella",
      subtitle: "Декоративни елементи, които подчертават индивидуалността на вашия интериор",
    },
  }

  return (
    <section className="relative w-full bg-[#f8f5f2] py-16 md:py-24" id="hero">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="text-xs text-[#c4a99d] font-medium uppercase tracking-wider">Artella</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#6d5d50] leading-tight">
            {content[language].title}
          </h1>
          <p className="text-lg md:text-xl text-[#8a7a6d] max-w-md">{content[language].subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#c4a99d] hover:bg-[#b39588] text-white">{translate("viewCollection")}</Button>
            <Button variant="outline" className="border-[#c4a99d] text-[#8a7a6d]">
              {translate("learnMore")}
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ maxWidth: "400px" }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-05-22%2017.44.15-As1l4h14XzuIUz5r7OoFlTmhYYa4Iy.jpeg"
              alt="Elegant portrait in luxurious interior"
              width={400}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
