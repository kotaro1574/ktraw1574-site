"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-10 w-10 animate-pulse rounded-full bg-muted" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center rounded-full",
        "border border-border/50 bg-background/80 backdrop-blur-md",
        "transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      )}
      aria-label="Toggle theme"
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[hsl(var(--gradient-start))]/20 to-[hsl(var(--gradient-end))]/20 opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Icons */}
      <Sun className="relative h-5 w-5 rotate-0 scale-100 text-foreground transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 text-foreground transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  )
}
