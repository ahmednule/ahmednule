const NAV = [
  { href: "#log", label: "Log" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Reading({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-t border-line pt-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-parchment-dim">
        {label}
      </span>
      <span className="font-mono text-[13px] text-parchment">{value}</span>
    </div>
  );
}

export default function InstrumentRail() {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:justify-between fixed left-0 top-0 h-screen w-[240px] shrink-0 border-r border-line px-7 py-8 z-20">
      <div>
        <a href="#top" className="font-display text-lg tracking-tight block mb-10">
          Ahmed Nule
        </a>
        <nav className="flex flex-col gap-3 mb-12">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-parchment-dim hover:text-crop transition-colors w-fit"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-3">
          <Reading label="Station" value="Thika, KE" />
          <Reading label="Coordinates" value="01.03\u00b0S 37.07\u00b0E" />
          <Reading label="Role" value="Founder, Stable Stack" />
          <Reading label="Study" value="BSCCS \u00b7 MKU '26" />
          <Reading label="Systems logged" value="6 entries" />
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-line pt-4">
        <span className="status-dot" />
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-parchment-dim">
          Open to new builds
        </span>
      </div>
    </aside>
  );
}
