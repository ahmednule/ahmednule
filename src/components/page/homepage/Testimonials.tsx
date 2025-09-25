import React from "react";
import SectionHeader from "../../wrappers/SectionHeader";
import { TESTIMONIALS } from "@/utils/testimonials";
import { AnimatedTestimonials } from "./AnimatedTestimonials";
import SectionWrapper from "../../wrappers/SectionWrapper";

const Testimonials = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Testimonials</SectionHeader>
      <AnimatedTestimonials testimonials={TESTIMONIALS} />
    </SectionWrapper>
  );
};

export default Testimonials;
