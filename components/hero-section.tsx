import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-primary font-medium mb-4">Hello, I'm</p>
        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
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
        </div>
      </div>
    </section>
  )
}
