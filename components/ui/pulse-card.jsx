"use client";

import React from "react";
import { cn } from "@/lib/utils";
export const VARIANTS = {
  emerald: {
    accent: "rose-500",
    gradient: "from-rose-500/20 to-rose-500/0",
    shine:
      "205deg, transparent 0deg, hsl(160deg 95% 39%) 20deg, hsl(160deg 100% 85% / 0.3) 280deg",
    border: "rose-500/20",
    color: "rgb(244 63 94)",
  },
  blue: {
    accent: "blue-500",
    gradient: "from-blue-500/20 to-blue-500/0",
    shine:
      "205deg, transparent 0deg, hsl(220deg 95% 39%) 20deg, hsl(220deg 100% 85% / 0.3) 280deg",
    border: "blue-500/20",
    color: "rgb(244 63 94)",
  },
  purple: {
    accent: "purple-500",
    gradient: "from-purple-500/20 to-purple-500/0",
    shine:
      "205deg, transparent 0deg, hsl(280deg 95% 39%) 20deg, hsl(280deg 100% 85% / 0.3) 280deg",
    border: "purple-500/20",
    color: "rgb(244 63 94)",
  },
  amber: {
    accent: "amber-500",
    gradient: "from-amber-500/20 to-amber-500/0",
    shine:
      "205deg, transparent 0deg, hsl(40deg 95% 39%) 20deg, hsl(40deg 100% 85% / 0.3) 280deg",
    border: "amber-500/20",
    color: "rgb(244 63 94)",
  },
  rose: {
    accent: "rose-500",
    gradient: "from-rose-500/20 to-rose-500/0",
    shine:
      "205deg, transparent 0deg, hsl(340deg 95% 39%) 20deg, hsl(340deg 100% 85% / 0.3) 280deg",
    border: "rose-500/20",
    color: "rgb(244 63 94)",
  },
  burgundy: {
    accent: "[#800020]",
    gradient: "from-[#800020]/20 to-transparent",
    shine:
      "205deg, transparent 0deg, hsl(345deg 65% 35%) 20deg, hsl(345deg 80% 70% / 0.3) 280deg",
    border: "[#800020]/20",
    color: "#800020",
  },

};
const SIZES = {
  sm: {
    padding: "p-6 pt-12",
    iconSize: "h-5 w-5",
    titleSize: "text-sm",
    descSize: "text-xs",
  },
  md: {
    padding: "p-8 pt-16",
    iconSize: "h-6 w-6",
    titleSize: "text-base",
    descSize: "text-[15px]",
  },
  lg: {
    padding: "p-6 pt-16",
    iconSize: "h-7 w-7",
    titleSize: "text-lg",
    descSize: "text-base",
  },
};
export function CardHoverEffect({
  icon,
  title,
  description,
  className,
  variant = "burgundy",
  size = "md",
  glowEffect = false,
  interactive = true,
  showGridLines = true,
}) {
  const variantConfig = VARIANTS[variant];
  const sizeConfig = SIZES[size];
  return (
    <div
      className={cn(
        "group relative z-70 w-full overflow-hidden rounded-2xl",
        sizeConfig.padding,


        className,
      )}
      style={{
        "--card-color": variantConfig.color, height: "300px",
      }}>

      {/* Icon */}
      <span
        className="relative z-50 table rounded-xl pb-2"
        transition={{ duration: 0.3, ease: "easeInOut", type: "keyframes" }}>
        <span
          className={cn(
            "absolute inset-[4.5px] rounded-[inherit]",
            "bg-linear-to-b from-black/5 to-black/10 backdrop-blur-3xl",
            "dark:from-white/10 dark:to-white/5",
            "transition-all duration-300",
          )}
        />
        <span
          className={cn(
            "relative z-1 block transition-colors duration-300",
            "text-black/60 group-hover:text-(--card-color)",
            "dark:text-zinc-400",
            sizeConfig.iconSize,
          )}>
          {icon}
        </span>
      </span>

      {/* Content */}
      <div className="relative z-30 mt-2">
        <h3
          className={cn(
            "font-medium transition-colors duration-300",
            "text-black/80 group-hover:text-(--card-color)",
            "dark:text-white/80",
            sizeConfig.titleSize,
          )}>
          {title}
        </h3>
        <p
          className={cn(
            "mt-1 transition-colors duration-300",
            "text-black/60",
            "dark:text-white/40",
            sizeConfig.descSize,
          )}>
          {description}
        </p>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 z-20 overflow-hidden rounded-[inherit] opacity-100 transition-all duration-500">
        <div
          className="absolute bottom-[55%] left-1/2 aspect-square w-[200%] -translate-x-1/2 rounded-[50%]"
          style={{
            background: `conic-gradient(from ${variantConfig.shine}, transparent 360deg)`,
            filter: "blur(40px)",
          }}
        />
      </div>
    </div>
  );
}