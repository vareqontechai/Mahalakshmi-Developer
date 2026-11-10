import { FileCheck2, Landmark, FileText, Scale } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: FileCheck2,
    title: "Clear title property",
    text: "We deal only in clear title properties, and you can check every document related to the plot.",
  },
  {
    icon: Landmark,
    title: "Loan facility",
    text: "Tie-ups with nationalized and private banks help you with loans on every project.",
  },
  {
    icon: FileText,
    title: "Document assistance",
    text: "We explain and provide each document required for buying your plot.",
  },
  {
    icon: Scale,
    title: "Legal help",
    text: "A legal team helps you understand the entire legal process of purchasing a plot.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Buy with confidence"
          subtitle="Whether you are investing for returns or planning your dream home, we make the process simple and transparent."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-neutral-200 p-6 transition hover:border-gold hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}