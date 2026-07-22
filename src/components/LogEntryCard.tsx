import { LogEntry, categoryColor, categoryLabel } from "@/data/projects";

export default function LogEntryCard({ entry }: { entry: LogEntry }) {
  const color = categoryColor[entry.category];

  return (
    <article
      className="group relative border-t border-line py-8 pl-6 transition-colors first:border-t-0 sm:pl-8"
      style={{ borderLeft: `2px solid ${color}` }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="font-display text-2xl sm:text-[28px] text-parchment">
          {entry.name}
        </h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-parchment-dim">
          {entry.period}
        </span>
      </div>

      <p className="mt-1 font-body italic text-parchment-dim text-[15px]">
        {entry.tagline}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.16em] px-2 py-1 rounded-sm"
          style={{ color, border: `1px solid ${color}` }}
        >
          {entry.status}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-parchment-dim">
          {categoryLabel[entry.category]}
        </span>
      </div>

      <p className="mt-4 max-w-[62ch] font-body text-[16px] leading-relaxed text-parchment/90">
        {entry.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-parchment-dim">
        {entry.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>

      {entry.link && (
        <a
          href={entry.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-crop hover:underline"
        >
          View deployed system {"\u2192"}
        </a>
      )}
    </article>
  );
}
