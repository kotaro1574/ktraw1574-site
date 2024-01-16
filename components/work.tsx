import Image from "next/image"

import { siteConfig } from "@/config/site"
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
      <div className="flex flex-wrap gap-4">
        {siteConfig.works.map((work) => (
          <Card className="max-w-[300px] rounded-none">
            <CardContent className="p-4">
              <Image
                alt="me"
                src={work.image}
                className="border object-cover"
                width={300}
                height={200}
              />
              <CardTitle className="mt-4">{work.title}</CardTitle>
              <CardDescription className="mt-4">
                {work.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
