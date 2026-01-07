"use client";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-6"
            >
                <div className="h-12 w-12 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                <p className="text-sm tracking-widest text-white/70">
                    LOADING
                </p>
            </motion.div>
        </div>
    );
}
