"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

import Beams from "@/components/Beams";
import Header from "@/components/Header";
import CoverText from "@/components/CoverText";
import { HeroProject } from "@/components/Hero-project";
import AboutUs1 from "@/components/mvpblocks/about-us-1";
import Faq3 from "@/components/mvpblocks/faq-3";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import TestimonialsCarousel from "@/components/mvpblocks/testimonials-carousel";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {loading && <Loading />}

      <div
        className={`transition-opacity duration-700 ${loading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <div
          className="absolute inset-0 -z-10 h-screen"
        >
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

        <Header />
        <CoverText />
        <AboutUs1 />
        <HeroProject />
        <TestimonialsCarousel />
        <Faq3 />
        <Footer4Col />
      </div>
    </div>
  );
}
