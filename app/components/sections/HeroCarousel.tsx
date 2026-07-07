"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Shield, Clock, Users } from "lucide-react";

const slides = [
  {
    id: 0,
    badge: "Trusted Home Care in London",
    headline: "Compassionate Care",
    headlineHighlight: "You Can Trust",
    sub: "Person-centred home care that helps individuals live safely, comfortably and independently. With dignity at the heart of everything we do.",
    cta1: { label: "Free Assessment", href: "/assessment" },
    cta2: { label: "Our Services", href: "/services" },
    image: "/images/image7.webp",
    imageAlt: "Carer supporting an elderly person at home",
  },
  {
    id: 1,
    badge: "Home Care",
    headline: "Support That Feels",
    headlineHighlight: "Like Family",
    sub: "We provide reliable, compassionate home care tailored to your loved one's unique needs. From personal care to medication support and companionship.",
    cta1: { label: "Get Started Today", href: "/assessment" },
    cta2: { label: "Learn More", href: "/services#home-care" },
    image: "/images/image5.webp",
    imageAlt: "Carer helping elderly person at home",
  },
  {
    id: 2,
    badge: "Supported Living",
    headline: "Living Independently,",
    headlineHighlight: "With Our Support",
    sub: "Tailored, professional support for individuals with learning disabilities, autism, or mental health needs, empowering them to thrive in safe environments.",
    cta1: { label: "Book Assessment", href: "/assessment" },
    cta2: { label: "About Us", href: "/about" },
    image: "/images/image4.webp",
    imageAlt: "Support worker with client",
  },
  {
    id: 3,
    badge: "Companionship Care",
    headline: "Because Nobody",
    headlineHighlight: "Should Feel Alone",
    sub: "Meaningful companionship and social support that reduces isolation, improves emotional wellbeing, and brings joy to everyday life.",
    cta1: { label: "Request Care", href: "/assessment" },
    cta2: { label: "Contact Us", href: "/contact" },
    image: "/images/image8.webp",
    imageAlt: "Companion carer with elderly person",
  },
];

const INTERVAL = 5500; // ms per slide

export default function HeroCarousel() {
  const [current, setCurrent]   = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused]     = useState(false);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setProgress(0);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 800);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, INTERVAL);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next, paused]);

  // Progress bar
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const step = 100 / (INTERVAL / 50);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);
    return () => { if (progressRef.current) clearInterval(progressRef.current); };
  }, [current, paused]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 0px)", minHeight: "600px", maxHeight: "860px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero image carousel"
    >
      {/* ── Slides ─────────────────────────────────────────────────── */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          {/* Background image */}
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            className="object-cover object-top"
            priority={i === 0}
            sizes="100vw"
          />
          {/* Gradient overlay — left-heavy for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      ))}

      {/* ── Content ────────────────────────────────────────────────── */}
      <div className="relative z-10 h-11/12 pb-60 md:pb-60  max-w-5xl mx-auo px-4 sm:px-6 lg:px-20 flex items-center">
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? "translateY(0)" : "translateY(24px)",
                transitionDelay: i === current ? "200ms" : "0ms",
                pointerEvents: i === current ? "auto" : "none",
              }}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-400" aria-hidden="true" />
                {slide.badge}
              </span>

              {/* Headline */}
              <h1 className="font-display text-4xl max-w-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
                {slide.headline}{" "}<br />
                <span className="text-primary-300">{slide.headlineHighlight}</span>
              </h1>

              {/* Subtext */}
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                {slide.sub}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={slide.cta1.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-primary-500/40 hover:-translate-y-0.5 text-sm"
                >
                  {slide.cta1.label} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={slide.cta2.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-200 text-sm"
                >
                  {slide.cta2.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      {/* ── Prev / Next arrows ─────────────────────────────────────── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-all duration-200 hover:scale-105 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-all duration-200 hover:scale-105 backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ── Dot indicators + progress bar ──────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
            style={{ width: i === current ? "36px" : "10px", background: "rgba(255,255,255,0.35)" }}
          >
            {i === current && (
              <span
                className="absolute inset-y-0 left-0 bg-white rounded-full"
                style={{ width: `${progress}%`, transition: "width 50ms linear" }}
              />
            )}
          </button>
        ))}
      </div>
       <div className="absolute top-1/2 -right-4  rotate-90  z-10 hidden md:flex items-center gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3">
        {[
          { icon: <Shield className="w-4 h-4 text-secondary-400" />, text: "Fully Vetted Staff" },
          { icon: <Clock  className="w-4 h-4 text-secondary-400" />, text: "Flexible Hours" },
          { icon: <Users  className="w-4 h-4 text-secondary-400" />, text: "Person-Centred Care" },
        ].map((b) => (
          <div key={b.text} className="flex items-center gap-2">
            {b.icon}
            <span className="text-white/90 text-xs font-medium">{b.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}