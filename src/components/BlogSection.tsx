import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

const columnPosts = [
  {
    title: "1인 사업자를 위한 브랜드 아이덴티티 구축 가이드",
    excerpt: "작은 비즈니스도 강력한 브랜드를 만들 수 있습니다. 브랜드 아이덴티티 구축의 핵심 요소들과 실전 적용 방법을 소개합니다.",
    date: "2024-01-15",
    readTime: "8분",
    category: "브랜딩",
    slug: "brand-identity-guide-for-solopreneurs"
  },
  {
    title: "소상공인 온라인 마케팅 성공 전략",
    excerpt: "제한된 예산으로도 효과적인 온라인 마케팅을 할 수 있는 방법들을 실제 사례와 함께 정리했습니다.",
    date: "2024-01-10",
    readTime: "6분",
    category: "마케팅",
    slug: "online-marketing-strategy-for-small-business"
  },
  {
    title: "고객 신뢰를 높이는 홈페이지 필수 요소들",
    excerpt: "첫 방문자를 단골 고객으로 만드는 홈페이지의 핵심 요소들과 신뢰도를 높이는 디자인 팁을 공유합니다.",
    date: "2024-01-05",
    readTime: "10분",
    category: "웹사이트",
    slug: "website-elements-for-customer-trust"
  },
  {
    title: "1인 창업자의 시간 관리와 업무 효율화",
    excerpt: "모든 것을 혼자 해야 하는 1인 사업자를 위한 실용적인 시간 관리 방법과 업무 자동화 팁을 제안합니다.",
    date: "2023-12-28",
    readTime: "7분",
    category: "비즈니스",
    slug: "time-management-for-solopreneurs"
  }
]

export function ColumnSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              1인 사업자 칼럼
            </h2>
          </div>
          <p className="mx-auto max-w-[600px] text-lg text-muted-foreground leading-relaxed">
            1인 사업자와 소상공인을 위한 실용적인 비즈니스 인사이트와
            브랜드 운영 노하우를 공유합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {columnPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('ko-KR')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime} 읽기
                    </div>
                  </div>
                </div>
                
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                
                <Link href={`/column/${post.slug}`} className="block">
                  <Button variant="ghost" className="w-full group/btn justify-between p-0 h-auto">
                    <span className="text-primary font-medium">자세히 읽기</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 칼럼 더보기 섹션 */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">더 많은 비즈니스 인사이트</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
            브랜딩, 마케팅, 운영까지 1인 사업자에게 필요한 
            모든 정보를 정기적으로 업데이트합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/column">
              <Button size="lg" variant="outline" className="group px-8">
                <BookOpen className="mr-2 h-4 w-4" />
                모든 칼럼 보기
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 