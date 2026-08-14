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
      className={`relative z-10 min-h-[100svh] w-full px-4 pb-16 pt-20 sm:px-6 ${className}`}
    >
      <button
        onClick={onBack}
        className="fixed left-3 top-3 z-30 rounded-full border border-walnut/25 bg-cream/85 px-4 py-2 text-lg text-walnut shadow-paper backdrop-blur-sm transition-colors hover:bg-beige/80 sm:left-6 sm:top-6"
      >
        <span className="hand">← {label}</span>
      </button>
      {children}
    </motion.section>
  );
}