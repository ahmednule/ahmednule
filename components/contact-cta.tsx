import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactCTA() {
  return (
    <section className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance">
          {"Let's Work Together"}
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {"I'm currently available for freelance work and exciting new opportunities. If you have a project in mind or just want to chat, feel free to reach out."}
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Link>
        </Button>
      </div>
    </section>
  )
}
