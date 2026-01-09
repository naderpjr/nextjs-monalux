"use client";

import SplitText from "@/components/SplitText";

export default function TextTitle() {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="w-full bg-black h-30 text-center ">
            <SplitText
                text="Our Projects"
                className="text-3xl font-semibold text-center py-2"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
            />
        </div>
    )
}