import Image from "next/image";
import { Check } from "lucide-react";
import type { AmenityGroup } from "@/data/amenities";

export default function AmenityBlock({
  group,
  reverse = false,
}: {
  group: AmenityGroup;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-light shadow-md">
          <Image
            src={group.image}
            alt={group.imageAlt}
            fill
            sizes="(min-width:1024px) 45vw, 92vw"
            className="object-cover"
          />
          <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-0.5 text-[10px] text-white">
            Artist&rsquo;s impression &middot; Mahalaxmi Nagar 51
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-brand sm:text-3xl">{group.title}</h3>
        <div className="mt-3 h-1 w-14 rounded bg-gold" />
        <p className="mt-5 leading-relaxed text-neutral-600">{group.intro}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {group.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-neutral-700">
              <Check size={18} className="mt-0.5 shrink-0 text-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}