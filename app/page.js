import Beams from "@/components/Beams";
import Header from "@/components/Header";
import AboutUs1 from "@/components/mvpblocks/about-us-1";
import Faq3 from "@/components/mvpblocks/faq-3";
import TestimonialsCarousel from "@/components/mvpblocks/testimonials-carousel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return <div>
    <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <Beams
        beamWidth={2}
        beamHeight={25}
        beamNumber={12}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      />
    </div>
    <Navbar />
    <Header />
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-180 bg-linear-to-b from-transparent to-black z-0" />
    <AboutUs1 />
    <TestimonialsCarousel />
    <Faq3 />
  </div>
}
