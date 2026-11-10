import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Gem, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  { icon: ShieldCheck, title: "Trust", text: "Sanctioned, RERA-registered layouts." },
  { icon: Gem, title: "Quality", text: "Modern infrastructure and amenities." },
  { icon: HeartHandshake, title: "Customer first", text: "Guidance at every step." },
];

export default function AboutSection() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Image with offset gold frame */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-gold" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-light">
            <Image
              src="/projects/mahalaxmi-nagar-41/site-03.jpg"
              alt="Construction in progress at Mahalaxmi Nagar 41"
              fill
              sizes="(min-width:1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <div className="text-left [&>div]:mx-0 [&>div]:text-left">
            <SectionHeading
              eyebrow="About Us"
              title="A tradition of trust in Nagpur"
            />
          </div>
          <p className="mt-6 leading-relaxed text-neutral-700">
            Mahalaxmi Infra is one of Central India&rsquo;s leading names in
            sanctioned plotted development, headquartered in Nagpur. Since 2010,
            when it became one of the earliest companies to launch projects
            under the merged NATP&ndash;NIT scheme, it has raised the standard
            of plotted communities with modern infrastructure and thoughtful
            amenities.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-700">
            We don&rsquo;t just develop plots. We create opportunities, build
            communities and deliver lasting value. As an authorized partner, we
            guide you from your first site visit to the final paperwork.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-gold">
                  <Icon size={20} />
                </div>
                <h3 className="mt-3 font-semibold text-brand">{title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{text}</p>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className="mt-9 inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gold-dark"
          >
            Explore Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
}