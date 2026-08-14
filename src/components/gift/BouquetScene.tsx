import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useBouquet, useSettings } from "@/lib/content";
import { useMediaUrls } from "@/lib/media";
import { Daisy, LeafBranch, SprigLine } from "@/components/decor/Botanicals";
import { Flower2, Heart, Sparkles, Sun } from "lucide-react";

export function BouquetScene() {
  const { data: bouquet } = useBouquet();
  const { data: settings } = useSettings();
  const [activeNote, setActiveNote] = useState<number | null>(null);

  const imageUrl = useMediaUrls([bouquet?.image_url])(bouquet?.image_url);

  const defaultNotes = [
    { title: "Grace & Beauty", text: "May your year bloom with elegance and unconditional happiness." },
    { title: "Sweet Moments", text: "Remembering every laughter-filled afternoon we shared." },
    { title: "Sisterly Bond", text: "No matter how far apart we are, our hearts blossom together." },
    { title: "Shining Light", text: "Thank you for being the bright floral light in our family." },
  ];

  const title = bouquet?.title || "A Birthday Bouquet For You";
  const message =
    bouquet?.message ||
    settings?.bouquet_message ||
    "Like flowers blooming under the warm sun, your warmth and kindness make the world a gentler, prettier place.";
  const description =
    bouquet?.description ||
    "A bouquet woven with delicate dusty rose, sage leaves, soft cream petals, and endless sisterly affection.";

  return (
    <div className="mx-auto max-w-4xl px-2 py-4 sm:px-6">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Flower2 className="mx-auto mb-3 h-9 w-9 text-rose/80" />
        </motion.div>
        <h2 className="text-4xl text-cocoa sm:text-5xl">{title}</h2>
        <p className="hand mt-2 text-xl text-walnut/80">freshly gathered with love and wishes</p>
        <SprigLine className="mx-auto mt-4 h-6 w-48 text-taupe/50" />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
        {/* Bouquet visual container */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-6 relative flex flex-col items-center justify-center"
        >
          <div className="relative aspect-square w-full max-w-[340px] overflow-hidden rounded-full border-4 border-cream bg-beige/50 p-4 shadow-lift ring-1 ring-walnut/15">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-b from-beige/60 to-cream p-6 text-center">
                <Daisy className="h-20 w-20 text-rose/70 animate-pulse" />
                <p className="hand mt-2 text-2xl text-cocoa">Wildflowers & Roses</p>
              </div>
            )}

            {/* Glowing atmosphere ring */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-radial from-rose/10 via-transparent to-transparent" />
          </div>
          <div className="mx-auto mt-4 h-4 w-52 rounded-[50%] bg-cocoa/20 blur-md" />
        </motion.div>

        {/* Message & interactive petal notes */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-6 space-y-6"
        >
          <div className="rounded-2xl border border-walnut/20 bg-cream p-6 shadow-paper paper">
            <h3 className="text-2xl text-cocoa">A Sisterly Wish</h3>
            <p className="mt-3 font-serif text-lg leading-relaxed text-walnut/90">{message}</p>
            {description && (
              <p className="hand mt-4 text-lg text-walnut/70 border-t border-walnut/15 pt-3">
                {description}
              </p>
            )}
          </div>

          {/* Interactive Petals / Notes */}
          <div>
            <p className="text-xs uppercase tracking-wider text-walnut/60 mb-3 font-medium">
              Pick a flower note:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {defaultNotes.map((note, index) => (
                <button
                  key={index}
                  onClick={() => setActiveNote(activeNote === index ? null : index)}
                  className={`flex items-center gap-2 rounded-xl border p-3 text-left transition-all duration-300 ${
                    activeNote === index
                      ? "border-rose bg-rose/15 shadow-sm text-cocoa"
                      : "border-walnut/20 bg-cream/70 hover:bg-beige/70 text-walnut"
                  }`}
                >
                  <Sparkles className={`h-4 w-4 shrink-0 ${activeNote === index ? "text-rose" : "text-taupe"}`} />
                  <span className="hand text-lg font-medium">{note.title}</span>
                </button>
              ))}
            </div>

            <AnimatePresence>
              {activeNote !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 overflow-hidden rounded-xl border border-rose/30 bg-cream p-4 shadow-paper"
                >
                  <p className="hand text-xl text-cocoa">{defaultNotes[activeNote]?.title}</p>
                  <p className="mt-1 text-sm text-walnut/80">{defaultNotes[activeNote]?.text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
