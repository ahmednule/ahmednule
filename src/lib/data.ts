import FrontEndImage from "/public/assets/images/frontend.jpg";
import BackEndImage from "/public/assets/images/backend.jpg";
import DesignImage from "/public/assets/images/design.jpg";
import HTML5 from "/public/assets/images/html5.svg";
import CSS from "/public/assets/images/css.svg";
import JavaScript from "/public/assets/images/javascript.svg";
import bellans from "/public/assets/images/bellans.png";
import coffeehub from "/public/assets/images/coffeehub.png";
import smartlife from "/public/assets/images/smartlife.png";
import ujamaa from "/public/assets/images/ujamaa.png";
import React from "/public/assets/images/react.svg";
import Next from "/public/assets/images/next.svg";
import Svelte from "/public/assets/images/svelte.svg";
import TypeScript from "/public/assets/images/typescript.svg";
import Tailwind from "/public/assets/images/tailwind.svg";
import HeroUI from "/public/assets/images/heroui.svg";
import AceternityUI from "/public/assets/images/aceternity.webp";
import plp from "/public/assets/images/plp.webp";
import php from "/public/assets/images/php.svg";
import laravel from "/public/assets/images/laravel.svg";
import Zod from "/public/assets/images/zod.svg";
import AuthJS from "/public/assets/images/authjs.svg";
import Prisma from "/public/assets/images/prisma.svg";
import Supabase from "/public/assets/images/supabase.svg";
import PostgreSQL from "/public/assets/images/postgresql.svg";
import VSCode from "/public/assets/images/vscode.svg";
import ChatGPT from "/public/assets/images/chatgpt.svg";
import Copilot from "/public/assets/images/copilot.svg";
import Vercel from "/public/assets/images/vercel.svg";
import ESLint from "/public/assets/images/eslint.svg";
import NPM from "/public/assets/images/npm.svg";
import apollo from "/public/assets/images/apollo.svg";
import django from "/public/assets/images/django.svg";
import express from "/public/assets/images/express.svg";
import graphql from "/public/assets/images/graphql.svg";
import node from "/public/assets/images/node.svg";
import Git from "/public/assets/images/git.svg";
import GitHub from "/public/assets/images/github.svg";
import Vite from "/public/assets/images/vite.svg";
import Claude from "/public/assets/images/claude.svg";
import Goymarey from "/public/assets/images/Goymarey.png";
import acorn from "/public/assets/images/acorn.png";
import { StaticImageData } from "next/image";
import wesnet from "/public/assets/images/wesnet.webp";
import TNNP from "/public/assets/images/TNNP.png"
import GreatLearning from "/public/assets/images/greatlearning.jpeg";
import alx from "/public/assets/images/alx.svg";
import agriguide from "/public/assets/images/agriguide.png";
import diabeteskenya from "/public/assets/images/diabeteskenya.png";
import { faExclamationTriangle, faLightbulb, faThumbsUp, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ProjectStatus, type TProjectStatus } from "./constants";

export const FRONT_END_TECHS = [
  {
    name: "HTML5",
    src: HTML5,
  },
  {
    name: "CSS",
    src: CSS,
  },
  {
    name: "JavaScript",
    src: JavaScript,
  },
  {
    name: "React.js",
    src: React,
  },
  {
    name: "Next.js",
    src: Next,
  },
  {
    name: "Svelte",
    src: Svelte,
  },
  {
    name: "TypeScript",
    src: TypeScript,
  },
  {
    name: "Tailwind CSS",
    src: Tailwind,
  },
  {
    name: "HeroUI",
    src: HeroUI,
  },
  {
    name: "Aceternity UI",
    src: AceternityUI,
  },
  {
    name: "Zod",
    src: Zod,
  },
];

export const BACKEND_TECHS = [

  {
    name:"Laravel",
    src:laravel
  },{
    name:"PHP",
    src:php,
  },
  {
    name:"NodeJs",
    src:node
  },
  {
    name:"Express",
    src:express
  },
  {
    name:"Apollo Sever",
    src:apollo
  },
  {
    name:"Grapgql",
    src:graphql
  },
  {
    name:"Django",
    src:django
  },
  {
    name: "Auth.js",
    src: AuthJS,
  },
  {
    name: "Prisma",
    src: Prisma,
  },
  {
    name: "Supabase",
    src: Supabase,
  },
  {
    name: "PostgreSQL",
    src: PostgreSQL,
  },
];

export const DEV_TOOLS = [
  {
    name: "VSCode",
    src: VSCode,
  },
  {
    name: "ChatGPT",
    src: ChatGPT,
  },
  {
    name: "GitHub Copilot",
    src: Copilot,
  },
  {
    name: "Claude",
    src: Claude,
  },
  {
    name: "Vercel",
    src: Vercel,
  },
  {
    name: "ESLint",
    src: ESLint,
  },
  {
    name: "NPM",
    src: NPM,
  },
  {
    name: "Git",
    src: Git,
  },
  {
    name: "GitHub",
    src: GitHub,
  },
  {
    name: "Vite",
    src: Vite,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "During Ahmed's time with us, he completed all assigned tasks and showed initiative to take on additional responsibilities. I found his overall performance to be good.",
    name: "Indresh Saluja",
    designation: "Chief Business Transformation Officer at acorn",
    src: "/assets/images/indresh.jpeg",
  },
  {
    quote:
      "I recommend Ahmed to any prospectiive oppotunities as he would be a valuable member of the team.",
    name: " Washington Gichuru",
    designation: "Head Of Information Technology at Acorn",
    src: "/assets/images/washington.jpeg",
  },
  {
    quote: "During Ahmed's time with us, he completed all assigned tasks and showed initiative to take on additional responsibilities. I found his overall performance to be good.",
    name: "John Musembi",
    designation: "Chief Operations Officer Wesnet",
    src: "/assets/images/wesnet.webp",
  },
];

export const WEB_QUALITIES = [
  "Performant",
  "Responsive",
  "Aesthetic",
  "Functional",
  "Accessible",
  "Semantic",
];

export const MASTERY = [
  {
    title: "Front End",
    description:
      "Expert in creating beautiful, high-performance, responsive, and user-friendly web applications.",
    src: FrontEndImage,
  },
  {
    title: "Back End",
    description:
      "Skilled in developing robust, scalable, and secure server-side applications.",
    src: BackEndImage,
  },
  {
    title: "UI/UX",
    description:
      "Focused on creating intuitive, engaging, and visually captivating user interfaces that enhance user experience.",
    src: DesignImage,
  },
];

export const GLOBAL_WORLD_CONFIG = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};
const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
export const SAMPLE_ARCS = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];

export const EXPERIENCE: {
  title: string;
  type: "Full-Time" | "Part-Time" | "Contract" | "Internship";
  description: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  companyLogo: StaticImageData;
}[] = [
  {
    title: "IT Internship",
    type: "Full-Time",
    description: "Completed a three-month internship at Acorn Holdings Limited, where I collaborated with a talented team of IT interns to develop an automated Customer Satisfaction Survey (C-SAT) for QWETU hostels",
    company: "Acorn Holdings Limited",
    startDate: new Date(2023, 2),
    endDate: new Date(2023, 5),
    companyLogo: acorn,
  },
  {
    title: "IT Internship",
    type: "Full-Time",
    description: "Completed a three-month internship at Wesnet Limited. During my time at Wesnet, I gained valuable experience in installing and troubleshooting CCTV systems, as well as installing fire alarms and smoke detectors. This hands-on work allowed me to develop practical skills in these important security and safety technologies.",
    company: "Wesnet",
    startDate: new Date(2024, 2),
    endDate: new Date(2024, 5),
    companyLogo: wesnet,
  },
  {
    title: "Front-end Developer",
    type: "Full-Time",
    description:
      "Developed aesthetically pleasing UI components for the web, integrating dynamic features such as drag and drop, and seamlessly incorporated APIs using Next.js, React and Express, Apollo-Server including graphql",
    company: "Goymarey",
    startDate: new Date(2024, 11),
    companyLogo: Goymarey,
  },
];

export const CERTIFICATIONS = [
  {
    title: "Diploma in Information Communication & Technology",
    organization: "The Nairobi National poly",
    year: "2025",
    file: "Diploma_Certificate",
    description:
      "Graduated with distinction and honored as the Best Student in the course. Mastered fundamental of ICT Concepts and advanced Information Technology topics. Developed a robust foundation in programming, database management, data structures, networking, and web development, making me a well-rounded and highly capable professional ready to tackle complex challenges in the tech industry.",
    logo: TNNP,
  },
  {
    title: "Software Engineering",
    organization: "Africa Leadership Experience",
    year: "2024",
    file: "HTML",
    description:
      "Equipped me with the foundational skills to create well-structured and accessible websites and systems, setting a strong base for advanced Software Engineering Jobs.",
    logo: alx,
  },
  {
    title: "Software Development Scholarship",
    organization: "Power Learn Project",
    year: "2024",
    file: "plp",
    description:
      "Specialized in backend development, learned how to use express to create and maintain Nodejs powered applications.",
    logo: plp,
  },
  {
    title: "Introduction UI/UX",
    organization: "Great Learning Academy",
    year: "2024",
    file: "JS",
    description:
      "Acquired foundational UI/UX skills enabling me to be able to craft designs better, that is from a user experience and not a developer perspective.",
    logo: GreatLearning,
  },
];

const problemCaseStudy = {
  title: "Problem",
  icon: faExclamationTriangle,
  colors: [
    [255, 166, 158],
    [221, 255, 247],
  ],
  bgColor: "bg-pink-900",
};

const solutionCaseStudy = {
  title: "Solution",
  icon: faLightbulb,
  bgColor: "bg-sky-600",
  colors: [[125, 211, 252]],
};

const outcomeCaseStudy = {
  title: "Outcome",
  icon: faThumbsUp,
  colors: [[125, 211, 252]],
  bgColor: "bg-emerald-800",
};

type Project = {
  overview: {
    title: string;
    description: string;
    image: StaticImageData;
    site: string;
    source: string;
    status: TProjectStatus;
    startDate: string;
    endDate?: string;
  };
  image: StaticImageData;
  route: string;
  slug: string;
  techStack: {
    alt: string;
    src: string;
  }[];
  metrics: {
    alt: string;
    src: string;
    score: string;
  }[];
  features: string[];
  caseStudy: {
    title: string;
    description: string;
    icon: IconDefinition;
    colors: number[][];
    dotSize?: number;
    bgColor: string;
  }[];
};

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
    route: "/projects/agriguide",
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
    route: "/projects/smartlife",
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
    route: "/projects/coffeehub",
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
    route: "/projects/ujamaa",
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
      title: "Bellans Mental Health App",
      description:
        "SPL Mental Health System is your sanctuary for emotional growth and healing. The platform provides 24/7 mental health resources, personalized self-care plans, and connects users with certified mental health professionals in a secure, judgment-free environment.",
      image: bellans, 
      site: "https://bellans-mental-health-app.vercel.app/",
      status: ProjectStatus.pending,
      source: "https://github.com/ahmednule/bellans-mental-health",
      startDate: "2024-11",
    },
    image: bellans,
    route: "/projects/bellans",
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