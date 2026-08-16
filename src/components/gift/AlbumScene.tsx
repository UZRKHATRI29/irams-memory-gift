import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCategories, usePhotos, useSettings, type Photo } from "@/lib/content";
import { useMediaUrls } from "@/lib/media";
import { Daisy, LeafBranch, SprigLine } from "@/components/decor/Botanicals";
import { MemoriesDump } from "./MemoriesDump";
import { PolaroidDeck } from "./PolaroidDeck";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Sparkles,
  MapPin,
  Heart,
  Grid,
  Layers,
  Compass,
  Camera,
} from "lucide-react";

type ViewMode = "dump" | "deck" | "roadmap" | "grid";

export function AlbumScene() {
  const { data: settings } = useSettings();
  const { data: categories = [] } = useCategories();
  const { data: photos = [], isLoading } = usePhotos();

  // Set 'dump' (Wood Board Taped Polaroids) as the default view!
  const [viewMode, setViewMode] = useState<ViewMode>("dump");
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Collect image paths for signed URL resolution
  const photoPaths = photos.map((p) => p.image_url);
  const getUrl = useMediaUrls(photoPaths);

  const filteredPhotos = activeCategoryId
    ? photos.filter((p) => p.category_id === activeCategoryId)
    : photos;

  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <div className="mx-auto max-w-5xl px-2 py-4 sm:px-6">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Daisy className="mx-auto mb-3 h-8 w-8 text-taupe/80" />
        </motion.div>
        <h2 className="text-4xl text-cocoa sm:text-5xl">
          {settings?.album_intro || "Our Precious Memories Dump"}
        </h2>
        <p className="hand mt-2 text-xl text-walnut/80">
          polaroid snapshots of sisterhood, laughter, and cherished milestones
        </p>
        <SprigLine className="mx-auto mt-4 h-6 w-48 text-taupe/50" />
      </div>

      {/* View Mode Switcher Tabs */}
      <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-2.5">
        <button
          onClick={() => setViewMode("dump")}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
            viewMode === "dump"
              ? "border border-gold/40 bg-cocoa text-cream shadow-md scale-105"
              : "border border-walnut/20 bg-cream/70 text-walnut hover:bg-beige/80"
          }`}
        >
          <Camera className="h-3.5 w-3.5 text-gold sm:h-4 sm:w-4" />
          <span className="hand text-base sm:text-lg font-semibold">📸 Taped Memories Dump</span>
        </button>

        <button
          onClick={() => setViewMode("deck")}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
            viewMode === "deck"
              ? "border border-gold/40 bg-cocoa text-cream shadow-md scale-105"
              : "border border-walnut/20 bg-cream/70 text-walnut hover:bg-beige/80"
          }`}
        >
          <Layers className="h-3.5 w-3.5 text-gold sm:h-4 sm:w-4" />
          <span className="hand text-base sm:text-lg">Polaroid Fan Deck</span>
        </button>

        <button
          onClick={() => setViewMode("roadmap")}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
            viewMode === "roadmap"
              ? "border border-gold/40 bg-cocoa text-cream shadow-md scale-105"
              : "border border-walnut/20 bg-cream/70 text-walnut hover:bg-beige/80"
          }`}
        >
          <Compass className="h-3.5 w-3.5 text-gold sm:h-4 sm:w-4" />
          <span className="hand text-base sm:text-lg">Memory Roadmap</span>
        </button>

        <button
          onClick={() => setViewMode("grid")}
          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
            viewMode === "grid"
              ? "border border-gold/40 bg-cocoa text-cream shadow-md scale-105"
              : "border border-walnut/20 bg-cream/70 text-walnut hover:bg-beige/80"
          }`}
        >
          <Grid className="h-3.5 w-3.5 text-gold sm:h-4 sm:w-4" />
          <span className="hand text-base sm:text-lg">All Grid</span>
        </button>
      </div>

      {/* Category Pills (Visible in Grid View) */}
      {viewMode === "grid" && categories.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:mt-6 sm:gap-2">
          <button
            onClick={() => setActiveCategoryId(null)}
            className={`rounded-full px-3 py-1 text-xs transition-colors cursor-pointer ${
              activeCategoryId === null
                ? "bg-cocoa text-cream"
                : "bg-cream/70 text-walnut border border-walnut/20 hover:bg-beige"
            }`}
          >
            All ({photos.length})
          </button>
          {categories.map((cat) => {
            const count = photos.filter((p) => p.category_id === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`rounded-full px-3 py-1 text-xs transition-colors cursor-pointer ${
                  activeCategoryId === cat.id
                    ? "bg-cocoa text-cream"
                    : "bg-cream/70 text-walnut border border-walnut/20 hover:bg-beige"
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* Main Content Area Based on View Mode */}
      {isLoading ? (
        <div className="mt-16 text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="mx-auto h-8 w-8 rounded-full border-2 border-walnut/30 border-t-cocoa"
          />
          <p className="hand mt-3 text-lg text-walnut/70">Unfolding memories...</p>
        </div>
      ) : photos.length === 0 ? (
        /* Empty State */
        <div className="mt-12 text-center rounded-2xl border border-walnut/15 bg-card/60 p-6 sm:p-10 paper shadow-paper">
          <LeafBranch className="mx-auto h-10 w-10 text-taupe/60 sm:h-12 sm:w-12" />
          <h3 className="mt-4 text-xl sm:text-2xl text-cocoa">Our Memories Dump Begins Here</h3>
          <p className="hand mt-2 text-lg sm:text-xl text-walnut/70">
            Upload your photos from the admin panel to populate this taped polaroid dump!
          </p>
        </div>
      ) : (
        <div>
          {/* MODE 1: Taped Memories Dump */}
          {viewMode === "dump" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MemoriesDump
                photos={photos}
                onSelectPhoto={(photo) => {
                  const idx = filteredPhotos.findIndex((p) => p.id === photo.id);
                  setSelectedPhotoIndex(idx >= 0 ? idx : 0);
                }}
              />
            </motion.div>
          )}

          {/* MODE 2: Polaroid Deck */}
          {viewMode === "deck" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PolaroidDeck
                photos={photos}
                onSelectPhoto={(photo) => {
                  const idx = filteredPhotos.findIndex((p) => p.id === photo.id);
                  setSelectedPhotoIndex(idx >= 0 ? idx : 0);
                }}
              />
            </motion.div>
          )}

          {/* MODE 3: Memory Roadmap Timeline */}
          {viewMode === "roadmap" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mt-8 space-y-6 sm:mt-12 sm:space-y-12 sm:before:absolute sm:before:left-1/2 sm:before:top-4 sm:before:bottom-4 sm:before:w-0.5 sm:before:-translate-x-1/2 sm:before:bg-gradient-to-b sm:before:from-gold/40 sm:before:via-walnut/20 sm:before:to-rose/40"
            >
              {photos.map((photo, index) => {
                const isEven = index % 2 === 0;
                const signedUrl = getUrl(photo.image_url);

                return (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className={`relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 ${
                      isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div className="w-full sm:w-[calc(50%-2rem)]">
                      <div
                        onClick={() => setSelectedPhotoIndex(index)}
                        className="group relative cursor-pointer rounded-2xl border border-walnut/20 bg-cream p-3.5 sm:p-4 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lift paper"
                      >
                        <div className="aspect-video w-full overflow-hidden rounded-lg bg-cocoa/5">
                          {signedUrl ? (
                            <img
                              src={signedUrl}
                              alt={photo.caption || ""}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-beige/40">
                              <Heart className="h-6 w-6 text-rose" />
                            </div>
                          )}
                        </div>

                        <div className="mt-3">
                          <p className="hand text-xl sm:text-2xl text-cocoa">{photo.caption || "Milestone"}</p>
                          {photo.description && (
                            <p className="mt-1 text-xs sm:text-sm text-walnut/80 line-clamp-2">
                              {photo.description}
                            </p>
                          )}
                          {photo.taken_on && (
                            <p className="mt-2 text-[11px] sm:text-xs font-sans tracking-wider text-walnut/60 uppercase flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(photo.taken_on).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                              })}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex absolute left-1/2 h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-cream bg-cocoa text-cream shadow-md">
                      <MapPin className="h-4 w-4 text-gold" />
                    </div>

                    <div className="w-[calc(50%-2rem)] hidden sm:block" />
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* MODE 4: All Photos Grid */}
          {viewMode === "grid" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredPhotos.map((photo, index) => {
                const signedUrl = getUrl(photo.image_url);
                return (
                  <motion.div
                    key={photo.id}
                    onClick={() => setSelectedPhotoIndex(index)}
                    className="group cursor-pointer rounded-xl border border-walnut/20 bg-cream p-4 shadow-paper transition-all duration-300 hover:scale-[1.02] hover:shadow-lift"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded bg-cocoa/5">
                      {signedUrl && (
                        <img
                          src={signedUrl}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <p className="hand mt-3 text-2xl text-cocoa text-center">{photo.caption}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-cocoa/85 p-4 backdrop-blur-md"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-gold/30 bg-cream p-4 shadow-lift sm:p-6"
            >
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-cocoa/10 p-2 text-cocoa hover:bg-cocoa/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {selectedPhotoIndex > 0 && (
                <button
                  onClick={() => setSelectedPhotoIndex(selectedPhotoIndex - 1)}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-cocoa/10 p-2 text-cocoa hover:bg-cocoa/20 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {selectedPhotoIndex < filteredPhotos.length - 1 && (
                <button
                  onClick={() => setSelectedPhotoIndex(selectedPhotoIndex + 1)}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-cocoa/10 p-2 text-cocoa hover:bg-cocoa/20 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}

              <div className="flex flex-col items-center">
                <div className="max-h-[60vh] w-full overflow-hidden rounded-lg bg-cocoa/5 flex items-center justify-center">
                  <img
                    src={getUrl(currentPhoto.image_url)}
                    alt={currentPhoto.caption || "Scrapbook photo"}
                    className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-sm"
                  />
                </div>

                <div className="mt-4 text-center max-w-xl">
                  {currentPhoto.caption && (
                    <h3 className="hand text-2xl text-cocoa">{currentPhoto.caption}</h3>
                  )}
                  {currentPhoto.description && (
                    <p className="mt-2 text-sm text-walnut/80 leading-relaxed">
                      {currentPhoto.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
