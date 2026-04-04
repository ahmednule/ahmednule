export const PORTFOLIO_CONTEXT = {
  name: "Ahmed Nule",
  title: "Certified Software Developer",
  role: "Full-Stack Developer & Designer",
  location: "Nairobi, Kenya",
  email: "itsahmednule@yahoo.com",
  github: "https://github.com/ahmednule",
  linkedin: "https://linkedin.com/in/ahmednule",
  twitter: "https://twitter.com/ahmednule",
  bio: "Developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. Favorite work lies at the intersection of design and development.",

  stats: {
    experience: "3+ years",
    projects: "10+",
    technologies: "20+",
    certifications: 5,
  },

  education: {
    degree: "Bachelor of Computer Science",
    university: "Mount Kenya University",
    expectedGraduation: "2028",
    diploma: "Diploma in Information Communication & Technology",
    diplomaSchool: "The Nairobi National Polytechnic",
    diplomaYear: "2025",
    diplomaNote: "Graduated with distinction, Best Student in the course",
  },

  certifications: [
    { title: "Bachelor of Computer Science", org: "Mount Kenya University", year: "Expected 2028" },
    { title: "Diploma in ICT", org: "The Nairobi National Polytechnic", year: "2025" },
    { title: "Software Engineering", org: "Africa Leadership Experience (ALX)", year: "2024" },
    { title: "Software Development Scholarship", org: "Power Learn Project (PLP)", year: "2024" },
    { title: "Introduction to UI/UX Design", org: "Great Learning Academy", year: "2024" },
  ],

  experience: [
    { title: "Customer Service Intern", company: "Acorn Management Limited", type: "Internship", start: "Aug 2025", current: true },
    { title: "Front-End Developer", company: "Goymarey Enterprise", type: "Full-Time", start: "Dec 2024", current: true },
    { title: "IT Internship", company: "Wesnet Limited", type: "Full-Time", start: "Feb 2024", end: "May 2024" },
    { title: "IT Internship", company: "Acorn Holdings Limited", type: "Full-Time", start: "Feb 2023", end: "May 2023" },
  ],

  techStack: {
    frontend: ["HTML5", "CSS", "JavaScript", "React.js", "Next.js", "Svelte", "TypeScript", "Tailwind CSS", "HeroUI", "Aceternity UI", "Zod"],
    backend: ["Laravel", "PHP", "Node.js", "Express", "Apollo Server", "GraphQL", "Django", "Auth.js", "Prisma", "Supabase", "PostgreSQL"],
  },

  expertise: [
    { title: "Front End", description: "Expert in creating beautiful, high-performance, responsive, and user-friendly web applications." },
    { title: "Back End", description: "Skilled in developing robust, scalable, and secure server-side applications." },
    { title: "UI/UX", description: "Focused on creating intuitive, engaging, and visually captivating user interfaces." },
  ],

  projects: [
    { name: "ShambaSync", description: "A platform empowering financial saving groups in underserved communities with transparent tracking, automated calculations, and comprehensive financial reporting.", tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"], github: "https://github.com/ahmednule/shambasync" },
    { name: "CoffeeHub", description: "A coffee marketplace platform connecting local growers with buyers.", tech: ["Next.js", "React", "Tailwind"] },
    { name: "Cinemania", description: "A movie discovery and review application.", tech: ["React", "API Integration", "Tailwind"] },
    { name: "Bellans", description: "A business management platform.", tech: ["Next.js", "PostgreSQL", "Tailwind"] },
    { name: "AgriGuide", description: "An agricultural guidance platform for farmers.", tech: ["React", "Node.js", "MongoDB"] },
    { name: "DiabetesKenya", description: "A health awareness platform for diabetes education.", tech: ["Next.js", "React", "Tailwind"] },
    { name: "Ujamaa", description: "A community-driven platform for collaboration.", tech: ["React", "Express", "PostgreSQL"] },
    { name: "ShakeHands", description: "A professional networking platform for freelancers.", tech: ["Next.js", "GraphQL", "PostgreSQL"] },
  ],

  interests: ["Photography", "Open Source", "Music", "Hiking", "Reading", "Gaming"],

  availability: "Open to freelance work and new opportunities",

  navigation: {
    home: { path: "/", description: "Landing page with overview, stats, expertise, tech stack, and featured project" },
    about: { path: "/about", description: "About page with bio, work experience, certifications, and interests" },
    projects: { path: "/projects", description: "Projects page with full project grid and filtering" },
    contact: { path: "/contact", description: "Contact page with form and contact information" },
  },
}

export type NavigationPath = keyof typeof PORTFOLIO_CONTEXT.navigation
