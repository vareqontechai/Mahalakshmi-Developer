import {
  Building2,
  Waves,
  Dumbbell,
  Trophy,
  Baby,
  Flower2,
  Footprints,
  PartyPopper,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const amenities = [
  { icon: Building2, label: "Clubhouse" },
  { icon: Waves, label: "Swimming pool" },
  { icon: Dumbbell, label: "Gymnasium" },
  { icon: Trophy, label: "Sports courts" },
  { icon: Baby, label: "Kids' play area" },
  { icon: Flower2, label: "Yoga & meditation" },
  { icon: Footprints, label: "Jogging track" },
  { icon: PartyPopper, label: "Party lawn & banquet" },
];

export default function Amenities() {
  return (
    <section className="bg-brand-light/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Amenities"
          title="Designed for everyday living"
          subtitle="Landscaped open spaces, sports facilities and community clubhouses, planned for every age group."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-gold">
                <Icon size={26} />
              </div>
              <p className="mt-4 text-sm font-semibold text-brand">{label}</p>
            </div>
          ))}
          <div className="mt-6 text-center">
            <Link href="/amenities" className="text-sm font-semibold text-brand transition hover:text-gold">
              Explore all amenities &rarr;
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-neutral-500">
          Amenities vary by project. Please check each project page for details.
        </p>
      </div>
    </section>
  );
}