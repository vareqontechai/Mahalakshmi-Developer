import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/home/CtaBanner";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Celebrations, conferences and community moments from the Mahalaxmi Infra family.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        subtitle="A glimpse into the people, culture and community behind Mahalaxmi Infra."
        crumbs={[{ label: "Events" }]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <Link
                key={e.slug}
                href={`/events/${e.slug}`}
                className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-light">
                  <Image
                    src={e.images[0].src}
                    alt={e.title}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                    <Camera size={14} /> {e.images.length} photos
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-brand">{e.title}</h2>
                  <p className="mt-2 text-sm text-neutral-600">{e.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-neutral-500">
            Event photos courtesy of Mahalaxmi Infra.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}