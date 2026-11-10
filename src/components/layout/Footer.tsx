import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site, navLinks } from "@/data/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Image
            src="/logo.png"
            alt="Mahalaxmi Infra"
            width={900}
            height={651}
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-600">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-neutral-600 transition hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{site.address}</span>
            </li>
          </ul>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-brand/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs leading-relaxed text-neutral-500 sm:px-6 lg:px-8">
          <p>
            {site.partnerNote} MahaRERA Agent No: {site.reraAgentNo}
          </p>
          <p className="mt-1">
            Images, plans and amenities shown are for representation only and
            subject to change. Please verify project details on the MahaRERA
            website. © {site.copyrightYear} {site.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}