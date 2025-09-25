
import Certifications from "@/components/page/aboutpage/Certifications";
import Experience from "@/components/page/aboutpage/Experience";
import Introduction from "@/components/page/aboutpage/Introduction";
import Mastery from "@/components/page/aboutpage/Mastery";
import WhyStandOut from "@/components/page/aboutpage/WhyStandOut";
import PageHeader from "@/components/wrappers/PageHeader";
import PageWrapper from "@/components/wrappers/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ahmed Nule| Skills & Experience",
  description: "Learn about my background, skills, and experience as a full stack developer specializing in modern web technologies.",
};

export default function AboutPage () {
  return (
    <PageWrapper>
      <PageHeader>About me</PageHeader>
      <Introduction />
      <Mastery />
      <WhyStandOut />
      <Experience />
      <Certifications />
    </PageWrapper>
  );
};

