"use client"

import { useLanguage } from "@/contexts/language-context"
import { SectionTitle } from "@/components/section-title"

export function AboutCompany() {
  const { language } = useLanguage()

  const content = {
    ru: {
      description:
        "Artella - это бренд декоративных элементов для дома, который специализируется на производстве и продаже картин, фототапетов и металлических декораций для стен. Мы создаем уникальные предметы, которые подчеркивают индивидуальность каждого интерьера и добавляют уюта вашему дому.",
    },
    bg: {
      description:
        "Artella е марка за декоративни елементи за дома, която се специализира в производството и продажбата на картини, фототапети и метални декорации за стени. Ние създаваме уникални предмети, които подчертават индивидуалността на всеки интериор и добавят уют към вашия дом.",
    },
  }

  return (
    <section className="w-full py-16 bg-white" id="about-company">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle sectionKey="aboutCompany" className="mb-6" />
          <p className="text-[#8a7a6d] leading-relaxed">{content[language].description}</p>
        </div>
      </div>
    </section>
  )
}
