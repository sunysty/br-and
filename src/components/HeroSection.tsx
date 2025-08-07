import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Target } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
    return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
          {/* 메인 제목 */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                아이디어가 프로덕트가 되는
              </span>
              <br />
              <span className="text-foreground">순간을 함께</span>
            </h1>
            
            <p className="mx-auto max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              브랜드를 시작하고 싶은 사람들의 든든한 제작 파트너,
              <br />
              <span className="font-semibold text-foreground">브앤드</span>
            </p>
          </div>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/services">
              <Button size="lg" className="w-full sm:w-auto group px-8 py-3">
                서비스 살펴보기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="/tools">
              <Button size="lg" variant="outline" className="w-full sm:w-auto group px-8 py-3">
                브랜드 툴 보기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 