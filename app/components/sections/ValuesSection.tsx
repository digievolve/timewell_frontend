"use client"

import Link from "next/link";
import {
  Heart, Shield, Users, Award, Check, Clock, ArrowRight, MapPin, BadgeCheck, Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ValueItem {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    Icon: Heart,
    title: "Person-Centred Care",
    description: "Every care plan is shaped entirely around the individual's needs, preferences, and lifestyle.",
  },
  {
    Icon: Users,
    title: "Compassionate Staff",
    description: "Carefully recruited professionals who are passionate about delivering outstanding, empathetic care.",
  },
  {
    Icon: Check,
    title: "Promotes Independence",
    description: "We empower individuals to live fulfilling lives while receiving only the support they truly need.",
  },
  {
    Icon: Clock,
    title: "Flexible & Reliable",
    description: "Adaptable care packages that shift with changing needs — always there when you need us most.",
  },
  {
    Icon: Shield,
    title: "Safe & Professional",
    description: "Strict safeguarding standards and best practices that ensure your loved one is always protected.",
  },
  {
    Icon: Award,
    title: "Committed to Excellence",
    description: "Continuously improving through training, feedback, and a relentless drive for quality.",
  },
];

export default function ValuesSection() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      aria-labelledby="values-heading"
      style={{ background: "var(--surface)" }}
    >
      {/* Subtle decorative elements */}
      <div
        className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full"
        style={{ 
          background: "radial-gradient(circle, rgba(56, 170, 221, 0.06) 0%, transparent 70%)" 
        }}
      />
      <div
        className="absolute -left-32 bottom-0 w-[400px] h-[400px] rounded-full"
        style={{ 
          background: "radial-gradient(circle, rgba(141, 198, 76, 0.06) 0%, transparent 70%)" 
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--border)] mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" style={{ color: "var(--primary)" }} />
            <span className="text-sm font-semibold" style={{ color: "var(--primary-dark)" }}>
              Why Choose Us
            </span>
          </div>
          
          <h2
            id="values-heading"
            className="font-bold text-4xl lg:text-5xl mb-6 leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            Choosing the Right Provider
            <br />
            <span style={{ color: "var(--primary)" }}>
              Matters.
            </span>
          </h2>
          
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            At TimeWell Care Services we are committed to delivering safe, reliable, and compassionate care that families can genuinely trust.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
          {[
            { number: "500+", label: "People Supported" },
            { number: "100%", label: "Vetted Carers" },
            { number: "5★", label: "Client Rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-4 px-3 rounded-2xl bg-white border border-[var(--border)] shadow-sm"
            >
              <p className="text-2xl font-bold" style={{ color: "var(--primary)" }}>
                {stat.number}
              </p>
              <p className="text-xs font-medium mt-1" style={{ color: "var(--muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-8 border border-[var(--border)] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-opacity-20"
                style={{ 
                  background: "rgba(56, 170, 221, 0.08)",
                  color: "var(--primary)"
                }}
              >
                <Icon className="w-7 h-7" strokeWidth={1.75} />
              </div>

              {/* Content */}
              <h3 
                className="font-bold text-xl mb-3 transition-colors duration-300"
                style={{ color: "var(--foreground)" }}
              >
                {title}
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                {description}
              </p>

              {/* Decorative line */}
              <div 
                className="mt-5 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ 
                  background: "linear-gradient(to right, var(--primary), var(--secondary))",
                  width: "0%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = "100%";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = "0%";
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20">
          <div 
            className="relative rounded-3xl p-8 lg:p-10 overflow-hidden border border-[var(--border)] bg-white shadow-sm"
          >
            {/* Subtle gradient accent */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
              style={{ 
                background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" 
              }}
            />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-start lg:items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(56, 170, 221, 0.08)" }}
                >
                  <svg className="w-5 h-5" style={{ color: "var(--primary)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm italic leading-relaxed" style={{ color: "var(--foreground)" }}>
                    "Caring for people is not just our profession — it is our commitment."
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" style={{ color: "var(--muted)" }} />
                      <span className="text-xs" style={{ color: "var(--muted)" }}>Haringey, London</span>
                    </div>
                    <div className="w-px h-3" style={{ background: "var(--border)" }} />
                    <div className="flex items-center gap-1.5">
                      <BadgeCheck className="w-3.5 h-3.5" style={{ color: "var(--secondary)" }} />
                      <span className="text-xs" style={{ color: "var(--muted)" }}>CQC Registration (in-view)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg whitespace-nowrap shadow-primary/20"
                style={{ 
                  boxShadow: "0 4px 14px rgba(56, 170, 221, 0.25)" 
                }}
              >
                Learn About Us 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}