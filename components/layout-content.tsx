'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Sidebar } from '@/components/sidebar'
import { ScrollProgress } from '@/components/scroll-progress'
import { cn } from '@/lib/utils'

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen">
      <ScrollProgress />
      <Sidebar onCollapsedChange={setSidebarCollapsed} />
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
