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
  Download,
} from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Contact", href: "/contact", icon: Mail },
]

const socials = [
  { name: "GitHub", href: "https://github.com/ahmednule", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/ahmednule", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/ahmednule", icon: Twitter },
]

export function Sidebar({ onCollapsedChange }: { onCollapsedChange?: (collapsed: boolean) => void }) {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopCollapsed, setDesktopCollapsed] = useState(false)

  const toggleDesktopSidebar = () => {
    const newState = !desktopCollapsed
    setDesktopCollapsed(newState)
    onCollapsedChange?.(newState)
  }

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  const themeLabel = theme === "system" ? "System" : theme === "dark" ? "Dark" : "Light"
  const ThemeIcon = resolvedTheme === "dark" ? Moon : Sun

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-16 bg-sidebar/95 backdrop-blur-sm border-b border-sidebar-border lg:hidden">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20">
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

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <button
        onClick={toggleDesktopSidebar}
        className={cn(
          "hidden lg:flex fixed top-4 z-50 p-2.5 rounded-xl bg-sidebar border border-sidebar-border text-sidebar-foreground shadow-lg hover:bg-sidebar-accent transition-all duration-300 items-center justify-center",
          desktopCollapsed ? "left-4" : "left-[17.5rem]"
        )}
        aria-label="Toggle sidebar"
      >
        {desktopCollapsed ? (
          <Menu className="w-4 h-4" />
        ) : (
          <X className="w-4 h-4" />
        )}
      </button>

      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-72 bg-sidebar/95 backdrop-blur-sm border-r border-sidebar-border flex flex-col transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          desktopCollapsed && "lg:-translate-x-full"
        )}
      >
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-lg shadow-primary/20">
                AN
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-sidebar" />
            </div>
            <h1 className="text-xl font-bold text-sidebar-foreground mt-4">Ahmed Nule</h1>
            <p className="text-sm text-sidebar-foreground/60 mt-1">
              Certified Software Developer
            </p>
          </div>
        </div>

        <nav className="flex-1 p-4" aria-label="Main navigation">
          <ul className="space-y-1.5">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200",
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="px-4 py-4 border-t border-sidebar-border">
          <a
            href="/assets/files/ahmednule.pdf"
            download="Ahmed_Nule_CV.pdf"
            className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium text-sm hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center justify-center gap-3 mb-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-sidebar-foreground/50 hover:text-sidebar-primary hover:bg-sidebar-accent/50 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <button
            onClick={cycleTheme}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sidebar-accent/50 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors text-sm"
            aria-label={`Switch theme (current: ${themeLabel})`}
          >
            <ThemeIcon className="w-4 h-4" />
            <span>{themeLabel}</span>
          </button>
        </div>
      </aside>

      <div className="h-16 lg:hidden" />
    </>
  )
}
