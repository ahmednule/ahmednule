'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Sidebar } from '@/components/sidebar'
import { ScrollProgress } from '@/components/scroll-progress'
import { cn } from '@/lib/utils'
import { useTheme } from '@/components/theme-provider'
import { Sun, Moon } from 'lucide-react'

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const cycleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }
  const ThemeIcon = resolvedTheme === "dark" ? Moon : Sun
  const themeLabel = theme === "system" ? "System" : theme === "dark" ? "Dark" : "Light"

  return (
    <button
      onClick={cycleTheme}
      className="fixed top-4 right-4 z-50 p-2.5 rounded-xl bg-sidebar border border-sidebar-border text-sidebar-foreground shadow-lg hover:bg-sidebar-accent transition-all duration-300"
      aria-label={`Switch theme (current: ${themeLabel})`}
    >
      <ThemeIcon className="w-4 h-4" />
    </button>
  )
}

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      <ScrollProgress />
      <Sidebar onCollapsedChange={setSidebarCollapsed} />
      <ThemeToggle />
      <main className={cn(
        "flex-1 transition-all duration-300",
        sidebarCollapsed ? "lg:ml-0" : "lg:ml-72"
      )}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
