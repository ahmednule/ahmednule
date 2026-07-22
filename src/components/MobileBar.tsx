const NAV = [
  { href: "#log", label: "Log" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function MobileBar() {
  return (
    <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between border-b border-line bg-soil/95 px-5 py-4 backdrop-blur">
      <a href="#top" className="font-display text-base tracking-tight">
        Ahmed Nule
      </a>
      <nav className="flex gap-4">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-parchment-dim"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
