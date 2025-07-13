"use client"

import type React from "react"

interface CardWrapperProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function CardWrapper({ children, className = "", onClick }: CardWrapperProps) {
  return (
    <div className={`bg-card rounded-lg p-6 border border-primary/20 ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}

