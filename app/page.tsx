// app/page.tsx
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ImpactSection from "./components/ImpactSection";
import ProjectsSection from "./components/ProjectsSection";
import DonationSection from "./components/DonationSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ImpactSection />
      <DonationSection />
      <GallerySection />
      <Footer />
    </main>
  );
}