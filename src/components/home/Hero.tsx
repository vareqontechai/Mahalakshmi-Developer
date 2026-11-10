"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Landmark, MapPin } from "lucide-react";
import { useEnquiry } from "@/components/enquiry/EnquiryProvider";

export default function Hero() {
  const { openEnquiry } = useEnquiry();
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    // Respect "reduce motion" settings: show the poster image only
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    setVideoSrc(isMobile ? "/videos/hero-mobile.mp4" : "/videos/hero.mp4");
  }, []);

  return (
    <section className="relative isolate flex min-h-[calc(100svh-6rem)] items-center overflow-hidden bg-brand-dark">
      {/* Poster shows instantly, video plays over it */}
      <Image
        src="/images/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {videoSrc && (
        <video
          key={videoSrc}
          src={videoSrc}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      )}

      {/* Dark overlays so the text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/55 to-brand-dark/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold sm:text-sm">
            NIT / NMRDA Sanctioned Plots &middot; Nagpur
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Own a plot in Nagpur&rsquo;s fastest-growing corridor
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Premium plotted communities near the Samruddhi Expressway, planned
            around greenery, clubhouse amenities and long-term value.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gold-dark cursor-pointer"
            >
              Book Free Site Visit <ArrowRight size={16} />
            </button>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand"
            >
              View Projects
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/90">
            <li className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-gold" /> RERA registered projects
            </li>
            <li className="flex items-center gap-2">
              <Landmark size={18} className="text-gold" /> Bank loan assistance
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-gold" /> Near Samruddhi Expressway
            </li>
          </ul>
        </div>
      </div>

      <p className="absolute bottom-3 right-4 text-[11px] text-white/70">
        Visuals: Mahalaxmi Nagar 51 &ndash; Anaya (artist&rsquo;s impression)
      </p>
    </section>
  );
}