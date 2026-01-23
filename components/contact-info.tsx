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
  { name: "LinkedIn", href: "https://linkedin.com/ahmednule", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/ahmednule", icon: Twitter },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact details */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <detail.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-foreground flex items-center gap-2">
                    {detail.value}
                    {detail.status === "available" && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
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
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Connect with Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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
      <Card className="bg-card border-border">
        <CardContent className="pt-6">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {"I typically respond to messages within 24-48 hours. For urgent matters, please mention it in your subject line and I'll prioritize your message."}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
