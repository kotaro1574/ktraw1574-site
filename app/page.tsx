import { About } from "@/components/about"
import { LinksNav } from "@/components/links-nav"
import { Skateboard } from "@/components/skateboard"
import { Work } from "@/components/work"

export default function IndexPage() {
  return (
    <div className="bg-background">
      <div className="container grid items-center gap-12 p-8">
        <About />
        <Work />
        <Skateboard />
        <LinksNav />
        <div className="text-center">
          <small className="text-muted-foreground">
            {`© ${new Date().getFullYear()} ktraw1574`}
          </small>
        </div>
      </div>
    </div>
  )
}
