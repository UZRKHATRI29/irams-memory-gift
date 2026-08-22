import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Daisy, LeafBranch, SprigLine } from "@/components/decor/Botanicals";
import { Atmosphere } from "@/components/decor/Atmosphere";
import { Sparkles } from "lucide-react";

type CountdownProps = {
  targetDateStr?: string | null;
  recipientName?: string;
  onUnlock?: () => void;
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

function calculateTimeLeft(targetStr?: string | null): TimeLeft {
  // Default target: August 28 of 2026 at 00:00:00 local time
  let target = targetStr ? new Date(targetStr) : new Date("2026-08-28T00:00:00");
  if (isNaN(target.getTime())) {
    target = new Date("2026-08-28T00:00:00");
  }

  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, totalMs: diff };
}

export function BirthdayCountdown({
  targetDateStr,
  recipientName = "Iram",
  onUnlock,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDateStr));

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft(targetDateStr);
      setTimeLeft(remaining);

      // If timer hits 0, auto unlock!
      if (remaining.totalMs <= 0) {
        clearInterval(timer);
        onUnlock?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateStr, onUnlock]);

  return (
    <div className="relative min-h-[100svh] w-full flex flex-col items-center justify-center px-4 py-12 text-center bg-background paper grain overflow-hidden select-none">
      {/* Background Petals Atmosphere */}
      <Atmosphere />

      {/* Background Botanicals */}
      <LeafBranch className="pointer-events-none absolute -left-6 top-8 h-64 w-32 text-sage/40 sm:h-80 sm:w-44" />
      <LeafBranch className="pointer-events-none absolute -right-6 bottom-8 h-64 w-32 -scale-x-100 text-sage/35 sm:h-80 sm:w-44" />

      {/* Floating Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-2xl"
      >
        <motion.div
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <Daisy className="mx-auto mb-4 h-12 w-12 text-rose" />
        </motion.div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-cream/90 px-4 py-1 text-xs sm:text-sm font-medium text-cocoa shadow-xs backdrop-blur-xs">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span>Surprise Unfolding Soon</span>
        </span>

        <h1 className="mt-4 text-4xl sm:text-6xl text-cocoa leading-tight font-serif">
          Happy Birthday {recipientName}!
        </h1>
        <p className="hand mt-2 text-xl sm:text-2xl text-walnut/90">
          your special sisterly gift box unlocks on August 28th ✨
        </p>

        <SprigLine className="mx-auto mt-4 h-6 w-48 text-taupe/60" />
      </motion.div>

      {/* Countdown Timer Display Boxes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="z-10 mt-8 grid grid-cols-4 gap-2.5 sm:gap-5 max-w-lg w-full"
      >
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Mins", value: timeLeft.minutes },
          { label: "Secs", value: timeLeft.seconds },
        ].map((unit, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-2xl border border-gold/40 bg-cream/90 p-3 sm:p-5 shadow-lift backdrop-blur-sm paper"
          >
            <span className="font-serif text-3xl sm:text-5xl font-bold text-cocoa tracking-tight">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="hand text-sm sm:text-lg text-walnut/80 mt-1 uppercase tracking-wider">
              {unit.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Sisterly Subtitle Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="z-10 mt-8 max-w-md rounded-xl border border-walnut/20 bg-cream/80 p-5 shadow-paper paper"
      >
        <p className="font-serif text-base sm:text-lg text-walnut/90 leading-relaxed">
          "Good things take a little time... Come back on August 28th to unwrap your memories, letter, bouquet, and birthday presents!"
        </p>
        <p className="hand mt-2 text-lg text-cocoa font-medium">With all my love ❤️</p>
      </motion.div>
    </div>
  );
}
