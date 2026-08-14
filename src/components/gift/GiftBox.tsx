import { motion, AnimatePresence } from "motion/react";
import type { ReactNode } from "react";
import { AlbumObject, BouquetObject, LetterObject, PresentsObject } from "./objects";
import { SprigLine } from "@/components/decor/Botanicals";
import { Sparkles, Heart } from "lucide-react";

export type BoxDestination = "album" | "letter" | "bouquet" | "gifts";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Realistic 3D Satin Ribbon Bow */
function LuxuryBow() {
  return (
    <svg viewBox="0 0 180 110" className="h-full w-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF7F2" />
          <stop offset="50%" stopColor="#EFE8DD" />
          <stop offset="100%" stopColor="#DDD2C1" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF8DC" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
      </defs>
      {/* Left Bow Loop */}
      <path
        d="M90 60 C65 20 20 20 22 50 C24 75 60 70 90 60 Z"
        fill="url(#ribbonGrad)"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
      />
      <path
        d="M32 46 C45 40 68 48 85 58"
        stroke="oklch(0.415 0.047 46 / 0.3)"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Right Bow Loop */}
      <path
        d="M90 60 C115 20 160 20 158 50 C156 75 120 70 90 60 Z"
        fill="url(#ribbonGrad)"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
      />
      <path
        d="M148 46 C135 40 112 48 95 58"
        stroke="oklch(0.415 0.047 46 / 0.3)"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Hanging Ribbon Tails */}
      <path
        d="M82 64 C68 85 55 102 45 108 C58 98 75 80 86 66 Z"
        fill="url(#ribbonGrad)"
        stroke="url(#goldGrad)"
        strokeWidth="1"
      />
      <path
        d="M98 64 C112 85 125 102 135 108 C122 98 105 80 94 66 Z"
        fill="url(#ribbonGrad)"
        stroke="url(#goldGrad)"
        strokeWidth="1"
      />

      {/* Gold Center Ring Knot */}
      <ellipse cx="90" cy="60" rx="14" ry="11" fill="url(#ribbonGrad)" stroke="url(#goldGrad)" strokeWidth="2" />
      <circle cx="90" cy="60" r="4" fill="url(#goldGrad)" />
    </svg>
  );
}

function BoxObject({
  children,
  tooltip,
  onClick,
  delay,
  drift,
}: {
  children: ReactNode;
  tooltip: string;
  onClick: () => void;
  delay: number;
  drift: number;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: EASE }}
      whileHover={{ y: -16, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex flex-col items-center focus-visible:outline-none cursor-pointer"
    >
      {/* Floating Pedestal Shadow */}
      <div className="absolute inset-x-0 -bottom-4 h-6 rounded-[50%] bg-gold/20 blur-md transition-all duration-300 group-hover:scale-125 group-hover:bg-gold/35" />

      {/* Floating Graphic Object */}
      <span
        className="block relative z-10 filter drop-shadow-[0_16px_24px_rgba(0,0,0,0.3)] transition-transform duration-300"
        style={{ animation: `sway ${4 + drift}s ease-in-out ${drift}s infinite` }}
      >
        {children}
      </span>

      {/* Badge Tooltip Label */}
      <span className="hand mt-3 rounded-full border border-gold/40 bg-cream/90 px-4 py-1 text-lg text-cocoa shadow-paper backdrop-blur-xs transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-beige group-hover:shadow-lift font-medium">
        {tooltip}
      </span>
    </motion.button>
  );
}

export function GiftBox({
  opened,
  onOpen,
  onSelect,
  onFinal,
  recipient,
  exploredAll,
}: {
  opened: boolean;
  onOpen: () => void;
  onSelect: (d: BoxDestination) => void;
  onFinal: () => void;
  recipient: string;
  exploredAll: boolean;
}) {
  return (
    <motion.section
      key="box"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 py-12"
    >
      <motion.div
        animate={{ scale: opened ? 1 : 0.96, y: opened ? -10 : 10 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="relative w-full max-w-[540px]"
        style={{ perspective: 1200 }}
      >
        {/* Warm explosion light from inside the opened box */}
        <AnimatePresence>
          {opened && (
            <motion.div
              key="glow"
              initial={{ opacity: 0, scaleY: 0.2 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: EASE }}
              className="pointer-events-none absolute inset-x-0 -top-16 bottom-24 rounded-[50%] blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 65%, oklch(0.94 0.14 85 / 0.95), transparent 75%)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Popping Objects (Matching Reference Image 1) */}
        <AnimatePresence>
          {opened && (
            <motion.div
              key="contents"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-20 mx-auto grid max-w-[480px] grid-cols-2 place-items-center gap-x-6 gap-y-10 pb-8 sm:gap-x-12"
            >
              <BoxObject tooltip="Scrapbook Memories" onClick={() => onSelect("album")} delay={0.65} drift={0.4}>
                <AlbumObject />
              </BoxObject>
              <BoxObject tooltip="Handwritten Letter" onClick={() => onSelect("letter")} delay={0.8} drift={1.1}>
                <LetterObject />
              </BoxObject>
              <BoxObject
                tooltip="Fresh Flower Bouquet"
                onClick={() => onSelect("bouquet")}
                delay={0.95}
                drift={0.8}
              >
                <BouquetObject />
              </BoxObject>
              <BoxObject tooltip="Birthday Presents" onClick={() => onSelect("gifts")} delay={1.1} drift={1.5}>
                <PresentsObject />
              </BoxObject>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Realistic Gift Box */}
        <div className="relative mx-auto w-full max-w-[460px]" style={{ transformStyle: "preserve-3d" }}>
          {/* Box Lid */}
          <motion.div
            initial={false}
            animate={
              opened
                ? { rotateX: -125, y: -36, opacity: 0.92 }
                : { rotateX: 0, y: 0, opacity: 1 }
            }
            transition={{ duration: 1.3, ease: EASE }}
            className="absolute -top-[52px] left-1/2 z-20 h-[72px] w-[105%] -translate-x-1/2 rounded-t-xl rounded-b-md shadow-2xl"
            style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
          >
            {/* Lid Main Face */}
            <div className="absolute inset-0 rounded-t-xl rounded-b-md bg-gradient-to-b from-[#3a2015] via-[#2d180e] to-[#1f1009] border-t-2 border-gold/50 shadow-lift" />
            <div className="absolute inset-x-0 bottom-0 h-[14px] rounded-b-md bg-black/40 border-t border-gold/30" />

            {/* Lid Satin Cream Ribbon */}
            <div className="absolute left-1/2 top-0 h-full w-[64px] -translate-x-1/2 bg-gradient-to-r from-cream via-white to-beige border-x border-gold/40 shadow-sm" />
            <div className="absolute inset-x-3 top-1.5 h-0.5 bg-gold/60" />

            {/* Bow on Lid */}
            <div className="absolute -top-[64px] left-1/2 h-[90px] w-[150px] -translate-x-1/2">
              <LuxuryBow />
            </div>
          </motion.div>

          {/* Box Body */}
          <motion.button
            type="button"
            {...(!opened
              ? {
                  onClick: onOpen,
                  "aria-label": "Open the gift box",
                  whileHover: { scale: 1.025, y: -4 },
                  whileTap: { scale: 0.98 },
                }
              : {})}
            className="relative block h-[210px] w-full cursor-pointer rounded-b-xl rounded-t-md focus-visible:outline-none sm:h-[240px]"
            style={{ cursor: opened ? "default" : "pointer" }}
          >
            {/* Box Body Main Face */}
            <div className="absolute inset-0 rounded-b-xl rounded-t-md bg-gradient-to-b from-[#2d180e] via-[#24120a] to-[#180b05] border-x border-b border-gold/30 shadow-2xl" />
            <div className="absolute inset-x-0 top-0 h-[18px] rounded-t-md bg-black/45" />

            {/* Vertical Satin Ribbon */}
            <div className="absolute inset-y-0 left-1/2 w-[64px] -translate-x-1/2 bg-gradient-to-r from-cream via-white to-beige border-x border-gold/40 shadow-sm" />
            <div className="absolute inset-y-3 left-1/2 w-px -translate-x-1/2 bg-walnut/30" />

            {/* Gold Filigree Line Accents */}
            <div className="absolute inset-x-4 bottom-3 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <SprigLine className="absolute bottom-6 left-6 h-7 w-28 text-gold/40" />
            <SprigLine className="absolute bottom-6 right-6 h-7 w-28 -scale-x-100 text-gold/40" />

            {/* Hanging Gift Tag on Closed Box */}
            <AnimatePresence>
              {!opened && (
                <motion.div
                  initial={{ opacity: 0, rotate: -8, y: -10 }}
                  animate={{ opacity: 1, rotate: [-6, -2, -6], y: 0 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute right-10 top-12 z-30 flex flex-col items-center"
                >
                  {/* String */}
                  <div className="h-8 w-0.5 bg-gold/70" />
                  {/* Tag */}
                  <div className="relative rounded-md border border-gold/50 bg-cream px-3 py-1.5 shadow-md paper">
                    <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border border-gold bg-cocoa" />
                    <p className="hand text-lg text-cocoa font-medium">For {recipient} ♥</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Floor Shadow */}
          <div className="mx-auto h-7 w-[88%] rounded-[50%] bg-cocoa/40 blur-xl" />
        </div>
      </motion.div>

      {/* Instructions Prompt */}
      <div className="mt-8 min-h-[64px] text-center z-30">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="hint"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-1"
            >
              <p className="hand text-2xl text-cocoa font-semibold">
                ✨ Tap the gift box to unwrap your memories, {recipient} ✨
              </p>
              <p className="text-xs uppercase tracking-widest text-walnut/60 font-sans">
                Click anywhere on the box to lift the lid
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="pick"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="space-y-3"
            >
              <p className="hand text-2xl text-cocoa font-semibold">
                pick a surprise from inside the box…
              </p>
              {exploredAll && (
                <button
                  onClick={onFinal}
                  className="rounded-full border border-gold/50 bg-cream px-8 py-3 text-xl text-cocoa shadow-paper transition-all duration-300 hover:bg-beige hover:scale-105"
                >
                  <span className="hand font-bold">✨ wait… there's one final birthday surprise →</span>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}