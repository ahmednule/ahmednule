'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils'

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen">
      <Sidebar onCollapsedChange={setSidebarCollapsed} />
      <main className={cn(
        "flex-1 transition-all duration-300",
        sidebarCollapsed ? "lg:ml-0" : "lg:ml-72"
      )}>
        {children}
      </main>
    </div>
  )
}
