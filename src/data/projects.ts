export type Category = "agri" | "water" | "client" | "tooling";

export type LogEntry = {
  id: string;
  name: string;
  tagline: string;
  period: string;
  status: string;
  category: Category;
  description: string;
  stack: string[];
  link?: string;
};

export const categoryColor: Record<Category, string> = {
  agri: "var(--crop)",
  water: "var(--water)",
  client: "var(--dust)",
  tooling: "var(--parchment-dim)",
};

export const categoryLabel: Record<Category, string> = {
  agri: "Agri-tech",
  water: "IoT / Water",
  client: "Client system",
  tooling: "Tooling",
};

export const entries: LogEntry[] = [
  {
    id: "kilimoai",
    name: "KilimoAI",
    tagline: "Credit-readiness and farm-risk profiling, built for the field",
    period: "Jun 2026",
    status: "Submitted \u00b7 Kenya AI Challenge",
    category: "agri",
    description:
      "A voice-first PWA that scores farm risk and credit readiness for smallholder farmers, built for the Kenya AI Challenge 2026 (Mercy Corps AgriFin Track). Five roles \u2014 Farmer, Field Agent, Lender, Buyer, Admin \u2014 share one graph database. Loan requests run over USSD for offline access, chama groups stand in as social collateral, and disbursement settles over M-Pesa.",
    stack: [
      "Next.js",
      "Neo4j AuraDB",
      "Featherless AI",
      "Africa's Talking USSD",
      "Masumi / M-Pesa",
      "Swahili voice UI",
    ],
    link: "https://kilimo-ai.vercel.app",
  },
  {
    id: "aquaguard",
    name: "AquaGuard / AquaDAO",
    tagline: "Sensor-to-dashboard water monitoring, wired by hand",
    period: "May 2026 \u2014 ongoing",
    status: "Active \u00b7 hardware in progress",
    category: "water",
    description:
      "A water monitoring rig built on Arduino Uno with ultrasonic, TDS, and flow sensors, an I2C LCD, and dual alert buzzers \u2014 simulated in Tinkercad before a single component was soldered. AquaDAO extends the same telemetry with on-chain governance on Celo, and the project is being shaped for both a university module and the SLINGSHOT 2026 and Web3Clubs Cohort 10 tracks.",
    stack: [
      "Arduino Uno",
      "ESP32",
      "HC-SR04 / TDS / flow sensors",
      "Next.js 15",
      "Celo",
    ],
  },
  {
    id: "fieldlens",
    name: "FieldLens",
    tagline: "Point a camera at a part, get the part number",
    period: "May 2026",
    status: "Built",
    category: "client",
    description:
      "An AI spare-parts identification tool for Davis & Shirtliff field technicians, built to a strict mock-data, no-API-routes brief so the frontend could ship and demo independently of backend timelines.",
    stack: ["Next.js", "Tailwind CSS v4", "Zustand", "Session-based auth"],
  },
  {
    id: "shambasync",
    name: "ShambaSync",
    tagline: "Digitising the chama \u2014 savings-group logic for underserved communities",
    period: "2026 \u2014 ongoing",
    status: "In development",
    category: "agri",
    description:
      "A platform for financial savings groups (chamas) in underserved communities, moving informal group-saving logic \u2014 contributions, payouts, trust \u2014 into a system members can actually see.",
    stack: ["Full-stack web", "PostgreSQL"],
  },
  {
    id: "plumbing-id",
    name: "Local AI parts identifier",
    tagline: "Offline vision model for identifying plumbing materials",
    period: "2026",
    status: "Prototype",
    category: "tooling",
    description:
      "A locally-run identification tool using Ollama's gemma3:4b vision model, so a technician can identify plumbing materials from a photo without a round trip to a cloud API.",
    stack: ["Ollama", "TypeScript", "Prisma", "SQLite"],
  },
  {
    id: "cropway",
    name: "CropWay Investment",
    tagline: "A demo site built to open a door, not fill a brief",
    period: "2026",
    status: "Shipped",
    category: "client",
    description:
      "A demo website built proactively as a piece of cold outreach \u2014 shipped before the conversation started, not after.",
    stack: ["Next.js", "Tailwind CSS"],
  },
];
