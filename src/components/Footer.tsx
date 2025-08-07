import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react"

const footerLinks = {
  main: [
    { name: "홈", href: "/" },
    { name: "서비스", href: "/services" },
    { name: "툴", href: "/tools" },
    { name: "칼럼", href: "/column" },
    { name: "문의", href: "/contact" }
  ],
  services: [
    { name: "홈페이지 제작", href: "/services/website" },
    { name: "상세페이지 제작", href: "/services/landing-page" },
    { name: "블로그 대행", href: "/services/blog-management" }
  ],
  tools: [
    { name: "카톡 후기 생성기", href: "/tools/kakao-review-generator" },
    { name: "브랜드 색상 팔레트", href: "/tools/brand-color-palette" },
    { name: "가격 계산기", href: "/tools/pricing-calculator" }
  ]
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/br-and",
    icon: Github,
    description: "소스 코드와 프로젝트"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/br-and",
    icon: Linkedin,
    description: "전문 네트워킹"
  },
  {
    name: "Email",
    href: "mailto:contact@br-and.co.kr",
    icon: Mail,
    description: "직접 연락하기"
  }
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 py-16">
        {/* 메인 푸터 콘텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 브랜드 섹션 */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
                             <div className="relative w-8 h-8">
                 <Image
                   src="/dark_logo.png"
                   alt="BR& 로고"
                   width={32}
                   height={32}
                   className="dark:hidden"
                 />
                 <Image
                   src="/white_logo.png"
                   alt="BR& 로고"
                   width={32}
                   height={32}
                   className="hidden dark:block"
                 />
              </div>
              <div className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                브앤드
              </div>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed text-sm">
              브랜드의 다음을 고민하는 프로덕트를 만드는 브랜드.
              1인 사업자와 소상공인을 위한 올인원 브랜드 관리 서비스를 제공합니다.
            </p>
            
            {/* 소셜 링크 */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link key={social.name} href={social.href}>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <IconComponent className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* 메인 네비게이션 */}
          <div className="space-y-4">
            <h4 className="font-semibold">메뉴</h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 서비스 링크 */}
          <div className="space-y-4">
            <h4 className="font-semibold">서비스</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 툴 링크 */}
          <div className="space-y-4">
            <h4 className="font-semibold">브랜드 툴</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* 하단 정보 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2024 브앤드. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link 
              href="/privacy" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              개인정보처리방침
            </Link>
            <Link 
              href="/terms" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              이용약관
            </Link>
            <div className="flex items-center gap-1 text-muted-foreground">
              Made with <Heart className="h-4 w-4 text-red-500" /> in Seoul
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 