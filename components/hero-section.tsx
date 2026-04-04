import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative px-6 py-24 lg:px-12 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for opportunities
        </div>

        <p className="text-primary font-medium mb-4 text-lg">Hello, I'm</p>
        <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance tracking-tight">
          Ahmed Nule
        </h1>
        <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium mb-6">
          Full-Stack Developer & Designer
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
          I build accessible, pixel-perfect digital experiences for the web.
          My work lies at the intersection of design and development, creating
          experiences that not only look great but are meticulously built for
          performance and usability.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="/assets/files/ahmednule.pdf" download="Ahmed_Nule_CV.pdf">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
