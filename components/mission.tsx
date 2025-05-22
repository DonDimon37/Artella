"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { SectionTitle } from "@/components/section-title"

export function Mission() {
  const { language } = useLanguage()

  const content = {
    ru: {
      description:
        "Миссия Artella - создавать декоративные элементы для дома, которые подчеркивают индивидуальность каждого интерьера и добавляют уюта дому. Мы верим, что красивое окружение способствует гармонии и благополучию.",
      values: [
        "Качество и внимание к деталям",
        "Уникальный дизайн",
        "Экологичные материалы",
        "Доступность для каждого дома",
      ],
    },
    bg: {
      description:
        "Мисията на Artella е да създава декоративни елементи за дома, които подчертават индивидуалността на всеки интериор и добавят уют към дома. Вярваме, че красивата среда допринася за хармонията и благополучието.",
      values: [
        "Качество и внимание към детайлите",
        "Уникален дизайн",
        "Екологични материали",
        "Достъпност за всеки дом",
      ],
    },
  }

  return (
    <section className="w-full py-16 bg-white" id="mission">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=500" alt="Artella mission" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <SectionTitle sectionKey="mission" />
            <p className="text-[#8a7a6d] leading-relaxed">{content[language].description}</p>
            <ul className="space-y-2">
              {content[language].values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#c4a99d] mr-2">•</span>
                  <span className="text-[#8a7a6d]">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
