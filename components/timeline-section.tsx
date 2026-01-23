import { Briefcase, GraduationCap } from "lucide-react"

const timeline = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    organization: "Tech Innovations Inc.",
    period: "2022 — Present",
    description: "Lead development of customer-facing web applications, mentor junior developers, and architect scalable solutions.",
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    organization: "Digital Agency Co.",
    period: "2019 — 2022",
    description: "Built and maintained multiple client projects, implemented CI/CD pipelines, and improved team development workflows.",
  },
  {
    type: "education",
    title: "BSc Computer Science",
    organization: "State University",
    period: "2015 — 2019",
    description: "Graduated with honors. Focused on software engineering, algorithms, and human-computer interaction.",
  },
  {
    type: "work",
    title: "Frontend Developer Intern",
    organization: "StartUp Labs",
    period: "2018 — 2019",
    description: "Developed responsive user interfaces and collaborated with design teams on product features.",
  },
]

export function TimelineSection() {
  return (
    <section className="px-6 py-16 lg:px-12">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Experience & Education</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border lg:left-1/2 lg:-translate-x-px" />
        
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={`${item.title}-${item.period}`}
              className={`relative flex flex-col lg:flex-row lg:items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center lg:left-1/2 lg:-translate-x-1/2 z-10">
                {item.type === "work" ? (
                  <Briefcase className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-primary-foreground" />
                )}
              </div>

              {/* Content */}
              <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <span className="text-sm text-primary font-medium">{item.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.organization}</p>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block lg:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
