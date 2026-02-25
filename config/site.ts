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
      title: "メディネオ",
      description:
        "医療機関向けのWebアプリケーションです。顔認証ログインなどの機能を搭載しています。",
      href: "https://medi-neo.com/",
      image: "/medi-neo.png",
      repositoryUrl: "",
    },
    {
      title: "Ktraw Skate Map",
      description:
        "YouTubeチャンネルで紹介しているスケボースポットをマップで探せるサイトです。",
      href: "https://ktraw-skate-map.com/",
      image: "/ktraw-skate-map.png",
      repositoryUrl: "",
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
