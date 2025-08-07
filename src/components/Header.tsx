"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Moon, Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navigation = [
  { name: "홈", href: "/" },
  { name: "서비스", href: "/services" },
  { name: "툴", href: "/tools" },
  { name: "칼럼", href: "/column" },
  { name: "문의", href: "/contact" },
]

export function Header() {
  const [isDark, setIsDark] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains('dark') || 
      (localStorage.getItem('darkMode') === 'true')
    setIsDark(isDarkMode)
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  // 하이드레이션 완료 전까지는 기본 아이콘 표시
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-3 ml-4">
            <div className="relative w-8 h-8">
              <Image
                src="/dark_logo.png"
                alt="BR& 로고"
                width={32}
                height={32}
                priority
              />
            </div>
            <div className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              브앤드
            </div>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link 
                      href={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* 우측 버튼들 */}
          <div className="flex items-center space-x-2">
            {/* 다크모드 토글 */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4" />
              <span className="sr-only">테마 토글</span>
            </Button>

            {/* 결제/회원가입 버튼 (추후 추가용) */}
            <Button variant="outline" className="hidden sm:inline-flex">
              문의하기
            </Button>

            {/* 모바일 메뉴 */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">메뉴 열기</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Button className="w-full">
                      문의하기
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-3 ml-4">
          <div className="relative w-8 h-8">
            <Image
              src="/dark_logo.png"
              alt="BR& 로고"
              width={32}
              height={32}
              className="dark:hidden"
              priority
            />
            <Image
              src="/white_logo.png"
              alt="BR& 로고"
              width={32}
              height={32}
              className="hidden dark:block"
              priority
            />
          </div>
          <div className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            브앤드
          </div>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild>
                  <Link 
                    href={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* 우측 버튼들 */}
        <div className="flex items-center space-x-2">
          {/* 다크모드 토글 */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="h-9 w-9"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">테마 토글</span>
          </Button>

          {/* 결제/회원가입 버튼 (추후 추가용) */}
          <Button variant="outline" className="hidden sm:inline-flex">
            문의하기
          </Button>

          {/* 모바일 메뉴 */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Button className="w-full">
                    문의하기
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
} 