"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/cn"
import { ArrowUpRight } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "pricing"
  size?: "sm" | "md" | "lg"
  as?: "button" | "a"
  href?: string
  showIcon?: boolean
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  children,
  showIcon = true,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "group relative inline-flex items-center gap-2 font-sans font-medium transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-primary/30",
    "overflow-hidden"
  )

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  const variantStyles = {
    primary:
      "bg-white text-primary rounded-full",
    secondary:
      "bg-primary text-white rounded-full",
    outline:
      "bg-white text-primary border border-primary rounded-full",
    pricing:
      "w-full bg-white text-primary border border-primary rounded-full py-3 px-5 text-sm justify-center",
  }

  const iconStyles = {
    primary:
      "bg-primary text-white",
    secondary:
      "bg-white text-primary",
    outline:
      "bg-primary text-white",
    pricing:
      "bg-primary text-white",
  }

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        <span className="inline-block">{children}</span>
        {showIcon && (
          <span className={cn(
            "w-[2.125rem] h-[2.125rem] rounded-full flex items-center justify-center flex-shrink-0",
            "transition-colors duration-300",
            "group-hover:bg-primary-hover",
            iconStyles[variant]
          )}>
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        )}
      </span>
    </>
  )

  const classNameMerged = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  )

  if (as === "a" && href) {
    return (
      <a href={href} className={cn(classNameMerged, "no-underline")}>
        {content}
      </a>
    )
  }

  return (
    <button className={classNameMerged} {...props}>
      {content}
    </button>
  )
}
