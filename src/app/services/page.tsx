import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { MouseFollower } from "@/components/MouseFollower"
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection"
import { ServicesOverviewSection } from "@/components/services/ServicesOverviewSection"
import { WebsitePackagesSection } from "@/components/services/WebsitePackagesSection"
import { EcommercePackagesSection } from "@/components/services/EcommercePackagesSection"
import { ManagedServicesSection } from "@/components/services/ManagedServicesSection"
import { ConsultationSection } from "@/components/services/ConsultationSection"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ServicesHeroSection />
        <ServicesOverviewSection />
        <WebsitePackagesSection />
        <EcommercePackagesSection />
        <ManagedServicesSection />
        <ConsultationSection />
      </main>
      <Footer />
      <MouseFollower />
    </div>
  )
} 