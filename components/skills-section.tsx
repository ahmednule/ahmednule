const skills = [
  { name: "Frontend Development", level: 95 },
  { name: "Backend Development", level: 90 },
  { name: "Database Design", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "DevOps & Deployment", level: 75 },
  { name: "Mobile Development", level: 70 },
]

export function SkillsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
