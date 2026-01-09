
import Beams from "@/components/Beams";
import { CanvasCard } from "@/components/CanvasCard";
import CoverText from "@/components/CoverText";
import { CtaSection } from "@/components/Cta";
import CurvedText from "@/components/CurvedText";
import Header from "@/components/Header";
import { HeroProject } from "@/components/Hero-project";
import AboutUs1 from "@/components/mvpblocks/about-us-1";
import Faq3 from "@/components/mvpblocks/faq-3";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import TestimonialsCarousel from "@/components/mvpblocks/testimonials-carousel";
import Navbar from "@/components/Navbar";
import LiquidEther from '@/components/LiquidEther';
import FlowMenuSection from "@/components/FlowingMenuSection";
import TextTitle from "@/components/TextTitle";


export default function Home() {
  return <div className="">
    <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1, background: '#000' }}>
      <LiquidEther
        color0="#800020"
        color2="#800020"
      />
    </div>
    {/* <Navbar /> */}
    <Header />
    {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-180 bg-linear-to-b from-transparent to-black z-0" /> */}
    <CoverText />
    <AboutUs1 />
    <TextTitle />
    <FlowMenuSection />
    {/* <HeroProject /> */}
    <CtaSection />
    {/* <CanvasCard /> */}
    <TestimonialsCarousel />
    <Faq3 />
    <Footer4Col />
  </div>
}
