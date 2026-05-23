import PageWrapper from "./components/layout";
import Hero from "./components/sections/Hero";
import ServicesSection from "./components/sections/ServicesSection";
import ValuesSection from "./components/sections/ValuesSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import CTASection from "./components/sections/CTASection";

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero
        title="Compassionate Care"
        titleHighlight="You Can Trust"
        subtitle="At TimeWell Care Services, we provide reliable, person-centered care that helps individuals live safely, comfortably, and independently in their own homes or supported living environments."
        primaryCta={{ label: "Book Free Assessment", href: "/assessment" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
        imageUrl="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
        imageAlt="Carer supporting an elderly person at home"
      />
      <ServicesSection />
      <ValuesSection />
      <TestimonialsSection />
      <CTASection />
    </PageWrapper>
  );
}
