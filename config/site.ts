export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ktraw1574-site",
  description:
    "スケートボードとWebが好きなフロントエンドエンジニアの個人サイトです。",
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
      description: "マップ上でスポット共有やTODOを管理できるアプリです。",
      href: "https://sk8-map-todo.vercel.app/",
      image: "/sk8-map-todo.jpg",
      repositoryUrl: "https://github.com/kotaro1574/sk8-map-todo",
    },
    {
      title: "Commit Timer",
      description:
        "タイマーでコミット時間を計測し、グラフで表示するアプリケーションです。",
      href: "https://commit-timer-kt.vercel.app/",
      image: "/commit-timer.jpg",
      repositoryUrl: "https://github.com/kotaro1574/commit-timer",
    },
    {
      title: "重内治療院 ウェブサイト",
      description:
        "友人が広島で運営している鋼灸院です。興味があればぜひ見てみてください！",
      href: "https://www.shigeuchi.com/",
      image: "/shigeuchi.jpg",
      repositoryUrl: "https://github.com/kotaro1574/shinkyu-site",
    },
  ],
}
