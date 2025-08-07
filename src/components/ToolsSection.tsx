import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, MessageSquare, Palette, Calculator, ArrowRight, Lock, Play } from "lucide-react"
import Link from "next/link"

const tools = [
  {
    title: "카톡 후기 생성기",
    description: "카카오톡 대화 스타일로 리뷰를 생성하는 브랜드 마케팅 툴입니다.",
    icon: MessageSquare,
    url: "/tools/kakao-review-generator",
    type: "free", // free, premium, freemium
    category: "마케팅"
  },
  {
    title: "브랜드 색상 팔레트",
    description: "브랜드 아이덴티티에 맞는 조화로운 색상 팔레트를 생성합니다.",
    icon: Palette,
    url: "/tools/brand-color-palette",
    type: "freemium",
    category: "디자인"
  },
  {
    title: "가격 계산기",
    description: "서비스 가격 책정을 위한 다양한 계산 기능을 제공합니다.",
    icon: Calculator,
    url: "/tools/pricing-calculator",
    type: "premium",
    category: "비즈니스"
  }
]

export function ToolsSection() {
  return (
    <section className="py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              브랜드 운영 툴
            </h2>
          </div>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">
            브랜드 운영에 도움이 되는 실용적인 툴들을 제공합니다.
            무료 툴부터 프리미엄 기능까지 다양하게 활용해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {tool.title}
                      </CardTitle>
                      {tool.type === "premium" && (
                        <Lock className="h-4 w-4 text-amber-500" />
                      )}
                      {tool.type === "freemium" && (
                        <div className="flex items-center gap-1">
                          <Play className="h-3 w-3 text-green-500" />
                          <Lock className="h-3 w-3 text-amber-500" />
                        </div>
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <CardDescription className="leading-relaxed">
                    {tool.description}
                  </CardDescription>
                  
                  <Link href={tool.url} className="block">
                    <Button 
                      className="w-full group/btn" 
                      variant={tool.type === "premium" ? "default" : "outline"}
                    >
                      {tool.type === "premium" ? (
                        <>
                          <Lock className="mr-2 h-4 w-4" />
                          회원 전용
                        </>
                      ) : tool.type === "freemium" ? (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          무료 체험
                        </>
                      ) : (
                        <>
                          <Zap className="mr-2 h-4 w-4" />
                          무료 사용
                        </>
                      )}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 더 많은 툴 CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">더 많은 브랜드 툴</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
            브랜드 운영에 필요한 다양한 툴들을 지속적으로 추가하고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools">
              <Button variant="outline" size="lg" className="group px-8">
                모든 툴 보기
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="group px-8">
                툴 제안하기
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 