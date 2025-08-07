import { Button } from "@/components/ui/button"
import { GraduationCap, Download, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function SoloEducationSection() {
  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              브랜드를 혼자서도 만들고 싶은 분께
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              브랜드 제작부터 운영까지,
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                모두 내 손으로 해내고 싶다면
              </span>
            </h2>
            
            <p className="mx-auto max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              전자책과 실전 중심 교육으로
              <br />
              혼자서도 프로덕트를 만들 수 있게 도와드립니다
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/education">
              <Button size="lg" className="group px-8">
                교육 신청하기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* 서브 링크들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/ebook" className="group">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                전자책 다운로드
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact" className="group">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                상담 문의
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 