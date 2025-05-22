"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { SectionTitle } from "@/components/section-title"

export function BestSellers() {
  const { language, translate } = useLanguage()

  const content = {
    ru: {
      products: [
        {
          id: 1,
          name: "Абстрактная картина «Гармония»",
          category: "Картины",
          price: "129 USD",
        },
        {
          id: 2,
          name: "Фотообои «Скандинавский лес»",
          category: "Фотообои",
          price: "189 USD",
        },
        {
          id: 3,
          name: "Металлическое панно «Геометрия»",
          category: "Металлические декорации",
          price: "159 USD",
        },
        {
          id: 4,
          name: "Картина «Морской пейзаж»",
          category: "Картины",
          price: "139 USD",
        },
      ],
    },
    bg: {
      products: [
        {
          id: 1,
          name: "Абстрактна картина «Хармония»",
          category: "Картини",
          price: "129 USD",
        },
        {
          id: 2,
          name: "Фототапет «Скандинавска гора»",
          category: "Фототапети",
          price: "189 USD",
        },
        {
          id: 3,
          name: "Метално пано «Геометрия»",
          category: "Метални декорации",
          price: "159 USD",
        },
        {
          id: 4,
          name: "Картина «Морски пейзаж»",
          category: "Картини",
          price: "139 USD",
        },
      ],
    },
  }

  return (
    <section className="w-full py-16 bg-[#f8f5f2]" id="best-sellers">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <SectionTitle sectionKey="bestSellers" />
          <Button variant="link" className="text-[#c4a99d]">
            {translate("viewAll")}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content[language].products.map((product) => (
            <Card key={product.id} className="border-none shadow-sm overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=${product.name}`}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="pt-4">
                <div className="text-xs text-[#c4a99d] mb-1">{product.category}</div>
                <h3 className="font-medium text-[#6d5d50] mb-1">{product.name}</h3>
                <div className="text-sm font-medium text-[#8a7a6d]">{product.price}</div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-[#c4a99d] text-[#8a7a6d] hover:bg-[#c4a99d] hover:text-white"
                >
                  {translate("addToCart")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
