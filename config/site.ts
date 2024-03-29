export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ktraw1574-site",
  description:
    "This is a website that introduces me and my works. I'm a web developer based in Vancouver.",
  links: {
    twitter: "https://twitter.com/ktraw1574",
    github: "https://github.com/kotaro1574",
    instagram: "https://www.instagram.com/ktraw1574/",
    tiktok: "https://www.tiktok.com/@ktraw1574",
    youtube: "https://www.youtube.com/channel/UCmPlXPBInWF3Kf1qRGtcnSQ",
  },
  works: [
    {
      title: "🛹 sk8 map todo",
      description: "This is an app to manage spot sharing and todo on map.",
      href: "https://sk8-map-todo.vercel.app/",
      image: "/sk8-map-todo.jpg",
      repositoryUrl: "https://github.com/kotaro1574/sk8-map-todo",
    },
    {
      title: "Commit Timer",
      description:
        "This application measures the commit time with a timer and displays it in a graph.",
      href: "https://commit-timer-kt.vercel.app/",
      image: "/commit-timer.jpg",
      repositoryUrl: "https://github.com/kotaro1574/commit-timer",
    },
    {
      title: "Shigeuchi Therapy Clinic Website",
      description: `My friend runs an acupuncture clinic in Hiroshima. You should check it out if you're interested!`,
      href: "https://www.shigeuchi.com/",
      image: "/shigeuchi.jpg",
      repositoryUrl: "https://github.com/kotaro1574/shinkyu-site",
    },
  ],
}
