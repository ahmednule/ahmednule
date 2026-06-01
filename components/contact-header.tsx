export function ContactHeader() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-12 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-300/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-5 inline-flex items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-100">
          Start a build
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-normal text-foreground lg:text-6xl">
          Get in Touch
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
          Have a web platform, IoT workflow, dashboard, or product idea in mind? Send the brief and I will help shape the next practical step.
        </p>
      </div>
    </section>
  )
}
