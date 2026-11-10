import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import EnquiryButton from "@/components/ui/EnquiryButton";
import CtaBanner from "@/components/home/CtaBanner";
import { getPublishedTestimonials, YOUTUBE_CHANNEL } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What our plot buyers say about their experience with us.",
};

export default function TestimonialsPage() {
  const items = getPublishedTestimonials();
  const hasSamples = items.some((t) => t.sample);

  return (
    <>
      <PageHeader
        title="Testimonials"
        subtitle="Words from families who trusted us with their plot."
        crumbs={[{ label: "Testimonials" }]}
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {hasSamples && (
            <p className="mb-10 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700">
              Development preview: these are sample entries and will not appear
              on the live website.
            </p>
          )}

          {items.length > 0 ? (
            <>
              <SectionHeading eyebrow="Happy Customers" title="Stories of trust" />
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((t) => (
                  <TestimonialCard key={t.id} t={t} />
                ))}
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-xl py-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-gold">
                <MessageCircle size={28} />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-brand">
                Customer stories coming soon
              </h2>
              <p className="mt-3 text-neutral-600">
                We are collecting feedback from our recent buyers. In the
                meantime, we would be happy to connect you with families who
                have already bought with us.
              </p>
              <EnquiryButton className="mt-6 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gold-dark">
                Talk to us
              </EnquiryButton>
            </div>
          )}
        </div>
        <p className="mt-10 text-center text-sm text-neutral-500">
          Video testimonials from Mahalaxmi Infra customers.{" "}
          <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand transition hover:text-gold">
            Watch more on YouTube
          </a>
        </p>
      </section>

      <CtaBanner />
    </>
  );
}