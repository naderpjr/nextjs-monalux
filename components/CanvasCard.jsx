"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasCard() {
    return (
        <>
            <div
                className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
                <Card title="From Design to Engineering" icon={<AceternityIcon />}>
                    <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
                </Card>
                <Card title="FullStack Development" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2} />
                    {/* Radial gradient for the cute fade */}
                    <div
                        className="absolute inset-0 mask-[radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card title="Trust the Creativity" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]} />
                </Card>
            </div>
        </>
    );
}

const Card = ({
    title,
    icon,
    children
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative">
            <Icon className="absolute h-4 w-4 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-3 -left-3 dark:text-white text-black" />
            <Icon
                className="absolute h-4 w-4 -top-3 -left-3 dark:text-white text-black" />
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0">
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative z-20">
                <div
                    className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2
                    className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = () => {
    return (
        <svg width="100" height="100" id="Layer_2" data-name="Layer 2" className="" fill="#cccccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 607.63 560.56">
            <g id="Layer_1-2" data-name="Layer 1">
                <path class="cls-1" d="M583.98,288.99c-10.14,1.47-24.66,4.94-43.55,10.38-30.31,9.4-62.55,20.59-96.72,33.57-34.17,12.99-68.35,26.2-102.51,39.63-34.18,13.43-64.47,24.51-90.85,33.24-17.12,5.47-29.59,8.87-37.42,10.19l-.8,.26c1.44-1.94,5.93-5.88,13.46-11.82,25.29-20.46,66.63-49.3,124.01-86.51,57.37-37.2,99.97-67.63,127.79-91.26,.71-.52,2.19-1.65,4.44-3.41,2.24-1.74,4.16-3.32,5.79-4.72,1.61-1.4,3.55-3.2,5.79-5.39,2.24-2.2,4-4.31,5.27-6.33,1.27-2.03,2.49-4.18,3.68-6.48,1.18-2.29,1.65-4.51,1.41-6.64-.24-2.13-1.15-4.28-2.72-6.43-.7-1.25-1.66-2.2-2.89-2.83-1.24-.64-2.57-1.09-3.98-1.38-1.42-.29-2.62-.57-3.58-.84-.98-.27-2.31-.29-4-.05-1.7,.25-2.98,.37-3.87,.35-.89,0-3.12,.4-6.68,1.25-16.2,2.82-42.4,10.31-78.59,22.47-35.32,12.18-87.99,31.37-158.01,57.59-70.03,26.22-122.61,45.24-157.74,57.06-25.85,8.55-44.66,14.27-56.42,17.15-4.44,.83-6.94,1.33-7.48,1.51,.37-.71,2.42-2.55,6.19-5.52,21.52-17.5,51.26-37.91,89.19-61.24,30.24-18.81,73.04-43.76,128.39-74.87,55.34-31.11,95.36-54.14,120.06-69.11,11.99-7.66,21.48-13.94,28.47-18.83,3.76-2.08,6.37-5.43,7.85-10.03,1.47-4.6-.89-7.82-7.08-9.68-6.72-2.56-19.85-3.53-39.39-2.88-13.5,.19-39.09,1.29-76.76,3.32-26.15,2.24-46.96,4.88-63.47,7.63-3.5,.58-7.09,.53-10.54-.33-34.85-8.64-47.52-36.41-58.73-98.01l-1.41,.2c10.13,93.01-5.81,114.5-97.79,131.69l.22,1.54c89.69-9.77,112.89,4.73,129.84,88.22-14,7.95-26.63,15.24-37.87,21.85-26.92,15.83-52.83,32.29-77.73,49.39-16.29,10.8-30.45,20.93-42.46,30.38-15.07,11.88-18.64,20.98-10.73,27.3,.7,1.25,2.11,1.97,4.24,2.18,2.12,.2,3.45,.44,3.98,.72,.53,.27,1.95,.33,4.26,.19,2.31-.15,3.74-.32,4.27-.48,.53-.18,1.78-.43,3.74-.75,1.95-.33,3.2-.59,3.74-.75,6.41-1.17,12.73-2.6,18.97-4.29,6.24-1.71,13.36-3.83,21.39-6.4,8.02-2.56,13.82-4.5,17.38-5.78,3.57-1.29,10.66-3.78,21.27-7.47,10.61-3.68,16.72-5.78,18.33-6.3,23.54-8.41,66.89-24.26,130.05-47.54,63.15-23.29,112.03-40.75,146.63-52.4,2.13-.68,6.42-2.05,12.84-4.1,6.42-2.05,11-3.59,13.77-4.62,2.76-1.03,6.95-2.44,12.57-4.24,5.62-1.79,10.2-3.12,13.77-3.95,3.56-.85,7.83-1.77,12.82-2.77,4.98-1.01,9.7-1.92,14.15-2.76l1.33,.02c-.54,.18-1.53,1.22-2.97,3.16-6.66,6.85-17.6,15.95-32.84,27.3-24.57,19.06-60.89,44.67-108.97,76.84-48.08,32.17-82.97,56.3-104.65,72.37-18.82,13.97-30.85,24.3-36.08,30.99-3.97,5.09-4.87,10.1-2.72,15.02,2.16,4.9,6.44,7.22,12.84,6.95,3.19-.14,6.35-.41,9.47-.82,3.11-.41,6.54-1.21,10.28-2.4,3.74-1.2,6.5-2.01,8.29-2.43,1.78-.42,5.13-1.49,10.03-3.21,4.91-1.72,7.89-2.75,8.96-3.09,30.13-9.93,77.19-27.77,141.18-53.53,63.97-25.76,113.26-44.02,147.85-54.79,23-7.35,38.76-11.06,47.29-11.14,.53-.17,1.6-.07,3.19,.3-1.11,3.01-3.91,7.15-8.41,12.42-4.69,5.62-10.27,11.69-16.74,18.17-6.48,6.49-12.14,11.83-16.98,16.04-4.84,4.2-11.18,9.77-18.98,16.68-7.82,6.92-13.61,11.87-17.37,14.84-38.97,34.86-66.84,62.49-83.6,82.88-34.61,41.13-42.7,70.69-24.27,88.68,2.1,1.97,5.36,4.32,9.77,7.05,4.41,2.71,6.79,3.72,7.16,3.02-4.22-3.08-7.52-5.55-9.9-7.45-2.37-1.89-4-3.3-4.87-4.19-15.05-17.59-6.02-45.1,27.12-82.51,16.74-18.62,42.48-42.99,77.22-73.1,34.73-30.11,56.95-49.82,66.66-59.11,.52-.17,1.92-1.35,4.17-3.55,2.24-2.2,4.22-4.07,5.93-5.65,1.7-1.57,3.77-3.64,6.2-6.18,2.42-2.54,4.23-4.96,5.42-7.26,1.18-2.29,2.27-4.63,3.29-7.02,1-2.39,1.3-4.69,.88-6.92-.42-2.23-1.78-4.15-4.06-5.78-3.53-2.71-9.99-3.58-19.41-2.63ZM203.76,121.05c3.26-1.94,6.84-3.24,10.54-4.03,5.42-1.16,11.63-2.35,18.88-3.52,47.51-7.67,79.09-12.39,94.74-14.15,26.83-1.8,45.3-1.66,55.41,.42,.53-.17,.88-.21,1.06-.12,.17,.09,.44,.23,.8,.41-1.26,.69-6,3.84-14.24,9.41-12,7.67-30.33,18.54-55.01,32.62-8.23,4.7-33.71,18.81-76.44,42.35-23.97,13.2-45.45,25.19-64.45,35.97-5.34-54.72-.04-82.27,28.71-99.35Zm3.04,295.14l.53,.28c-.54,.16-.71,.07-.53-.28Z" />
            </g>
        </svg>
    );
};

export const Icon = ({
    className,
    ...rest
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
