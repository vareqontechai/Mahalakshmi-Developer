import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import CtaBanner from "@/components/home/CtaBanner";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore ongoing and upcoming plotted developments by Mahalaxmi Infra in Nagpur, near the Samruddhi Expressway.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="NIT / NMRDA sanctioned plotted developments with modern amenities, across Nagpur's growth corridors."
        crumbs={[{ label: "Projects" }]}
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectsExplorer projects={projects} />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}