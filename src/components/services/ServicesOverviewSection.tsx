import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, ShoppingCart, Settings } from "lucide-react"

const serviceTypes = [
  {
    title: "회사 홈페이지 제작",
    subtitle: "A타입",
    description: "기업 브랜딩을 위한 전문적인 웹사이트 제작",
    icon: Globe,
    priceRange: "30만원부터",
    features: ["아임웹 기반", "템플릿/맞춤형", "반응형 디자인"]
  },
  {
    title: "자사몰 제작",
    subtitle: "B타입", 
    description: "온라인 판매를 위한 브랜딩 쇼핑몰 구축",
    icon: ShoppingCart,
    priceRange: "200만원부터",
    features: ["결제 시스템", "상품 관리", "브랜드 디자인"]
  },
  {
    title: "관리형 서비스",
    subtitle: "C타입",
    description: "제작 후 지속적인 운영과 관리까지",
    icon: Settings,
    priceRange: "월 50만원부터",
    features: ["SNS 대행", "콘텐츠 관리", "성과 분석"]
  }
]

export function ServicesOverviewSection() {
  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            3가지 타입으로 브랜드를 완성합니다
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">
            예산과 목적에 맞는 최적의 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceTypes.map((service, index) => {
            const IconComponent = service.icon
            const sectionId = service.subtitle === 'A타입' ? '#website' : 
                             service.subtitle === 'B타입' ? '#ecommerce' : '#managed'
            
            return (
              <a key={index} href={sectionId} className="block">
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm text-center relative cursor-pointer hover:scale-105">
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {service.subtitle}
                  </div>
                  
                  <CardHeader className="pb-4 pt-12">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="text-2xl font-bold text-primary mt-2">
                      {service.priceRange}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
} 