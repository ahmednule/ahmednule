export function ContactHeader() {
  return (
    <section className="relative px-6 py-24 lg:px-12 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl">
        <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">Get in Touch</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {"Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below or reach out through any of my social channels."}
        </p>
      </div>
    </section>
  )
}
