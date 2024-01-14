"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Separator } from "@/components/ui/separator"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

export function LinksNav() {
  return (
    <div>
      <Separator className="mb-6" />
      <div className="flex items-center justify-center space-x-1">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
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
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
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
          href={siteConfig.links.instagram}
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
        <Link href={siteConfig.links.tiktok} target="_blank" rel="noreferrer">
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
        <Link href={siteConfig.links.youtube} target="_blank" rel="noreferrer">
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
      <Separator className="mt-6" />
    </div>
  )
}
