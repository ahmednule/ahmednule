import { EXPERIENCE_DATA } from "@/data/experience";

function formatPeriod(start: Date, end?: Date) {
  const opts: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" };
  const s = start.toLocaleDateString("en-US", opts);
  if (!end) return `${s} \u2014 Present`;
  const e = end.toLocaleDateString("en-US", opts);
  return `${s} \u2014 ${e}`;
}

export default function ServiceRecord() {
  return (
    <section id="service" className="border-t border-line px-6 py-20 sm:px-12">
      <header className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-parchment-dim">
          Field assignments
        </span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl text-parchment">
          Service record
        </h2>
      </header>

      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line" />

        <div className="flex flex-col gap-10">
          {EXPERIENCE_DATA.map((exp, i) => (
            <div key={i} className="relative pl-12">
              <div className="absolute left-0 top-1.5 flex items-center justify-center w-10 h-10 rounded-full border border-line bg-soil-raised overflow-hidden">
                <img
                  src={exp.companyLogo}
                  alt={exp.company}
                  className="h-5 w-5 object-contain"
                />
              </div>

              <div className="rounded-sm border border-line bg-soil-raised/40 p-5 transition-colors hover:border-line-strong">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl text-parchment">
                    {exp.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-parchment-dim">
                    {exp.type}
                  </span>
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="font-display text-[13px] text-crop">
                    {exp.company}
                  </span>
                  <span className="font-mono text-[11px] text-parchment-dim">
                    {formatPeriod(exp.startDate, exp.endDate)}
                  </span>
                </div>
                <p className="mt-3 max-w-[60ch] font-body text-[15px] leading-relaxed text-parchment/85">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 ml-12 border-l-2 border-crop/30 pl-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-crop-dim">
          Station note
        </p>
        <p className="mt-2 font-body text-[15px] leading-relaxed text-parchment-dim max-w-[56ch]">
          Each assignment brought different constraints &mdash; residential
          operations, hardware installation, or full-stack product work. The
          common thread: building reliable systems where people depend on them.
        </p>
      </div>
    </section>
  );
}
