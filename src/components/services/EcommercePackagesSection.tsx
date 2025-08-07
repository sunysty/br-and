import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, ShoppingCart, Badge } from "lucide-react"
import Link from "next/link"

const ecommercePackages = [
  {
    name: "아임웹 자사몰 브랜딩 패키징",
    subtitle: "패키지 1",
    price: "200만원~",
    duration: "2-3주",
    description: "아임웹 기반으로 브랜딩 요소가 적용된 전문 쇼핑몰을 구축합니다",
    popular: true,
    features: [
      "아임웹 기반 자사몰 구축",
      "브랜딩 요소 적용",
      "상품 관리 시스템",
      "주문/결제 처리 시스템",
      "고객 관리 기능",
      "모바일 최적화",
      "기본 마케팅 도구",
      "재고 관리 시스템"
    ]
  },
  {
    name: "프리미엄 자사몰",
    subtitle: "패키지 2",
    price: "400만원~",
    duration: "4-5주",
    description: "고급 기능과 맞춤 디자인이 적용된 프리미엄 쇼핑몰",
    popular: false,
    features: [
      "완전 맞춤 디자인",
      "고급 상품 관리 기능",
      "멤버십/등급 시스템",
      "고급 마케팅 도구",
      "상세 분석 대시보드",
      "API 연동 서비스",
      "다중 결제 시스템",
      "6개월 무료 유지보수"
    ]
  },
  {
    name: "글로벌 자사몰",
    subtitle: "패키지 3",
    price: "600만원~",
    duration: "6-8주",
    description: "해외 진출을 위한 다국어/다통화 지원 글로벌 쇼핑몰",
    popular: false,
    features: [
      "다국어 지원 (한/영/중/일)",
      "다통화 결제 시스템",
      "글로벌 배송 연동",
      "현지화 마케팅 도구",
      "국가별 세금 계산",
      "글로벌 SEO 최적화",
      "24시간 고객지원",
      "1년 무료 유지보수"
    ]
  }
]

export function EcommercePackagesSection() {
  return (
    <section id="ecommerce" className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            B타입
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            브랜드 가치를 높이는 온라인 쇼핑몰
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">
            판매부터 브랜딩까지 완성하는 자사몰 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecommercePackages.map((pkg, index) => (
            <Card key={index} className={`group hover:shadow-lg transition-all duration-300 relative ${pkg.popular ? 'ring-2 ring-primary/20 scale-105' : 'border-0 shadow-sm'}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    인기 패키지
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <ShoppingCart className="h-8 w-8 text-primary" />
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
              자사몰 제작 상담받기
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 