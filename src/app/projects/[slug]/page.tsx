import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Check, Phone, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import EnquiryButton from "@/components/ui/EnquiryButton";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { projects, getProjectBySlug } from "@/data/projects";
import { site } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.name}: ${p.type} at ${p.location}. ${p.tagline}`,
    openGraph: { images: [p.coverImage] },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const statusLabel = { ongoing: "Ongoing", upcoming: "Upcoming", completed: "Completed" }[project.status];
  const plan = project.masterPlan ?? project.layoutPlan;
  const planLabel = project.masterPlan ? "Master plan" : "Layout plan";
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello, I'm interested in ${project.name}. Please share details.`
  )}`;

  const facts = [
    { label: "Project type", value: project.type },
    { label: "Location", value: project.location },
    project.totalPlots ? { label: "Total plots", value: String(project.totalPlots) } : null,
    project.plotSize ? { label: "Plot sizes", value: project.plotSize } : null,
    { label: "Status", value: statusLabel },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <PageHeader
        title={project.name}
        subtitle={project.tagline}
        crumbs={[{ label: "Projects", href: "/projects" }, { label: project.name }]}
      />

      {/* Cover + key facts */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-brand-light">
            <Image
              src={project.coverImage}
              alt={project.name}
              fill
              priority
              sizes="(min-width:1280px) 1200px, 100vw"
              className="object-cover"
            />
            {project.coverType === "render" && (
              <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-0.5 text-[10px] text-white">
                Artist&rsquo;s impression
              </span>
            )}
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200 p-5 sm:grid-cols-3 lg:grid-cols-5">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs uppercase tracking-wider text-neutral-500">{f.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-brand">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Overview + sticky enquiry card */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-brand">Overview</h2>
            <p className="mt-4 leading-relaxed text-neutral-700">{project.description}</p>

            {project.address && (
              <p className="mt-5 flex gap-2 text-sm text-neutral-600">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                {project.address}
              </p>
            )}

            <h3 className="mt-10 text-lg font-semibold text-brand">Highlights</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-neutral-700">
                  <Check size={18} className="mt-0.5 shrink-0 text-gold" />
                  {h}
                </li>
              ))}
            </ul>

            {project.nearby && (
              <>
                <h3 className="mt-10 text-lg font-semibold text-brand">Nearby connectivity</h3>
                <ul className="mt-4 divide-y divide-neutral-200 rounded-xl border border-neutral-200">
                  {project.nearby.map((n) => (
                    <li key={n.place} className="flex justify-between px-4 py-3 text-sm">
                      <span className="text-neutral-700">{n.place}</span>
                      <span className="font-semibold text-brand">{n.time}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-neutral-200 bg-cream p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">
                {project.status === "upcoming" ? "Register your interest" : "Interested in this project?"}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Get pricing, availability and a free site visit.
              </p>
              <EnquiryButton
                project={project.name}
                className="mt-5 w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-dark"
              >
                {project.status === "upcoming" ? "Register Interest" : "Book Site Visit"}
              </EnquiryButton>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-brand px-4 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
                >
                  <Phone size={16} /> Call
                </a>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-brand px-4 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
              {project.reraNo && (
                <p className="mt-5 flex gap-2 border-t border-neutral-200 pt-4 text-xs text-neutral-600">
                  <ShieldCheck size={16} className="shrink-0 text-brand" />
                  <span>MahaRERA: {project.reraNo}</span>
                </p>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Amenities */}
      {project.amenities.length > 0 && (
        <section className="bg-brand-light/60 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Amenities" title="What you get" />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.amenities.map((a) => (
                <li key={a} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm text-neutral-700 shadow-sm">
                  <Check size={18} className="shrink-0 text-gold" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Real site photos */}
      {project.siteProgress && project.siteProgress.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Site Progress"
              title="Photos from the site"
              subtitle="Real photographs of construction under way at the project."
            />
            <div className="mt-10">
              <ProjectGallery images={project.siteProgress} aspect="portrait" />
            </div>
          </div>
        </section>
      )}

      {/* Render gallery */}
      {project.gallery.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Gallery"
              title="Project visuals"
              subtitle="Images are artist's impressions for representation only."
            />
            <div className="mt-10">
              <ProjectGallery images={project.gallery} />
            </div>
          </div>
        </section>
      )}

      {/* Plan */}
      {plan && (
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Plan" title={planLabel} />
            <a
              href={plan}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 block overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <Image
                src={plan}
                alt={`${project.name} ${planLabel.toLowerCase()}`}
                width={2600}
                height={1200}
                sizes="(min-width:1280px) 1200px, 100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </a>
            <p className="mt-4 text-center">
              <a
                href={plan}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-gold"
              >
                Open full-size plan <ExternalLink size={14} />
              </a>
            </p>
          </div>
        </section>
      )}

      {/* Other projects */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="More Projects" title="You may also like" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-relaxed text-neutral-500">
            Images, plans and amenities are for representation only and subject to
            change. Please verify project registration on the MahaRERA website.
          </p>
        </div>
      </section>
    </>
  );
}