"use client";
import AnimateIn from "./AnimateIn";

interface HeroSectionProps {
  badge?: string;
  badgeVariant?: "primary" | "secondary";
  title: string;
  description: string;
  backgroundImage?: string;
  /** Colour the SVG wave should match (the next section's bg). Default: white */
  waveColor?: string;
}

export default function HeroSection({
  badge,
  badgeVariant = "secondary",
  title,
  description,
  backgroundImage = "/images/care-bg.jpg",
  waveColor = "#ffffff",
}: HeroSectionProps) {
  const badgeStyles = {
    primary:   "bg-white/15 border border-white/25 text-white",
    secondary: "bg-secondary-500/20 border border-secondary-400/30 text-secondary-200",
  };

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "460px" }}>

      {/* ── Background image ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* ── Layered gradient overlay ──────────────────────────────────── */}
      {/* Strong left coverage for text, dissolves right */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-800/50" />
      {/* Bottom fade toward wave */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />

      {/* ── Decorative concentric rings (top-right) ───────────────────── */}
      <div className="absolute -top-20 -right-20 pointer-events-none" aria-hidden="true">
        <div className="w-[420px] h-[420px] rounded-full border border-white/6" />
        <div className="absolute inset-8 rounded-full border border-white/8" />
        <div className="absolute inset-16 rounded-full border border-primary-400/15" />
        <div
          className="absolute inset-28 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #38AADD 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Dot pattern (bottom-left) ─────────────────────────────────── */}
      <div
        className="absolute bottom-12 left-0 w-64 h-48 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="relative py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {badge && (
          <AnimateIn direction="up" delay={0}>
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm ${badgeStyles[badgeVariant]}`}>
              {badge}
            </span>
          </AnimateIn>
        )}

        <AnimateIn direction="up" delay={100}>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            {title}
          </h1>
        </AnimateIn>

        <AnimateIn direction="up" delay={200}>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </AnimateIn>

        {/* Decorative divider line */}
        <AnimateIn direction="none" delay={300}>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-12 bg-white/20 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <div className="h-px w-12 bg-white/20 rounded-full" />
          </div>
        </AnimateIn>
      </div>

      {/* ── Wave bottom edge ──────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", height: "56px", width: "100%" }}>
          <path
            d="M0,32 C360,56 1080,8 1440,32 L1440,56 L0,56 Z"
            fill={waveColor}
          />
        </svg>
      </div>
    </section>
  );
}