import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"

export function CTASection() {
  return (
    <Section className="pb-24">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-600/15 via-fuchsia-600/10 to-pink-600/15 p-[2px]">
          <div className="rounded-3xl bg-slate-900 p-10 text-center md:p-14">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Let’s Work Together</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/75">
              Excited to start a new project or collaborate on an existing one? I’m always open to meaningful
              conversations and ambitious ideas.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button
                asChild
                className="px-6 py-6 text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-6 py-6 text-base border-white/15 bg-white/5 hover:bg-white/10"
              >
                <Link href="/projects">Browse Projects</Link>
              </Button>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Ahmed Nule</p>
      </div>
    </Section>
  )
}
