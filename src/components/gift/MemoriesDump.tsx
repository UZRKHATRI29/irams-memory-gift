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
  const photoPaths = photos.map((p) => p.image_url);
  const getUrl = useMediaUrls(photoPaths);

  return (
    <div className="relative my-6 rounded-3xl border-4 border-[#2A180E] p-6 sm:p-10 shadow-2xl overflow-hidden"
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
      <div className="text-center mb-10">
        <h3 className="hand text-4xl text-cream font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          📸 The Memories Dump
        </h3>
        <p className="text-sm font-sans tracking-widest text-gold/90 uppercase mt-1">
          every polaroid taped with love
        </p>
      </div>

      {/* Grid of Taped Polaroids (Matching Reference Image Exactly) */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 pb-20">
        {photos.map((photo, index) => {
          const signedUrl = getUrl(photo.image_url);
          // Alternate rotation angles for realistic taped board layout
          const rotations = [-3.5, 2.5, -2, 3, -1.5, 4, -2.8, 1.8];
          const rotDeg = rotations[index % rotations.length];

          return (
            <motion.div
              key={photo.id || index}
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
              onClick={() => onSelectPhoto(photo, index)}
              className="group relative cursor-pointer rounded-sm border-[10px] border-cream bg-cream p-1 shadow-[0_12px_25px_rgba(0,0,0,0.6)] transition-all duration-300 hover:shadow-[0_25px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Masking Tape on Top Center */}
              <MaskingTape className="-top-4 left-1/2 -translate-x-1/2 rotate-[-2deg] group-hover:rotate-0 transition-transform" />

              {/* Polaroid Image Frame */}
              <div className="relative aspect-square w-full overflow-hidden bg-black/20 rounded-xs">
                {signedUrl ? (
                  <img
                    src={signedUrl}
                    alt={photo.caption || "Memory photo"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-beige/40 p-2 text-center">
                    <Sparkles className="h-6 w-6 text-taupe/60 mb-1" />
                    <p className="hand text-sm text-cocoa">{photo.caption || "Special Memory"}</p>
                  </div>
                )}

                {photo.featured && (
                  <span className="absolute top-2 right-2 rounded-full bg-gold/90 p-1 text-cocoa shadow-xs">
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
