/**
 * Physical-looking objects that sit inside the gift box.
 * All colour comes from design tokens; each object is pure CSS + SVG.
 */

export function AlbumObject() {
  return (
    <div className="relative h-24 w-20 sm:h-32 sm:w-26">
      <div className="absolute inset-x-1 bottom-0 top-1 rounded-[3px] bg-cream shadow-[inset_0_-2px_0_var(--beige)]" />
      <div className="card-texture absolute inset-0 rotate-[-3deg] rounded-[4px] bg-walnut shadow-object">
        <div className="absolute inset-[6px] rounded-[2px] border border-beige/30" />
        <div className="absolute left-0 top-3 h-[calc(100%-24px)] w-2 rounded-r-sm bg-cocoa/70" />
        <svg viewBox="0 0 40 40" className="absolute inset-0 m-auto h-8 w-8 text-beige/70" fill="none">
          <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1" />
          <path d="M20 13c-4 3-6 7-6 7s2 4 6 7c4-3 6-7 6-7s-2-4-6-7z" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="absolute -bottom-1 left-1/2 h-3 w-10 -translate-x-1/2 rotate-[-4deg] bg-beige/70 opacity-80" />
      </div>
    </div>
  );
}

export function LetterObject() {
  return (
    <div className="relative h-20 w-28 rotate-[4deg] sm:h-24 sm:w-36">
      <div className="card-texture absolute inset-0 rounded-[3px] bg-cream shadow-object" />
      <svg viewBox="0 0 144 96" className="absolute inset-0 h-full w-full text-taupe/70" fill="none">
        <path d="M0 4l72 52L144 4" stroke="currentColor" strokeWidth="1.2" />
        <rect x="0.5" y="0.5" width="143" height="95" rx="3" stroke="currentColor" strokeWidth="1" />
      </svg>
      <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/70 shadow-[inset_0_-2px_4px_oklch(0.4_0.06_24_/_0.5)]" />
    </div>
  );
}

export function BouquetObject() {
  const blooms = [
    { x: 30, y: 26, c: "text-cream", r: 9 },
    { x: 62, y: 18, c: "text-rose/80", r: 8 },
    { x: 92, y: 30, c: "text-cream", r: 7 },
    { x: 46, y: 44, c: "text-gold/80", r: 6 },
    { x: 78, y: 46, c: "text-rose/60", r: 6 },
  ];
  return (
    <div className="relative h-24 w-24 sm:h-32 sm:w-32">
      <svg viewBox="0 0 120 130" className="h-full w-full drop-shadow-[0_10px_16px_oklch(0.265_0.032_47_/_0.35)]" fill="none">
        <g className="text-sage" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M60 122C56 96 44 66 28 40" />
          <path d="M60 122C62 94 72 64 90 36" />
          <path d="M60 122V44" />
          <path d="M44 74c-10-6-16-14-18-22 10 0 16 8 18 22z" />
          <path d="M76 66c10-6 15-15 16-23-10 1-15 9-16 23z" />
        </g>
        {blooms.map((b, i) => (
          <g key={i} className={b.c}>
            {Array.from({ length: 7 }).map((_, p) => (
              <ellipse
                key={p}
                cx={b.x}
                cy={b.y - b.r * 0.75}
                rx={b.r * 0.38}
                ry={b.r * 0.8}
                fill="currentColor"
                opacity="0.95"
                transform={`rotate(${(360 / 7) * p} ${b.x} ${b.y})`}
              />
            ))}
            <circle cx={b.x} cy={b.y} r={b.r * 0.32} className="text-gold" fill="currentColor" />
          </g>
        ))}
        <path
          d="M42 96h36l-6 30H48z"
          className="text-beige"
          fill="currentColor"
          stroke="oklch(0.415 0.047 46)"
          strokeWidth="1"
        />
        <path d="M40 100h40" stroke="oklch(0.415 0.047 46)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function PresentsObject() {
  return (
    <div className="relative flex h-24 w-28 items-end justify-center gap-1 sm:h-32 sm:w-36">
      <SmallPresent className="h-12 w-12 -rotate-6" body="bg-cocoa" ribbon="bg-beige" />
      <SmallPresent className="h-16 w-16" body="bg-walnut" ribbon="bg-cream" />
      <SmallPresent className="h-10 w-10 rotate-6" body="bg-taupe" ribbon="bg-cocoa/70" />
    </div>
  );
}

export function SmallPresent({
  className = "",
  body = "bg-walnut",
  ribbon = "bg-cream",
}: {
  className?: string;
  body?: string;
  ribbon?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className={`card-texture absolute inset-0 rounded-[3px] ${body} shadow-object`} />
      <div className={`absolute left-1/2 top-0 h-full w-[14%] -translate-x-1/2 ${ribbon} opacity-90`} />
      <div className={`absolute left-0 top-[42%] h-[14%] w-full ${ribbon} opacity-90`} />
      <div
        className={`absolute -top-[14%] left-1/2 h-[26%] w-[42%] -translate-x-1/2 rounded-full ${ribbon} opacity-90`}
        style={{ clipPath: "polygon(0 100%, 22% 0, 50% 55%, 78% 0, 100% 100%)" }}
      />
    </div>
  );
}