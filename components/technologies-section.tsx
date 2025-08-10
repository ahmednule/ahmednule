import { Section } from "@/components/section"
import { SectionHeader } from "@/components/section-header"
import { TechIcon } from "@/components/tech-icon"

const coreStack = [
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind", icon: "💨" },
  { name: "Prisma", icon: "◇" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Vercel", icon: "▲" },
  { name: "Docker", icon: "🐳" },
  { name: "AI/ML", icon: "🧠" },
  { name: "GraphQL", icon: "📊" },
  { name: "Stripe", icon: "💳" },
]

export function TechnologiesSection() {
  return (
    <Section>
      <SectionHeader
        title="Technologies & Tools"
        subtitle="My dependable toolbox for building robust, beautiful experiences"
      />
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {coreStack.map((t) => (
          <TechIcon key={t.name} name={t.name} icon={t.icon} />
        ))}
      </div>
    </Section>
  )
}
