import { faLightbulb, faExclamationTriangle, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export const problemCaseStudy = {
  title: "Problem",
  icon: faExclamationTriangle,
  colors: [
    [255, 166, 158],
    [221, 255, 247],
  ],
  bgColor: "bg-pink-900",
};

export const solutionCaseStudy = {
  title: "Solution",
  icon: faLightbulb,
  bgColor: "bg-sky-600",
  colors: [[125, 211, 252]],
};

export const outcomeCaseStudy = {
  title: "Outcome",
  icon: faThumbsUp,
  colors: [[125, 211, 252]],
  bgColor: "bg-emerald-800",
};
