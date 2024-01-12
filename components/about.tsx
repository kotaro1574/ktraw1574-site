import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

export function About() {
  return (
    <section className="grid gap-4">
      <h1 className="text-4xl font-bold">ABOUT</h1>
      <div className="grid justify-start gap-4 sm:flex">
        <div className="w-[200px] shrink-0 md:w-[250px]">
          <Image
            alt="me"
            src="/about-me.jpg"
            className="object-cover"
            width={250}
            height={250}
          />
        </div>
        <div>
          <div className="grid items-center justify-between gap-4 md:flex">
            <div className="text-2xl font-bold">Kotaro Sugita</div>
            <div className="flex items-center space-x-1">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.gitHub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.tiktok className="h-5 w-5" />
                  <span className="sr-only">TikTok</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.youtube className="h-5 w-5" />
                  <span className="sr-only">Youtube</span>
                </div>
              </Link>
            </div>
          </div>
          <p className="mt-2 text-muted-foreground">
            I am a web application front-end developer who loves skateboarding
            and the web. I am currently living in Vancouver, Canada with my wife
            on a working holiday visa. Here I am skateboarding and developing
            web applications. I like to commit.
            <br />
            I started as a front-end developer in 2019. Back then, I was honing
            my skateboarding skills every day. However, I realized that I needed
            physical rest in honing my skateboarding skills. Always wanting to
            be committed to something, I was inspired by my brother to start
            programming, which I am doing now.
            <br />I will continue to be passionate about skateboarding and the
            web.
          </p>
        </div>
      </div>
    </section>
  )
}
