import { Project } from "@/types/project";
import agriguide from "/public/assets/images/agriguide.png";
import { ProjectStatus } from "@/lib/constants";
import kwamboka from "/public/assets/images/kwamboka.png"
import coffeehub from "/public/assets/images/coffeehub.png";
import smartlife from "/public/assets/images/smartlife.png";
import ujamaa from "/public/assets/images/ujamaa.png";
import diabeteskenya from "/public/assets/images/diabeteskenya.png";
import { problemCaseStudy, solutionCaseStudy, outcomeCaseStudy } from "@/lib/problem";


export const PROJECTS: Project[] = [
  {
    overview: {
      title: "AgriGuide",
      description:
        "Agriguide is an AI-driven platform designed to assist users in identifying diseases and pests affecting plants. By simply uploading an image of a plant, the system leverages AI models to analyze the image and provide accurate feedback on what type of disease or pest is impacting the plant.",
      image: agriguide,
      site: "https://agriguide-sys.vercel.app/",
      status: ProjectStatus.pending,
      source: "https://github.com/ahmednule/AgriGuide",
      startDate: "2024-06",
    },
    image: agriguide,
    route:"https://agriguide-sys.vercel.app/",
    slug: "agriguide",
    features: [
      "AI-powered plant disease and pest identification through image analysis.",
      "Instant feedback and diagnosis for plant health issues.",
      "User-friendly interface for easy image uploading and analysis.",
      "Comprehensive database of plant diseases and pests.",
      "Expert recommendations for treatment and prevention.",
      "Real-time analysis with high accuracy rates.",
      "Mobile-responsive design for field use.",
      "Secure image processing and data protection.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Farmers and plant enthusiasts often struggle to identify diseases and pests affecting their crops and plants, leading to poor harvests and economic losses. Traditional identification methods require expert knowledge or costly consultations, making it difficult for small-scale farmers to access timely and accurate plant health diagnostics.",
      },
      {
        ...solutionCaseStudy,
        description:
          "AgriGuide leverages cutting-edge AI and machine learning technologies to provide instant plant disease and pest identification through simple image uploads. The platform democratizes access to expert-level plant diagnostics, making it available to anyone with a smartphone or camera.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "AgriGuide empowers farmers and plant enthusiasts with instant, accurate plant health diagnostics, reducing crop losses and improving agricultural productivity. The platform bridges the gap between traditional farming and modern technology, making expert plant care accessible to everyone.",
      },
    ],
    techStack: [
      {
        alt: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "React.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        alt: "TensorFlow",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "92",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "98",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "95",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "90",
      },
    ],
  },
  {
    overview: {
      title: "SmartLife",
      description:
        "Smart-Life is a Next.js project that aims to revolutionize local transport by offering an AI-powered tracking and navigation web app, making city life easier and more convenient with on-demand ride sharing and predictive routing.",
      image: smartlife, 
      site: "https://smart-life-five.vercel.app/",
      status: ProjectStatus.pending,
      source: "https://github.com/ahmednule/smart-life",
      startDate: "2024-08",
    },
    image: smartlife,
    route: "https://smart-life-five.vercel.app/",
    slug: "smartlife",
    features: [
      "On-demand ride sharing for convenient booking from home.",
      "AI-powered predictive routing to find optimal routes and save fuel.",
      "Smart dispatching system to notify drivers of nearby passengers.",
      "Comprehensive driver dashboard for tracking peak client times.",
      "High-quality, responsive design for seamless user experience.",
      "Real-time tracking and navigation capabilities.",
      "Machine learning algorithms that improve with more data input.",
      "Efficient matching system between drivers and passengers.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Urban transportation faces significant challenges with unreliable local transport systems, long waiting times, and inefficient routing. Passengers struggle to find available rides while drivers waste time and fuel searching for customers, leading to increased costs and reduced efficiency in city transportation.",
      },
      {
        ...solutionCaseStudy,
        description:
          "SmartLife leverages AI-powered algorithms to create an intelligent transportation platform that connects passengers with drivers efficiently. The system uses predictive routing and smart dispatching to optimize routes, reduce waiting times, and improve the overall transportation experience for both users and drivers.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "SmartLife transforms urban mobility by providing a reliable, efficient, and AI-driven transportation solution. The platform reduces wait times, optimizes fuel consumption, and creates a seamless experience that benefits both passengers and drivers, ultimately making city life more convenient and sustainable.",
      },
    ],
    techStack: [
      {
        alt: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "React.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "Node.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        alt: "MongoDB",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "88",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "95",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "92",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "85",
      },
    ],
  },
  {
    overview: {
      title: "CoffeeHub",
      description:
        "A transparent and efficient platform connecting discerning buyers with premium coffee growers. CoffeeHub provides a comprehensive solution for the coffee industry, ensuring quality, transparency, and efficiency from farm to cup with complete traceability.",
      image: coffeehub, 
      site: "https://coffee-hub-sys.vercel.app/",
      status: ProjectStatus.pending,
      source: "https://github.com/ahmednule/coffee-hub",
      startDate: "2024-10",
    },
    image: coffeehub,
    route: "https://coffee-hub-sys.vercel.app/",
    slug: "coffeehub",
    features: [
      "Complete sales catalogue with lot tracking, marks, grades, and real-time pricing.",
      "Multi-user platform for growers, buyers, brokers, warehouse operators, and roasters.",
      "Quality certification tracking for RA, CAFÉ, FLO, CP, and EUDR standards.",
      "Origin transparency with complete traceability from farm to cup.",
      "Elevation, variety, and process details for each coffee lot.",
      "Tailored tools and insights for different coffee professionals.",
      "Real-time marketplace for discovering exceptional coffee lots.",
      "Comprehensive certification and quality assurance system.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "The coffee industry lacks transparency and efficient connections between growers and buyers. Coffee professionals struggle with fragmented systems, limited traceability, and difficulty in verifying quality certifications, leading to inefficiencies and reduced trust in the supply chain.",
      },
      {
        ...solutionCaseStudy,
        description:
          "CoffeeHub creates a comprehensive marketplace that connects all stakeholders in the coffee industry through a transparent, efficient platform. The system provides complete traceability, quality certification tracking, and tailored tools for each type of coffee professional, from growers to roasters.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "CoffeeHub revolutionizes the coffee industry by providing unprecedented transparency and efficiency in the supply chain. The platform empowers coffee professionals with better tools, increased trust through traceability, and improved market access, ultimately benefiting everyone from growers to consumers.",
      },
    ],
    techStack: [
      {
        alt: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "React.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "PostgreSQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        alt: "Prisma",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "94",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "96",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "98",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "92",
      },
    ],
  },
  {
    overview: {
      title: "Ujamaa Foundation",
      description:
        "Ujamaa Foundation is a non-profit, community-based, and youth-led organization website that empowers communities in North Eastern Kenya through sustainable development initiatives including peace building, education support, environmental restoration, and capacity building.",
      image: ujamaa, 
      site: "https://ujamaa-foundation.vercel.app/",
      status: ProjectStatus.completed,
      source: "https://github.com/ahmednule/ujamaa-foundation",
      startDate: "2024-12",
    },
    image: ujamaa,
    route:  "https://ujamaa-foundation.vercel.app/",
    slug: "ujamaa",
    features: [
      "Comprehensive information about foundation programs and initiatives.",
      "Peace building and community cohesion program details.",
      "Education sector support and scholarship information.",
      "Environmental restoration and natural resource management showcase.",
      "Training and capacity building program highlights.",
      "Latest news and activities updates.",
      "Community impact metrics and achievements display.",
      "Contact and collaboration facilitation system.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Marginalized communities in northern Kenya face significant challenges including limited access to education, environmental degradation, community conflicts, and lack of development opportunities. These communities needed a platform to showcase their work and connect with supporters and partners.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Created a comprehensive website for Ujamaa Foundation that effectively communicates their mission, showcases their six strategic programs, highlights community impact, and provides easy ways for supporters to engage. The platform serves as a digital hub for community empowerment and sustainable development initiatives.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "The website successfully represents Ujamaa Foundation's commitment to community empowerment, providing a professional platform that enhances their visibility, credibility, and ability to attract partnerships and support for their vital community development work in northern Kenya.",
      },
    ],
    techStack: [
      {
        alt: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "React.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "HTML5",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        alt: "CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "96",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "100",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "100",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "98",
      },
    ],
  },
  {
    overview: {
      title: "Ckwamboka & Company Advocate",
      description:
        "Christabel Kwamboka kinara is an Advocate at Nairobi Law Court.",
      image: kwamboka, 
      site: "https://bellans-mental-health-app.vercel.app/",
      status: ProjectStatus.pending,
      source: "https://github.com/ahmednule/ckwamboka.co.ke",
      startDate: "2024-11",
    },
    image: kwamboka,
    route: "https://www.ckwamboka.co.ke/",
    slug: "bellans",
    features: [
      "24/7 access to curated mental health resources and materials.",
      "Personalized self-care routines and tailored articles.",
      "Secure, encrypted, and judgment-free environment for users.",
      "Expert matching system to connect with certified professionals.",
      "Comprehensive mental health articles and educational content.",
      "Safe space for emotional growth and healing journey.",
      "User-friendly interface promoting mental wellness accessibility.",
      "Professional support network for comprehensive care.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Mental health support is often inaccessible, expensive, or comes with stigma attached. Many people struggle to find reliable mental health resources, personalized care plans, or connections to qualified professionals, especially during times when they need immediate support outside traditional office hours.",
      },
      {
        ...solutionCaseStudy,
        description:
          "Bellans Mental Health App creates a comprehensive digital sanctuary that provides 24/7 access to mental health resources, personalized care plans, and professional connections. The platform removes barriers to mental health support by offering a secure, accessible, and judgment-free environment for healing and growth.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "The platform democratizes mental health support by making professional resources and personalized care accessible anytime, anywhere. Users benefit from continuous support, tailored interventions, and professional connections, contributing to better mental health outcomes and reduced stigma around seeking help.",
      },
    ],
    techStack: [
      {
        alt: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "React.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "Node.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        alt: "MongoDB",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "91",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "100",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "96",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "88",
      },
    ],
  },
  {
    overview: {
      title: "DiabetesCare Kenya",
      description:
        "DiabetesCare Kenya is a comprehensive web-based platform designed to empower Kenyans with diabetes to better manage their condition through real-time monitoring, personalized insights, and AI-powered support.",
      image: diabeteskenya,
      site: "https://ahmednule.vercel.app",
      source: "https://github.com/ahmednule/diabetes-care-kenya",
      status: ProjectStatus.pending,
      startDate: "2025-03",
    },
    image: diabeteskenya,
    route: "/projects/diabetescare",
    slug: "diabetescare",
    features: [
      "Real-time diabetes monitoring and tracking capabilities.",
      "Personalized insights and AI-powered health recommendations.",
      "Comprehensive diabetes management tools and resources.",
      "User-friendly interface for easy health data input and tracking.",
      "Educational content about diabetes care and management.",
      "Progress tracking and health goal setting features.",
      "Integration with healthcare provider recommendations.",
      "Secure health data management and privacy protection.",
    ],
    caseStudy: [
      {
        ...problemCaseStudy,
        description:
          "Diabetes management in Kenya faces significant challenges including limited access to specialized care, lack of continuous monitoring tools, and insufficient patient education. Many Kenyans with diabetes struggle to maintain proper blood sugar levels and track their health progress effectively.",
      },
      {
        ...solutionCaseStudy,
        description:
          "DiabetesCare Kenya provides a comprehensive digital platform that empowers users with real-time monitoring, AI-powered insights, and personalized diabetes management tools. The platform bridges the gap between patients and quality diabetes care through technology and education.",
      },
      {
        ...outcomeCaseStudy,
        description:
          "The platform empowers Kenyans with diabetes to take control of their health through better monitoring, education, and AI-powered insights. This leads to improved health outcomes, better diabetes management, and enhanced quality of life for users across Kenya.",
      },
    ],
    techStack: [
      {
        alt: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "React.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        alt: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        alt: "PostgreSQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "89",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "98",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "94",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "87",
      },
    ],
  },
];