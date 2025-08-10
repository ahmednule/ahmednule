import { Mail, MapPin, Phone, Github, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-300">
            <Mail className="w-5 h-5 text-purple-400" />
            <span>itsahmednule@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Phone className="w-5 h-5 text-purple-400" />
            <span>+254 112 291 829</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <MapPin className="w-5 h-5 text-purple-400" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
        <div className="flex gap-4">
          <Link href="https://github.com/ahmednule" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/ahmednule"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="https://youtube.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <Youtube className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-3">Let's Collaborate</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          and innovation. Don't hesitate to reach out!
        </p>
      </div>
    </div>
  )
}
