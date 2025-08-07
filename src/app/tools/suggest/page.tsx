import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { MouseFollower } from "@/components/MouseFollower"
import { ToolsSuggestionForm } from "@/components/tools/ToolsSuggestionForm"

export default function ToolsSuggestionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ToolsSuggestionForm />
      </main>
      <Footer />
      <MouseFollower />
    </div>
  )
} 