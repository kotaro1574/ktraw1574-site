import { About } from "@/components/about"
import { Skateboard } from "@/components/skateboard"
import { Work } from "@/components/work"

export default function IndexPage() {
  return (
    <div className="bg-background">
      <div className="container grid items-center px-8 py-6">
        <div className="grid gap-12">
          <About />
          <Work />
          <Skateboard />
        </div>
      </div>
    </div>
  )
}
