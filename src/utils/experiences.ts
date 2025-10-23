import { StaticImageData } from "next/image";
import Goymarey from "/public/assets/images/Goymarey.png";
import acorn from "/public/assets/images/acorn.png";
import wesnet from "/public/assets/images/wesnet.webp";

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
    title: "Customer Service Intern",
    type: "Internship",
    description:
      "Currently interning at Acorn Management Limited, assisting in managing resident communications, handling service requests, and supporting customer relationship management. Collaborating with cross-functional teams to enhance the overall tenant experience while gaining valuable exposure to customer success operations.",
    company: "Acorn Management Limited",
    startDate: new Date(2025, 7),
    companyLogo: acorn,
  },
  {
    title: "IT Internship",
    type: "Full-Time",
    description:
      "Completed a three-month internship at Acorn Holdings Limited, where I collaborated with a team of IT interns to develop an automated Customer Satisfaction Survey (C-SAT) system for Qwetu hostels, improving feedback efficiency and resident engagement.",
    company: "Acorn Holdings Limited",
    startDate: new Date(2023, 1),
    endDate: new Date(2023, 4),
    companyLogo: acorn,
  },
  {
    title: "IT Internship",
    type: "Full-Time",
    description:
      "Completed a three-month internship at Wesnet Limited, gaining hands-on experience in installing and troubleshooting CCTV systems, fire alarms, and smoke detectors. Strengthened practical skills in networking, system setup, and security infrastructure maintenance.",
    company: "Wesnet Limited",
    startDate: new Date(2024, 1),
    endDate: new Date(2024, 4),
    companyLogo: wesnet,
  },
  {
    title: "Front-End Developer",
    type: "Full-Time",
    description:
      "Designed and implemented visually engaging UI components, integrated APIs, and optimized application performance using Next.js, React, Express, Apollo Server, and GraphQL. Played a key role in shaping the user experience for enterprise-level web applications.",
    company: "Goymarey Enterprise",
    startDate: new Date(2024, 11),
    companyLogo: Goymarey,
  },
];
