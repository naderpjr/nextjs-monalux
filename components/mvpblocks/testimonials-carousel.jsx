"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import GridLines from '@/components/GridLines';
const defaultTestimonials = [
  {
    text: "Monalux built a professional website for our business that truly represents us. The result exceeded our expectations.",
    name: "Ahmad Rahimi",
    role: "Business Owner",
  },
  {
    text: "After launching our website with Monalux, we noticed a clear increase in customer trust and inquiries.",
    name: "Fatima Akbari",
    role: "Online Store Owner",
  },
  {
    text: "The Monalux team delivered our website quickly and professionally. Communication was smooth from start to finish.",
    name: "Samiullah Noori",
    role: "Company Manager",
  },
  {
    text: "Our website looks modern, clean, and works perfectly on all devices. Exactly what our local market needed.",
    name: "Zahra Mohammadi",
    role: "Brand Manager",
  },
  {
    text: "Monalux didn’t just build a website for us — they helped us establish a strong and credible online presence.",
    name: "Hamidullah Safi",
    role: "Entrepreneur",
  },
  {
    text: "We are very satisfied with the quality, support, and attention to detail Monalux provided throughout the project.",
    name: "Maryam Qasemi",
    role: "Service Business Owner",
  },
];

export default function TestimonialsCarousel({
  testimonials = defaultTestimonials,
  title = "What our customers say",
  subtitle = "From concept to launch, we design and build high-quality websites tailored for real customers worldwide.",
  autoplaySpeed = 3000,
  className,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true,
  });
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplaySpeed);
    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, autoplaySpeed]);
  const allTestimonials = [...testimonials, ...testimonials];
  return (
    <section
      className={cn("relative bg-black overflow-hidden py-16 md:py-24", className)}>

      <GridLines />

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2),transparent_60%)]" />
        <div className="bg-primary/5 absolute top-1/4 left-1/4 h-32 w-32 rounded-full blur-3xl" />
        <div className="bg-primary/10 absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-12 text-center md:mb-16">
          <h1 className="from-foreground to-foreground/40 mb-4 bg-linear-to-b bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl py-6">
            {title}
          </h1>

          <motion.p
            className="text-muted-foreground px-3 mx-auto max-w-2xl text-base md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}>
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex justify-center px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-border  relative h-full w-[280] rounded-2xl border bg-linear-to-b p-6 shadow-md backdrop-blur-sm">
                  {/* Enhanced decorative gradients */}
                  <div className=" absolute  -top-3 right-3 -z-10 h-40 w-40 rounded-full bg-linear-to-b blur-md" />


                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-primary mb-4">
                    <div className="relative">
                      <Quote className="h-10 w-10 -rotate-180" />
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-foreground/90 relative mb-6 text-base leading-relaxed">
                    <span className="relative">{testimonial.text}</span>
                  </motion.p>

                  {/* Enhanced user info with animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="border-border/40 mt-auto flex flex-col gap-3 border-t pt-3">

                    <div className="flex flex-col">
                      <h4 className="text-foreground font-medium whitespace-nowrap">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <p className="text-primary/80 text-sm whitespace-nowrap">
                          {testimonial.username}
                        </p>
                        {testimonial.role && (
                          <>
                            <span className="text-muted-foreground shrink-0">
                              •
                            </span>
                            <p className="text-muted-foreground text-sm whitespace-nowrap">
                              {testimonial.role}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}