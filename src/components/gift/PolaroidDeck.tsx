import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Photo } from "@/lib/content";
import { useMediaUrls } from "@/lib/media";
import { Calendar, Sparkles, Heart, Layers } from "lucide-react";

export function PolaroidDeck({
  photos,
  onSelectPhoto,
}: {
  photos: Photo[];
  onSelectPhoto: (photo: Photo, index: number) => void;
}) {
  const [isFanned, setIsFanned] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const photoPaths = photos.map((p) => p.image_url);
  const getUrl = useMediaUrls(photoPaths);

  // Take up to 6 photos for the hero fan deck
  const deckPhotos = photos.slice(0, 6);

  if (deckPhotos.length === 0) return null;

  return (
    <div className="relative my-8 flex flex-col items-center justify-center py-6">
      {/* Controls & Hint */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => setIsFanned(!isFanned)}
          className="inline-flex items-center gap-1.5 rounded-full border border-walnut/25 bg-cream/80 px-4 py-1.5 text-sm text-cocoa shadow-paper hover:bg-beige transition-colors"
        >
          <Layers className="h-4 w-4 text-cocoa" />
          <span className="hand text-lg">{isFanned ? "Stack Photos" : "Fan Out Deck"}</span>
        </button>
        <span className="hand text-lg text-walnut/70">
          (tap any photo to view in detail)
        </span>
      </div>

      {/* Fanned Deck Container (Matching Reference Image 2) */}
      <div
        className="relative flex h-[340px] w-full max-w-[460px] items-center justify-center sm:h-[400px]"
        style={{ perspective: 1000 }}
      >
        {deckPhotos.map((photo, index) => {
          const total = deckPhotos.length;
          const signedUrl = getUrl(photo.image_url);

          // Calculate rotation angle and horizontal offset for realistic fan deck
          const centerOffset = index - (total - 1) / 2;
          const rotateDeg = isFanned ? centerOffset * 14 : index * 2 - 4;
          const translateX = isFanned ? centerOffset * 48 : index * 4;
          const translateY = isFanned ? Math.abs(centerOffset) * 12 : 0;
          const zIndex = activeIndex === index ? 30 : total - Math.abs(index - activeIndex);

          return (
            <motion.div
              key={photo.id || index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: activeIndex === index ? 1.05 : 1,
                rotate: rotateDeg,
                x: translateX,
                y: translateY,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.08,
                rotate: rotateDeg * 0.8,
                y: translateY - 16,
                zIndex: 40,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ zIndex }}
              onClick={() => {
                setActiveIndex(index);
                onSelectPhoto(photo, index);
              }}
              className="absolute cursor-pointer rounded-lg border-8 border-cream bg-cream p-3 shadow-lift transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Polaroid Photo Box */}
              <div className="relative h-[200px] w-[180px] overflow-hidden rounded bg-cocoa/10 sm:h-[240px] sm:w-[210px]">
                {signedUrl ? (
                  <img
                    src={signedUrl}
                    alt={photo.caption || "Memory polaroid"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-beige/40 p-4 text-center">
                    <Sparkles className="h-8 w-8 text-taupe/60 mb-2" />
                    <p className="hand text-lg text-cocoa">{photo.caption || "Special Memory"}</p>
                  </div>
                )}

                {photo.featured && (
                  <span className="absolute top-2 right-2 rounded-full bg-gold/90 p-1 text-cocoa shadow-xs">
                    <Heart className="h-3.5 w-3.5 fill-cocoa" />
                  </span>
                )}
              </div>

              {/* Polaroid Bottom Margin Caption */}
              <div className="mt-3 text-center">
                <p className="hand text-2xl text-cocoa line-clamp-1">
                  {photo.caption || "Unforgettable Moment"}
                </p>
                {photo.taken_on && (
                  <p className="text-[11px] font-sans tracking-widest text-walnut/60 uppercase">
                    {new Date(photo.taken_on).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
