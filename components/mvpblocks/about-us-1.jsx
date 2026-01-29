"use client";

import { CardHoverEffect } from "@/components/ui/pulse-card";
import { Globe, Users, Heart, Lightbulb, Sparkles } from "lucide-react";

const iconComponents = { Users, Heart, Lightbulb, Globe, Sparkles };

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
  return (
    <section className="relative w-full overflow-hidden pt-40 bg-black">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mb-24 text-center">
          <h2 className="from-primary/90 to-primary/70 bg-linear-to-r bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-4xl">
            Our Core Values
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm">
            The principles that guide everything we do and every decision we make.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {defaultValues.map((value) => {
            const IconComponent = iconComponents[value.icon];
            return (
              <CardHoverEffect
                key={value.title}
                icon={<IconComponent className="h-6 w-6" />}
                title={value.title}
                description={value.description}
                variant="burgundy"
                glowEffect={true}
                size="lg"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
