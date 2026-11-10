export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  project?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  quote?: string;
  videoThumb?: string;
  videoUrl?: string; // falls back to the YouTube channel
  source?: string;
  sample?: boolean; // sample entries never appear on the live site
}

export const YOUTUBE_CHANNEL =
  "https://www.youtube.com/channel/UC4bvBlUgF6CWV0B8M3P0vCQ";

const T = "https://mahalaxmiinfra.in/images/testimonials/";

export const testimonials: Testimonial[] = [
  {
    id: "jyotsna-hedau",
    name: "Jyotsna Hedau",
    source: "Mahalaxmi Infra customer",
    videoThumb: `${T}1751461243_video_thumbnail_jyotsna-hedau.png`,
  },
  {
    id: "girish-hedau",
    name: "Girish Hedau",
    source: "Mahalaxmi Infra customer",
    videoThumb: `${T}1751461037_video_thumbnail_girish-hedau.png`,
  },
  {
    id: "tejash-nichat",
    name: "Tejash Nichat",
    source: "Mahalaxmi Infra customer",
    videoThumb: `${T}1751461192_video_thumbnail_tejash-nichat.png`,
  },
  // { id: "name", name: "Name", location: "Nagpur", project: "Mahalaxmi Nagar 41", rating: 5, quote: "Their words, with permission." },
];

export function getPublishedTestimonials(): Testimonial[] {
  return process.env.NODE_ENV === "production"
    ? testimonials.filter((t) => !t.sample)
    : testimonials;
}