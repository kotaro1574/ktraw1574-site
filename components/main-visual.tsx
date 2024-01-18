"use client"

import GraphemeSplitter from "grapheme-splitter"
import { TypeAnimation } from "react-type-animation"

export function MainVisual() {
  const splitter = new GraphemeSplitter()
  return (
    <div className="relative h-screen w-screen">
      <div className="fixed -z-10 h-screen w-screen bg-[url('/top-image-light.png')] bg-cover bg-center bg-no-repeat dark:bg-[url('/top-image-dark.png')]" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold sm:text-3xl md:text-4xl">
        <TypeAnimation
          splitter={(str) => splitter.splitGraphemes(str)}
          sequence={[
            "Welcome to my site 🫶",
            1500,
            "I am a skateboarder 🛹",
            2500,
            "I am a skateboarder 🛹 and",
            1000,
            "I am a Web Developer 💻",
          ]}
          wrapper="span"
          speed={10}
          style={{
            display: "inline-block",
            color: "white",
          }}
        />
      </div>
    </div>
  )
}
