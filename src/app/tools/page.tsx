import { Header } from "@/components/Header"
import { ToolsHeroSection } from "@/components/tools/ToolsHeroSection"
import { ToolsListSection } from "@/components/tools/ToolsListSection"
import { ToolsSuggestionSection } from "@/components/tools/ToolsSuggestionSection"
import { Footer } from "@/components/Footer"
import { MouseFollower } from "@/components/MouseFollower"

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ToolsHeroSection />
        <ToolsListSection />
        <ToolsSuggestionSection />
      </main>
      <Footer />
      <MouseFollower />
    </div>
  )
} 