export default function GridBackground({ children }) {
    return (
        <div className="relative w-full h-full bg-black overflow-hidden">

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.7]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
        `,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Fade mask (modern look) */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
