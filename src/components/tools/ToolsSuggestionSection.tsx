import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export function ToolsSuggestionSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              툴 제안
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              이런 툴이 필요해요!
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              직접 필요한 도구가 있다면 제안해 주세요.<br />
              브앤드가 만들어 드릴 수도 있어요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/tools/suggest">
                <Button size="lg" className="group px-8">
                  툴 제안하기
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button variant="outline" size="lg" className="group px-8">
                  문의하기
                </Button>
              </Link>
            </div>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                제안 가능한 툴 예시
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>소셜미디어 일괄 포스팅 도구</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>브랜드 로고 자동 생성기</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>고객 피드백 분석 도구</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>경쟁사 모니터링 시스템</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>매출 분석 대시보드</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  * 제안해주신 툴은 검토 후 개발 여부를 결정합니다
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
