import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import BlogExplorer from "@/components/blogs/BlogExplorer";
import CtaBanner from "@/components/home/CtaBanner";
import { blogs, BLOG_HOME } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Guides for plot buyers in Nagpur: documents to check, NMRDA and RERA explained, locality guides and loan tips.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        title="Blogs & Guides"
        subtitle="Straight answers on documents, approvals, locations and loans, to help you buy a plot with confidence."
        crumbs={[{ label: "Blogs" }]}
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogExplorer posts={blogs} />
          <div className="mt-12 text-center">
            <p className="text-sm text-neutral-500">
              Articles are published by Mahalaxmi Infra and open on their website.
            </p>
            <a
              href={BLOG_HOME}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-gold"
            >
              View all articles <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}