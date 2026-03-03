"use client"

import Image from "next/image"
import { MapPin, Send } from "lucide-react"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { ScrollReveal } from "./scroll-reveal"
import { SectionTitle } from "./section-title"
import { buttonVariants } from "./ui/button"

export function About() {
  return (
    <section className="relative py-8">
      <ScrollReveal>
        <SectionTitle subtitle="Who I am">ABOUT</SectionTitle>
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-[350px_1fr] lg:gap-12">
        {/* Profile Image Card */}
        <ScrollReveal delay={100} direction="left">
          <div className="group relative">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] opacity-70 blur-sm transition-all group-hover:opacity-100 group-hover:blur-md" />

            <div className="relative overflow-hidden rounded-2xl bg-card">
              <div className="aspect-square w-full overflow-hidden">
                <Image
                  alt="Kotaro Sugita"
                  src="/about-me-light.jpg"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 dark:hidden"
                  width={350}
                  height={350}
                />
                <Image
                  alt="Kotaro Sugita"
                  src="/about-me-dark.jpg"
                  className="hidden h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 dark:block"
                  width={350}
                  height={350}
                />
              </div>

              {/* Overlay info */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16">
                <h3 className="text-2xl font-bold text-white">Kotaro Sugita</h3>
                <div className="mt-1 flex items-center gap-2 text-white/70">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Hiroshima, Japan</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Profile Content */}
        <ScrollReveal delay={200} direction="right">
          <div className="flex h-full flex-col justify-center space-y-6">
            {/* Title & Email */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  Frontend Developer & Skateboarder
                </p>
              </div>
              <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                <div
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group gap-2 rounded-full border-primary/50 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  )}
                >
                  <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span>Contact Me</span>
                </div>
              </a>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground">
              <p className="text-base leading-relaxed md:text-lg">
                スケートボードとWebが好きなフロントエンドエンジニアです。カナダでのワーキングホリデーを終え、現在は地元広島で合同会社VIBESHIROSHIMAを立ち上げ、アプリ制作をしながらスケボーライフを送っています。
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                2019年にフロントエンドエンジニアとしてキャリアをスタートしました。当時は毎日スケートボードの技術を磨いていましたが、スケートボードの上達には体の休息が必要だと気づきました。常に何かに打ち込んでいたい性格で、弟の影響を受けてプログラミングを始め、今に至ります。
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                これからもスケートボードとWebに情熱を注ぎ続けます。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="group rounded-xl border border-border/50 bg-card/50 p-4 text-center transition-all hover:border-primary/50 hover:bg-primary/5">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Years Coding
                </div>
              </div>
              <div className="group rounded-xl border border-border/50 bg-card/50 p-4 text-center transition-all hover:border-primary/50 hover:bg-primary/5">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Years Skating
                </div>
              </div>
              <div className="group rounded-xl border border-border/50 bg-card/50 p-4 text-center transition-all hover:border-primary/50 hover:bg-primary/5">
                <div className="flex justify-center text-3xl font-bold text-primary">
                  <Icons.japan className="h-8 w-8" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Based in
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
