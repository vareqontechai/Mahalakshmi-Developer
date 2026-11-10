export type BlogCategory =
  | "Documents & Legal"
  | "NMRDA & RERA"
  | "Locations & Projects"
  | "Loans"
  | "Investing";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  category: BlogCategory;
  thumb: string; // filename on the developer's server
}

export const BLOG_HOME = "https://mahalaxmiinfra.in/blogs";
export const blogUrl = (slug: string) => `https://mahalaxmiinfra.in/blog/${slug}`;
export const blogThumb = (file: string) =>
  encodeURI(`https://mahalaxmiinfra.in/images/blogs_images/${file}`);

export const blogCategories: BlogCategory[] = [
  "Documents & Legal",
  "NMRDA & RERA",
  "Locations & Projects",
  "Loans",
  "Investing",
];

export const blogs: BlogPost[] = [
  {
    slug: "8a-extract-maharashtra-land-record",
    title: "8A Extract in Maharashtra: Meaning, Uses and What Land Buyers Should Verify",
    excerpt: "What Village Form 8A is, where it fits in Maharashtra's land records, and what buyers should check.",
    date: "2026-09-12",
    category: "Documents & Legal",
    thumb: "1789212765_thumb_8A extract maharashtra thumbnail.webp",
  },
  {
    slug: "property-card-vs-7-12-extract-maharashtra",
    title: "Property Card vs 7/12 Extract in Maharashtra: What Property Buyers Need to Know",
    excerpt: "How a Property Card differs from a 7/12 Extract, and which record applies to your plot.",
    date: "2026-09-09",
    category: "Documents & Legal",
    thumb: "1789212559_thumb_property card vs 712 extract thumbnail.webp",
  },
  {
    slug: "nmrda-vs-rera-plots-nagpur",
    title: "NMRDA Approval vs MahaRERA Registration: What Plot Buyers in Nagpur Need to Know",
    excerpt: "NMRDA sanction and MahaRERA registration do different jobs. Here is what each means for a buyer.",
    date: "2026-09-04",
    category: "NMRDA & RERA",
    thumb: "1788776448_thumb_NMRDA vs RERA for plot buyers thumbnail.webp",
  },
  {
    slug: "residential-plot-buying-checklist",
    title: "Residential Plot Buying Checklist: What to Verify Before You Buy in Nagpur",
    excerpt: "A four-part checklist of what to verify before buying a residential plot in Nagpur.",
    date: "2026-08-26",
    category: "Documents & Legal",
    thumb: "1787829007_thumb_Buying Checklist.jpg",
  },
  {
    slug: "how-to-check-nmrda-approved-plots",
    title: "How to Check if a Plot in Nagpur is NMRDA Approved (Step-by-Step)",
    excerpt: "Step-by-step guidance on confirming a layout's NMRDA approval before you commit.",
    date: "2026-08-20",
    category: "NMRDA & RERA",
    thumb: "1787374634_thumb_How to check plots NMRDA.webp",
  },
  {
    slug: "nmrda-approved-vs-non-approved-plots",
    title: "NMRDA Approved vs Non-Approved Plots: What's the Real Difference?",
    excerpt: "The practical difference between plots in sanctioned layouts and plots without approval.",
    date: "2026-08-12",
    category: "NMRDA & RERA",
    thumb: "1787317241_thumb_NMRDA Approved Plots.webp",
  },
  {
    slug: "what-is-nmrda-full-form",
    title: "What is NMRDA? Full Form, Role & Why It Matters for Property Buyers",
    excerpt: "The full form of NMRDA, its role in planned development, and why it matters when buying property.",
    date: "2026-08-04",
    category: "NMRDA & RERA",
    thumb: "1787316507_thumb_What is NMRDA.webp",
  },
  {
    slug: "7-12-extract-satbara-utara-explained",
    title: "7/12 Utara Online Maharashtra: How to Check and Download Satbara Extract",
    excerpt: "How to read and download the 7/12 (Satbara) extract online in Maharashtra.",
    date: "2026-07-30",
    category: "Documents & Legal",
    thumb: "1785758700_thumb_7 12 guide thumbnail.webp",
  },
  {
    slug: "gumgaon-nagpur-locality-guide",
    title: "Gumgaon, Nagpur: Complete Locality Guide for Plot Buyers",
    excerpt: "A locality guide to Gumgaon in south-west Nagpur, where Mahalaxmi Nagar 41 is located.",
    date: "2026-07-29",
    category: "Locations & Projects",
    thumb: "1785758515_thumb_Gumgaon Nagpur locality guide thumbnail.webp",
  },
  {
    slug: "nagpur-metro-phase-2",
    title: "Nagpur Metro Phase 2: How It Will Impact Real Estate Prices Along the Route",
    excerpt: "How the new metro corridors may affect real estate along their routes.",
    date: "2026-07-21",
    category: "Locations & Projects",
    thumb: "1784978021_thumb_Nagpur metro phase 2 thumbnail.webp",
  },
  {
    slug: "mihan-nagpur-keeps-attracting-investors",
    title: "MIHAN Nagpur: Why This Zone Keeps Attracting Investors",
    excerpt: "Why the MIHAN zone continues to draw investor interest.",
    date: "2026-07-07",
    category: "Locations & Projects",
    thumb: "1783760601_thumb_MIHAN nagpur thumbnail.webp",
  },
  {
    slug: "plot-vs-flat",
    title: "Plot vs Flat: Which Investment is Better for Your Future?",
    excerpt: "Weighing a plot against a flat as a long-term investment.",
    date: "2026-05-28",
    category: "Investing",
    thumb: "1780249248_thumb_plot vs flat thumbnail.webp",
  },
  {
    slug: "plot-loan-vs-home-loan-difference",
    title: "Plot Loan vs Home Loan: What is the Difference?",
    excerpt: "What separates a plot loan from a home loan, and how to choose between them.",
    date: "2026-05-26",
    category: "Loans",
    thumb: "1780249145_thumb_plot loan vs home loan thumbnail.webp",
  },
  {
    slug: "home-loan-for-plot-purchase-in-nagpur-everything-you-need-to-know",
    title: "Home Loan for Plot Purchase in Nagpur: Everything You Need to Know",
    excerpt: "Can you get a bank loan to buy a plot? What first-time buyers should know.",
    date: "2026-03-18",
    category: "Loans",
    thumb: "1773990481_thumb_Mahalaxmi Blog featured images  (1).png",
  },
  {
    slug: "inside-mahalaxmi-nagar-41-everything-you-need-to-know-about-our-gumgaon-project",
    title: "Inside Mahalaxmi Nagar 41: Everything You Need to Know About Our Gumgaon Project",
    excerpt: "A closer look at Mahalaxmi Nagar 41, the NIT/NMRDA-sanctioned layout at Gumgaon.",
    date: "2026-03-26",
    category: "Locations & Projects",
    thumb: "1774525144_thumb_Inside Mahalaxmi Nagar 41.png",
  },
  {
    slug: "top-5-documents-to-check-while-purchasing-a-plot",
    title: "Top 5 Documents to Check While Purchasing a Plot",
    excerpt: "The key documents to check before you buy a plot.",
    date: "2025-07-01",
    category: "Documents & Legal",
    thumb: "1751384038_thumb_blognagpur.png",
  },
];