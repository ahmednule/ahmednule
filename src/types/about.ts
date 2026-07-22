export interface Certification {
  title: string;
  organization: string;
  year: string;
  file: string;
  description: string;
  logo: string;
}

export interface BackEndTech {
  name: string;
  src: string;
}

export interface Experience {
  title: string;
  type: string;
  description: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  companyLogo: string;
}

export interface Mastery {
  title: string;
  description: string;
  src: string;
}

export interface FrontEndTech {
  name: string;
  src: string;
}
