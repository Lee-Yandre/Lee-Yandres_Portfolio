import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-effects";

/** Pair of cherries on a stem. */
export const Cherry = ({ className = "", size = 64 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M32 6 C 30 20, 22 30, 18 40" stroke="hsl(var(--lavender))" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M32 6 C 36 22, 42 30, 46 42" stroke="hsl(var(--lavender))" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M32 6 C 40 2, 50 6, 52 12 C 44 14, 36 12, 32 6 Z" fill="hsl(var(--plum))" />
    <circle cx="17" cy="47" r="11" fill="hsl(var(--cherry))" />
    <circle cx="47" cy="49" r="11" fill="hsl(var(--burgundy))" />
    <circle cx="13" cy="43" r="3" fill="hsl(var(--foreground) / 0.55)" />
    <circle cx="43" cy="45" r="3" fill="hsl(var(--foreground) / 0.4)" />
  </svg>
);

/** Organic leopard-spot cluster. */
export const LeopardSpots = ({ className = "" }: { className?: string }) => {
  const spots = [
    [12, 14, 7, 5, 20], [40, 10, 6, 4, -15], [70, 20, 8, 5, 35], [22, 44, 6, 5, -30],
    [55, 42, 7, 4, 10], [86, 46, 5, 4, -20], [36, 72, 8, 5, 25], [70, 74, 6, 4, -10], [10, 80, 5, 4, 40],
  ];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {spots.map(([x, y, rx, ry, rot], i) => (
        <g key={i} transform={`rotate(${rot} ${x} ${y})`}>
          <ellipse cx={x} cy={y} rx={rx} ry={ry} fill="none" stroke="currentColor" strokeWidth="2.4" strokeDasharray="9 4" />
          <ellipse cx={x} cy={y} rx={rx * 0.45} ry={ry * 0.45} fill="currentColor" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
};

/** Wavy divider between two sections. `color` is the next section's colour. */
export const WaveDivider = ({ color, flip = false }: { color: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    className={`block w-full h-16 md:h-24 ${flip ? "-scale-x-100" : ""}`}
    aria-hidden="true"
  >
    <path d="M0,64 C240,120 480,0 720,48 C960,96 1200,16 1440,56 L1440,120 L0,120 Z" fill={color} />
  </svg>
);

/** Heading that reveals word by word. */
export const RevealHeading = ({
  eyebrow, title, accent, sub, className = "",
}: { eyebrow: string; title: string; accent?: string; sub?: ReactNode; className?: string }) => {
  const ref = useReveal<HTMLDivElement>(0.3);
  const words = title.split(" ");
  return (
    <div ref={ref} className={`mb-12 max-w-3xl ${className}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
        {words.map((w, i) => (
          <span key={i} className="word mr-[0.25em]">
            <span style={{ transitionDelay: `${i * 70}ms` }}>{w}</span>
          </span>
        ))}
        {accent && (
          <span className="word">
            <span className="italic text-shimmer" style={{ transitionDelay: `${words.length * 70}ms` }}>
              {accent}
            </span>
          </span>
        )}
      </h2>
      <div className="accent-line w-24 mt-6 mb-5" />
      {sub && <p className="text-muted-foreground text-base md:text-lg max-w-2xl">{sub}</p>}
    </div>
  );
};

export const Reveal = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};
