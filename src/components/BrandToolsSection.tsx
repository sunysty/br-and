import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Palette, Calculator, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

const brandTools = [
  {
    title: "카톡 후기 생성기",
    icon: MessageSquare,
    description: "카카오톡 스타일의 후기를 쉽게 생성"
  },
  {
    title: "브랜드 색상 팔레트",
    icon: Palette,
    description: "브랜드에 맞는 조화로운 색상 조합"
  },
  {
    title: "가격 계산기",
    icon: Calculator,
    description: "서비스 가격 책정을 위한 계산 도구"
  }
]

export function BrandToolsSection() {
  return (
    <section className="py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            운영까지 생각하는 브랜드 파트너십
          </h2>
          <p className="mx-auto max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed">
            툴로 시작해, 브랜드를 만들고, 전달하는 모든 과정까지
            <br />
            쉽고 빠르게 활용해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {brandTools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/tools">
            <Button size="lg" variant="outline" className="group px-8">
              툴 전체 보기
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 