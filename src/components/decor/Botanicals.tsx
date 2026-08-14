/** Delicate botanical line drawings used sparingly across the experience. */

export function SprigLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 60" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 30c40 0 70-16 106-16s72 16 106 16"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {[36, 62, 88, 132, 158, 184].map((x, i) => (
        <path
          key={x}
          d={`M${x} ${i % 2 ? 30 : 26}c6-10 16-12 22-8-4 8-14 12-22 8z`}
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          transform={i % 2 ? `rotate(180 ${x} 30)` : undefined}
        />
      ))}
      <circle cx="110" cy="14" r="3.4" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="110" cy="14" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function Daisy({ className = "", petals = 8 }: { className?: string; petals?: number }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true">
      {Array.from({ length: petals }).map((_, i) => (
        <ellipse
          key={i}
          cx="30"
          cy="16"
          rx="5"
          ry="11"
          stroke="currentColor"
          strokeWidth="0.9"
          transform={`rotate(${(360 / petals) * i} 30 30)`}
        />
      ))}
      <circle cx="30" cy="30" r="4.5" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function LeafBranch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" className={className} aria-hidden="true">
      <path d="M60 198C60 140 54 80 40 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {Array.from({ length: 7 }).map((_, i) => {
        const y = 30 + i * 22;
        const dir = i % 2 ? 1 : -1;
        return (
          <path
            key={i}
            d={`M${58 - i} ${y}c${dir * 22} -14 ${dir * 34} -4 ${dir * 36} 6-${dir * 20} 8-${dir * 30} 4-${dir * 36} -6z`}
            stroke="currentColor"
            strokeWidth="0.9"
            fill="none"
          />
        );
      })}
    </svg>
  );
}

export function PressedFlower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" className={className} aria-hidden="true">
      <path d="M40 88V44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M40 66c-12-2-18-10-18-18 10-2 16 6 18 18z" stroke="currentColor" strokeWidth="0.9" />
      <path d="M40 58c11-3 17-11 16-19-10-1-15 8-16 19z" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="40" cy="26" r="12" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="40" cy="26" r="5" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="28" cy="16" r="5" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="53" cy="17" r="4" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  );
}