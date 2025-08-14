import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import Services from "@/components/ui/Services";
import About from "@/components/ui/About"
import Contact from '@/components/ui/Contact'
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
