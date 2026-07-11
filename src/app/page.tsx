import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { EventsCarousel } from "@/components/EventsCarousel";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PrivateEvents } from "@/components/PrivateEvents";
import { GalleryMarquee } from "@/components/GalleryMarquee";
import { DividerMonogram } from "@/components/DividerMonogram";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col bg-background">
        <Hero />
        <EventsCarousel />
        <ExperienceSection />
        <PrivateEvents />
        <GalleryMarquee />
        <DividerMonogram />
      </main>
      <Footer />
    </>
  );
}
