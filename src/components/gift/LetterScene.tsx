import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLetter, useSettings } from "@/lib/content";
import { Daisy, LeafBranch, SprigLine } from "@/components/decor/Botanicals";
import { Heart, Sparkles } from "lucide-react";

export function LetterScene() {
  const { data: letter, isLoading } = useLetter();
  const { data: settings } = useSettings();
  const [isOpen, setIsOpen] = useState(false);

  const heading = letter?.heading || settings?.letter_title || "Dearest Sister,";
  const content =
    letter?.content ||
    `From childhood secrets and endless laughter to all the milestones we've celebrated together, having you as my sister is the greatest gift of my life.\n\nYou bring so much light, warmth, and grace into every room you enter. I hope this birthday brings you all the joy, love, and magic you so richly deserve.`;
  const signature = letter?.signature || settings?.signature || "With all my love forever,";
  const dateStr = letter?.letter_date
    ? new Date(letter.letter_date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="mx-auto max-w-3xl px-2 py-4 sm:px-6">
      {/* Background Leaves */}
      <LeafBranch className="pointer-events-none absolute -left-8 top-12 h-64 w-32 text-sage/35 sm:h-80 sm:w-44" />
      <LeafBranch className="pointer-events-none absolute -right-8 bottom-12 h-64 w-32 -scale-x-100 text-sage/30 sm:h-80 sm:w-44" />

      {/* Header */}
      <div className="text-center">
        <Daisy className="mx-auto mb-3 h-8 w-8 text-taupe/80" />
        <h2 className="text-4xl text-cocoa sm:text-5xl">
          {settings?.letter_title || "A Letter From My Heart"}
        </h2>
        <p className="hand mt-2 text-xl text-walnut/80">written specially for your special day</p>
        <SprigLine className="mx-auto mt-4 h-6 w-48 text-taupe/50" />
      </div>

      <div className="mt-10 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Envelope Sealed View */
            <motion.div
              key="envelope"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              onClick={() => setIsOpen(true)}
              className="group relative cursor-pointer"
            >
              <div className="relative h-[260px] w-[340px] rounded-xl border border-walnut/30 bg-beige/90 p-6 shadow-lift transition-transform duration-500 group-hover:scale-105 sm:h-[300px] sm:w-[420px]">
                {/* Envelope Flap triangular pattern */}
                <div
                  className="absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-taupe/20 border-b border-walnut/20"
                  style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                />

                {/* Wax seal in center */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose shadow-lg ring-4 ring-cream/80"
                >
                  <Heart className="h-7 w-7 text-cream fill-cream/30" />
                </motion.div>

                {/* Front label */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                  <p className="hand text-2xl text-cocoa">For {settings?.recipient_name || "Iram"}</p>
                  <p className="mt-1 text-xs text-walnut/60 uppercase tracking-widest">
                    Tap to open letter
                  </p>
                </div>
              </div>
              <div className="mx-auto mt-2 h-4 w-3/4 rounded-[50%] bg-cocoa/20 blur-md" />
            </motion.div>
          ) : (
            /* Letter Unfolded View */
            <motion.div
              key="letter-paper"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full rounded-2xl border border-walnut/25 bg-cream p-8 shadow-paper sm:p-12 paper"
            >
              {/* Decorative paper headers */}
              <div className="flex items-center justify-between border-b border-walnut/15 pb-4">
                <span className="text-xs uppercase tracking-widest text-walnut/50">
                  {dateStr || "Personal Letter"}
                </span>
                <Sparkles className="h-4 w-4 text-gold" />
              </div>

              {/* Letter Heading */}
              <h3 className="hand mt-6 text-4xl text-cocoa">{heading}</h3>

              {/* Letter Paragraphs */}
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-walnut/90">
                {content.split("\n\n").map((para, i) => (
                  <p key={i} className="whitespace-pre-line font-serif text-xl sm:text-2xl">
                    {para}
                  </p>
                ))}
              </div>

              {/* Letter Signature */}
              <div className="mt-10 border-t border-walnut/15 pt-6 text-right">
                <p className="hand text-3xl text-cocoa">{signature}</p>
                <p className="hand mt-1 text-xl text-walnut/70">
                  {settings?.signature || "Your loving sister"}
                </p>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-walnut/20 bg-beige/60 px-5 py-1.5 text-sm text-walnut hover:bg-beige transition-colors"
                >
                  Fold letter back
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
