"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

export function ToolsSuggestionForm() {
  const [formData, setFormData] = useState({
    toolName: "",
    description: "",
    purpose: "",
    contact: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직 구현
    console.log("툴 제안:", formData)
    alert("툴 제안이 접수되었습니다! 검토 후 연락드리겠습니다.")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/30">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 mb-12">
         <div className="flex justify-start">
          <Link href="/tools" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            툴 페이지로 돌아가기
          </Link>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            툴 제안하기
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            새로운 툴 아이디어를 제안해주세요
          </h1>
          
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
            브랜드 운영에 도움이 될 만한 툴 아이디어가 있으시다면<br />
            언제든 제안해주세요. 검토 후 개발 여부를 결정합니다.
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              툴 제안 폼
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="toolName" className="text-sm font-medium">
                  툴 이름 *
                </label>
                <input
                  id="toolName"
                  type="text"
                  placeholder="예: 소셜미디어 일괄 포스팅 도구"
                  value={formData.toolName}
                  onChange={(e) => setFormData({...formData, toolName: e.target.value})}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  기능 설명 *
                </label>
                <textarea
                  id="description"
                  placeholder="툴의 주요 기능과 특징을 설명해주세요"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="purpose" className="text-sm font-medium">
                  사용 목적 *
                </label>
                <textarea
                  id="purpose"
                  placeholder="이 툴을 통해 해결하고 싶은 문제나 개선하고 싶은 부분을 설명해주세요"
                  rows={3}
                  value={formData.purpose}
                  onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                  required
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contact" className="text-sm font-medium">
                  연락처 (선택)
                </label>
                <input
                  id="contact"
                  type="text"
                  placeholder="이메일 또는 연락처 (개발 시 연락드립니다)"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full group">
                <Send className="mr-2 h-5 w-5" />
                툴 제안하기
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 