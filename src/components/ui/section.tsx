import * as React from "react"
import { cn } from "@/lib/cn"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  container?: boolean
  containerSize?: "main" | "small"
}

export function Section({
  children,
  className,
  id,
  container = true,
  containerSize = "main",
}: SectionProps) {
  return (
    <section id={id} className={cn("relative", className)}>
      {container ? (
        <div className={cn(
          "section-gap",
          containerSize === "main" ? "container-main" : "container-main"
        )}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  align?: "center" | "left"
  as?: "h1" | "h2" | "h3"
  titleClassName?: string
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className,
  align = "center",
  as = "h2",
  titleClassName,
}: SectionHeaderProps) {
  const Heading = as

  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <span className="subtitle-text inline-block mb-4 md:mb-6">
          {subtitle}
        </span>
      )}
      <Heading
        className={cn(
          "heading-2 text-deep",
          align === "center" ? "max-w-2xl mx-auto" : "max-w-[40rem]",
          titleClassName
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn(
          "mt-4 md:mt-5 body-large text-text-body",
          align === "center" ? "max-w-[25rem] mx-auto" : "max-w-[25rem]"
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
