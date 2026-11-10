import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets,
  Zap,
  Lightbulb,
  Route,
  ShieldCheck,
  CloudRain,
  Recycle,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import AmenityBlock from "@/components/amenities/AmenityBlock";
import CtaBanner from "@/components/home/CtaBanner";
import { amenityGroups } from "@/data/amenities";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Clubhouse, sports courts, kids' play areas, gardens and complete infrastructure across Mahalaxmi Infra's plotted developments in Nagpur.",
};

const infrastructure = [
  { icon: Droplets, label: "Water pipeline & drainage" },
  { icon: Zap, label: "Underground electric network & transformer" },
  { icon: Lightbulb, label: "Street lighting" },
  { icon: Route, label: "Internal cement roads" },
  { icon: LayoutGrid, label: "Paver blocks" },
  { icon: ShieldCheck, label: "Open space compound wall" },
  { icon: CloudRain, label: "Rain water harvesting" },
  { icon: Recycle, label: "Sewage treatment plant" },
];

export default function AmenitiesPage() {
  const withAmenities = projects.filter((p) => p.amenities.length > 0);

  return (
    <>
      <PageHeader
        title="Amenities"
        subtitle="Thoughtfully planned clubhouses, sports spaces and green open areas, built for every age group."
        crumbs={[{ label: "Amenities" }]}
      />

      {/* Themed blocks */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          {amenityGroups.map((g, i) => (
            <AmenityBlock key={g.id} group={g} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Complete layout infrastructure"
            subtitle="Beyond the amenities, each layout is planned with the essential facilities in place."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {infrastructure.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-gold">
                  <Icon size={22} />
                </div>
                <p className="mt-4 text-sm font-medium text-brand">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By project */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="By Project"
            title="Amenities in each project"
            subtitle="Every project has its own amenity plan. Here is a quick look at what each one offers."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {withAmenities.map((p) => (
              <div key={p.slug} className="flex flex-col rounded-2xl border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-brand">{p.shortName}</h3>
                <p className="text-xs text-neutral-500">{p.name}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-neutral-700">
                  {p.amenities.slice(0, 5).map((a) => (
                    <li key={a}>&bull; {a}</li>
                  ))}
                  {p.amenities.length > 5 && (
                    <li className="font-medium text-gold">
                      + {p.amenities.length - 5} more
                    </li>
                  )}
                </ul>
                <Link
                  href={`/projects/${p.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition hover:text-gold"
                >
                  View project <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-relaxed text-neutral-500">
            Images shown are artist&rsquo;s impressions of Mahalaxmi Nagar 51 (Anaya).
            Amenities vary by project and are subject to change. Please confirm the
            amenities of your chosen project before booking.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}