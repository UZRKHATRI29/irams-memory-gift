import { motion, AnimatePresence } from "motion/react";
import type { ReactNode } from "react";
import { AlbumObject, BouquetObject, LetterObject, PresentsObject } from "./objects";
import { SprigLine } from "@/components/decor/Botanicals";

export type BoxDestination = "album" | "letter" | "bouquet" | "gifts";

const EASE = [0.22, 1, 0.36, 1] as const;

function Bow() {
  return (
    <svg viewBox="0 0 160 90" className="h-full w-full" fill="none" aria-hidden="true">
      <path
        d="M80 52c-14-26-42-34-54-20-10 12 6 26 30 26 10 0 18-2 24-6z"
        className="fill-cream"
        stroke="oklch(0.415 0.047 46 / 0.5)"
        strokeWidth="1"
      />
      <path
        d="M80 52c14-26 42-34 54-20 10 12-6 26-30 26-10 0-18-2-24-6z"
        className="fill-cream"
        stroke="oklch(0.415 0.047 46 / 0.5)"
        strokeWidth="1"
      />
      <path
        d="M74 56c-10 10-16 22-18 32 10-6 18-16 24-26zM86 56c10 10 16 22 18 32-10-6-18-16-24-26z"
        className="fill-beige"
        stroke="oklch(0.415 0.047 46 / 0.4)"
        strokeWidth="1"
      />
      <ellipse cx="80" cy="53" rx="10" ry="8" className="fill-beige" stroke="oklch(0.415 0.047 46 / 0.5)" />
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
      initial={{ opacity: 0, y: 40, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.9, ease: EASE }}
      whileHover={{ y: -12, scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex flex-col items-center focus-visible:outline-none"
    >
      <span
        className="block"
        style={{ animation: `sway ${5 + drift}s ease-in-out ${drift}s infinite` }}
      >
        {children}
      </span>
      <span
        className="pointer-events-none mt-1 h-2 w-14 rounded-[50%] bg-cocoa/25 blur-[3px] transition-all duration-300 group-hover:w-16 group-hover:opacity-70"
        aria-hidden="true"
      />
      <span className="hand mt-1 whitespace-nowrap text-lg text-walnut opacity-70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
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
      className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 py-16"
    >
      <motion.div
        animate={{ scale: opened ? 1 : 0.94, y: opened ? -10 : 10 }}
        transition={{ duration: 1.4, ease: EASE }}
        className="relative w-full max-w-[560px]"
        style={{ perspective: 1200 }}
      >
        {/* warm light from inside */}
        <AnimatePresence>
          {opened && (
            <motion.div
              key="glow"
              initial={{ opacity: 0, scaleY: 0.4 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="pointer-events-none absolute inset-x-4 bottom-24 top-0 rounded-[50%] blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 80%, oklch(0.93 0.09 84 / 0.85), transparent 70%)",
              }}
            />
          )}
        </AnimatePresence>

        {/* contents */}
        <AnimatePresence>
          {opened && (
            <motion.div
              key="contents"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-20 mx-auto grid max-w-[420px] grid-cols-2 place-items-end gap-x-4 gap-y-6 pb-4 sm:gap-x-8"
            >
              <BoxObject tooltip="Open the memories" onClick={() => onSelect("album")} delay={0.75} drift={0.4}>
                <AlbumObject />
              </BoxObject>
              <BoxObject tooltip="Read this first" onClick={() => onSelect("letter")} delay={0.9} drift={1.1}>
                <LetterObject />
              </BoxObject>
              <BoxObject
                tooltip="A little something pretty"
                onClick={() => onSelect("bouquet")}
                delay={1.05}
                drift={0.8}
              >
                <BouquetObject />
              </BoxObject>
              <BoxObject tooltip="Your presents" onClick={() => onSelect("gifts")} delay={1.2} drift={1.5}>
                <PresentsObject />
              </BoxObject>
            </motion.div>
          )}
        </AnimatePresence>

        {/* the box itself */}
        <div className="relative mx-auto w-full max-w-[440px]" style={{ transformStyle: "preserve-3d" }}>
          {/* lid */}
          <motion.div
            initial={false}
            animate={
              opened
                ? { rotateX: -118, y: -26, opacity: 0.96 }
                : { rotateX: 0, y: 0, opacity: 1 }
            }
            transition={{ duration: 1.3, ease: EASE }}
            className="absolute -top-[46px] left-1/2 z-10 h-[64px] w-[104%] -translate-x-1/2 rounded-[6px]"
            style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
          >
            <div className="card-texture absolute inset-0 rounded-[6px] bg-cocoa shadow-lift" />
            <div className="absolute inset-x-0 bottom-0 h-[10px] rounded-b-[6px] bg-black/25" />
            <div className="absolute left-1/2 top-0 h-full w-[54px] -translate-x-1/2 bg-beige/85" />
            <div className="absolute inset-x-2 top-1 h-px bg-gold/40" />
            <div className="absolute -top-[52px] left-1/2 h-[72px] w-[132px] -translate-x-1/2">
              <Bow />
            </div>
          </motion.div>

          {/* body */}
          <motion.button
            type="button"
            onClick={opened ? undefined : onOpen}
            aria-label={opened ? undefined : "Open the gift box"}
            whileHover={opened ? undefined : { scale: 1.015 }}
            className="relative block h-[190px] w-full cursor-pointer rounded-[6px] focus-visible:outline-none sm:h-[220px]"
            style={{ cursor: opened ? "default" : "pointer" }}
          >
            <div className="card-texture absolute inset-0 rounded-[6px] bg-cocoa shadow-lift" />
            <div className="absolute inset-x-0 top-0 h-[14px] rounded-t-[6px] bg-black/30" />
            <div className="absolute inset-y-0 left-1/2 w-[54px] -translate-x-1/2 bg-beige/85" />
            <div className="absolute inset-y-3 left-1/2 w-px -translate-x-1/2 bg-walnut/20" />
            <div className="absolute inset-x-3 bottom-2 h-px bg-gold/30" />
            <SprigLine className="absolute bottom-6 left-6 h-6 w-24 text-beige/40" />
            <SprigLine className="absolute bottom-6 right-6 h-6 w-24 -scale-x-100 text-beige/40" />
          </motion.button>
          <div className="mx-auto h-5 w-[80%] rounded-[50%] bg-cocoa/25 blur-md" />
        </div>
      </motion.div>

      <div className="mt-8 min-h-[64px] text-center">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hand text-xl text-walnut"
            >
              tap the box, {recipient} →
            </motion.p>
          ) : (
            <motion.div
              key="pick"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.9 }}
              className="space-y-3"
            >
              <p className="hand text-xl text-walnut">okay… pick something</p>
              {exploredAll && (
                <button
                  onClick={onFinal}
                  className="rounded-full border border-walnut/30 bg-cream/80 px-6 py-2 text-lg text-cocoa shadow-paper transition-colors hover:bg-beige/80"
                >
                  <span className="hand">wait… there's one more thing →</span>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}