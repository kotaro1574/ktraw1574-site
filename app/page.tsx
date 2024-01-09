export default function IndexPage() {
  return (
    <section>
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
    </section>
  )
}
