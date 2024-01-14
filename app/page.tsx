import { About } from "@/components/about"
import { LinksNav } from "@/components/links-nav"
import { Skateboard } from "@/components/skateboard"
import { Work } from "@/components/work"

export default function IndexPage() {
  return (
    <div className="bg-background">
      <div className="container grid items-center gap-12 px-8 py-6">
        <About />
        <Work />
        <Skateboard />
        <LinksNav />
      </div>
    </div>
  )
}
