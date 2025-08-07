import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { MouseFollower } from "@/components/MouseFollower"
import { ColumnDetailSection } from "@/components/column/ColumnDetailSection"

export default function ColumnDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ColumnDetailSection slug={params.slug} />
      </main>
      <Footer />
      <MouseFollower />
    </div>
  )
}