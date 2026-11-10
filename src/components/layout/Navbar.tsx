"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";
import { site, navLinks } from "@/data/site";
import { useEnquiry } from "@/components/enquiry/EnquiryProvider";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { openEnquiry } = useEnquiry();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Mahalaxmi Infra - A Tradition of Trust"
            width={900}
            height={651}
            loading="eager"
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 xl:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "text-sm font-medium tracking-wide transition-colors hover:text-gold",
                isActive(l.href) ? "text-gold" : "text-brand"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-brand"
          >
            <Phone size={16} /> {site.phone}
          </a>
          <button
            type="button"
           onClick={() => openEnquiry()}
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-dark cursor-pointer"
          >
            Book Site Visit
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="text-brand xl:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-neutral-200 bg-white xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "border-b border-neutral-100 py-3 text-base font-medium",
                  isActive(l.href) ? "text-gold" : "text-brand"
                )}
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openEnquiry();
              }}
              className="mt-4 rounded-full bg-gold px-5 py-3 text-center font-semibold text-white"
            >
              Book Site Visit
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}