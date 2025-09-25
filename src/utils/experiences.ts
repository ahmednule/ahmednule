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