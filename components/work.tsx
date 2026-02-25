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
            className="w-[300px] flex-col justify-between rounded-none"
          >
            <Link
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
              <CardContent className="p-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden border">
                  {work.image ? (
                    <Image
                      alt={work.title}
                      src={work.image}
                      className="object-cover"
                      fill
                      sizes="300px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-muted" />
                  )}
                </div>
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
