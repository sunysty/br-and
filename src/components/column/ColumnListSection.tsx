"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, User, Eye } from "lucide-react"
import Link from "next/link"

const columns = [
  {
    id: "brand-strategy-2024",
    title: "2024년 브랜드 전략 트렌드 분석",
    excerpt: "올해 주목해야 할 브랜드 마케팅 전략과 소비자 트렌드를 분석했습니다.",
    author: "브앤드팀",
    date: "2024.01.15",
    readTime: "5분",
    views: "1,234",
    category: "전략",
    tags: ["브랜드전략", "트렌드", "마케팅"],
    featured: true,
    href: "/column/brand-strategy-2024"
  },
  {
    id: "social-media-guide",
    title: "1인 브랜드 소셜미디어 운영 가이드",
    excerpt: "인스타그램, 틱톡 등 주요 플랫폼별 콘텐츠 전략과 팁을 공유합니다.",
    author: "김브랜드",
    date: "2024.01.12",
    readTime: "8분",
    views: "2,156",
    category: "소셜미디어",
    tags: ["인스타그램", "틱톡", "콘텐츠"],
    featured: false,
    href: "/column/social-media-guide"
  },
  {
    id: "ecommerce-tips",
    title: "온라인 쇼핑몰 매출 증대 전략",
    excerpt: "자사몰 운영 경험을 바탕으로 한 매출 증대 노하우를 정리했습니다.",
    author: "이커머스",
    date: "2024.01.10",
    readTime: "6분",
    views: "1,890",
    category: "커머스",
    tags: ["쇼핑몰", "매출", "전환율"],
    featured: false,
    href: "/column/ecommerce-tips"
  },
  {
    id: "brand-design-tips",
    title: "브랜드 디자인으로 신뢰도 높이기",
    excerpt: "로고, 색상, 타이포그래피를 활용한 브랜드 신뢰도 구축 방법.",
    author: "박디자인",
    date: "2024.01.08",
    readTime: "7분",
    views: "1,567",
    category: "디자인",
    tags: ["로고", "브랜딩", "신뢰도"],
    featured: false,
    href: "/column/brand-design-tips"
  },
  {
    id: "content-marketing",
    title: "콘텐츠 마케팅으로 고객 확보하기",
    excerpt: "블로그, 유튜브 등 다양한 채널을 활용한 콘텐츠 마케팅 전략.",
    author: "최콘텐츠",
    date: "2024.01.05",
    readTime: "9분",
    views: "2,345",
    category: "콘텐츠",
    tags: ["블로그", "유튜브", "SEO"],
    featured: false,
    href: "/column/content-marketing"
  },
  {
    id: "customer-service",
    title: "고객 서비스로 재구매율 높이기",
    excerpt: "고객 만족도를 높이고 재구매율을 증가시키는 서비스 전략.",
    author: "서비스팀",
    date: "2024.01.03",
    readTime: "6분",
    views: "1,678",
    category: "서비스",
    tags: ["고객서비스", "재구매", "만족도"],
    featured: false,
    href: "/column/customer-service"
  }
]

const categories = [
  { id: "all", name: "전체" },
  { id: "전략", name: "전략" },
  { id: "소셜미디어", name: "소셜미디어" },
  { id: "커머스", name: "커머스" },
  { id: "디자인", name: "디자인" },
  { id: "콘텐츠", name: "콘텐츠" },
  { id: "서비스", name: "서비스" }
]

export function ColumnListSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredColumns = selectedCategory === "all" 
    ? columns 
    : columns.filter(column => column.category === selectedCategory)

  return (
    <section id="latest" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* 칼럼 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColumns.map((column) => (
            <Card key={column.id} className={`group hover:shadow-lg transition-all duration-300 border-0 shadow-sm relative ${column.featured ? 'ring-2 ring-primary/20' : ''}`}>
              {column.featured && (
                <div className="absolute -top-3 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    추천
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary" className="text-xs">
                      {column.category}
                    </Badge>
                    <span>•</span>
                    <span>{column.date}</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {column.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {column.excerpt}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {column.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{column.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{column.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{column.views}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full group/btn" 
                  variant="outline"
                  asChild
                >
                  <Link href={column.href}>
                    자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredColumns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">해당 카테고리의 칼럼이 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  )
}