import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}

export default function PageHeader({ title, subtitle, crumbs = [] }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gold" />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-white/70">
          <Link href="/" className="transition hover:text-gold">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight size={12} />
              {c.href ? (
                <Link href={c.href} className="transition hover:text-gold">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}