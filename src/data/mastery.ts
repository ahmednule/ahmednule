import FrontEndImage from "../../assets/images/frontend.jpg"
import BackEndImage from "../../assets/images/backend.jpg"
import DesignImage from "../../assets/images/design.jpg"
import type { Mastery } from "@/types/about"

export const MASTERY_DATA: Mastery[] = [
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
]
