"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { ScrollReveal } from "./scroll-reveal"

const socialLinks = [
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Icons.gitHub,
    color: "hover:text-[#333] dark:hover:text-white",
    bgColor: "hover:bg-[#333]/10 dark:hover:bg-white/10",
  },
  {
    name: "Twitter",
    href: siteConfig.links.twitter,
    icon: Icons.twitter,
    color: "hover:text-[#1DA1F2]",
    bgColor: "hover:bg-[#1DA1F2]/10",
  },
  {
    name: "Instagram",
    href: siteConfig.links.instagram,
    icon: Icons.instagram,
    color: "hover:text-[#E4405F]",
    bgColor: "hover:bg-[#E4405F]/10",
  },
  {
    name: "TikTok",
    href: siteConfig.links.tiktok,
    icon: Icons.tiktok,
    color: "hover:text-[#000000] dark:hover:text-white",
    bgColor: "hover:bg-black/10 dark:hover:bg-white/10",
  },
  {
    name: "YouTube",
    href: siteConfig.links.youtube,
    icon: Icons.youtube,
    color: "hover:text-[#FF0000]",
    bgColor: "hover:bg-[#FF0000]/10",
  },
]

export function LinksNav() {
  return (
    <section className="relative py-8">
      <ScrollReveal>
        {/* Section divider */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Connect
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group relative flex items-center gap-3 rounded-full border border-border/50 bg-card/50 px-5 py-3 backdrop-blur-sm transition-all duration-300",
                "hover:border-transparent hover:shadow-lg",
                link.bgColor
              )}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-[1px] rounded-full bg-background transition-colors group-hover:bg-card" />

              {/* Content */}
              <div className="relative flex items-center gap-3">
                <link.icon
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-colors",
                    link.color
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium text-muted-foreground transition-colors",
                    link.color
                  )}
                >
                  {link.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </ScrollReveal>
    </section>
  )
}
