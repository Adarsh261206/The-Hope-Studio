import * as React from "react"
import { cn } from "@/lib/cn"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  as?: "div" | "article" | "a"
  href?: string
}

export function Card({
  children,
  className,
  hover = true,
  as = "div",
  href,
}: CardProps) {
  const baseStyles = cn(
    "bg-white rounded-lg",
    hover && "hover-lift-card",
    className
  )

  if (as === "a" && href) {
    return (
      <a href={href} className={cn(baseStyles, "block group no-underline")}>
        {children}
      </a>
    )
  }

  const Component = as
  return <Component className={baseStyles}>{children}</Component>
}
