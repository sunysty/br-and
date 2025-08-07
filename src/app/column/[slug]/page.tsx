import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { MouseFollower } from "@/components/MouseFollower"
import { ColumnDetailSection } from "@/components/column/ColumnDetailSection"

export default async function ColumnDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ColumnDetailSection slug={slug} />
      </main>
      <Footer />
      <MouseFollower />
    </div>
  )
}