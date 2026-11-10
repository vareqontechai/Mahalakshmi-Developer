import Image from "next/image";
import { Star, Quote, Play } from "lucide-react";
import { YOUTUBE_CHANNEL, type Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  if (t.videoThumb) {
    return (
      <a
        href={t.videoUrl ?? YOUTUBE_CHANNEL}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative aspect-video bg-brand-light">
          <Image
            src={t.videoThumb}
            alt={`Video testimonial by ${t.name}`}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/40">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white shadow-lg">
              <Play size={28} className="ml-1 fill-white" />
            </span>
          </span>
        </div>
        <div className="p-5">
          <p className="font-semibold text-brand">{t.name}</p>
          <p className="mt-1 text-xs text-neutral-500">
            {t.source ?? "Customer"} &middot; Watch on YouTube
          </p>
        </div>
      </a>
    );
  }

  const initial = t.name.trim().charAt(0).toUpperCase();
  return (
    <figure className="relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      {t.sample && (
        <span className="absolute right-4 top-4 rounded-full bg-red-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-red-700">
          Sample
        </span>
      )}
      <Quote size={28} className="text-gold" />
      {t.rating && (
        <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} size={16} className={n <= t.rating! ? "fill-gold text-gold" : "text-neutral-300"} />
          ))}
        </div>
      )}
      {t.quote && (
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
      )}
      <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-base font-semibold text-gold">
          {initial}
        </span>
        <span>
          <span className="block text-sm font-semibold text-brand">{t.name}</span>
          <span className="block text-xs text-neutral-500">
            {[t.project, t.location].filter(Boolean).join(" · ")}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}