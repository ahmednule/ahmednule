import experiences from "@/lib/experiences"

export function ExperienceSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <span className="text-purple-400 font-medium">{exp.period}</span>
              </div>
              <p className="text-purple-300 font-medium mb-3">{exp.company}</p>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
