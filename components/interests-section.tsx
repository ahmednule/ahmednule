import { Camera, Code, Headphones, Mountain, BookOpen, Gamepad2 } from "lucide-react"

const interests = [
  { name: "Photography", icon: Camera, description: "Capturing moments and landscapes" },
  { name: "Open Source", icon: Code, description: "Contributing to community projects" },
  { name: "Music", icon: Headphones, description: "Discovering new artists and genres" },
  { name: "Hiking", icon: Mountain, description: "Exploring nature trails and peaks" },
  { name: "Reading", icon: BookOpen, description: "Tech books and science fiction" },
  { name: "Gaming", icon: Gamepad2, description: "Strategy and indie games" },
]

export function InterestsSection() {
  return (
    <section className="relative px-6 py-24 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <div className="relative">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Personal Interests</h2>
        <p className="text-muted-foreground mb-10">Beyond the code editor</p>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {interests.map((interest) => (
            <div
              key={interest.name}
              className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <interest.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{interest.name}</h3>
              <p className="text-xs text-muted-foreground mt-1.5">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
