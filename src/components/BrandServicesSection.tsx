import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, PenTool, Palette, ArrowRight } from "lucide-react"
import Link from "next/link"

const coreServices = [
  {
    title: "맞춤형 홈페이지 제작",
    icon: Globe,
    description: "브랜드 아이덴티티를 반영한 전문적인 웹사이트"
  },
  {
    title: "SNS 및 블로그 콘텐츠 운영",
    icon: PenTool,
    description: "지속적인 브랜드 스토리텔링과 고객 소통"
  },
  {
    title: "브랜드 아이덴티티 디자인",
    icon: Palette,
    description: "로고부터 전체 디자인 시스템까지"
  }
]

export function BrandServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            당신의 브랜드를 웹으로 연결합니다
          </h2>
          <p className="mx-auto max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed">
            홈페이지 제작부터 블로그 대행까지,
            <br />
            한 곳에서 완성하는 올인원 브랜드 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {coreServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="group px-8">
              서비스 자세히 보기
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 