import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Eye, Share2 } from "lucide-react"
import Link from "next/link"

const columnData = {
  "brand-strategy-2024": {
    title: "2024년 브랜드 전략 트렌드 분석",
    excerpt: "올해 주목해야 할 브랜드 마케팅 전략과 소비자 트렌드를 분석했습니다.",
    author: "브앤드팀",
    date: "2024.01.15",
    readTime: "5분",
    views: "1,234",
    category: "전략",
    tags: ["브랜드전략", "트렌드", "마케팅"],
    content: `
      <h2>2024년 브랜드 전략의 핵심 키워드</h2>
      <p>2024년은 브랜드들이 더욱 개인화되고 지속가능한 마케팅 전략을 추구하는 해가 될 것입니다. 소비자들의 가치관 변화와 기술 발전에 따라 브랜드 전략도 새로운 방향으로 진화하고 있습니다.</p>
      
      <h3>1. 개인화 마케팅의 진화</h3>
      <p>AI 기술의 발전으로 개인화 마케팅이 더욱 정교해지고 있습니다. 단순한 이름 삽입을 넘어서 소비자의 행동 패턴과 선호도를 분석한 맞춤형 콘텐츠가 중요해지고 있습니다.</p>
      
      <h3>2. 지속가능성의 중요성</h3>
      <p>환경에 대한 관심이 높아지면서 브랜드의 지속가능성 정책이 소비자 선택의 중요한 요소가 되고 있습니다. 진정성 있는 ESG 활동이 브랜드 가치를 높이는 핵심 요소입니다.</p>
      
      <h3>3. 메타버스와 가상현실</h3>
      <p>메타버스 플랫폼을 활용한 브랜드 경험 제공이 새로운 마케팅 채널로 부상하고 있습니다. 가상공간에서의 브랜드 경험은 소비자와의 새로운 연결점을 만들어냅니다.</p>
    `
  }
}

export function ColumnDetailSection({ slug }: { slug: string }) {
  const column = columnData[slug as keyof typeof columnData]

  if (!column) {
    return (
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-2xl font-bold mb-4">칼럼을 찾을 수 없습니다</h1>
          <Link href="/column">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              칼럼 목록으로 돌아가기
            </Button>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        {/* 뒤로가기 버튼 */}
        <Link href="/column" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          칼럼 목록으로 돌아가기
        </Link>

        {/* 칼럼 헤더 */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="secondary">
              {column.category}
            </Badge>
            <span>•</span>
            <span>{column.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {column.title}
          </h1>
          
          <p className="text-xl text-muted-foreground">
            {column.excerpt}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{column.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{column.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{column.views} 읽음</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {column.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* 칼럼 내용 */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: column.content }}
            />
            
            <div className="mt-8 pt-8 border-t">
              <Button variant="outline" className="group">
                <Share2 className="mr-2 h-4 w-4" />
                공유하기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
 