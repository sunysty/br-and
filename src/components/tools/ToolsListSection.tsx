 "use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Download, MessageSquare, Palette, Calculator, Search, Link as LinkIcon } from "lucide-react"

const tools = [
  {
    id: "kakao-review",
    name: "카톡 후기 생성기",
    description: "스크린샷처럼 보이는 카카오톡 후기 만들기",
    icon: MessageSquare,
    tags: ["무료", "1인브랜드", "텍스트툴"],
    type: "text",
    status: "free",
    action: "바로가기",
    actionIcon: ExternalLink,
    href: "/tools/kakao-review"
  },
  {
    id: "brand-palette",
    name: "브랜드 색상 팔레트 추천기",
    description: "키워드 기반 추천 / HEX 코드 복사 기능",
    icon: Palette,
    tags: ["무료", "디자인", "색상"],
    type: "design",
    status: "free",
    action: "다운로드",
    actionIcon: Download,
    href: "/tools/brand-palette"
  },
  {
    id: "service-calculator",
    name: "서비스 가격 계산기",
    description: "제작 항목 선택하면 자동으로 견적 산출",
    icon: Calculator,
    tags: ["무료", "견적", "계산기"],
    type: "automation",
    status: "free",
    action: "바로가기",
    actionIcon: ExternalLink,
    href: "/tools/service-calculator"
  },
  {
    id: "brand-name-checker",
    name: "브랜드 네임 체크 툴",
    description: "입력한 브랜드명이 도메인/상표/인스타에 사용 가능한지 확인",
    icon: Search,
    tags: ["무료", "네이밍", "검색"],
    type: "naming",
    status: "free",
    action: "바로가기",
    actionIcon: ExternalLink,
    href: "/tools/brand-name-checker"
  },
  {
    id: "link-organizer",
    name: "링크 한 줄 정리 툴",
    description: "자주 쓰는 링크들을 깔끔하게 모아 보여주는 미니 프로필 생성기",
    icon: LinkIcon,
    tags: ["무료", "링크", "프로필"],
    type: "marketing",
    status: "free",
    action: "바로가기",
    actionIcon: ExternalLink,
    href: "/tools/link-organizer"
  }
]

const categories = [
  { id: "all", name: "전체" },
  { id: "design", name: "디자인" },
  { id: "marketing", name: "마케팅" },
  { id: "automation", name: "자동화" },
  { id: "naming", name: "네이밍" }
]

export function ToolsListSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredTools = selectedCategory === "all" 
    ? tools 
    : tools.filter(tool => tool.type === selectedCategory)

  return (
    <section className="py-20 bg-background">
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

        {/* 툴 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const IconComponent = tool.icon
            const ActionIcon = tool.actionIcon
            
            return (
              <Card key={tool.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full group/btn" 
                    variant="outline"
                    asChild
                  >
                    <a href={tool.href} target="_blank" rel="noopener noreferrer">
                      <ActionIcon className="mr-2 h-4 w-4" />
                      {tool.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">해당 카테고리의 툴이 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  )
}