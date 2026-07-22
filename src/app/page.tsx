import InstrumentRail from "@/components/InstrumentRail";
import MobileBar from "@/components/MobileBar";
import Contours from "@/components/Contours";
import LogEntryCard from "@/components/LogEntryCard";
import { entries } from "@/data/projects";
import StackSection from "@/components/StackSection";
import ServiceRecord from "@/components/ServiceRecord";
import Credentials from "@/components/Credentials";

export default function Home() {
  return (
    <div id="top" className="grain">
      <MobileBar />
      <InstrumentRail />

      <main className="lg:pl-[240px]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-line px-6 pt-16 pb-20 sm:px-12 sm:pt-24 sm:pb-28">
          <Contours
            className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
          />
          <div className="relative max-w-[880px]">
            <div className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-parchment-dim">
              <span className="status-dot" />
              Field log &mdash; Thika, Kenya
            </div>
            <h1 className="font-display text-[13vw] leading-[1.02] tracking-tight text-parchment sm:text-[64px] lg:text-[76px]">
              Software that survives
              <br />
              contact with the field.
            </h1>
            <p className="mt-7 max-w-[56ch] font-body text-[18px] leading-relaxed text-parchment/85">
              I&rsquo;m Ahmed &mdash; a solo full-stack developer building
              connected systems for farms, water infrastructure, and small
              businesses across Kenya. From soldered sensors to production
              web apps, I take a build end to end and ship it somewhere real
              people depend on.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#log"
                className="inline-flex items-center gap-2 rounded-sm bg-crop px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-soil transition-opacity hover:opacity-90"
              >
                Read the log
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm border border-line-strong px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-parchment transition-colors hover:border-crop hover:text-crop"
              >
                Start a project
              </a>
            </div>
          </div>
        </section>

        {/* LOG / PROJECTS */}
        <section id="log" className="px-6 py-20 sm:px-12">
          <header className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-parchment-dim">
                Systems shipped
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-parchment">
                Field log
              </h2>
            </div>
            <span className="font-mono text-[11px] text-parchment-dim">
              {entries.length} entries
            </span>
          </header>
          <div>
            {entries.map((entry) => (
              <LogEntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>

        <StackSection />

        <ServiceRecord />

        {/* ABOUT */}
        <section
          id="about"
          className="border-t border-line px-6 py-20 sm:px-12"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-parchment-dim">
                About
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-parchment">
                Based in Thika,
                <br />
                building for Kenya.
              </h2>
            </div>
            <div className="flex flex-col gap-5 font-body text-[17px] leading-relaxed text-parchment/85">
              <p>
                I run Stable Stack Solutions, a small software practice out
                of Thika handling client web development and hosting, and
                I&rsquo;m a first-year Computer and Communication Sciences
                student at Mount Kenya University. Most of what I build sits
                at the edge of hardware and web software &mdash; IoT
                telemetry, water systems, and agricultural platforms with a
                real audience in the Kenyan and East African context.
              </p>
              <p>
                I work solo across freelance and competition projects, TypeScript-first,
                and I&rsquo;d rather hand over a working system than a slide
                deck. If a build calls for a sensor, a graph database, and a
                USSD flow in the same product, that&rsquo;s a normal Tuesday.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative overflow-hidden border-t border-line px-6 py-24 sm:px-12"
        >
          <Contours
            className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
            lineCount={6}
          />
          <div className="relative max-w-[720px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-parchment-dim">
              Contact
            </span>
            <h2 className="mt-2 font-display text-4xl leading-[1.1] sm:text-5xl text-parchment">
              Bring the device idea, the workflow problem, or the platform
              brief.
            </h2>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://github.com/ahmednule"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-crop px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-soil transition-opacity hover:opacity-90"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ahmednule"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-line-strong px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-parchment transition-colors hover:border-crop hover:text-crop"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <Credentials />

        <footer className="flex flex-col gap-2 border-t border-line px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <span className="font-mono text-[11px] text-parchment-dim">
            Ahmed Nule &mdash; Thika, Kenya
          </span>
          <span className="font-mono text-[11px] text-parchment-dim">
            Stable Stack Solutions
          </span>
        </footer>
      </main>
    </div>
  );
}
