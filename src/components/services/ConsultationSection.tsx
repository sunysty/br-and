import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Video, Mail, Phone, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const consultationProcess = [
  {
    step: "01",
    title: "무료 상담 신청",
    description: "현재 상황과 목표를 파악합니다"
  },
  {
    step: "02", 
    title: "요구사항 분석",
    description: "목표와 예산을 함께 확인합니다"
  },
  {
    step: "03",
    title: "맞춤 패키지 제안",
    description: "최적의 솔루션을 제시합니다"
  },
  {
    step: "04",
    title: "계약 및 시작",
    description: "프로젝트 킥오프 미팅을 진행합니다"
  }
]

const contactMethods = [
  {
    name: "카카오톡 상담",
    description: "실시간 채팅으로 빠른 상담",
    icon: MessageCircle,
    action: "카톡 상담하기",
    recommended: true
  },
  {
    name: "화상 미팅",
    description: "30분 무료 화상 상담",
    icon: Video,
    action: "미팅 예약하기",
    recommended: false
  },
  {
    name: "이메일 문의",
    description: "자세한 내용을 메일로 문의",
    icon: Mail,
    action: "메일 보내기",
    recommended: false
  },
  {
    name: "전화 상담",
    description: "직접 통화로 상담 받기",
    icon: Phone,
    action: "전화 상담하기",
    recommended: false
  }
]

export function ConsultationSection() {
  return (
    <section id="consultation" className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            프로젝트 시작은 무료 상담부터
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">
            전문가와의 상담을 통해 가장 적합한 솔루션을 찾아보세요
          </p>
        </div>

        {/* 상담 프로세스 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">상담 프로세스</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {consultationProcess.map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {process.step}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
                {index < consultationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-primary/20 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 상담 방법 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <Card key={index} className={`group hover:shadow-lg transition-all duration-300 text-center relative ${method.recommended ? 'ring-2 ring-primary/20' : 'border-0 shadow-sm'}`}>
                {method.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      추천
                    </div>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {method.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                  
                  <Link href="/contact">
                    <Button 
                      variant={method.recommended ? "default" : "outline"}
                      size="sm" 
                      className="w-full group/btn"
                    >
                      {method.action}
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA 섹션 */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">상담은 100% 무료입니다</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
            부담 없이 문의주세요. 전문가가 친절하게 상담해드립니다.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group px-8">
              지금 무료 상담 받기
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 