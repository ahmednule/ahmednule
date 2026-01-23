import { MapPin } from "lucide-react"

export function AboutHero() {
  return (
    <section className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">About Me</h1>
        <div className="flex items-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-4 h-4" />
          <span>Nairobi Kenya</span>
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            {"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}
          </p>
          <p>
            {"Currently, I'm a Full-Stack Developer specializing in building modern web applications. I contribute to the creation and maintenance of UI components that power various products, ensuring platforms meet web accessibility standards and best practices to deliver an inclusive user experience."}
          </p>
          <p>
            {"In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I enjoy contributing to open-source projects and sharing knowledge through technical writing and mentoring."}
          </p>
          <p>
            {"In my spare time, I'm usually exploring new technologies, reading about design systems, working on side projects, or enjoying outdoor activities like hiking and photography."}
          </p>
        </div>
      </div>
    </section>
  )
}
