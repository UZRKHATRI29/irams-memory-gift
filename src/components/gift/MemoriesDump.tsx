import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Photo } from "@/lib/content";
import { useMediaUrls } from "@/lib/media";
import { Calendar, Sparkles, Heart, Camera } from "lucide-react";

/* Vintage 35mm Film Camera Decoration Component (Matching Bottom Right of Image) */
function VintageCamera() {
  return (
    <div className="relative h-32 w-48 drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] group hover:scale-105 transition-transform duration-300">
      {/* Camera Body */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#4A4D52] via-[#2B2D31] to-[#18191B] border border-white/20">
        {/* Top Metallic Plate */}
        <div className="absolute inset-x-0 top-0 h-10 rounded-t-xl bg-gradient-to-b from-[#D4D7DC] via-[#A8ADBE] to-[#7B8090] border-b border-black/30 flex items-center justify-between px-4">
          {/* Shutter Button */}
          <div className="h-4 w-6 rounded-t-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-black/40 shadow-xs" />
          {/* Film Winder Dial */}
          <div className="h-5 w-7 rounded-t-md bg-gradient-to-b from-gray-300 to-gray-500 border border-black/40 shadow-xs" />
        </div>

        {/* Camera Grip Pattern */}
        <div className="absolute inset-x-2 top-11 bottom-2 rounded-b-lg bg-[#151618] border-t border-black/50 opacity-95">
          <div className="h-full w-full bg-[radial-gradient(#2c2d30_1px,transparent_1px)] [background-size:4px_4px]" />
        </div>

        {/* Lens Outer Ring */}
        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/3 items-center justify-center rounded-full bg-gradient-to-b from-[#606368] to-[#1a1b1d] p-1.5 shadow-2xl ring-2 ring-black/60">
          {/* Inner Lens Glass */}
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-[#0a0f18] via-[#122238] to-[#040810] border-2 border-gray-400/40">
            {/* Lens Reflection */}
            <div className="absolute left-3 top-3 h-5 w-8 rounded-full bg-white/20 blur-xs rotate-[-30deg]" />
            <div className="h-8 w-8 rounded-full bg-blue-900/40 border border-cyan-400/30" />
          </div>
        </div>

        {/* Viewfinder Glass */}
        <div className="absolute right-6 top-3 h-3.5 w-6 rounded-sm bg-cyan-900/60 border border-cyan-400/50 shadow-inner" />
      </div>
    </div>
  );
}

/* Translucent Paper Masking Tape Strip */
function MaskingTape({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute z-20 h-6 w-24 bg-[#EFE8D8]/85 opacity-90 backdrop-blur-xs shadow-xs border-y border-black/10 ${className}`}
      style={{
        clipPath:
          "polygon(0% 15%, 4% 0%, 96% 0%, 100% 20%, 98% 85%, 95% 100%, 5% 100%, 0% 80%)",
      }}
    />
  );
}

export function MemoriesDump({
  photos,
  onSelectPhoto,
}: {
  photos: Photo[];
  onSelectPhoto: (photo: Photo, index: number) => void;
}) {
  const [unwrappedIds, setUnwrappedIds] = useState<Record<string, boolean>>({});
  const photoPaths = photos.map((p) => p.image_url);
  const getUrl = useMediaUrls(photoPaths);

  const handlePhotoClick = (photo: Photo, index: number) => {
    setUnwrappedIds((prev) => ({ ...prev, [photo.id || String(index)]: true }));
    onSelectPhoto(photo, index);
  };

  return (
    <div className="relative my-4 rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-[#2A180E] p-3 sm:p-10 shadow-2xl overflow-hidden"
      style={{
        background: `
          linear-gradient(180deg, rgba(36,21,10,0.85) 0%, rgba(24,13,6,0.92) 100%),
          repeating-linear-gradient(90deg, #422817 0px, #361F11 40px, #422817 80px),
          radial-gradient(#1f1007 1px, transparent 1px)
        `,
        backgroundSize: "cover, 100% 100%, 8px 8px",
      }}
    >
      {/* Wood Surface Header */}
      <div className="text-center mb-6 sm:mb-10">
        <h3 className="hand text-3xl sm:text-4xl text-cream font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          📸 The Memories Dump
        </h3>
        <p className="text-[11px] sm:text-sm font-sans tracking-widest text-gold/90 uppercase mt-1">
          tap any memory package to unwrap it like a gift 🎁
        </p>
      </div>

      {/* Grid of Taped Polaroids */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4 pb-12 sm:pb-20">
        {photos.map((photo, index) => {
          const photoId = photo.id || String(index);
          const isUnwrapped = !!unwrappedIds[photoId];
          const signedUrl = getUrl(photo.image_url);
          // Alternate rotation angles for realistic taped board layout
          const rotations = [-3.5, 2.5, -2, 3, -1.5, 4, -2.8, 1.8];
          const rotDeg = rotations[index % rotations.length];

          return (
            <motion.div
              key={photoId}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              style={{ transform: `rotate(${rotDeg}deg)` }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                zIndex: 30,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePhotoClick(photo, index)}
              className="group relative cursor-pointer rounded-sm border-4 sm:border-[10px] border-cream bg-cream p-1 shadow-[0_12px_25px_rgba(0,0,0,0.6)] transition-all duration-300 hover:shadow-[0_25px_40px_rgba(0,0,0,0.8)] select-none"
            >
              {/* Masking Tape on Top Center */}
              <MaskingTape className="-top-3 sm:-top-4 left-1/2 -translate-x-1/2 rotate-[-2deg] group-hover:rotate-0 transition-transform scale-75 sm:scale-100" />

              {/* Polaroid Image Frame */}
              <div className="relative aspect-square w-full overflow-hidden bg-cocoa/10 rounded-xs">
                {signedUrl ? (
                  <img
                    src={signedUrl}
                    alt={photo.caption || "Memory photo"}
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      isUnwrapped ? "scale-100 blur-none opacity-100" : "scale-105 blur-xs opacity-80"
                    }`}
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-beige/40 p-2 text-center">
                    <Sparkles className="h-6 w-6 text-taupe/60 mb-1" />
                    <p className="hand text-sm text-cocoa">{photo.caption || "Special Memory"}</p>
                  </div>
                )}

                {/* Satin Gift Ribbon Overlay if not unwrapped yet */}
                <AnimatePresence>
                  {!isUnwrapped && (
                    <motion.div
                      key="gift-wrapper"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-cocoa/45 backdrop-blur-[2px] flex flex-col items-center justify-center p-2 text-center"
                    >
                      {/* Cross Ribbon */}
                      <div className="absolute inset-x-0 top-1/2 h-3.5 -translate-y-1/2 bg-gradient-to-r from-gold/90 via-amber-200 to-gold/90 shadow-sm border-y border-gold/40" />
                      <div className="absolute inset-y-0 left-1/2 w-3.5 -translate-x-1/2 bg-gradient-to-b from-gold/90 via-amber-200 to-gold/90 shadow-sm border-x border-gold/40" />

                      {/* Gold Wax Seal / Bow Button */}
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-rose border-2 border-gold shadow-md"
                      >
                        <Heart className="h-4 w-4 text-cream fill-cream" />
                      </motion.div>

                      <span className="relative z-10 mt-2 rounded-full bg-cream/95 px-2.5 py-0.5 text-[10px] font-medium text-cocoa shadow-xs">
                        ✨ Tap to unwrap
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {photo.featured && (
                  <span className="absolute top-2 right-2 z-20 rounded-full bg-gold/90 p-1 text-cocoa shadow-xs">
                    <Heart className="h-3.5 w-3.5 fill-cocoa" />
                  </span>
                )}
              </div>

              {/* Polaroid Bottom Margin */}
              <div className="mt-3 min-h-[38px] px-1 text-center">
                {photo.caption ? (
                  <p className="hand text-xl text-cocoa leading-tight line-clamp-1">
                    {photo.caption}
                  </p>
                ) : (
                  <p className="hand text-lg text-walnut/60 italic">sweet memory</p>
                )}
                {photo.taken_on && (
                  <p className="text-[10px] font-sans tracking-widest text-walnut/60 uppercase mt-0.5">
                    {new Date(photo.taken_on).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Retro Vintage 35mm Camera at Bottom Right (Matching Image) */}
      <div className="absolute bottom-4 right-6 z-20 hidden sm:block">
        <VintageCamera />
      </div>
    </div>
  );
}
