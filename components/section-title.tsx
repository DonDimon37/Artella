"use client"

import { useLanguage } from "@/contexts/language-context"

type SectionTitleProps = {
  sectionKey: string
  className?: string
  showLabel?: boolean
}

export function SectionTitle({ sectionKey, className = "", showLabel = true }: SectionTitleProps) {
  const { translate } = useLanguage()

  // Get the section title using the translate function
  const title = translate(sectionKey, sectionKey)

  return (
    <div className="relative">
      <h2 className={`text-3xl font-light text-[#6d5d50] ${className}`}>{title}</h2>
      {showLabel && (
        <div className="absolute -top-6 left-0 text-xs text-[#c4a99d] font-medium uppercase tracking-wider">
          {sectionKey}
        </div>
      )}
    </div>
  )
}
