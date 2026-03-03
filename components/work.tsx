"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { siteConfig } from "@/config/site"

import { ScrollReveal } from "./scroll-reveal"
import { SectionTitle } from "./section-title"

export function Work() {
  return (
    <section className="relative py-8">
      <ScrollReveal>
        <SectionTitle subtitle="Featured Projects">WORK</SectionTitle>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.works.map((work, i) => (
          <ScrollReveal key={`${work.title}-${i}`} delay={i * 100} className="h-full">
            <Link
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className="group block h-full"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                {/* Image container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {work.image ? (
                    <>
                      <Image
                        alt={work.title}
                        src={work.image}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </>
                  ) : (
                    <div className="flex h-full items-center justify-center bg-muted">
                      <span className="text-muted-foreground">No Image</span>
                    </div>
                  )}

                  {/* Arrow icon on hover */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col p-5">
                  {/* Decorative gradient line */}
                  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <h3 className="mb-2 text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
                    {work.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {work.description}
                  </p>

                  {/* View project link */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>View Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
