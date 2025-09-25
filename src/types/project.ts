import { ProjectStatus, type TProjectStatus } from "../lib/constants";
import { StaticImageData } from "next/image";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface Project {
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