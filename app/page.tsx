import PageWrapper from "./components/layout";
import HeroCarousel from "./components/sections/HeroCarousel";
import StatsBanner from "./components/sections/StatsBanner";
import ServicesSection from "./components/sections/ServicesSection";
import ValuesSection from "./components/sections/ValuesSection";
import TestimonialsCarousel from "./components/sections/TestimonialsCarousel";
import CTASection from "./components/sections/CTASection";

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Care Services - Home Care, Supported Living & Companionship",
  description: "TimeWell Care Services offers home care, supported living, and companionship services in London. Professional, compassionate care tailored to your needs.",
  keywords: "home care London, supported living, companionship care, elderly care, care services, dementia support",
};

export default function HomePage() {
  return (
    <PageWrapper fullBleedHero>
      {/* 1. Full-viewport hero carousel — no pt padding needed, sits under transparent nav */}
      <HeroCarousel />

      {/* 2. Animated stats strip */}
      {/* <StatsBanner /> */}

      {/* 3. Services cards with staggered scroll-reveal */}
      <ServicesSection />

      {/* 4. Why choose us — values grid */}
      <ValuesSection />

      {/* 5. Auto-sliding testimonials carousel */}
      <TestimonialsCarousel />

      {/* 6. Final CTA */}
      <CTASection />
    </PageWrapper>
  );
}