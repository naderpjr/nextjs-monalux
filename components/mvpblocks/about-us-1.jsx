"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BorderBeam } from "@/components/ui/border-beam";
import { CardHoverEffect } from "@/components/ui/pulse-card";
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react";
import GradientBarsPreview from "./gradient-bars-preview";
const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};
const defaultValues = [
  {
    title: "Creative Agency",
    description:
      "We design and develop websites with a strong focus on creativity, solving real problems through clean visuals and smart technical decisions.",
    icon: "Lightbulb",
  },
  {
    title: "Fully Collaboration",
    description:
      "We work closely with our clients to fully understand their goals and turn their ideas into functional, well-crafted digital products.",
    icon: "Users",
  },
  {
    title: "Full-Stack Projects",
    description:
      "From frontend details to backend logic, we pay close attention to quality, performance, and long-term maintainability.",
    icon: "Sparkles",
  },
  {
    title: "Our Mission",
    description:
      "Our goal is to build websites that are not only beautiful, but practical, effective, and valuable for real users and businesses.",
    icon: "Globe",
  },
];

export default function AboutUs1() {
  const aboutData = {
    title: "Our Story",
    subtitle: "— A Creative Web Development Agency Based in Afghanistan —",

    mission:
      "Our mission is to design and develop modern, beautiful, and functional websites tailored to each client’s needs. We aim to deliver clean design, solid development, and reliable full-stack solutions that help businesses grow online.",

    vision:
      "We envision a digital space where businesses of any size can have access to well-designed, high-quality websites that are fast, user-friendly, and built with care without unnecessary complexity or exaggeration.",

    values: defaultValues,
    className: "relative overflow-hidden py-20",
  };
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  return (

    <section className="relative w-full overflow-hidden pt-40 bg-black">
      {/* <GradientBarsPreview /> */}


      <div className="relative z-10 container mx-auto px-4 md:px-6">

        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 text-center">
            <h2 className="from-primary/90 to-primary/70 bg-linear-to-r bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-4xl">
              Our Core Values
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              const IconComponent = iconComponents[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant="burgundy"
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}