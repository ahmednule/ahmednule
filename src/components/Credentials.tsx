import { CERTIFICATIONS_DATA } from "@/data/certifications";
import Contours from "@/components/Contours";

export default function Credentials() {
  return (
    <section id="creds" className="relative overflow-hidden border-t border-line px-6 py-20 sm:px-12">
      <Contours className="pointer-events-none absolute inset-0 h-full w-full opacity-20" lineCount={4} />
      <div className="relative">
        <header className="mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-parchment-dim">
            Station credentials
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl text-parchment">
            Education &amp; certifications
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS_DATA.map((cert, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-sm border border-line bg-soil-raised/40 p-5 transition-colors hover:border-line-strong"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-soil overflow-hidden">
                  <img
                    src={cert.logo}
                    alt={cert.organization}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-[15px] text-parchment truncate">
                    {cert.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-crop">
                    {cert.organization}
                  </span>
                </div>
              </div>

              <p className="mt-3 flex-1 font-body text-[13px] leading-relaxed text-parchment/80">
                {cert.description}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-parchment-dim">
                  {cert.year}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-crop-dim opacity-0 group-hover:opacity-100 transition-opacity">
                  Credential on file
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
