import { NoiseBackground } from "@/components/ui/noise-background";

export function NoiseBtn() {
    return (
        <div className="flex justify-center">
            <NoiseBackground
                containerClassName="w-fit p-2 rounded-full mx-auto"
                gradientColors={[
                    "#800020",
                    "#800020",
                    "#800020",
                ]}
            >
                <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
                    Start Your Project &rarr;
                </button>
            </NoiseBackground>
        </div>
    );
}