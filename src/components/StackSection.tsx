import { MASTERY_DATA } from "@/data/mastery";
import { FRONT_END_TECHS } from "@/data/frontend";
import { BACKEND_TECHS } from "@/data/backend";
import Contours from "@/components/Contours";

export default function StackSection() {
  return (
    <section id="stack" className="relative overflow-hidden border-t border-line px-5 py-16 sm:px-12 sm:py-20">
      <Contours
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        lineCount={5}
      />
      <div className="relative">
        <header className="mb-8 sm:mb-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-parchment-dim sm:text-[11px]">
            Engineering stack
          </span>
          <h2 className="mt-1.5 font-display text-2xl text-parchment sm:mt-2 sm:text-4xl">
            Tools, arranged by what they do
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-3">
          {MASTERY_DATA.map((area) => {
            const techs =
              area.title === "Front End"
                ? FRONT_END_TECHS
                : area.title === "Back End"
                ? BACKEND_TECHS
                : [];

            return (
              <div
                key={area.title}
                className="group relative rounded-sm border border-line bg-soil-raised/60 p-5 transition-colors hover:border-line-strong sm:p-6"
              >
                <div
                  className="absolute inset-0 rounded-sm opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
                  style={{
                    backgroundImage: `url(${area.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative">
                  <h3 className="font-display text-2xl text-parchment">{area.title}</h3>
                  <p className="mt-2 font-body text-[14px] leading-relaxed text-parchment-dim">
                    {area.description}
                  </p>
                  {techs.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {techs.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 rounded-sm border border-line bg-soil px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-parchment-dim transition-colors hover:border-crop/40 hover:text-crop"
                        >
                          <img
                            src={tech.src}
                            alt={tech.name}
                            className="h-3.5 w-3.5 shrink-0 object-contain"
                          />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  )}
                  {area.title === "UI/UX" && (
                    <div className="mt-6 border-t border-line pt-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-crop">
                        Design toolkit
                      </span>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["Figma", "Wireframing", "Prototyping", "User Research"].map(
                          (tool) => (
                            <span
                              key={tool}
                              className="inline-flex items-center rounded-sm border border-line bg-soil px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-parchment-dim"
                            >
                              {tool}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-parchment-dim">
            Systems &amp; infrastructure
          </span>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Docker",
              "WSL",
              "Azure Functions",
              "Render",
              "Vercel",
              "Neo4j AuraDB",
              "PostgreSQL",
            ].map((item) => (
              <span
                key={item}
                className="rounded-sm border border-line-strong bg-soil-raised-2/60 px-3 py-1.5 font-mono text-[11px] text-parchment/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
