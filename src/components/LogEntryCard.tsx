import { LogEntry, categoryColor, categoryLabel } from "@/data/projects";

export default function LogEntryCard({ entry }: { entry: LogEntry }) {
  const color = categoryColor[entry.category];

  return (
    <article
      className="group relative border-t border-line py-6 pl-5 transition-colors first:border-t-0 sm:py-8 sm:pl-8"
      style={{ borderLeft: `2px solid ${color}` }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
        <h3 className="font-display text-xl text-parchment sm:text-[28px]">
          {entry.name}
        </h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-parchment-dim sm:text-[11px]">
          {entry.period}
        </span>
      </div>

      <p className="mt-1 font-body italic text-parchment-dim text-[14px] sm:text-[15px]">
        {entry.tagline}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4 sm:gap-3">
        <span
          className="font-mono text-[9px] uppercase tracking-[0.16em] px-2 py-1 rounded-sm sm:text-[10px]"
          style={{ color, border: `1px solid ${color}` }}
        >
          {entry.status}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-parchment-dim sm:text-[10px]">
          {categoryLabel[entry.category]}
        </span>
      </div>

      <p className="mt-3 font-body text-[14px] leading-relaxed text-parchment/90 sm:mt-4 sm:text-[16px] sm:max-w-[62ch]">
        {entry.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[10px] text-parchment-dim sm:mt-5 sm:gap-x-4 sm:gap-y-2 sm:text-[11px]">
        {entry.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>

      {entry.link && (
        <a
          href={entry.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-crop hover:underline sm:mt-5 sm:text-[11px]"
        >
          View deployed system {"\u2192"}
        </a>
      )}
    </article>
  );
}
