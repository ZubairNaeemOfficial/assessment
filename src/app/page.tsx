import Contact from "@/components/Home.tsx/Contact";
import HeroSection from "@/components/Home.tsx/HeroSection";
import PreviousWorks from "@/components/Home.tsx/MakingProcess";
import VedioProduction from "@/components/Home.tsx/VideoProduction";
import Navbar from "@/components/Navbar/navbar";

export default function Home() {
  return (
    <>
  <Navbar/>
  <HeroSection/>
  <VedioProduction/>
    <PreviousWorks/>
    
    <Contact/>
    </>
  );
}
