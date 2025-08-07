"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // 마우스가 움직이면 로고 표시
      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    // 호버 가능한 요소들 감지
    const hoverElements = document.querySelectorAll('button, a, [role="button"]')
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    document.addEventListener('mousemove', handleMouseMove)
    
    // 3초 후 마우스가 멈추면 로고 숨기기
    let hideTimeout: NodeJS.Timeout
    const resetHideTimeout = () => {
      clearTimeout(hideTimeout)
      hideTimeout = setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }

    document.addEventListener('mousemove', resetHideTimeout)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousemove', resetHideTimeout)
      
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
      
      clearTimeout(hideTimeout)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className={`fixed pointer-events-none z-[9999] transition-all duration-300 ease-out ${
        isHovering 
          ? 'scale-150 opacity-80' 
          : 'scale-100 opacity-60'
      }`}
      style={{
        left: mousePosition.x - 16,
        top: mousePosition.y - 16,
        transform: `translate(0, 0)`,
      }}
    >
      <div className={`relative w-8 h-8 transition-all duration-300 ${
        isHovering ? 'rotate-12' : 'rotate-0'
      }`}>
        <Image
          src="/dark_logo.png"
          alt="BR& 로고"
          width={32}
          height={32}
          className="dark:hidden drop-shadow-lg"
          priority
        />
        <Image
          src="/white_logo.png"
          alt="BR& 로고"
          width={32}
          height={32}
          className="hidden dark:block drop-shadow-lg"
          priority
        />
        
        {/* 호버시 글로우 효과 */}
        {isHovering && (
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse" />
        )}
      </div>
      

    </div>
  )
} 