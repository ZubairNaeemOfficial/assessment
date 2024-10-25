import Navbar from "@/components/Navbar/navbar";
//@ts-ignore
import Contact from "@/Components/Home.tsx/Contact";
//@ts-ignore
import HeroSection from "@/Components/Home.tsx/HeroSection";
//@ts-ignore
import PreviousWorks from "@/Components/Home.tsx/MakingProcess";
//@ts-ignore
import VedioProduction from "@/Components/Home.tsx/VideoProduction";
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
