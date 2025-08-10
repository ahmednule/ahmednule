import { NextResponse } from "next/server"
import { z } from "zod"
import { streamText, tool } from "ai"
import { xai } from "@ai-sdk/xai"

// Static profile data the assistant can fetch via tool
const ownerProfile = {
  name: "Ahmed Nule",
  role: "Software Engineer",
  summary:
    "Modern Software Engineer specializing in web applications and AI-powered solutions. Focused on performance, polish, and maintainability.",
  highlights: [
    "5+ years building production-grade apps",
    "Shipped 30+ projects across web and AI",
    "Strong collaboration and communication",
  ],
  skills: ["TypeScript", "React", "Next.js", "Node.js", "Tailwind", "Prisma", "PostgreSQL", "AI/ML"],
  links: {
    projects: "/projects",
    contact: "/contact",
    home: "/",
  },
}

export async function POST(req: Request) {
  const hasKey = !!process.env.XAI_API_KEY
  const body = await req.json().catch(() => ({}))
  const { messages } = body ?? {}

  if (!hasKey) {
    // Helpful error for local previews without keys
    return NextResponse.json(
      {
        error:
          "Missing XAI_API_KEY. Add your key in the project environment variables to enable the chatbot. The UI is wired and ready.",
      },
      { status: 200 },
    )
  }

  const result = await streamText({
    model: xai("grok-3"),
    messages,
    system:
      "You are Ahmed Nule's portfolio assistant. Be concise, friendly, and helpful. If users ask about Ahmed, use the get_profile tool. If users ask to go somewhere (e.g., 'open projects'), use the navigate tool with the appropriate path. Prefer short paragraphs and bullet points. Never invent links; use provided paths.",
    tools: {
      get_profile: tool({
        description: "Get Ahmed's profile, summary, skills, and site links.",
        parameters: z.object({}),
        execute: async () => ownerProfile,
      }),
      navigate: tool({
        description: "Navigate the user to a path within the site.",
        parameters: z.object({
          path: z
            .string()
            .describe("A site-relative path such as '/', '/projects', or '/contact'. Must start with '/'."),
        }),
        execute: async ({ path }) => {
          // The client will read this tool call and push the route.
          return { ok: true, path }
        },
      }),
    },
  })

  // Stream back to the client in the AI SDK protocol the useChat hook expects [^3][^4][^5].
  return result.toDataStreamResponse()
}
