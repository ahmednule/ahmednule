import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime"

type Props = HTMLAttributes<HTMLSpanElement> & { as?: keyof JSX.IntrinsicElements }

export function GradientText({ as: Tag = "span", className, children, ...rest }: Props) {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(168,85,247,0.35)]",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
