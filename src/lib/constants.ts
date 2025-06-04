import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faContactBook,
  faHouse,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: faGithub,
    path: "https://www.github.com/ahmednule",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    path: "https://www.linkedin.com/in/ahmednule/",
  },
  {
    name: "YouTube",
    icon: faYoutube,
    path: "https://www.youtube.com/channel/UC-aOibF1oPxUvS3bVvvdMqA",
  },

];

export const PAGE_LINKS = [
  {
    name: "Home",
    path: "/",
    icon: faHouse,
  },
  {
    name: "About",
    path: "/about",
    icon: faInfoCircle,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: faCode,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: faContactBook,
  },
];

export const initialFormState = {
  name: "",
  recipientEmail: "",
  message: "",
} as const;

export const ProjectStatus = { 
  completed: "Completed",
  pending: "Pending",
} as const

export type TProjectStatus = typeof ProjectStatus[keyof typeof ProjectStatus]