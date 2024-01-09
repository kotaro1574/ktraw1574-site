import Image from "next/image"

export default function IndexPage() {
  return (
    <main>
      <div className="relative h-screen w-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/top-image-light.png")',
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <section className="grid gap-4">
            <h1 className="text-4xl font-bold text-white">ABOUT</h1>
            <div className="flex gap-4">
              <div className="w-[200px]">
                <Image
                  alt="me"
                  src="/about-me.jpg"
                  className="object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <div>texttexttexttexttexttexttexttexttexttexttexttex</div>
            </div>
          </section>
          <section className="grid gap-4">
            <h1 className="text-4xl font-bold text-white">WORK</h1>
            <div className="flex gap-4">
              <div className="w-[200px]">
                <Image
                  alt="me"
                  src="/about-me.jpg"
                  className="object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <div>texttexttexttexttexttexttexttexttexttexttexttex</div>
            </div>
          </section>
          <section className="grid gap-4">
            <h1 className="text-4xl font-bold text-white">SKATEBOARD</h1>
            <div className="flex gap-4">
              <div className="w-[200px]">
                <Image
                  alt="me"
                  src="/about-me.jpg"
                  className="object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <div>texttexttexttexttexttexttexttexttexttexttexttex</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
