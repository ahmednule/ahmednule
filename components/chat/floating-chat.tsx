"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, MessageCircle, Send, X } from "lucide-react"
import { cn } from "@/lib/utils"

type Suggestion = { label: string; prompt: string }

const suggestions: Suggestion[] = [
  { label: "Who is Ahmed?", prompt: "Who is Ahmed Nule? Summarize his profile." },
  { label: "Show projects", prompt: "Navigate to the projects page and summarize two highlight projects." },
  { label: "How to contact?", prompt: "How can I contact Ahmed? Navigate to the contact page." },
]

export function FloatingChat() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const { messages, input, setInput, handleSubmit, isLoading, sendMessage } = useChat({
    api: "/api/chat",
    // You can add body: { source: "floating" } if you want to split traffic server-side
  })

  // Handle tool calls coming from the assistant (e.g., navigate)
  useEffect(() => {
    if (messages.length === 0) return
    const last = messages[messages.length - 1]

    // parts are typed as any here to keep the component lean; AI SDK emits multiple part types [^3][^4].
    for (const part of last.parts as any[]) {
      if (part?.type === "tool-call" && part?.name === "navigate" && part?.args?.path) {
        const path = String(part.args.path)
        if (path.startsWith("/")) router.push(path)
      }
      // Fallback: parse a directive if model replied with text like [NAVIGATE:/projects]
      if (part?.type === "text" && typeof part?.text === "string") {
        const match = part.text.match(/\[NAVIGATE:([^\]]+)\]/i)
        if (match?.[1]) router.push(match[1])
      }
    }
  }, [messages, router])

  // Auto-scroll to bottom on new messages
  const scrollRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages])

  const isEmpty = messages.length === 0

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed bottom-5 right-5 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full",
          "bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg hover:opacity-95",
        )}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        <span className="sr-only">Chatbot toggle</span>
      </button>

      {/* Panel */}
      <div
        className={cn(
          "fixed bottom-20 right-5 z-[60] w-[92vw] max-w-sm origin-bottom-right transition-all duration-200",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
      >
        <Card className="border-white/10 bg-white/[0.04] backdrop-blur-md">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-purple-600 to-pink-600 text-white">
              <Bot className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-base">Assistant</CardTitle>
              <p className="text-xs text-white/60">Ask about Ahmed, projects, or get navigation.</p>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="mb-3">
              {isEmpty ? (
                <div className="grid grid-cols-2 gap-2">
                  {suggestions.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => sendMessage({ text: s.prompt })}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-left text-xs text-white/80 hover:border-purple-400/30 hover:bg-purple-500/10"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div
              ref={scrollRef}
              className="mb-3 max-h-72 overflow-y-auto rounded-lg border border-white/10 bg-white/[0.02] p-3"
            >
              <ScrollArea className="h-full">
                <div className="space-y-3">
                  {messages.map((m) => (
                    <MessageBubble key={m.id} role={m.role} parts={m.parts as any[]} />
                  ))}
                </div>
              </ScrollArea>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(e)
              }}
              className="flex items-center gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
                placeholder="Ask anything..."
                className="flex-1 border-white/15 bg-white/5 text-white placeholder:text-white/50"
                required
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="shrink-0 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Send className="mr-1 h-4 w-4" />
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

function MessageBubble({
  role,
  parts,
}: {
  role: "user" | "assistant" | "system"
  parts: Array<{ type: string; text?: string }>
}) {
  const isUser = role === "user"
  const text = useMemo(() => {
    // Join all text parts in order, ignoring other types for display
    return parts
      .filter((p) => p.type === "text")
      .map((p) => (p as any).text)
      .join(" ")
  }, [parts])

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed",
          isUser
            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
            : "border border-white/10 bg-white/[0.04] text-white",
        )}
      >
        {text}
      </div>
    </div>
  )
}
