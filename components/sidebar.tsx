"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"
import {
  Home,
  User,
  Folder,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Contact", href: "/contact", icon: Mail },
]

const skills = ["React", "Next.js", "TypeScript", "Node.js", "UI/UX", "Tailwind"]

const socials = [
  { name: "GitHub", href: "https://github.com/ahmednule", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/ahmednule", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/ahmednule", icon: Twitter },
]

export function Sidebar({ onCollapsedChange }: { onCollapsedChange?: (collapsed: boolean) => void }) {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopCollapsed, setDesktopCollapsed] = useState(false)

  const toggleDesktopSidebar = () => {
    const newState = !desktopCollapsed
    setDesktopCollapsed(newState)
    onCollapsedChange?.(newState)
  }

  return (
    <>
      {/* Mobile header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-16 bg-sidebar border-b border-sidebar-border lg:hidden">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
            AN
          </div>
          <span className="font-semibold text-sidebar-foreground">Ahmed Nule</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-sidebar-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-sidebar-foreground" />
          )}
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Desktop toggle button */}
      <button
        onClick={toggleDesktopSidebar}
        className={cn(
          "hidden lg:flex fixed top-4 z-50 p-2 rounded-lg bg-sidebar border border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-300",
          desktopCollapsed ? "left-4" : "left-[17.5rem]"
        )}
        aria-label="Toggle sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-72 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          desktopCollapsed && "lg:-translate-x-full"
        )}
      >
        {/* Profile section */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold mb-4">
              AN
            </div>
            <h1 className="text-xl font-bold text-sidebar-foreground">Ahmed Nule</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Certified Software Developer
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4" aria-label="Main navigation">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-primary"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Skills */}
        <div className="px-6 py-4 border-t border-sidebar-border">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs rounded-md bg-sidebar-accent text-sidebar-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-sidebar-primary hover:bg-sidebar-accent transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-sidebar-accent text-sidebar-foreground hover:bg-sidebar-accent/80 transition-colors"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4" />
                <span className="text-sm">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" />
                <span className="text-sm">Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Spacer for mobile header */}
      <div className="h-16 lg:hidden" />
    </>
  )
}
