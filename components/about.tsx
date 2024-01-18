import Image from "next/image"

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
            src="/about-me-light.jpg"
            className="object-cover dark:hidden"
            width={250}
            height={250}
          />
          <Image
            alt="me"
            src="/about-me-dark.jpg"
            className="hidden object-cover dark:inline"
            width={250}
            height={250}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Kotaro Sugita</div>
            <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
              <div
                className={`${buttonVariants({
                  variant: "ghost",
                })} hidden sm:inline-flex`}
              >
                <Icons.mail className="h-4 w-4" />
                <span className="ml-2 hidden sm:inline-block">
                  Send me a note
                </span>
              </div>
              <div
                className={`${buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })} sm:hidden`}
              >
                <Icons.mail className="h-5 w-5" />
                <span className="sr-only">Mail</span>
              </div>
            </a>
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
