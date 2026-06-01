export function ProjectsHeader() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-12 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-5 inline-flex items-center rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-sm font-medium text-emerald-100">
          Product modules
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-normal text-foreground lg:text-6xl">
          Projects
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
          A collection of software systems I have worked on, from full-stack web platforms to data-heavy tools and IoT-ready product ideas. Each project is framed by the problem it solves and the engineering decisions behind it.
        </p>
      </div>
    </section>
  )
}
