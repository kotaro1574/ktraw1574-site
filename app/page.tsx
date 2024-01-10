import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

export default function IndexPage() {
  return (
    <main>
      <div className="relative h-screen w-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/top-image-light.png")',
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4 py-6">
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
              <div className="">texttexttexttexttexttext</div>
            </div>
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
            <div className="flex gap-4">
              <div className="w-[200px]">
                <Image
                  alt="me"
                  src="/about-me.jpg"
                  className="object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <div>texttexttexttexttexttexttexttexttexttexttexttex</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
