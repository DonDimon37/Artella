"use client"

import { useLanguage } from "@/contexts/language-context"
import { Construction } from "lucide-react"

type UnderConstructionProps = {
  sectionKey: string
}

export function UnderConstruction({ sectionKey }: UnderConstructionProps) {
  const { language, translate } = useLanguage()

  const messages = {
    ru: {
      title: "Раздел в разработке",
      description: "Этот раздел сайта находится в разработке и будет доступен в ближайшее время.",
    },
    bg: {
      title: "Раздел в разработка",
      description: "Този раздел на сайта е в процес на разработка и ще бъде достъпен скоро.",
    },
  }

  return (
    <section className="w-full py-16 bg-white" id={sectionKey}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Construction className="h-16 w-16 text-[#c4a99d]" />
          </div>
          <h2 className="text-3xl font-light text-[#6d5d50] mb-4">{translate(sectionKey)}</h2>
          <h3 className="text-xl font-medium text-[#8a7a6d] mb-2">{messages[language].title}</h3>
          <p className="text-[#8a7a6d] leading-relaxed">{messages[language].description}</p>
        </div>
      </div>
    </section>
  )
}
