"use client"

import GraphemeSplitter from "grapheme-splitter"
import { useTheme } from "next-themes"
import { TypeAnimation } from "react-type-animation"

import { ThemeToggle } from "@/components/theme-toggle"

export function MainVisual() {
  const { theme } = useTheme()
  const splitter = new GraphemeSplitter()
  return (
    <div className="relative h-screen w-screen">
      <div
        className="fixed -z-10 h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${
            theme === "light" ? "/top-image-light.png" : "/top-image-dark.png"
          })`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute ">
        <ThemeToggle />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <TypeAnimation
          splitter={(str) => splitter.splitGraphemes(str)}
          sequence={[
            "Welcome to my site 🫶",
            1500,
            "I am a skateboarder 🛹",
            2500,
            "I am a skateboarder and",
            1000,
            "I am a Web Developer 💻",
          ]}
          wrapper="span"
          speed={10}
          style={{
            fontSize: "2em",
            fontWeight: "bold",
            display: "inline-block",
          }}
        />
      </div>
    </div>
  )
}
