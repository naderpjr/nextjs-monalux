"use client";
import React from "react";
import GridLines from "./GridLines";

export function CtaSection() {
    return (
        <div
            className="h-200 w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
            {/* <LightBg /> */}
            <GridLines />
            <div className="max-w-2xl mx-auto p-4 absolute inset-0 flex flex-col items-center justify-center">
                <h1
                    className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Monalux Studio
                </h1>
                <p></p>
                <p
                    className="text-neutral-500 max-w-lg mx-auto my-2  text-center relative z-10">
                    Creative Web Development Agency Based in Afghanistan
                </p>
            </div>
            {/* <BackgroundBeams /> */}

        </div>
    );
}
