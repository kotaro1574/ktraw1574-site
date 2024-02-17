import Image from "next/image"
import Link from "next/link"

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
        {siteConfig.works.map((work, i) => (
          <Card
            key={`${work.title}-${i}`}
            className="flex max-w-[300px] flex-col justify-between rounded-none"
          >
            <Link
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
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
            </Link>
            {/* <CardFooter className="p-4 pt-0">
              <Link
                href={work.repositoryUrl}
                className={`${buttonVariants({ variant: "ghost" })} ml-auto`}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="ml-2">repository</span>
              </Link>
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  )
}
