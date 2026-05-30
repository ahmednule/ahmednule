"use client"

import { useEffect, useState, useCallback } from "react"

interface ScrambleTextProps {
  text: string
  className?: string
  scrambleOnMount?: boolean
  delay?: number
}

const chars = "!<>-_\\/[]{}—=+*^?#________"

export function ScrambleText({
  text,
  className = "",
  scrambleOnMount = false,
  delay = 0,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)

  const scramble = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)

    let iteration = 0
    const originalText = text
    const totalIterations = originalText.length * 3

    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index < iteration / 3) {
              return originalText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      iteration += 1

      if (iteration >= totalIterations) {
        clearInterval(interval)
        setDisplayText(originalText)
        setIsAnimating(false)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [text, isAnimating])

  useEffect(() => {
    if (scrambleOnMount) {
      const timer = setTimeout(() => {
        scramble()
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [scrambleOnMount, delay, scramble])

  return (
    <span
      className={`${className} cursor-pointer`}
      onMouseEnter={scramble}
    >
      {displayText}
    </span>
  )
}

// Hook for text scramble
export function useScrambleText(initialText: string) {
  const [text, setText] = useState(initialText)
  const [isScrambling, setIsScrambling] = useState(false)

  const scramble = useCallback(() => {
    if (isScrambling) return
    setIsScrambling(true)

    let iteration = 0
    const originalText = initialText
    const totalIterations = originalText.length * 3

    const interval = setInterval(() => {
      setText(
        originalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index < iteration / 3) {
              return originalText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      iteration += 1

      if (iteration >= totalIterations) {
        clearInterval(interval)
        setText(originalText)
        setIsScrambling(false)
      }
    }, 30)
  }, [initialText, isScrambling])

  return { text, scramble, isScrambling }
}
