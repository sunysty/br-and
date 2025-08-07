"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Check, ArrowRight } from "lucide-react"

export function ColumnNewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 구독 로직 구현
    console.log("뉴스레터 구독:", email)
    setSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Mail className="h-6 w-6 text-primary" />
              브랜드 인사이트 뉴스레터
            </CardTitle>
            <p className="text-muted-foreground">
              최신 브랜드 트렌드와 실전 노하우를 이메일로 받아보세요
            </p>
          </CardHeader>
          <CardContent>
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="이메일 주소를 입력하세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit" size="lg" className="group">
                    구독하기
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  * 주 2회 발송되며, 언제든 구독 해지할 수 있습니다
                </p>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">
                  <Check className="h-4 w-4" />
                  구독이 완료되었습니다!
                </div>
                <p className="text-sm text-muted-foreground">
                  다음 뉴스레터를 기대해주세요.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}