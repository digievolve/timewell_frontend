"use client";
import { useEffect, useRef, useState } from "react";
import { Users, Star, ShieldCheck, MapPin } from "lucide-react";

const stats = [
  { icon: Users,       value: 500,  suffix: "+", label: "Service Users Supported",  color: "text-primary-500" },
  { icon: Star,        value: 5,    suffix: "★",  label: "Average Client Rating",    color: "text-yellow-500" },
  { icon: ShieldCheck, value: 100,  suffix: "%",  label: "Vetted & Trained Staff",   color: "text-secondary-500" },
  { icon: MapPin,      value: 24,   suffix: "/7", label: "Support Available",        color: "text-primary-500" },
];

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ icon: Icon, value, suffix, label, color, active }: typeof stats[0] & { active: boolean }) {
  const count = useCountUp(value, 1600, active);
  return (
    <div className="flex flex-col items-center gap-2 text-center px-4">
      <div className={`w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-1`}>
        <Icon className={`w-6 h-6 ${color}`} strokeWidth={1.75} />
      </div>
      <p className="font-display text-4xl font-bold text-slate-900 leading-none tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-slate-500 text-sm font-medium">{label}</p>
    </div>
  );
}

export default function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white border-y border-slate-100 py-12" aria-label="Key statistics">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-slate-100">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}