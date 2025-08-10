interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
      {subtitle ? <p className="mt-6 text-white/70">{subtitle}</p> : null}
    </div>
  )
}
