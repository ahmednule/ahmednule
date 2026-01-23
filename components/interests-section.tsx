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
    <section className="px-6 py-16 lg:px-12 bg-card/50">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Personal Interests</h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {interests.map((interest) => (
          <div
            key={interest.name}
            className="bg-card rounded-lg p-4 border border-border hover:border-primary/50 transition-colors text-center"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <interest.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium text-foreground text-sm">{interest.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
