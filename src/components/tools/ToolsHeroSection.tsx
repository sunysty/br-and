import { Button } from "@/components/ui/button"
import { MessageSquare, Lightbulb } from "lucide-react"
import Link from "next/link"

export function ToolsHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            브랜드 운영 툴
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            브랜드 운영, 더 쉽고 빠르게.
          </h1>
          
          <p className="mx-auto max-w-[700px] text-xl text-muted-foreground leading-relaxed">
            혼자서도 프로답게 관리할 수 있도록,<br />
            브앤드가 직접 만든 브랜드 운영 툴 모음입니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="group px-8">
                문의하기
              </Button>
            </Link>
            
            <Link href="/tools/suggest">
              <Button variant="outline" size="lg" className="group px-8">
                툴 제안하기
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            새로운 툴 아이디어가 있으신가요?
          </p>
        </div>
      </div>
    </section>
  )
} 