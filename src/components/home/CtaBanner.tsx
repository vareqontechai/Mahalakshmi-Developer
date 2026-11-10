import { Phone, MessageCircle } from "lucide-react";
import EnquiryButton from "@/components/ui/EnquiryButton";
import { site } from "@/data/site";

export default function CtaBanner() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello, I'd like details about your plots in Nagpur."
  )}`;

  return (
    <section className="bg-brand-dark">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to visit your future plot?
          </h2>
          <p className="mt-3 text-white/80">
            Book a free site visit and get all project details, pricing and
            payment options explained in person.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <EnquiryButton className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gold-dark">
            Book Free Site Visit
          </EnquiryButton>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand"
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}