import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"

export function ContactInfoSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            언제든 연락주세요
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
            브랜드 제작에 대한 궁금한 점이나 상담이 필요하시면<br />
            언제든 편하게 연락주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">전화 문의</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="text-2xl font-bold text-primary">010-1234-5678</p>
              <p className="text-sm text-muted-foreground">평일 09:00 - 18:00</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">이메일 문의</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="text-lg font-bold text-primary">contact@brand.com</p>
              <p className="text-sm text-muted-foreground">24시간 접수 가능</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">사업장 위치</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="text-lg font-bold text-primary">서울시 강남구</p>
              <p className="text-sm text-muted-foreground">테헤란로 123</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">업무 시간</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="text-lg font-bold text-primary">평일 09:00-18:00</p>
              <p className="text-sm text-muted-foreground">토요일 09:00-13:00</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="border-0 shadow-lg max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                빠른 상담이 필요하신가요?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                간단한 문의사항이 있으시면 카카오톡으로 빠르게 상담받으실 수 있습니다.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-lg transition-colors">
                카카오톡 상담하기
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 