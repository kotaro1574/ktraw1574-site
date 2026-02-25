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
                  メールを送る
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
            スケートボードとWebが好きなフロントエンドエンジニアです。現在はワーキングホリデービザで妻と一緒にカナダ・バンクーバーに住んでいます。ここでスケートボードをしながらWebアプリケーションの開発をしています。コミットすることが好きです。
            <br />
            2019年にフロントエンドエンジニアとしてキャリアをスタートしました。当時は毎日スケートボードの技術を磨いていましたが、スケートボードの上達には体の休息が必要だと気づきました。常に何かに打ち込んでいたい性格で、兄の影響を受けてプログラミングを始め、今に至ります。
            <br />
            これからもスケートボードとWebに情熱を注ぎ続けます。
          </p>
        </div>
      </div>
    </section>
  )
}
