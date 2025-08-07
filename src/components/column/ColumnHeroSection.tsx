import { Button } from "@/components/ui/button"
import { BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ColumnHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            브랜드 인사이트
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            브랜드 성장을 위한<br />
            실전 노하우
          </h1>
          
          <p className="mx-auto max-w-[700px] text-xl text-muted-foreground leading-relaxed">
            브앤드가 직접 경험하고 검증한<br />
            브랜드 운영 팁과 마케팅 전략을 공유합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#latest">
              <Button size="lg" className="group px-8">
                <BookOpen className="mr-2 h-5 w-5" />
                최신 칼럼 보기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" size="lg" className="group px-8">
                문의하기
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>주 2회 업데이트</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>실전 경험 기반</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>무료 구독</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}