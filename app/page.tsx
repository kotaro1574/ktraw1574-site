import { About } from "@/components/about"
import { LinksNav } from "@/components/links-nav"
import { Skateboard } from "@/components/skateboard"
import { Work } from "@/components/work"

export default function IndexPage() {
  return (
    <div className="relative bg-background">
      {/* Decorative background elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-start))]/10 to-transparent blur-3xl" />
        <div className="absolute -right-40 top-2/3 h-96 w-96 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-end))]/10 to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-mid))]/5 to-transparent blur-3xl" />
      </div>

      {/* Dot pattern overlay */}
      <div className="dot-pattern pointer-events-none fixed inset-0 opacity-30" />

      {/* Main content */}
      <div className="relative">
        <div className="container max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-24">
            <About />
            <Work />
            <Skateboard />
            <LinksNav />

            {/* Footer */}
            <footer className="pb-8 pt-4 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="gradient-text font-medium">
                  {`© ${new Date().getFullYear()} ktraw1574`}
                </span>
                <span className="mx-2 text-border">|</span>
                <span>Made with passion</span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
