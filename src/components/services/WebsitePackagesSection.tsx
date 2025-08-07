import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const websitePackages = [
  {
    name: "모두그대로 아임웹",
    subtitle: "패키지 1",
    price: "30만원",
    duration: "1주",
    description: "네이버 모두 그대로 아임웹으로 이동해주는 서비스",
    popular: false,
    features: [
      "기존 콘텐츠 그대로 이전",
      "아임웹 기본 세팅",
      "도메인 연결",
      "기본 반응형 적용"
    ]
  },
  {
    name: "템플릿 회사 홈페이지",
    subtitle: "패키지 2",
    price: "80만원~",
    duration: "2주",
    description: "아임웹 템플릿 기반으로 제작하는 전문 홈페이지",
    popular: true,
    features: [
      "5페이지 기준 제작",
      "반응형 디자인",
      "기본 SEO 최적화",
      "템플릿 커스터마이징",
      "문의 폼 연동",
      "1개월 무료 수정"
    ]
  },
  {
    name: "맞춤형 홈페이지",
    subtitle: "패키지 3",
    price: "300만원~",
    duration: "3-4주",
    description: "아임웹, 프레이머, 자체개발 등 원하는 방식으로 제작",
    popular: false,
    features: [
      "완전 맞춤 디자인",
      "브랜드 아이덴티티 적용",
      "고급 기능 구현",
      "상담 후 플랫폼 결정",
      "무제한 페이지",
      "3개월 무료 유지보수"
    ]
  }
]

export function WebsitePackagesSection() {
  return (
    <section id="website" className="py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            A타입
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            기업 브랜딩을 완성하는 홈페이지
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">
            예산과 요구사항에 맞는 3가지 홈페이지 제작 패키지
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {websitePackages.map((pkg, index) => (
            <Card key={index} className={`group hover:shadow-lg transition-all duration-300 relative ${pkg.popular ? 'ring-2 ring-primary/20 scale-105' : 'border-0 shadow-sm'}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    인기 패키지
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-sm text-muted-foreground mb-2">
                  {pkg.subtitle}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {pkg.name}
                </CardTitle>
                <div className="text-3xl font-bold text-primary mt-2">
                  {pkg.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  제작 기간: {pkg.duration}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
                
                <div className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link href="/contact" className="block">
                  <Button 
                    className={`w-full group/btn ${pkg.popular ? '' : 'variant-outline'}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    상담 받기
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button size="lg" className="group px-8">
              홈페이지 제작 상담받기
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 