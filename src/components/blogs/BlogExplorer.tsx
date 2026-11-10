"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import clsx from "clsx";
import { blogCategories, blogThumb, blogUrl, type BlogCategory, type BlogPost } from "@/data/blogs";

const dateFmt = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export default function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [cat, setCat] = useState<BlogCategory | "All">("All");
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const visible = cat === "All" ? sorted : sorted.filter((p) => p.category === cat);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {(["All", ...blogCategories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={clsx(
              "rounded-full border px-5 py-2 text-sm font-semibold transition",
              cat === c
                ? "border-brand bg-brand text-white"
                : "border-neutral-300 text-brand hover:border-gold hover:text-gold"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <a
            key={p.slug}
            href={blogUrl(p.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-brand-light">
              <Image
                src={blogThumb(p.thumb)}
                alt={p.title}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-white">
                {p.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="flex items-center gap-1.5 text-xs text-neutral-500">
                <CalendarDays size={14} className="text-gold" />
                {dateFmt.format(new Date(p.date))}
              </p>
              <h2 className="mt-2 line-clamp-3 text-base font-semibold leading-snug text-brand">
                {p.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                Read article <ArrowUpRight size={16} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}