import { BestSellers } from "@/components/best-sellers"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { TopBar } from "@/components/top-bar"
import { AboutCompany } from "@/components/about-company"
import { LanguageIndicator } from "@/components/language-indicator"
import { UnderConstruction } from "@/components/under-construction"
import { TelegramButton } from "@/components/telegram-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <AboutCompany />
        <BestSellers />
        <Mission />
        <UnderConstruction sectionKey="paintings" />
        <UnderConstruction sectionKey="wallpapers" />
        <UnderConstruction sectionKey="metalDecor" />
        <UnderConstruction sectionKey="new" />
        <UnderConstruction sectionKey="sale" />
        <UnderConstruction sectionKey="delivery" />
        <UnderConstruction sectionKey="payment" />
      </main>
      <Footer />
      <LanguageIndicator />
      <TelegramButton />
    </div>
  )
}
