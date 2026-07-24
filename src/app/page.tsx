import InstrumentRail from "@/components/InstrumentRail";
import MobileBar from "@/components/MobileBar";
import Contours from "@/components/Contours";
import LogEntryCard from "@/components/LogEntryCard";
import { entries } from "@/data/projects";
import StackSection from "@/components/StackSection";
import ServiceRecord from "@/components/ServiceRecord";
import Credentials from "@/components/Credentials";
import ContactTrigger from "@/components/ContactTrigger";
import MpesaTrigger from "@/components/MpesaTrigger";

export default function Home() {
  return (
    <div id="top" className="grain">
      <MobileBar />
      <InstrumentRail />

      <main className="lg:pl-[240px]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-line px-5 pt-14 pb-16 sm:px-12 sm:pt-24 sm:pb-28">
          <Contours
            className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
          />
          <div className="relative max-w-[880px]">
            <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-parchment-dim sm:text-[11px]">
              <span className="status-dot" />
              Field log &mdash; Thika, Kenya
            </div>
            <h1 className="font-display text-[11vw] leading-[1.04] tracking-tight text-parchment sm:text-[64px] lg:text-[76px]">
              Software that survives
              <br />
              contact with the field.
            </h1>
            <p className="mt-5 max-w-[56ch] font-body text-[16px] leading-relaxed text-parchment/85 sm:text-[18px] sm:mt-7">
              I&rsquo;m Ahmed &mdash; a solo full-stack developer building
              connected systems for farms, water infrastructure, and small
              businesses across Kenya. From soldered sensors to production
              web apps, I take a build end to end and ship it somewhere real
              people depend on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#log"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-crop px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-soil transition-opacity hover:opacity-90"
              >
                Read the log
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-line-strong px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-parchment transition-colors hover:border-crop hover:text-crop"
              >
                Start a project
              </a>
              <MpesaTrigger />
            </div>
          </div>
        </section>

        {/* LOG / PROJECTS */}
        <section id="log" className="px-5 py-16 sm:px-12 sm:py-20">
          <header className="mb-8 flex items-end justify-between gap-6 border-b border-line pb-5 sm:mb-10 sm:pb-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-parchment-dim sm:text-[11px]">
                Systems shipped
              </span>
              <h2 className="mt-1.5 font-display text-2xl text-parchment sm:mt-2 sm:text-4xl">
                Field log
              </h2>
            </div>
            <span className="font-mono text-[10px] text-parchment-dim sm:text-[11px]">
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
          className="border-t border-line px-5 py-16 sm:px-12 sm:py-20"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-parchment-dim sm:text-[11px]">
                About
              </span>
              <h2 className="mt-1.5 font-display text-2xl text-parchment sm:mt-2 sm:text-4xl">
                Based in Thika,
                <br />
                building for Kenya.
              </h2>
            </div>
            <div className="flex flex-col gap-4 font-body text-[16px] leading-relaxed text-parchment/85 sm:gap-5 sm:text-[17px]">
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
          className="relative overflow-hidden border-t border-line px-5 py-20 sm:px-12 sm:py-24"
        >
          <Contours
            className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
            lineCount={6}
          />
          <div className="relative max-w-[720px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-parchment-dim sm:text-[11px]">
              Contact
            </span>
            <h2 className="mt-1.5 font-display text-[26px] leading-[1.15] text-parchment sm:mt-2 sm:text-5xl">
              Bring the device idea, the workflow problem, or the platform
              brief.
            </h2>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
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
              <ContactTrigger />
            </div>
          </div>
        </section>

        <Credentials />

        <footer className="flex flex-col gap-1.5 border-t border-line px-5 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:text-left sm:py-8">
          <span className="font-mono text-[10px] text-parchment-dim sm:text-[11px]">
            Ahmed Nule &mdash; Thika, Kenya
          </span>
          <span className="font-mono text-[10px] text-parchment-dim sm:text-[11px]">
            Stable Stack Solutions
          </span>
        </footer>
      </main>
    </div>
  );
}
