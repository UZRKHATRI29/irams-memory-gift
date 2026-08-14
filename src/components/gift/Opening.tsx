import { motion } from "motion/react";
import { Daisy, LeafBranch, SprigLine } from "@/components/decor/Botanicals";

type Props = {
  heading: string;
  message: string;
  buttonText: string;
  onOpen: () => void;
};

export function Opening({ heading, message, buttonText, onOpen }: Props) {
  return (
    <motion.section
      key="opening"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06, filter: "blur(6px)" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
    >
      <LeafBranch className="pointer-events-none absolute -left-6 top-6 h-48 w-28 text-sage/45 sm:h-72 sm:w-40" />
      <LeafBranch className="pointer-events-none absolute -right-6 bottom-6 h-48 w-28 -scale-x-100 text-sage/40 sm:h-72 sm:w-40" />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <Daisy className="mx-auto mb-8 h-10 w-10 text-taupe/70" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl leading-tight text-cocoa sm:text-6xl"
      >
        {heading}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1.1 }}
        className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-walnut/85"
      >
        {message}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="mt-10"
      >
        <button
          onClick={onOpen}
          className="group relative inline-flex items-center gap-2 rounded-full border border-walnut/30 bg-cream/70 px-8 py-3 text-2xl text-cocoa shadow-paper transition-all duration-500 hover:-translate-y-0.5 hover:border-walnut/60 hover:bg-beige/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="hand">{buttonText}</span>
          <span className="hand transition-transform duration-500 group-hover:translate-x-1">→</span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
        className="mt-14"
      >
        <SprigLine className="h-8 w-52 text-taupe/60" />
      </motion.div>
    </motion.section>
  );
}