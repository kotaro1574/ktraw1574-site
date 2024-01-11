import Image from "next/image"

export function About() {
  return (
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
          Thank you from the bottom of my heart for visiting my microcosm of a
          star-studded website.
        </div>
      </div>
    </section>
  )
}
