export type ProjectStatus = "ongoing" | "upcoming" | "completed";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  shortName: string;
  status: ProjectStatus;
  type: string;
  location: string;
  tagline: string;
  description: string;
  totalPlots?: number;
  plotSize?: string;
  highlights: string[];
  amenities: string[];
  reraNo?: string;
  coverImage: string;
  gallery: GalleryImage[];
  siteProgress?: GalleryImage[];
  masterPlan?: string;
  layoutPlan?: string;
  teaser?: string;
  coverType?: "render" | "plan";
  address?: string;
  nearby?: { place: string; time: string }[];
}