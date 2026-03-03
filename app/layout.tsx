import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { MainVisual } from "@/components/main-visual"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const gaId = process.env.GAID ?? ""

  return (
    <html lang="ja" suppressHydrationWarning className="overflow-x-hidden">
      <head />
      <body
        className={cn(
          "min-h-screen overflow-x-hidden bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen">
            <MainVisual />

            {/* Theme toggle */}
            <div className="fixed right-4 top-4 z-50">
              <ThemeToggle />
            </div>

            {/* Navigation hint */}
            <div className="pointer-events-none fixed left-4 top-4 z-50 hidden items-center gap-2 md:flex">
              <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                ktraw1574
              </span>
            </div>

            {children}
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  )
}
