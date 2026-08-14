import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSettings } from "@/lib/content";
import { Daisy, LeafBranch, SprigLine } from "@/components/decor/Botanicals";
import { Heart, Sparkles, Flame, RefreshCw } from "lucide-react";

export function FinalScene({ onReplay }: { onReplay: () => void }) {
  const { data: settings } = useSettings();
  const [candlesLit, setCandlesLit] = useState([true, true, true, true, true]);
  const [wished, setWished] = useState(false);

  const toggleCandle = (index: number) => {
    setCandlesLit((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      if (next.every((c) => !c)) {
        setWished(true);
      }
      return next;
    });
  };

  const recipient = settings?.recipient_name || "Iram";
  const finalHeading = settings?.final_heading || `Happy Birthday, ${recipient}!`;
  const finalMessage =
    settings?.final_message ||
    `Thank you for being the wonderful, funny, thoughtful, and cherished sister that you are. May this new year of your life be filled with boundless joy, peace, success, and all the dreams your heart desires.`;
  const closingMessage =
    settings?.closing_message || "Always remember how deeply loved and appreciated you are.";
  const signature = settings?.signature || "Your sister, with all my love ❤️";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-3xl px-4 py-8 text-center"
    >
      {/* Background Decor */}
      <LeafBranch className="pointer-events-none absolute -left-8 top-12 h-64 w-32 text-sage/35 sm:h-80 sm:w-44" />
      <LeafBranch className="pointer-events-none absolute -right-8 bottom-12 h-64 w-32 -scale-x-100 text-sage/30 sm:h-80 sm:w-44" />

      {/* Daisy Header */}
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <Daisy className="mx-auto mb-4 h-12 w-12 text-rose" />
      </motion.div>

      {/* Heading */}
      <h1 className="text-5xl text-cocoa sm:text-6xl md:text-7xl">{finalHeading}</h1>

      <p className="hand mt-3 text-2xl text-walnut/90">a grand birthday wish from the bottom of my heart</p>

      <SprigLine className="mx-auto mt-6 h-8 w-64 text-taupe/60" />

      {/* Birthday Cake Interactive Section */}
      <div className="my-10 flex flex-col items-center">
        <div className="relative rounded-3xl border border-gold/40 bg-cream/90 p-8 shadow-lift backdrop-blur-sm paper">
          <p className="hand mb-6 text-xl text-walnut">
            {wished ? "✨ Wish Granted! ✨" : "Make a wish and tap the candles to blow them out:"}
          </p>

          {/* Cake Illustration */}
          <div className="relative mx-auto flex flex-col items-center justify-center">
            {/* Candles Row */}
            <div className="flex gap-4 mb-2 z-10">
              {candlesLit.map((isLit, i) => (
                <button
                  key={i}
                  onClick={() => toggleCandle(i)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  title="Tap to blow out candle"
                >
                  <AnimatePresence mode="wait">
                    {isLit ? (
                      <motion.div
                        key="flame"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.2, 0.9, 1] }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      >
                        <Flame className="h-6 w-6 text-gold fill-gold/80 filter drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="smoke"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: [0.8, 0], y: -10 }}
                        transition={{ duration: 1 }}
                        className="h-6 w-1 rounded-full bg-walnut/40 blur-xs"
                      />
                    )}
                  </AnimatePresence>
                  <div className="h-8 w-2 rounded-t-sm bg-cream border border-walnut/30" />
                </button>
              ))}
            </div>

            {/* Cake Top Layer */}
            <div className="h-14 w-48 rounded-t-2xl border-x border-t border-walnut/20 bg-rose/25 relative flex items-center justify-center">
              <span className="hand text-lg text-cocoa">Happy Birthday {recipient}</span>
            </div>
            {/* Cake Bottom Layer */}
            <div className="h-16 w-60 rounded-b-2xl border border-walnut/25 bg-beige/80 flex items-center justify-center shadow-md">
              <div className="flex gap-3">
                <Heart className="h-4 w-4 text-rose fill-rose" />
                <Sparkles className="h-4 w-4 text-gold" />
                <Heart className="h-4 w-4 text-rose fill-rose" />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-4 h-4 w-64 rounded-[50%] bg-cocoa/20 blur-md" />
        </div>
      </div>

      {/* Final Message Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="rounded-2xl border border-walnut/20 bg-cream p-8 shadow-paper paper"
      >
        <p className="font-serif text-xl sm:text-2xl leading-relaxed text-cocoa">{finalMessage}</p>
        <p className="hand mt-6 text-2xl text-walnut/90">{closingMessage}</p>
        <p className="hand mt-4 text-3xl text-cocoa font-medium">{signature}</p>
      </motion.div>

      {/* Replay / Reset Button */}
      <div className="mt-10">
        <button
          onClick={onReplay}
          className="inline-flex items-center gap-2 rounded-full border border-walnut/30 bg-cream/80 px-6 py-2.5 text-lg text-cocoa shadow-paper hover:bg-beige transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          <span className="hand">Visit the gift box again</span>
        </button>
      </div>
    </motion.div>
  );
}
