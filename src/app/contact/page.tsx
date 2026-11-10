import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free site visit or ask about plots in Nagpur. Call, WhatsApp or send us an enquiry.",
};

export default function ContactPage() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello, I'd like details about your plots in Nagpur."
  )}`;

  const cards = [
    { icon: Phone, title: "Call us", value: site.phone, href: site.phoneHref },
    { icon: MessageCircle, title: "WhatsApp", value: "Chat with us", href: wa, external: true },
    { icon: Mail, title: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, title: "Visit us", value: site.address },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Book a free site visit or ask us anything about our projects."
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
          <div className="space-y-4 lg:col-span-2">
            {cards.map(({ icon: Icon, title, value, href, external }) => {
              const body = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-gold">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-brand">{title}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-neutral-600">{value}</span>
                  </span>
                </>
              );
              const cls =
                "flex gap-4 rounded-2xl border border-neutral-200 p-5 transition hover:border-gold hover:shadow-md";
              return href ? (
                <a
                  key={title}
                  href={href}
                  className={cls}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {body}
                </a>
              ) : (
                <div key={title} className={cls}>
                  {body}
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-cream p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="text-xl font-semibold text-brand">Send us an enquiry</h2>
            <p className="mb-6 mt-1 text-sm text-neutral-600">
              Share your details and we will call you back.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-80 overflow-hidden rounded-2xl border border-neutral-200 sm:h-96">
            <iframe
              title="Mahalaxmi Infra head office location"
              src="https://maps.google.com/maps?q=Laxmi%20Vihar%20Complex%20No.3%20Somalwada%20Nagpur&z=15&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-center text-xs text-neutral-500">
            Map shows the Mahalaxmi Infra head office area.
          </p>
        </div>
      </section>
    </>
  );
}