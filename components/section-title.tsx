"use client"

import { cn } from "@/lib/utils"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  subtitle?: string
}

export function SectionTitle({
  children,
  className,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-8 space-y-2", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="gradient-text">{children}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-sm uppercase tracking-widest">
          {subtitle}
        </p>
      )}
      <div className="flex items-center gap-4 pt-2">
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-mid))]" />
        <div className="h-1 w-4 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))]" />
      </div>
    </div>
  )
}
