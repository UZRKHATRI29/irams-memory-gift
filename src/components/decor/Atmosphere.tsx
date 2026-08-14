import { useEffect, useMemo, useState } from "react";

type PetalsProps = { count?: number; className?: string };

/** Soft petals drifting upward. Positions are generated lazily on first render. */
export function Petals({ count = 14, className = "" }: PetalsProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 18,
        duration: 20 + Math.random() * 22,
        size: 6 + Math.random() * 10,
        drift: (Math.random() - 0.5) * 160,
        rose: Math.random() > 0.6,
      })),
    [count],
  );

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className={`absolute bottom-0 block rounded-[60%_40%_55%_45%/55%_60%_40%_45%] ${
            p.rose ? "bg-rose/40" : "bg-taupe/35"
          }`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.7,
            ["--drift-x" as string]: `${p.drift}px`,
            animation: `drift-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/** Warm vignette + film grain overlay that sits above the page background. */
export function Atmosphere({ bright = false }: { bright?: boolean }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: "var(--gradient-warmlight)",
          opacity: bright ? 1 : 0.55,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, oklch(0.265 0.032 47 / 0.22) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.2 0.03 47) 0.5px, transparent 0.6px), radial-gradient(oklch(0.2 0.03 47) 0.5px, transparent 0.6px)",
          backgroundSize: "3px 3px, 5px 5px",
          backgroundPosition: "0 0, 2px 1px",
        }}
      />
    </div>
  );
}