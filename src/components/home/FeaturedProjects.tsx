import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { getProjectsByStatus } from "@/data/projects";

export default function FeaturedProjects() {
  const ongoing = getProjectsByStatus("ongoing");

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ongoing Projects"
          title="Plots available now"
          subtitle="NIT / NMRDA sanctioned layouts with modern amenities, planned for comfortable living and long-term value."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ongoing.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-gold"
          >
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}