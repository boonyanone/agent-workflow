import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SkillHubTeaser from "@/components/SkillHubTeaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SkillHubTeaser />
      <Footer />
    </main>
  );
}
