import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Settings, Users } from "lucide-react"
import Link from "next/link"

const managedPackages = [
  {
    name: "SNS 대행 추가 서비스",
    subtitle: "패키지 1",
    price: "월 50만원~",
    description: "홈페이지/자사몰 + SNS 운영을 함께 관리",
    icon: Users,
    popular: true,
    features: [
      "인스타그램, 페이스북 콘텐츠 제작",
      "월 16개 포스트 업로드",
      "브랜드 톤앤매너 적용",
      "고객 소통 및 댓글 관리",
      "해시태그 전략 수립",
      "월간 성과 리포트"
    ]
  },
  {
    name: "관리까지 해주는 서비스",
    subtitle: "패키지 2", 
    price: "월 80만원~",
    description: "웹사이트 + SNS + 전체 브랜드 관리",
    icon: Settings,
    popular: false,
    features: [
      "웹사이트 콘텐츠 업데이트",
      "SNS 전체 운영 (인스타, 페북, 블로그)",
      "고객 문의 1차 응답",
      "월간 상세 성과 분석",
      "마케팅 전략 수립 및 실행",
      "브랜드 가이드라인 관리"
    ]
  },
  {
    name: "브랜드 컨설팅 서비스",
    subtitle: "패키지 3",
    price: "월 120만원~",
    description: "브랜드 전략부터 실행까지 종합 컨설팅",
    icon: Settings,
    popular: false,
    features: [
      "브랜드 전략 수립 및 실행",
      "경쟁사 분석 및 포지셔닝",
      "마케팅 캠페인 기획/실행",
      "온/오프라인 통합 관리",
      "월 2회 전략 미팅",
      "분기별 성과 분석 보고서",
      "브랜드 가이드라인 업데이트",
      "위기 관리 대응 서비스"
    ]
  }
]

export function ManagedServicesSection() {
  return (
    <section id="managed" className="py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            C타입
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            제작 후에도 계속되는 파트너십
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">
            브랜드 운영의 모든 것을 전문가가 대신 관리해드립니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {managedPackages.map((pkg, index) => {
            const IconComponent = pkg.icon
            return (
              <Card key={index} className={`group hover:shadow-lg transition-all duration-300 relative ${pkg.popular ? 'ring-2 ring-primary/20 scale-105' : 'border-0 shadow-sm'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      추천 패키지
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {pkg.subtitle}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">
                    {pkg.price}
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
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button size="lg" className="group px-8">
              관리형 서비스 상담받기
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 