import { Button } from "@/components/ui/button"
import { BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BrandInsightsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              브랜드 인사이트 칼럼
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              브랜드 성장을 위한 인사이트,
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                읽고, 배우고, 적용까지
              </span>
            </h2>
            
            <p className="mx-auto max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              1인 브랜드 운영자를 위한 실전형 콘텐츠 모음
            </p>
          </div>

          <Link href="/column">
            <Button size="lg" variant="outline" className="group px-8">
              칼럼 둘러보기
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 