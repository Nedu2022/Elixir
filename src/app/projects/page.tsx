import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import PortfolioGrid from "@/components/PortfolioGrid";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected architecture and interior projects by the studio.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <h1 className="sr">Portfolio</h1>
      <PortfolioGrid projects={projects} />
    </PageTransition>
  );
}
