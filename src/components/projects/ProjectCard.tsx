import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import type { Project, ProjectStatus } from "@/types/project";

const statusStyle: Record<ProjectStatus, string> = {
  ongoing: "bg-brand text-white",
  upcoming: "bg-gold text-white",
  completed: "bg-neutral-700 text-white",
};
const statusLabel: Record<ProjectStatus, string> = {
  ongoing: "Ongoing",
  upcoming: "Upcoming",
  completed: "Completed",
};

export default function ProjectCard({project, eager = false,}: {project: Project;eager?: boolean;}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-light">
        <Image
          src={project.coverImage}
          alt={project.name}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className={clsx(
            "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
            statusStyle[project.status]
          )}
        >
          {project.coverType === "render" && (
  <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-0.5 text-[10px] text-white">
    Artist&rsquo;s impression
  </span>
)}
          {statusLabel[project.status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-brand">{project.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-500">
          <MapPin size={14} className="shrink-0 text-gold" />
          {project.location}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-600">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.totalPlots && (
            <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand">
              {project.totalPlots} plots
            </span>
          )}
          {project.plotSize && (
            <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand">
              {project.plotSize}
            </span>
          )}
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold">
          View details <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}