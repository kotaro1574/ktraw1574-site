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
            <h1 className="text-4xl font-bold">ABOUT</h1>
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
          </section>
          <section className="grid gap-4">
            <h1 className="text-4xl font-bold">WORK</h1>
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
            <h1 className="text-4xl font-bold">SKATEBOARD</h1>
            <YouTubeEmbed videoid="RsYLsAX1Ixw" />
          </section>
        </div>
      </div>
    </div>
  )
}
