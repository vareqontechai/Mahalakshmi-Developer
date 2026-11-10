"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/types/project";

interface Props {
  images: GalleryImage[];
  aspect?: "landscape" | "portrait";
}

export default function ProjectGallery({ images, aspect = "landscape" }: Props) {
  const [index, setIndex] = useState<number | null>(null);
  const total = images.length;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + total) % total)),
    [total]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % total)),
    [total]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, prev, next]);

  if (total === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className={`group relative overflow-hidden rounded-xl bg-brand-light ${
              aspect === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]"
            }`}
            aria-label={`Open photo: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width:768px) 33vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-left text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
              {img.alt}
            </span>
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X size={24} />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous photo"
                className="absolute left-3 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-6"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next photo"
                className="absolute right-3 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-6"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[78vh] w-[90vw] max-w-5xl">
              <Image
                src={images[index].src}
                alt={images[index].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-3 text-sm text-white/80">
              {images[index].alt} &middot; {index + 1} / {total}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}