import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "itsahmednule@yahoo.com",
    href: "mailto:itsahmednule@yahoo.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open to opportunities",
    href: null,
    status: "available",
  },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/ahmednule", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/ahmednule", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/ahmednule", icon: Twitter },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact details */}
      <Card className="border-white/10 bg-card/85 shadow-2xl shadow-slate-950/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-foreground">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cyan-300/10">
                <detail.icon className="h-5 w-5 text-cyan-200" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-foreground transition-colors hover:text-cyan-100"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-foreground flex items-center gap-2">
                    {detail.value}
                    {detail.status === "available" && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-300/15 px-2 py-0.5 text-xs text-emerald-100">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                        Available
                      </span>
                    )}
                  </p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Social links */}
      <Card className="border-white/10 bg-card/85 shadow-2xl shadow-slate-950/20 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-foreground">Connect with Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-secondary/70 px-4 py-3 text-secondary-foreground transition-colors hover:bg-cyan-300 hover:text-slate-950"
                aria-label={`Follow on ${social.name}`}
              >
                <social.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Response time */}
      <Card className="border-white/10 bg-card/85 shadow-2xl shadow-slate-950/20 backdrop-blur-md">
        <CardContent className="pt-6">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {"I typically respond to messages within 24-48 hours. For urgent matters, please mention it in your subject line and I'll prioritize your message."}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
