import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

export function Work() {
  return (
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
        <Card className="max-w-[300px] rounded-none">
          <CardContent className="p-4">
            <Image
              alt="me"
              src="/shigeuchi.jpg"
              className="border object-cover"
              width={300}
              height={200}
            />
            <CardTitle className="mt-4">
              Shigeuchi Therapy Clinic Website
            </CardTitle>
            <CardDescription className="mt-4">
              {`My friend runs an acupuncture clinic in Hiroshima. You should check it out if you're interested!`}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
