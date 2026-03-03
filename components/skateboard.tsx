"use client"

import { YouTubeEmbed } from "@next/third-parties/google"

import { ScrollReveal } from "./scroll-reveal"
import { SectionTitle } from "./section-title"

const videos = [
  { id: "7xQRXJhlDos", title: "Skate Video 1" },
  { id: "k4RFgn9Or9Y", title: "Skate Video 2" },
  { id: "RsYLsAX1Ixw", title: "Skate Video 3" },
]

export function Skateboard() {
  return (
    <section className="relative py-8">
      <ScrollReveal>
        <SectionTitle subtitle="My Passion">SKATEBOARD</SectionTitle>
      </ScrollReveal>

      {/* Intro text */}
      <ScrollReveal delay={100}>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          スケートボードは私の人生の一部です。15年以上続けてきたスケートボードの映像をぜひご覧ください。
        </p>
      </ScrollReveal>

      {/* Video grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <ScrollReveal key={video.id} delay={i * 100 + 200}>
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              {/* Video container */}
              <div className="relative aspect-video overflow-hidden">
                <YouTubeEmbed
                  videoid={video.id}
                  style="border-radius: 0; width: 100%; height: 100%;"
                />

                {/* Decorative overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-white/10" />
              </div>

              {/* Bottom gradient accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
    </section>
  )
}
