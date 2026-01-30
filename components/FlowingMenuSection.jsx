import Image from "next/image";
import Link from "next/link";

export default function FlowMenuSection() {
    const demoItems = [
        { link: "https://kabul-blog.vercel.app", text: "Kabul Blog", image: "/kabulblog.png" },
        { link: "https://naderspec.github.io/raqim", text: "Raqim Agency", image: "/raqim.png" },
        { link: "https://md-notes-three.vercel.app", text: "Markdown Note App", image: "/mdnotes.png" },
        { link: "https://naderpjr.github.io/SkyCast-weatherapp", text: "SkyCast App", image: "/skycast.png" },
        { link: "https://positivus-kappa-plum.vercel.app", text: "Positivus", image: "/positivus.png" },
        { link: "https://positivus-kappa-plum.vercel.app", text: "Positivus", image: "/positivus.png" },
    ];

    return (
        <section className="relative text-center w-full py-20 px-4 md:px-8 bg-black">
            {/* Header */}
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold from-primary/90 to-primary/70 bg-linear-to-r bg-clip-text text-transparent tracking-tight">
                    Selected Works
                </h2>
                <p className="mt-3 text-sm text-neutral-400">
                    A curated selection of digital products & websites
                </p>
            </div>

            {/* Grid */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {demoItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        target="_blank"
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
                    >
                        {/* Image */}
                        <div className="relative aspect-16/10 w-full overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.text}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={index < 2}
                            />
                        </div>

                        {/* Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Title */}
                        <div className="absolute bottom-0 z-10 w-full p-4">
                            <h3 className="text-base font-medium text-white tracking-wide">
                                {item.text}
                            </h3>
                            <span className="mt-1 block text-xs text-neutral-300">
                                View project →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            <button className="text-center mt-13 text-sm text-neutral-400 border-2 px-5 py-3 cursor-pointer hover:bg-accent transition" >See All of Our Projects</button>
        </section>
    );
}
