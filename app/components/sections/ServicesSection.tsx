"use client"
import Image from "next/image";
import Link from "next/link";
import { Home, Building2, Coffee, ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  image: string;
  imageAlt: string;
  accentClass: string;
  delay: number;
}

const services: Omit<ServiceCardProps, "delay">[] = [
  {
    Icon: Home,
    title: "Home Care",
    tagline: "Comfort in familiar surroundings",
    description:
      "Supporting individuals in their own homes with personal care, meal preparation, medication support, and daily living activities.",
    features: [
      "Meal prep & nutrition",
      "Medication reminders",
      "Escort to appointments",
      "Personal hygiene & dressing",
    ],
    href: "/services#home-care",
    image: "/images/image11.webp",
    imageAlt: "Carer helping elderly person at home",
    accentClass: "bg-primary-500",
  },
  {
    Icon: Building2,
    title: "Supported Living",
    tagline: "Independence, every single day",
    description:
      "Tailored support for individuals with learning disabilities, autism, or mental health needs to live independently in safe environments.",
    features: [
      "Learning disabilities & autism",
      "Mental health support",
      "Independent living skills",
      "24/7 support available",
    ],
    href: "/services#supported-living",
    image: "/images/image12.webp",
    imageAlt: "Support worker with client in supported living",
    accentClass: "bg-secondary-500",
  },
  {
    Icon: Coffee,
    title: "Companionship",
    tagline: "Warmth beyond words",
    description:
      "Providing meaningful social support and companionship that reduces loneliness and genuinely improves emotional wellbeing.",
    features: [
      "Conversation & social visits",
      "Outings & leisure activities",
      "Hobbies & interests",
      "Reducing isolation",
    ],
    href: "/services#companionship",
    image: "/images/image13.webp",
    imageAlt: "Companion carer sharing a warm moment",
    accentClass: "bg-primary-400",
  },
];

function ServiceCard({
  Icon,
  title,
  tagline,
  description,
  features,
  href,
  image,
  imageAlt,
  accentClass,
  delay,
}: ServiceCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
      style={{ height: "520px" }}
    >
      {/* Background photo */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Gradient overlay — strong at bottom, fades to transparent top */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/75 to-slate-900/10 transition-opacity duration-500" />

      {/* Top badge */}
      <div className="absolute top-6 left-6">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ${accentClass} text-white text-xs font-semibold`}>
          <Icon className="w-3.5 h-3.5" strokeWidth={2} />
          {title}
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-7">

        {/* Tagline */}
        <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-2">
          {tagline}
        </p>

        {/* Title */}
        <h3 className="font-display text-3xl font-bold text-white mb-3 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-[18px] leading-relaxed mb-5">
          {description}
        </p>

        {/* Features — hidden at rest, slides up on hover */}
        <ul
          className="overflow-hidden transition-all duration-500 ease-out space-y-2 mb-5"
          style={{ maxHeight: 0 }}
          ref={(el) => {
            if (!el) return;
            const parent = el.closest(".group");
            if (!parent) return;
            const show = () => (el.style.maxHeight = `${el.scrollHeight}px`);
            const hide = () => (el.style.maxHeight = "0px");
            parent.addEventListener("mouseenter", show);
            parent.addEventListener("mouseleave", hide);
          }}
        >
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-white/80 text-[16px]">
              <span className={`w-4 h-4 rounded-full ${accentClass} flex items-center justify-center shrink-0`}>
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white group/link"
        >
          <span className="border-b border-white/30 group-hover/link:border-white pb-0.5 transition-colors">
            Learn more
          </span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="services-heading"
      style={{ background: "#0a0f1a" }}
    >
      {/* ── Decorative background glows ──────────────────────────────── */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #38AADD 0%, transparent 70%)",
          transform: "translate(-40%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8DC64C 0%, transparent 70%)",
          transform: "translate(40%, 40%)",
        }}
      />
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary-500/15 text-primary-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-500/20">
              What We Offer
            </span>
            <h2
              id="services-heading"
              className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Care Services Built
              <br />
              <span className="text-primary-400">Around You</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed text-sm lg:text-base">
            Every service we provide is shaped around the individual — their preferences, routines, and goals.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 120} />
          ))}
        </div>

        {/* ── Bottom CTA strip ───────────────────────────────────────── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 rounded-2xl border border-white/8 bg-white/3">
          <p className="text-slate-400 text-sm">
            Not sure which service is right for your loved one?
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-500 hover:bg-primary-400 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Book a Free Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
