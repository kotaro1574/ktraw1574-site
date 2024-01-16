export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/ktraw1574",
    github: "https://github.com/kotaro1574",
    instagram: "https://www.instagram.com/ktraw1574/",
    tiktok: "https://www.tiktok.com/@ktraw1574",
    youtube: "https://www.youtube.com/channel/UCmPlXPBInWF3Kf1qRGtcnSQ",
  },
  works: [
    {
      title: "Commit Timer",
      description:
        "This application measures the commit time with a timer and displays it in a graph.",
      href: "https://commit-timer-kt.vercel.app",
      image: "/commit-timer.png",
    },
    {
      title: "Shigeuchi Therapy Clinic Website",
      description: `My friend runs an acupuncture clinic in Hiroshima. You should check it out if you're interested!`,
      href: "https://www.shigeuchi.com/",
      image: "/shigeuchi.png",
    },
  ],
}
