import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import EnquiryButton from "@/components/ui/EnquiryButton";
import { getProjectsByStatus } from "@/data/projects";

export default function UpcomingTeaser() {
  const upcoming = getProjectsByStatus("upcoming");
  if (upcoming.length === 0) return null;

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Coming Soon"
          title="Upcoming launches"
          subtitle="Register your interest early to get launch details and early-bird updates before everyone else."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((p) => (
            <div key={p.slug} className="flex flex-col gap-3">
              <ProjectCard project={p} />
              <EnquiryButton
                project={p.name}
                className="rounded-full border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
              >
                Register interest
              </EnquiryButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}