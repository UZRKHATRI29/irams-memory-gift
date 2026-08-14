/**
 * Physical 3D vector-styled objects that sit inside the gift box.
 * Custom styled to match the warm chocolate aesthetic in reference Image 1.
 */

export function AlbumObject() {
  return (
    <div className="relative h-24 w-20 sm:h-32 sm:w-26 group-hover:scale-105 transition-transform duration-300">
      {/* Pages edge */}
      <div className="absolute inset-y-1 right-0 w-3 rounded-r-[3px] bg-cream shadow-[inset_-2px_0_4px_rgba(0,0,0,0.15)] border-y border-r border-walnut/20" />
      {/* Leather Cover */}
      <div className="card-texture absolute inset-y-0 left-0 right-1.5 rounded-l-[5px] rounded-r-[3px] bg-cocoa shadow-object border border-gold/30">
        {/* Gold leaf margin line */}
        <div className="absolute inset-[6px] rounded-[3px] border border-gold/40" />
        {/* Leather spine */}
        <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-[5px] bg-walnut/80 border-r border-gold/30" />
        {/* Center Ring / Emblem */}
        <div className="absolute inset-0 m-auto flex h-7 w-7 items-center justify-center rounded-full border border-gold/70 bg-walnut/90 shadow-xs">
          <div className="h-3 w-3 rounded-full border border-gold/80 bg-cream/20" />
        </div>
        {/* Corner guards */}
        <div className="absolute top-1 right-2 h-2 w-2 border-t border-r border-gold/50" />
        <div className="absolute bottom-1 right-2 h-2 w-2 border-b border-r border-gold/50" />
        {/* Bottom Washi tape accent */}
        <div className="absolute -bottom-1.5 left-4 h-3.5 w-10 -rotate-3 bg-cream/70 opacity-80 backdrop-blur-xs border border-walnut/20" />
      </div>
    </div>
  );
}

export function LetterObject() {
  return (
    <div className="relative h-20 w-28 rotate-[3deg] sm:h-24 sm:w-36 group-hover:scale-105 transition-transform duration-300">
      <div className="card-texture absolute inset-0 rounded-[4px] bg-cream border border-walnut/25 shadow-object" />
      <svg viewBox="0 0 144 96" className="absolute inset-0 h-full w-full text-walnut/40" fill="none">
        <path d="M0 0l72 54L144 0" stroke="currentColor" strokeWidth="1.5" />
        <path d="M0 96l50-38" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M144 96l-50-38" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
      {/* Wax seal */}
      <div className="absolute left-1/2 top-[45%] flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-rose shadow-md ring-2 ring-cream">
        <div className="h-3.5 w-3.5 rounded-full border border-cream/70 bg-cream/30" />
      </div>
    </div>
  );
}

export function BouquetObject() {
  return (
    <div className="relative h-28 w-24 sm:h-36 sm:w-32 group-hover:scale-105 transition-transform duration-300">
      <svg viewBox="0 0 120 140" className="h-full w-full drop-shadow-[0_12px_20px_rgba(67,40,24,0.35)]" fill="none">
        {/* Stems */}
        <g stroke="oklch(0.55 0.04 133)" strokeWidth="2" strokeLinecap="round">
          <path d="M60 120 C55 90 40 60 25 35" />
          <path d="M60 120 C62 90 75 60 95 32" />
          <path d="M60 120 V38" />
          <path d="M60 120 C50 85 30 55 15 45" />
          <path d="M60 120 C70 85 90 55 105 45" />
        </g>
        {/* Leaves */}
        <path d="M42 80 C30 75 22 62 25 50 C35 55 42 70 42 80Z" fill="oklch(0.655 0.036 133)" opacity="0.85" />
        <path d="M78 75 C90 70 98 57 95 45 C85 50 78 65 78 75Z" fill="oklch(0.655 0.036 133)" opacity="0.85" />

        {/* Flower Blooms (Matching Image 1) */}
        {/* Cream Daisy Top Left */}
        <g transform="translate(25, 30)">
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse key={i} cx="0" cy="-9" rx="3.5" ry="8" fill="oklch(0.958 0.016 82)" transform={`rotate(${i * 45})`} />
          ))}
          <circle cx="0" cy="0" r="4" fill="oklch(0.78 0.07 82)" />
        </g>
        {/* Rose Flower Top Middle */}
        <g transform="translate(60, 24)">
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse key={i} cx="0" cy="-9" rx="4" ry="8.5" fill="oklch(0.68 0.058 24)" transform={`rotate(${i * 45})`} />
          ))}
          <circle cx="0" cy="0" r="4.5" fill="oklch(0.958 0.016 82)" />
        </g>
        {/* Cream Daisy Top Right */}
        <g transform="translate(95, 32)">
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse key={i} cx="0" cy="-8" rx="3.5" ry="7.5" fill="oklch(0.958 0.016 82)" transform={`rotate(${i * 45})`} />
          ))}
          <circle cx="0" cy="0" r="3.8" fill="oklch(0.78 0.07 82)" />
        </g>

        {/* Flower Pot (Matching Image 1) */}
        <path d="M42 98 L78 98 L74 130 L46 130 Z" fill="oklch(0.958 0.016 82)" stroke="oklch(0.415 0.047 46)" strokeWidth="1.5" />
        <rect x="38" y="94" width="44" height="6" rx="2" fill="oklch(0.885 0.029 78)" stroke="oklch(0.415 0.047 46)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function PresentsObject() {
  return (
    <div className="relative flex h-24 w-32 items-end justify-center gap-1.5 sm:h-32 sm:w-40 group-hover:scale-105 transition-transform duration-300">
      <SmallPresent className="h-12 w-11 -rotate-6" body="bg-cocoa" ribbon="bg-cream" />
      <SmallPresent className="h-16 w-16" body="bg-walnut" ribbon="bg-beige" />
      <SmallPresent className="h-11 w-10 rotate-6" body="bg-taupe" ribbon="bg-cream" />
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
      <div className={`card-texture absolute inset-0 rounded-[4px] ${body} shadow-object border border-black/10`} />
      {/* Vertical Ribbon */}
      <div className={`absolute left-1/2 top-0 h-full w-[20%] -translate-x-1/2 ${ribbon} shadow-xs`} />
      {/* Horizontal Ribbon */}
      <div className={`absolute left-0 top-[40%] h-[20%] w-full ${ribbon} shadow-xs`} />
      {/* Ribbon Bow */}
      <div className="absolute -top-[16%] left-1/2 h-[30%] w-[50%] -translate-x-1/2 flex justify-center items-center">
        <div className={`h-3 w-3 rounded-full ${ribbon} border border-black/10 shadow-xs`} />
      </div>
    </div>
  );
}