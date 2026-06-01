import { ContactHeader } from "@/components/contact-header"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background bg-[linear-gradient(rgba(34,211,238,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.045)_1px,transparent_1px)] bg-[size:44px_44px]">
      <ContactHeader />
      <div className="px-6 pb-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}
