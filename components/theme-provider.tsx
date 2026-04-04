'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </NextThemesProvider>
  )
}

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme()
  
  const toggleTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }
  
  const resolvedTheme = theme === 'system' ? systemTheme : theme
  
  return { theme: theme as 'light' | 'dark' | 'system', resolvedTheme: resolvedTheme as 'light' | 'dark', toggleTheme, setTheme }
}
