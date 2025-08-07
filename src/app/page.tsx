import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { BrandServicesSection } from "@/components/BrandServicesSection"
import { BrandToolsSection } from "@/components/BrandToolsSection"
import { BrandInsightsSection } from "@/components/BrandInsightsSection"
import { SoloEducationSection } from "@/components/SoloEducationSection"
import { Footer } from "@/components/Footer"
import { MouseFollower } from "@/components/MouseFollower"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BrandServicesSection />
        <BrandToolsSection />
        <BrandInsightsSection />
        <SoloEducationSection />
      </main>
      <Footer />
      <MouseFollower />
    </div>
  )
}
