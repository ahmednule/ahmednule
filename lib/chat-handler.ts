import { PORTFOLIO_CONTEXT, type NavigationPath } from "@/lib/chat-context"

export interface ChatMessage {
  id: string
  role: "user" | "bot"
  content: string
  navigation?: NavigationPath
  timestamp: Date
}

interface Intent {
  type: "greeting" | "about" | "skills" | "experience" | "education" | "projects" | "contact" | "availability" | "interests" | "navigate" | "stats" | "tech" | "general"
  response: string
  navigation?: NavigationPath
}

function matchIntent(input: string): Intent {
  const lower = input.toLowerCase().trim()

  // Navigation intents
  const navPatterns: { key: NavigationPath; pattern: RegExp }[] = [
    { key: "home", pattern: /\b(home|main|landing|front page|start)\b/ },
    { key: "about", pattern: /\b(about|who|yourself|background|bio|story)\b/ },
    { key: "projects", pattern: /\b(project|work|portfolio|build|created|made|apps)\b/ },
    { key: "contact", pattern: /\b(contact|reach|email|message|hire|hire you|get in touch|talk)\b/ },
  ]

  for (const { key, pattern } of navPatterns) {
    if (pattern.test(lower)) {
      return {
        type: "navigate",
        response: `Sure! Taking you to the ${key} page.`,
        navigation: key,
      }
    }
  }

  // Greeting
  if (/\b(hi|hello|hey|howdy|greetings|sup|what'?s up|good\s?(morning|afternoon|evening))\b/.test(lower)) {
    return {
      type: "greeting",
      response: `Hey there! 👋 I'm Ahmed's portfolio assistant. I can tell you about his skills, experience, projects, education, or help you navigate to any page. What would you like to know?`,
    }
  }

  // Stats
  if (/\b(stats|numbers|how many|how much|experience.*year|year.*experience|project.*count|technologies.*know|how.*certif)\b/.test(lower)) {
    return {
      type: "stats",
      response: `Here are Ahmed's key stats:\n\n• ${PORTFOLIO_CONTEXT.stats.experience} of experience\n• ${PORTFOLIO_CONTEXT.stats.projects} projects completed\n• ${PORTFOLIO_CONTEXT.stats.technologies} technologies mastered\n• ${PORTFOLIO_CONTEXT.stats.certifications} certifications\n\nWant to dive deeper into any of these?`,
    }
  }

  // Skills / Tech
  if (/\b(skill|tech|technology|stack|tool|framework|language|programming|code|what.*use|what.*know)\b/.test(lower)) {
    const frontend = PORTFOLIO_CONTEXT.techStack.frontend.join(", ")
    const backend = PORTFOLIO_CONTEXT.techStack.backend.join(", ")
    return {
      type: "tech",
      response: `Ahmed works with a wide range of technologies:\n\n**Frontend:** ${frontend}\n\n**Backend:** ${backend}\n\nHe specializes in React, Next.js, TypeScript, and Node.js. Want to see his projects built with these?`,
      navigation: "projects",
    }
  }

  // Expertise areas
  if (/\b(expert|speciali|focus|area|what.*do|what.*good|strength|service|offer)\b/.test(lower)) {
    const areas = PORTFOLIO_CONTEXT.expertise.map(e => `• **${e.title}** — ${e.description}`).join("\n\n")
    return {
      type: "skills",
      response: `Ahmed's core areas of expertise:\n\n${areas}`,
    }
  }

  // Projects
  if (/\b(project|work|portfolio|build|app|platform|system|created|made|github)\b/.test(lower)) {
    const projectList = PORTFOLIO_CONTEXT.projects.map(p => `• **${p.name}** — ${p.description}`).join("\n\n")
    return {
      type: "projects",
      response: `Ahmed has worked on several projects:\n\n${projectList}\n\nHis flagship project is **ShambaSync** — a platform empowering financial saving groups in underserved communities.\n\nCheck out the full project gallery for more details!`,
      navigation: "projects",
    }
  }

  // ShambaSync specific
  if (/\bshamba|shambasync\b/.test(lower)) {
    return {
      type: "projects",
      response: `Ahmed is currently developing **ShambaSync** — a platform empowering financial saving groups in underserved communities. It's not yet on GitHub but is his flagship project. Check out his other repos like **Diabetes Care Kenya** and **Smart Kuku** in the meantime!`,
      navigation: "projects",
    }
  }

  // Experience
  if (/\b(experience|work|job|career|role|position|company|where.*work|currently|employed|intern)\b/.test(lower)) {
    const expList = PORTFOLIO_CONTEXT.experience.map(e =>
      `• **${e.title}** at ${e.company} (${e.start}${e.current ? " — Present" : e.end ? ` — ${e.end}` : ""})`
    ).join("\n")
    return {
      type: "experience",
      response: `Ahmed's work experience:\n\n${expList}\n\nHe's currently a Customer Service Intern at Acorn Management Limited and a Front-End Developer at Goymarey Enterprise.`,
      navigation: "about",
    }
  }

  // Education
  if (/\b(education|school|university|college|study|degree|diploma|learn|academic|where.*stud)\b/.test(lower)) {
    return {
      type: "education",
      response: `Ahmed's education:\n\n• **${PORTFOLIO_CONTEXT.education.degree}** at ${PORTFOLIO_CONTEXT.education.university} (Expected ${PORTFOLIO_CONTEXT.education.expectedGraduation})\n\n• **${PORTFOLIO_CONTEXT.education.diploma}** at ${PORTFOLIO_CONTEXT.education.diplomaSchool} (${PORTFOLIO_CONTEXT.education.diplomaYear}) — ${PORTFOLIO_CONTEXT.education.diplomaNote}`,
      navigation: "about",
    }
  }

  // Certifications
  if (/\b(certif|certified|credential|qualification)\b/.test(lower)) {
    const certList = PORTFOLIO_CONTEXT.certifications.map(c =>
      `• **${c.title}** — ${c.org} (${c.year})`
    ).join("\n")
    return {
      type: "education",
      response: `Ahmed holds the following certifications:\n\n${certList}`,
      navigation: "about",
    }
  }

  // Contact
  if (/\b(contact|email|reach|hire|message|collaborat|freelance|available|job|opportunity|work.*together)\b/.test(lower)) {
    return {
      type: "contact",
      response: `Ahmed is currently **open to opportunities**! Here's how to reach him:\n\n• 📧 Email: ${PORTFOLIO_CONTEXT.email}\n• 💻 GitHub: ${PORTFOLIO_CONTEXT.github}\n• 💼 LinkedIn: ${PORTFOLIO_CONTEXT.linkedin}\n\nOr just use the contact form on the site!`,
      navigation: "contact",
    }
  }

  // Availability
  if (/\b(available|free|open.*opportunity|looking|accepting|hiring)\b/.test(lower)) {
    return {
      type: "availability",
      response: `Yes! Ahmed is currently **${PORTFOLIO_CONTEXT.availability}**. Feel free to reach out via email at ${PORTFOLIO_CONTEXT.email} or through the contact page.`,
      navigation: "contact",
    }
  }

  // Interests / Hobbies
  if (/\b(interest|hobby|fun|free.*time|spare.*time|outside.*work|outside.*code|personal)\b/.test(lower)) {
    const interests = PORTFOLIO_CONTEXT.interests.join(", ")
    return {
      type: "interests",
      response: `Outside of coding, Ahmed enjoys: ${interests}. He's also passionate about open-source contributions and mentoring aspiring developers.`,
      navigation: "about",
    }
  }

  // Who is Ahmed
  if (/\b(who.*ahmed|who.*is.*he|tell.*about|about.*ahmed|ahmed.*nule|what.*ahmed|ahmed.*do)\b/.test(lower)) {
    return {
      type: "about",
      response: `Ahmed Nule is a **Certified Software Developer** based in Nairobi, Kenya. He's a Full-Stack Developer & Designer passionate about crafting accessible, pixel-perfect user interfaces.\n\nHe's currently pursuing a Bachelor of Computer Science at Mount Kenya University while working as a Front-End Developer at Goymarey Enterprise.\n\n${PORTFOLIO_CONTEXT.stats.experience} of experience • ${PORTFOLIO_CONTEXT.stats.projects}+ projects • ${PORTFOLIO_CONTEXT.stats.technologies}+ technologies\n\nWant to know more about his skills, projects, or experience?`,
      navigation: "about",
    }
  }

  // Thank you
  if (/\b(thank|thanks|thx|appreciate|helpful|great|awesome|cool|nice)\b/.test(lower)) {
    return {
      type: "general",
      response: `Glad I could help! 😊 If you have any other questions about Ahmed or need anything else, just ask.`,
    }
  }

  // Help
  if (/\b(help|what.*can.*do|options|commands|how.*use|guide)\b/.test(lower)) {
    return {
      type: "general",
      response: `I can help you learn about Ahmed! Try asking:\n\n• "Who is Ahmed?" — Learn about him\n• "What are his skills?" — Tech stack & expertise\n• "Tell me about his projects" — Project portfolio\n• "What's his experience?" — Work history\n• "How can I contact him?" — Contact info\n• "Go to projects" — Navigate to a page\n• "Show me stats" — Key numbers\n\nYou can also say things like "take me to contact" or "go to about" to navigate!`,
    }
  }

  // Fallback
  return {
    type: "general",
    response: `I'm not sure I understood that fully. I can tell you about Ahmed's skills, experience, projects, education, certifications, interests, or help you navigate to any page. Try asking something like "Who is Ahmed?" or "What are his skills?" — or just say "help" to see all options!`,
  }
}

export function processMessage(input: string): Omit<ChatMessage, "id" | "timestamp"> {
  const intent = matchIntent(input)
  return {
    role: "bot",
    content: intent.response,
    navigation: intent.navigation,
  }
}
