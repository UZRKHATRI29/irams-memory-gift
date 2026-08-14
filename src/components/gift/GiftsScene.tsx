import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useGifts } from "@/lib/content";
import { useMediaUrls } from "@/lib/media";
import { Daisy, SprigLine } from "@/components/decor/Botanicals";
import { Gift, Package, Sparkles, Heart, CheckCircle2 } from "lucide-react";

export function GiftsScene() {
  const { data: gifts = [], isLoading } = useGifts();
  const [unwrappedIds, setUnwrappedIds] = useState<Record<string, boolean>>({});
  const [selectedGiftId, setSelectedGiftId] = useState<string | null>(null);

  const giftPaths = gifts.map((g) => g.image_url);
  const getUrl = useMediaUrls(giftPaths);

  const toggleUnwrap = (id: string) => {
    setUnwrappedIds((prev) => ({ ...prev, [id]: true }));
    setSelectedGiftId(id);
  };

  const selectedGift = gifts.find((g) => g.id === selectedGiftId);

  return (
    <div className="mx-auto max-w-4xl px-2 py-4 sm:px-6">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Gift className="mx-auto mb-3 h-8 w-8 text-cocoa/80" />
        </motion.div>
        <h2 className="text-4xl text-cocoa sm:text-5xl">Your Birthday Presents</h2>
        <p className="hand mt-2 text-xl text-walnut/80">tap each package to unwrap your surprises</p>
        <SprigLine className="mx-auto mt-4 h-6 w-48 text-taupe/50" />
      </div>

      {isLoading ? (
        <div className="mt-16 text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="mx-auto h-8 w-8 rounded-full border-2 border-walnut/30 border-t-cocoa"
          />
          <p className="hand mt-3 text-lg text-walnut/70">Preparing your presents...</p>
        </div>
      ) : gifts.length === 0 ? (
        /* Fallback if no gifts seeded yet */
        <div className="mt-12 text-center rounded-2xl border border-walnut/15 bg-cream/70 p-10 paper shadow-paper">
          <Package className="mx-auto h-12 w-12 text-taupe/70" />
          <h3 className="mt-4 text-2xl text-cocoa">Special Birthday Surprises</h3>
          <p className="hand mt-2 text-xl text-walnut/80">
            A box full of warm hugs, happy laughter, and sisterly love reserved just for you!
          </p>
        </div>
      ) : (
        /* Gifts Grid */
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gifts.map((gift, index) => {
            const isUnwrapped = !!unwrappedIds[gift.id];
            const signedUrl = getUrl(gift.image_url);

            return (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => toggleUnwrap(gift.id)}
                className="group relative cursor-pointer rounded-2xl border border-walnut/20 bg-cream p-5 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lift paper"
              >
                {!isUnwrapped ? (
                  /* Wrapped Present View */
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      className="relative flex h-24 w-24 items-center justify-center rounded-xl bg-cocoa text-cream shadow-md"
                    >
                      <Package className="h-12 w-12 text-beige" />
                      {/* Ribbon */}
                      <div className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 bg-gold/90" />
                      <div className="absolute inset-y-0 left-1/2 w-3 -translate-x-1/2 bg-gold/90" />
                    </motion.div>
                    <p className="hand mt-4 text-2xl text-cocoa font-medium">{gift.name}</p>
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-rose/15 px-3 py-1 text-xs text-cocoa">
                      <Sparkles className="h-3 w-3 text-rose" /> Tap to unwrap
                    </span>
                  </div>
                ) : (
                  /* Unwrapped Present View */
                  <div className="flex flex-col items-center text-center">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-beige/30">
                      {signedUrl ? (
                        <img
                          src={signedUrl}
                          alt={gift.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <Heart className="h-8 w-8 text-rose" />
                        </div>
                      )}
                      <span className="absolute right-2 top-2 rounded-full bg-cream/90 p-1 text-sage shadow-xs">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-xl font-medium text-cocoa">{gift.name}</h3>
                    {gift.description && (
                      <p className="mt-1 text-sm text-walnut/80 line-clamp-2">{gift.description}</p>
                    )}
                    {gift.personal_message && (
                      <p className="hand mt-2 text-lg text-cocoa italic">"{gift.personal_message}"</p>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
