import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import ProjectGallery from "@/components/projects/ProjectGallery";
import CtaBanner from "@/components/home/CtaBanner";
import { events, getEventBySlug } from "@/data/events";

type Params = { params: Promise<{ slug: string }> };

export const instant = false;

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const e = getEventBySlug(slug);
  return e ? { title: e.title, description: e.summary } : {};
}

export default async function EventPage({ params }: Params) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <>
      <PageHeader
        title={event.title}
        subtitle={event.summary}
        crumbs={[{ label: "Events", href: "/events" }, { label: event.title }]}
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectGallery images={event.images} />
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-xs text-neutral-500">Photos courtesy of Mahalaxmi Infra.</p>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-gold"
            >
              <ArrowLeft size={16} /> All events
            </Link>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}