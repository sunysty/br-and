import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, FileText, PenTool, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "홈페이지 제작",
    description: "브랜드 아이덴티티를 반영한 전문적인 웹사이트를 제작합니다. 반응형 디자인과 SEO 최적화로 고객에게 최상의 경험을 제공합니다.",
    icon: Globe,
    features: ["반응형 디자인", "SEO 최적화", "브랜드 맞춤 디자인", "유지보수 지원"]
  },
  {
    title: "상세페이지 제작",
    description: "제품과 서비스의 매력을 극대화하는 상세페이지를 제작합니다. 전환율 향상을 위한 전략적 구성과 디자인을 제공합니다.",
    icon: FileText,
    features: ["전환율 최적화", "스토리텔링 구성", "시각적 임팩트", "모바일 최적화"]
  },
  {
    title: "블로그 대행",
    description: "브랜드 가치를 전달하는 양질의 콘텐츠를 정기적으로 제작합니다. SEO 친화적인 글쓰기로 브랜드 노출도를 높입니다.",
    icon: PenTool,
    features: ["정기 포스팅", "SEO 최적화", "브랜드 스토리텔링", "콘텐츠 전략"]
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            올인원 브랜드 관리 서비스
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">
            브랜드 구축부터 운영까지, 체계적이고 전문적인 서비스로 
            비즈니스 성장을 지원합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed text-center">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="outline" className="group px-8">
              서비스 자세히 보기
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 