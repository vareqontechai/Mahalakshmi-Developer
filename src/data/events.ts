import type { GalleryImage } from "@/types/project";

export interface EventItem {
  slug: string;
  title: string;
  summary: string;
  images: GalleryImage[];
}

const BASE = "https://mahalaxmiinfra.in/images/event_gallery/";

const gallery = (title: string, files: string[]): GalleryImage[] =>
  files.map((f, i) => ({ src: BASE + f, alt: `${title} - photo ${i + 1}` }));

export const events: EventItem[] = [
  {
    slug: "diwali-milan",
    title: "Diwali Milan",
    summary: "Photos from the Mahalaxmi Group Diwali Milan celebration.",
    images: gallery("Diwali Milan", [
      "1750767169_gallery_4H5A8144.jpg",
      "1750767169_gallery_4H5A8170.jpg",
      "1750767169_gallery_4H5A8316.jpg",
      "1750767169_gallery_4H5A8389.jpg",
      "1750767169_gallery_4H5A8393.jpg",
      "1750767169_gallery_4H5A8393-1.jpg",
      "1750767169_gallery_4H5A8444.jpg",
      "1750767169_gallery_4H5A8444-1.jpg",
      "1750767169_gallery_4H5A8489.jpg",
      "1750767169_gallery_4H5A8493.jpg",
      "1750767169_gallery_4H5A8516.jpg",
      "1750767169_gallery_4H5A8779.jpg",
      "1750767169_gallery_4H5A8846.jpg",
      "1750814513_gallery_4H5A8100.jpg",
    ]),
  },
  {
    slug: "mega-conference-goa-summit-2021",
    title: "Mega Conference Goa Summit 2021",
    summary: "Moments from the Mahalaxmi Group mega conference in Goa.",
    images: gallery("Goa Summit 2021", [
      "1750766263_gallery_Goa-Sumit-11-1024x682-1.jpg",
      "1750766298_gallery_Goa-Sumit-12-1024x682-1.jpg",
      "1750766507_gallery_Goa-Sumit-1-1-1024x682-1.jpg",
      "1750766507_gallery_Goa-Sumit-1-1024x682-1.jpg",
      "1750766507_gallery_Goa-Sumit-3-1024x682-1.jpg",
      "1750766507_gallery_Goa-Sumit-4-1024x682-1.jpg",
      "1750766507_gallery_Goa-Sumit-7-1024x682-1.jpg",
      "1750766507_gallery_Goa-Sumit-9-1024x682-1.jpg",
      "1750815451_gallery_Goa-Sumit-10-1024x683-1.jpg",
    ]),
  },
  {
    slug: "e-connect-bank-meet",
    title: "E Connect Bank Meet",
    summary: "Photos from the E Connect bank meet.",
    images: gallery("E Connect Bank Meet", [
      "1750814071_gallery_E-connect-Bank-Meet-2-1024x477-1.jpg",
      "1750814071_gallery_E-connect-Bank-Meet-3-1024x477-1.jpg",
      "1750814071_gallery_E-connect-Bank-Meet-4-1024x477-1.jpg",
      "1750814071_gallery_E-connect-Bank-Meet-5-1024x477-1.jpg",
      "1750814071_gallery_E-connect-Bank-Meet-6-1024x477-1.jpg",
      "1750814071_gallery_E-connect-Bank-Meet-7-1024x477-1.jpg",
      "1750814071_gallery_E-connect-Bank-Meet-8-1024x477-1.jpg",
      "1750814230_gallery_E-connect-Bank-Meet-1024x455-1.jpg",
    ]),
  },
  {
    slug: "e-connect-covid-help",
    title: "E Connect Covid Help",
    summary: "Photos from the E Connect Covid help initiative.",
    images: gallery("E Connect Covid Help", [
      "1750766764_gallery_E-connect-covid-help-2-1024x477-1.jpg",
      "1750766764_gallery_E-connect-covid-help-3-1024x477-1.jpg",
      "1750768320_gallery_E-connect-covid-help-1-1024x477-1.jpg",
    ]),
  },
  {
    slug: "other-events",
    title: "Other Events",
    summary: "More moments from Mahalaxmi Group gatherings and activities.",
    images: gallery("Other events", [
      "1750816940_gallery_DSC_5823.jpg",
      "1750816940_gallery_DSC_5829.jpg",
      "1750816940_gallery_DSC_5833.jpg",
      "1750816940_gallery_DSC_5836.jpg",
      "1750816940_gallery_DSC_5864.jpg",
      "1750816940_gallery_DSC_5864-1.jpg",
      "1750816940_gallery_DSC_5879.jpg",
      "1750816940_gallery_DSC_5897.jpg",
      "1750816940_gallery_DSC_5901.jpg",
      "1750816940_gallery_DSC_5907.jpg",
      "1750816940_gallery_DSC_5912.jpg",
      "1750816940_gallery_DSC_5914.jpg",
      "1750816940_gallery_DSC_5915.jpg",
      "1750816940_gallery_DSC_5920.jpg",
      "1750816940_gallery_DSC_5931.jpg",
      "1750816940_gallery_DSC_5967.jpg",
      "1750816940_gallery_DSC_5983.jpg",
      "1750816940_gallery_DSC_5984.jpg",
      "1750816940_gallery_DSC_5990.jpg",
      "1750816940_gallery_DSC_5998.jpg",
    ]),
  },
];

export const getEventBySlug = (slug: string) => events.find((e) => e.slug === slug);