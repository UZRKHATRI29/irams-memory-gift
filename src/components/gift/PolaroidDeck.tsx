import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "motion/react";
import type { Photo } from "@/lib/content";
import { useMediaUrls } from "@/lib/media";
import { Sparkles, Heart, Layers, ChevronLeft, ChevronRight, Hand } from "lucide-react";

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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % deckPhotos.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + deckPhotos.length) % deckPhotos.length);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <div className="relative my-6 flex flex-col items-center justify-center py-4 sm:my-8 sm:py-6 select-none">
      {/* Controls & Hint */}
      <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          onClick={() => setIsFanned(!isFanned)}
          className="inline-flex items-center gap-1.5 rounded-full border border-walnut/25 bg-cream/90 px-3.5 py-1.5 text-xs sm:text-sm text-cocoa shadow-paper hover:bg-beige transition-colors cursor-pointer"
        >
          <Layers className="h-4 w-4 text-cocoa" />
          <span className="hand text-base sm:text-lg">{isFanned ? "Stack Photos" : "Fan Out Deck"}</span>
        </button>
        <div className="inline-flex items-center gap-1 text-xs text-walnut/70">
          <Hand className="h-3.5 w-3.5 animate-pulse text-cocoa" />
          <span className="hand text-base sm:text-lg">Swipe left/right or tap to open</span>
        </div>
      </div>

      {/* Fanned Deck Container */}
      <div className="relative flex h-[310px] w-full max-w-[420px] items-center justify-center sm:h-[400px]">
        {deckPhotos.map((photo, index) => {
          const total = deckPhotos.length;
          const signedUrl = getUrl(photo.image_url);

          // Calculate rotation angle and horizontal offset for realistic fan deck
          const centerOffset = index - (total - 1) / 2;
          const rotateDeg = isFanned ? centerOffset * 12 : index * 2 - 4;
          const translateX = isFanned ? centerOffset * 36 : index * 3;
          const translateY = isFanned ? Math.abs(centerOffset) * 8 : 0;
          const zIndex = activeIndex === index ? 30 : total - Math.abs(index - activeIndex);

          return (
            <motion.div
              key={photo.id || index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: activeIndex === index ? 1.05 : 0.95,
                rotate: rotateDeg,
                x: translateX,
                y: translateY,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.08,
                rotate: rotateDeg * 0.8,
                y: translateY - 12,
                zIndex: 40,
              }}
              whileTap={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ zIndex }}
              onClick={() => {
                setActiveIndex(index);
                onSelectPhoto(photo, index);
              }}
              className="absolute cursor-grab active:cursor-grabbing rounded-lg border-6 sm:border-8 border-cream bg-cream p-2.5 sm:p-3 shadow-lift hover:shadow-2xl transition-shadow touch-pan-y"
            >
              {/* Polaroid Photo Box */}
              <div className="relative h-[180px] w-[150px] overflow-hidden rounded bg-cocoa/10 sm:h-[240px] sm:w-[210px]">
                {signedUrl ? (
                  <img
                    src={signedUrl}
                    alt={photo.caption || "Memory polaroid"}
                    className="h-full w-full object-cover pointer-events-none"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-beige/40 p-3 text-center">
                    <Sparkles className="h-6 w-6 text-taupe/60 mb-1 sm:h-8 sm:w-8 sm:mb-2" />
                    <p className="hand text-base sm:text-lg text-cocoa">{photo.caption || "Special Memory"}</p>
                  </div>
                )}

                {photo.featured && (
                  <span className="absolute top-1.5 right-1.5 rounded-full bg-gold/90 p-1 text-cocoa shadow-xs">
                    <Heart className="h-3 w-3 fill-cocoa sm:h-3.5 sm:w-3.5" />
                  </span>
                )}
              </div>

              {/* Polaroid Bottom Margin Caption */}
              <div className="mt-2 text-center">
                <p className="hand text-xl sm:text-2xl text-cocoa line-clamp-1">
                  {photo.caption || "Unforgettable Moment"}
                </p>
                {photo.taken_on && (
                  <p className="text-[10px] sm:text-[11px] font-sans tracking-widest text-walnut/60 uppercase">
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

      {/* Touch Deck Chevron Navigation */}
      <div className="mt-3 flex items-center justify-center gap-6">
        <button
          onClick={handlePrev}
          aria-label="Previous polaroid"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-walnut/20 bg-cream/90 text-cocoa shadow-xs hover:bg-beige transition-colors cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="hand text-lg text-walnut">
          {activeIndex + 1} / {deckPhotos.length}
        </span>
        <button
          onClick={handleNext}
          aria-label="Next polaroid"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-walnut/20 bg-cream/90 text-cocoa shadow-xs hover:bg-beige transition-colors cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

