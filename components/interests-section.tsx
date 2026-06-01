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
    <section className="relative overflow-hidden px-6 py-20 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-300/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="mb-2 text-2xl font-bold text-foreground lg:text-3xl">Personal Interests</h2>
        <p className="mb-10 text-muted-foreground">Beyond the code editor</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {interests.map((interest) => (
            <div
              key={interest.name}
              className="group rounded-lg border border-white/10 bg-card/85 p-5 text-center shadow-2xl shadow-slate-950/10 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/35"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-cyan-300/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-300/15">
                <interest.icon className="h-5 w-5 text-cyan-200" />
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
