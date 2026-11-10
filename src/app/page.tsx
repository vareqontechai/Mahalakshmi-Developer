import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import UpcomingTeaser from "@/components/home/UpcomingTeaser";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Amenities from "@/components/home/Amenities";
import CtaBanner from "@/components/home/CtaBanner";
import AboutSection from "@/components/home/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <AboutSection />
      <FeaturedProjects />
      <UpcomingTeaser />
      <WhyChooseUs />
      <Amenities />
      <CtaBanner />
    </>
  );
}