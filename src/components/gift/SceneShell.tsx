import type { ReactNode } from "react";
import { motion } from "motion/react";

export function SceneShell({
  children,
  onBack,
  label = "Back to the gift box",
  className = "",
}: {
  children: ReactNode;
  onBack: () => void;
  label?: string;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.97, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: 16 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative z-10 min-h-[100svh] w-full px-3 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 ${className}`}
    >
      <button
        onClick={onBack}
        className="fixed left-2 top-2 z-30 rounded-full border border-walnut/25 bg-cream/90 px-3 py-1.5 text-xs sm:text-base text-walnut shadow-paper backdrop-blur-sm transition-colors hover:bg-beige/80 sm:left-6 sm:top-6 cursor-pointer"
      >
        <span className="hand text-base sm:text-lg">← {label}</span>
      </button>
      {children}
    </motion.section>
  );
}