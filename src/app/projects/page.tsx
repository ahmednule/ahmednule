
import ProjectsList from "@/components/page/projectspage/ProjectsList";
import PageHeader from "@/components/wrappers/PageHeader";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed Nule | Projects",
  description:
    "A showcase of projects and work completed by Ahmed Nule, highlighting skills and achievements.",
};

export default function ProjectsPage (){
  return (
    <PageWrapper>
      <PageHeader>My Projects</PageHeader>
      <ProjectsList />
    </PageWrapper>
  );
};
