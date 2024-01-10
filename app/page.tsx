"use client"

import Image from "next/image"
import { YouTubeEmbed } from "@next/third-parties/google"

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

export default function IndexPage() {
  return (
    <div className="bg-background">
      <div className="container grid items-center px-4 py-6">
        <div className="grid gap-12">
          <section className="grid gap-4">
            <h1 className="text-4xl font-bold text-white">ABOUT</h1>
            <div className="flex justify-start gap-4">
              <div className="w-[200px]">
                <Image
                  alt="me"
                  src="/about-me.jpg"
                  className="object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <div className="">
                Thank you from the bottom of my heart for visiting my microcosm
                of a star-studded website.
              </div>
            </div>
            {/* <div className="flex max-w-[980px] flex-col items-start gap-2">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                Beautifully designed components{" "}
                <br className="hidden sm:inline" />
                built with Radix UI and Tailwind CSS.
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground">
                Accessible and customizable components that you can copy and
                paste into your apps. Free. Open Source. And Next.js 13 Ready.
              </p>
            </div> */}
          </section>
          <section className="grid gap-4">
            <h1 className="text-4xl font-bold text-white">WORK</h1>
            <div className="flex gap-4">
              <Card className="max-w-[300px] rounded-none">
                <CardContent className="p-4">
                  <Image
                    alt="me"
                    src="/commit-timer.jpg"
                    className="border object-cover"
                    width={300}
                    height={200}
                  />
                  <CardTitle className="mt-4">Commit Timer</CardTitle>
                  <CardDescription className="mt-4">
                    This application measures the commit time with a timer and
                    displays it in a graph.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="grid gap-4">
            <h1 className="text-4xl font-bold text-white">SKATEBOARD</h1>
            <YouTubeEmbed videoid="RsYLsAX1Ixw" />
          </section>
        </div>
      </div>
    </div>
  )
}
