import { YouTubeEmbed } from "@next/third-parties/google"

export function Skateboard() {
  return (
    <section className="grid gap-4">
      <h1 className="text-4xl font-bold">SKATEBOARD</h1>
      <YouTubeEmbed videoid="RsYLsAX1Ixw" />
    </section>
  )
}
