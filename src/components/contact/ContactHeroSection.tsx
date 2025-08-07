import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            문의하기
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            브앤드 <br />
            상담받기
          </h1>
          
          <p className="mx-auto max-w-[700px] text-xl text-muted-foreground leading-relaxed">
            브랜드 제작부터 운영까지,<br />
            전문가와 상담하고 맞춤형 솔루션을 받아보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#contact-form">
              <Button size="lg" className="group px-8">
                <MessageSquare className="mr-2 h-5 w-5" />
                상담 신청하기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="/services">
              <Button variant="outline" size="lg" className="group px-8">
                서비스 보기
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center gap-3 p-4 bg-background rounded-lg shadow-sm">
              <Phone className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-sm font-medium">전화 문의</p>
                <p className="text-sm text-muted-foreground">010-1234-5678</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-background rounded-lg shadow-sm">
              <Mail className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-sm font-medium">이메일 문의</p>
                <p className="text-sm text-muted-foreground">contact@brand.com</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-background rounded-lg shadow-sm">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-sm font-medium">사업장 위치</p>
                <p className="text-sm text-muted-foreground">서울시 강남구</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 