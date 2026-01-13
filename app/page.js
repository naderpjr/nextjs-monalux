

import CoverText from "@/components/CoverText";
import { CtaSection } from "@/components/Cta";
import Header from "@/components/Header";
import AboutUs1 from "@/components/mvpblocks/about-us-1";
import Faq3 from "@/components/mvpblocks/faq-3";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import TestimonialsCarousel from "@/components/mvpblocks/testimonials-carousel";
import Navbar from "@/components/Navbar";
import FlowMenuSection from "@/components/FlowingMenuSection";
import TextTitle from "@/components/TextTitle";
import OrbBg from "@/components/OrbBg";
import LightBg from "@/components/LightBg";


export default function Home() {
  return <div className="">
    <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1, background: '#000' }}>
      {/* <OrbBg /> */}
      {/* <LightBg /> */}
    </div>
    {/* <Navbar /> */}
    <CtaSection />
    <CoverText />
    <AboutUs1 />
    {/* <Header /> */}
    {/* <TextTitle /> */}
    <FlowMenuSection />
    <TestimonialsCarousel />
    <Faq3 />
    <Footer4Col />
  </div>
}
