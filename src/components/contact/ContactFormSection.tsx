"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, Check } from "lucide-react"

const serviceTypes = [
  { id: "brand-design", name: "브랜드 디자인", description: "로고, CI/BI 제작" },
  { id: "website", name: "웹사이트 제작", description: "반응형 웹사이트 구축" },
  { id: "ecommerce", name: "쇼핑몰 제작", description: "온라인 쇼핑몰 구축" },
  { id: "marketing", name: "마케팅 서비스", description: "SNS, 광고 대행" },
  { id: "consulting", name: "브랜드 컨설팅", description: "브랜드 전략 수립" },
  { id: "other", name: "기타", description: "맞춤형 서비스" }
]

const budgetRanges = [
  { id: "under-500k", name: "50만원 미만" },
  { id: "500k-1m", name: "50만원 - 100만원" },
  { id: "1m-3m", name: "100만원 - 300만원" },
  { id: "3m-5m", name: "300만원 - 500만원" },
  { id: "over-5m", name: "500만원 이상" },
  { id: "discuss", name: "상담 후 결정" }
]

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "",
    budget: "",
    timeline: "",
    description: "",
    contactMethod: "email"
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직 구현
    console.log("문의 접수:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact-form" className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full mb-6">
                <Check className="h-4 w-4" />
                문의가 접수되었습니다!
              </div>
              <h2 className="text-2xl font-bold mb-4">감사합니다</h2>
              <p className="text-muted-foreground mb-6">
                문의해주신 내용을 검토한 후<br />
                24시간 이내에 연락드리겠습니다.
              </p>
              <Button onClick={() => setSubmitted(false)}>
                추가 문의하기
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <MessageSquare className="h-6 w-6 text-primary" />
              상담 신청하기
            </CardTitle>
            <p className="text-muted-foreground">
              프로젝트에 대해 알려주시면 맞춤형 견적을 제공해드립니다
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 기본 정보 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    이름 *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    회사명
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    이메일 *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    연락처
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              {/* 서비스 타입 */}
              <div className="space-y-3">
                <label className="text-sm font-medium">
                  원하시는 서비스 *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {serviceTypes.map((service) => (
                    <label key={service.id} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <input
                        type="radio"
                        name="serviceType"
                        value={service.id}
                        checked={formData.serviceType === service.id}
                        onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                        required
                        className="h-4 w-4 text-primary"
                      />
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-muted-foreground">{service.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* 예산 */}
              <div className="space-y-3">
                <label className="text-sm font-medium">
                  예산 범위
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {budgetRanges.map((budget) => (
                    <label key={budget.id} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <input
                        type="radio"
                        name="budget"
                        value={budget.id}
                        checked={formData.budget === budget.id}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="h-4 w-4 text-primary"
                      />
                      <span className="text-sm">{budget.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 일정 */}
              <div className="space-y-2">
                <label htmlFor="timeline" className="text-sm font-medium">
                  원하시는 완료 일정
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">선택해주세요</option>
                  <option value="asap">가능한 빨리</option>
                  <option value="1month">1개월 이내</option>
                  <option value="2months">2개월 이내</option>
                  <option value="3months">3개월 이내</option>
                  <option value="flexible">일정 유연함</option>
                </select>
              </div>

              {/* 프로젝트 설명 */}
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  프로젝트 설명 *
                </label>
                <textarea
                  id="description"
                  rows={6}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="프로젝트에 대해 자세히 설명해주세요. 예산, 일정, 원하시는 결과물 등 구체적으로 작성해주시면 더 정확한 견적을 제공할 수 있습니다."
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* 연락 방법 */}
              <div className="space-y-3">
                <label className="text-sm font-medium">
                  선호하는 연락 방법
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === "email"}
                      onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
                      className="h-4 w-4 text-primary"
                    />
                    <span className="text-sm">이메일</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === "phone"}
                      onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
                      className="h-4 w-4 text-primary"
                    />
                    <span className="text-sm">전화</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="both"
                      checked={formData.contactMethod === "both"}
                      onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}
                      className="h-4 w-4 text-primary"
                    />
                    <span className="text-sm">모두</span>
                  </label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full group">
                <Send className="mr-2 h-5 w-5" />
                상담 신청하기
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 