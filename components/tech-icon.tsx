export function TechIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group relative">
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/40 hover:shadow-[0_8px_30px_-12px_rgba(168,85,247,0.35)]">
        <div className="mb-2 text-2xl">{icon}</div>
        <span className="text-xs text-white/70">{name}</span>
      </div>
    </div>
  )
}
