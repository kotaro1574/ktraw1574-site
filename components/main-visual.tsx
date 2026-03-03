"use client"

import GraphemeSplitter from "grapheme-splitter"
import { ChevronDown } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export function MainVisual() {
  const splitter = new GraphemeSplitter()

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-[url('/top-image-light.png')] bg-cover bg-center bg-no-repeat dark:bg-[url('/top-image-dark.png')]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Animated gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--gradient-start))]/10 via-transparent to-[hsl(var(--gradient-end))]/10 opacity-60" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Decorative elements */}
        <div className="absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-start))]/20 to-[hsl(var(--gradient-end))]/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-mid))]/20 to-[hsl(var(--gradient-start))]/20 blur-3xl" />

        {/* Main text */}
        <div className="relative z-10 text-center">
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/60">
            Welcome to
          </div>
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="inline-block animate-fade-up bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              KTRAW
            </span>
            <span className="ml-2 inline-block animate-fade-up bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] bg-clip-text text-transparent [animation-delay:200ms]">
              1574
            </span>
          </h1>
          <div className="mx-auto h-[60px] max-w-2xl text-xl font-medium text-white/90 sm:text-2xl md:text-3xl">
            <TypeAnimation
              splitter={(str) => splitter.splitGraphemes(str)}
              sequence={[
                "Skateboarder from Japan",
                2000,
                "Frontend Developer",
                2000,
                "Living in Vancouver",
                2000,
                "Passionate about Web & Skate",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-glow"
            />
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-32 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent" />

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 transition-all hover:translate-y-1"
          aria-label="Scroll to content"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-white/50">
            Scroll
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce text-white/50" />
        </button>
      </div>

      {/* Side decorations */}
      <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-2 w-2 rounded-full bg-white/20 transition-all hover:bg-primary hover:scale-150"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-2 w-2 rounded-full bg-white/20 transition-all hover:bg-primary hover:scale-150"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    </div>
  )
}
