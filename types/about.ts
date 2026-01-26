import type { StaticImageData } from "next/image"

export interface Mastery {
  title: string
  description: string
  src: StaticImageData
}

export interface FrontEndTech {
  name: string
  src: StaticImageData
}

export interface BackEndTech {
  name: string
  src: StaticImageData
}

export interface Experience {
  title: string
  type: "Full-Time" | "Part-Time" | "Contract" | "Internship"
  description: string
  company: string
  startDate: Date
  endDate?: Date
  companyLogo: StaticImageData
}

export interface Certification {
  title: string
  organization: string
  year: string
  file: string
  description: string
  logo: StaticImageData
}
