import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative text-center max-w-lg">
        <div className="relative w-64 h-64 mx-auto mb-8 rounded-2xl overflow-hidden border border-border">
          <Image
            src="/assets/images/404-image.png"
            alt="Page not found"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-foreground mb-3">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
