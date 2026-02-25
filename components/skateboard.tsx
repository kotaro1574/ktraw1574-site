import { YouTubeEmbed } from "@next/third-parties/google"

export function Skateboard() {
  return (
    <section className="grid gap-4">
      <h1 className="text-4xl font-bold">SKATEBOARD</h1>
      <YouTubeEmbed videoid="7xQRXJhlDos" />
      <YouTubeEmbed videoid="k4RFgn9Or9Y" />
      <YouTubeEmbed videoid="RsYLsAX1Ixw" />
    </section>
  )
}
