import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesHeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                당신의 브랜드를 완성하는
              </span>
              <br />
              <span className="text-foreground">파트너</span>
            </h1>
            
            <p className="mx-auto max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              아이디어부터 런칭까지, 브랜드 구축의 모든 과정을 함께합니다
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#consultation">
              <Button size="lg" className="w-full sm:w-auto group px-8 py-3">
                무료 상담 받기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="#packages">
              <Button size="lg" variant="outline" className="w-full sm:w-auto group px-8 py-3">
                패키지 둘러보기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 