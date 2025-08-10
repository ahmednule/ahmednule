import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ContactHero />
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 pb-20">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}
