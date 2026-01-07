import { Cover } from "@/components/ui/cover";
import { NoiseBtn } from "./NoiseBtn";
import Link from 'next/link';

export default function CoverText() {
    return (
        <div className="bg-black py-4">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-linear-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                We build amazing websites <br /> at <Cover>warp speed</Cover>
            </h1>
            <div>
                <Link href="tel:+93730842693" ><NoiseBtn /></Link>
            </div>
        </div>
    )
}