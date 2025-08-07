import { Header } from "@/components/Header"
import { ColumnHeroSection } from "@/components/column/ColumnHeroSection"
import { ColumnListSection } from "@/components/column/ColumnListSection"
import { ColumnNewsletterSection } from "@/components/column/ColumnNewsletterSection"
import { Footer } from "@/components/Footer"
import { MouseFollower } from "@/components/MouseFollower"

export default function ColumnPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ColumnHeroSection />
        <ColumnListSection />
        <ColumnNewsletterSection />
      </main>
      <Footer />
      <MouseFollower />
    </div>
  )
} 