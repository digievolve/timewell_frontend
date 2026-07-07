"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TimeWell Care Services has been exceptional. The carers treat my mother with such dignity and warmth. It truly feels like she has an extended family looking out for her every single day.",
    name: "Patricia O.",
    role: "Family Member",
    rating: 5,
    initials: "PO",
  },
  {
    quote: "Finding reliable, compassionate home care was a real challenge until we found TimeWell. The team is professional, punctual, and genuinely caring. We couldn't be happier with the service.",
    name: "James M.",
    role: "Service User's Son",
    rating: 5,
    initials: "JM",
  },
  {
    quote: "The supported living service has completely transformed my life. I now have independence and confidence I didn't think was possible. The staff truly understand my needs and respect my choices.",
    name: "David A.",
    role: "Service User",
    rating: 5,
    initials: "DA",
  },
  {
    quote: "From the very first phone call, the team made us feel valued and heard. The care plan was personalised and thoughtful. I would recommend TimeWell to anyone seeking trustworthy care.",
    name: "Susan T.",
    role: "Daughter of Service User",
    rating: 5,
    initials: "ST",
  },
  {
    quote: "The companionship service my father receives has made a remarkable difference. He's happier, more engaged, and looks forward to his carer's visits. The transformation has been wonderful.",
    name: "Michael R.",
    role: "Family Member",
    rating: 5,
    initials: "MR",
  },
];

const INTERVAL = 6000;

export default function TestimonialsCarousel() {
  const [current, setCurrent]   = useState(0);
  const [paused, setPaused]     = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animKey, setAnimKey]   = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number, dir: "left" | "right" = "right") => {
    setDirection(dir);
    setAnimKey((k) => k + 1);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => goTo((current + 1) % testimonials.length, "right"), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + testimonials.length) % testimonials.length, "left"), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next, paused]);

  const t = testimonials[current];

  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-br from-primary-900 via-slate-900 to-slate-900 overflow-hidden"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-800 text-primary-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="font-display text-h2 font-bold text-white mb-3">
            What Our Families Say
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm">
            The trust of the families we support is at the heart of everything we do.
          </p>
        </div>

        {/* Card */}
        <div className="relative">
          {/* Decorative quote mark */}
          

          {/* The animated card */}
          <div
            key={animKey}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center"
            style={{
              animation: `testimonialSlide${direction === "right" ? "In" : "InLeft"} 0.5s cubic-bezier(0.22,1,0.36,1) both`,
            }}
          >
          
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600 fill-slate-600"}`}
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                {t.initials}
              </div>
              <div className="text-left">
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              aria-label={`Testimonial ${i + 1}`}
              className="transition-all duration-300 h-1.5 rounded-full"
              style={{
                width: i === current ? "28px" : "8px",
                background: i === current ? "#38AADD" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Keyframes injected inline — avoids adding a separate CSS file */}
      <style>{`
        @keyframes testimonialSlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes testimonialSlideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}