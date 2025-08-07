import { Header } from "@/components/Header"
import { ContactFormSection } from "@/components/contact/ContactFormSection"
import { ContactInfoSection } from "@/components/contact/ContactInfoSection"
import { Footer } from "@/components/Footer"
import { MouseFollower } from "@/components/MouseFollower"
import { ContactHeroSection } from "@/components/contact/ContactHeroSection"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ContactHeroSection />
        <ContactFormSection />
        <ContactInfoSection />
      </main>
      <Footer />
      <MouseFollower />
    </div>
  )
} 