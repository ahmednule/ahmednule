const projects = [
  {
    id: 1,
    title: "AgriGuide",
    description:
      "Agriguide is an AI-driven platform designed to assist users in identifying diseases and pests affecting plants. By leveraging advanced machine learning algorithms, the platform provides accurate diagnostics and actionable recommendations for plant care.",
    image: "/images/agriguide.png",
    technologies: ["React", "Node.js", "Supabase", "PostgresQl"],
    liveUrl:  "https://agriguide-sys.vercel.app/",
    githubUrl: "https://github.com/ahmednule/AgriGuide",
    status: "completed" as const,
  },
  {
    id: 2,
    title: "SmartLife",
    description:
      "Smart-Life is a Next.js project that aims to revolutionize local transport by offering an AI-powered tracking and navigation web application. The platform provides real-time updates and intelligent route optimization.",
    image: "/images/smartlife.png",
    technologies: ["Next.js", "TypeScript", "AI", "Maps API"],
    liveUrl: "https://smartlife.vercel.app",
    githubUrl: "https://github.com/ahmed/smartlife",
    status: "in-progress" as const,
  },
  {
    id: 3,
    title: "Ckwamboka and Company Advocates",
    description:
    "Christabel Kwamboka kinara is an Advocate at Nairobi Law Court.",
    image: "/modern-ecommerce-platform.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://www.ckwamboka.co.ke/",
    githubUrl: "https://github.com/ahmednule",
    status: "completed" as const,
  },
    {
    id: 4,
    title: "Ujamaa Foundation",
    description:
        "Ujamaa Foundation is a non-profit, community-based, and youth-led organization website that empowers communities in North Eastern Kenya through sustainable development initiatives including peace building, education support, environmental restoration, and capacity building.",
    image: "/images/ujamaa.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://ujamaa-foundation.vercel.app/",
    githubUrl: "https://github.com/ahmednule",
    status: "completed" as const,
  },
]

export default projects