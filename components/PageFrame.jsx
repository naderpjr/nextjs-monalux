export default function PageFrameGrid() {
    return (
        <div className="pointer-events-none fixed inset-0 z-50 opacity-50">

            {/* Top */}
            <div className="w-full absolute top-6 h-px bg-white/20" />

            {/* Bottom */}
            <div className=" w-full absolute bottom-6 h-px bg-white/20" />

            {/* Left */}
            <div className="h-full absolute left-6 w-px bg-white/20" />

            {/* Right */}
            <div className="h-full absolute right-6 w-px bg-white/20" />

        </div>
    );
}
