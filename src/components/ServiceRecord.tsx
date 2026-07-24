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
    <section id="service" className="border-t border-line px-5 py-16 sm:px-12 sm:py-20">
      <header className="mb-8 sm:mb-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-parchment-dim sm:text-[11px]">
          Field assignments
        </span>
        <h2 className="mt-1.5 font-display text-2xl text-parchment sm:mt-2 sm:text-4xl">
          Service record
        </h2>
      </header>

      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line sm:left-[19px]" />

        <div className="flex flex-col gap-8 sm:gap-10">
          {EXPERIENCE_DATA.map((exp, i) => (
            <div key={i} className="relative pl-10 sm:pl-12">
              <div className="absolute left-0 top-1.5 flex items-center justify-center w-8 h-8 rounded-full border border-line bg-soil-raised overflow-hidden sm:w-10 sm:h-10">
                <img
                  src={exp.companyLogo}
                  alt={exp.company}
                  className="h-4 w-4 object-contain sm:h-5 sm:w-5"
                />
              </div>

              <div className="rounded-sm border border-line bg-soil-raised/40 p-4 transition-colors hover:border-line-strong sm:p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg text-parchment sm:text-xl">
                    {exp.title}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-parchment-dim sm:text-[10px]">
                    {exp.type}
                  </span>
                </div>
                <div className="mt-1.5 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-2">
                  <span className="font-display text-[12px] text-crop sm:text-[13px]">
                    {exp.company}
                  </span>
                  <span className="font-mono text-[10px] text-parchment-dim sm:text-[11px]">
                    {formatPeriod(exp.startDate, exp.endDate)}
                  </span>
                </div>
                <p className="mt-3 font-body text-[14px] leading-relaxed text-parchment/85 sm:text-[15px] sm:max-w-[60ch]">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 ml-10 border-l-2 border-crop/30 pl-4 sm:mt-10 sm:ml-12 sm:pl-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-crop-dim sm:text-[11px]">
          Station note
        </p>
        <p className="mt-2 font-body text-[14px] leading-relaxed text-parchment-dim sm:text-[15px] sm:max-w-[56ch]">
          Each assignment brought different constraints &mdash; residential
          operations, hardware installation, or full-stack product work. The
          common thread: building reliable systems where people depend on them.
        </p>
      </div>
    </section>
  );
}
