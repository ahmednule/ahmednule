import Image from "next/image"

export function AboutHero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Me</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-8" />

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm Ahmed Nule, a passionate Software Engineer with over 3 years of experience in building modern web
                applications and AI-powered solutions. I specialize in full-stack development with a focus on creating
                scalable, user-friendly applications.
              </p>

              <p>
                My journey in software development started with a curiosity about how things work behind the scenes.
                This curiosity has driven me to continuously learn and adapt to new technologies, always staying at the
                forefront of web development trends.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community through blog posts and tutorials.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <Image src="/professional-developer-portrait.png" alt="Ahmed Nule" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
