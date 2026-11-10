"use client";

import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import ProjectCard from "./ProjectCard";
import EnquiryButton from "@/components/ui/EnquiryButton";
import type { Project, ProjectStatus } from "@/types/project";

type Filter = "all" | ProjectStatus;

const labels: Record<Filter, string> = {
  all: "All Projects",
  ongoing: "Ongoing",
  upcoming: "Upcoming",
  completed: "Completed",
};

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  // Only show tabs for statuses that actually have projects
  const tabs = useMemo(() => {
    const statuses: ProjectStatus[] = ["ongoing", "upcoming", "completed"];
    return ["all", ...statuses.filter((s) => projects.some((p) => p.status === s))] as Filter[];
  }, [projects]);

  // Support direct links such as /projects#upcoming
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as Filter;
    if (tabs.includes(hash)) setFilter(hash);
  }, [tabs]);

  const count = (f: Filter) =>
    f === "all" ? projects.length : projects.filter((p) => p.status === f).length;

  const visible = filter === "all" ? projects : projects.filter((p) => p.status === filter);

  function select(f: Filter) {
    setFilter(f);
    window.history.replaceState(null, "", f === "all" ? "/projects" : `/projects#${f}`);
  }

  return (
    <div>
      <div role="tablist" aria-label="Filter projects" className="flex flex-wrap justify-center gap-3">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={filter === t}
            onClick={() => select(t)}
            className={clsx(
              "rounded-full border px-5 py-2.5 text-sm font-semibold transition",
              filter === t
                ? "border-brand bg-brand text-white"
                : "border-neutral-300 text-brand hover:border-gold hover:text-gold"
            )}
          >
            {labels[t]} <span className="ml-1 opacity-70">({count(t)})</span>
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-16 text-center text-neutral-500">No projects in this category yet.</p>
      ) : (
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <div key={p.slug} className="flex flex-col gap-3">
              <ProjectCard project={p} />
              {p.status === "upcoming" && (
                <EnquiryButton
                  project={p.name}
                  className="rounded-full border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
                >
                  Register interest
                </EnquiryButton>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}