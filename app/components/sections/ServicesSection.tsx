import { Home, Building2, Coffee } from "lucide-react";
import ServiceCard from "../cards/ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      Icon: Home,
      title: "Home Care",
      description:
        "Supporting individuals in their own homes with daily living activities, personal care, meal preparation, medication support, and companionship.",
      href: "/services#home-care",
      accent: "blue" as const,
    },
    {
      Icon: Building2,
      title: "Supported Living",
      description:
        "Tailored support for individuals with learning disabilities, autism, or mental health needs to live independently in a safe, supportive environment.",
      href: "/services#supported-living",
      accent: "green" as const,
    },
    {
      Icon: Coffee,
      title: "Companionship",
      description:
        "Providing social support and companionship to reduce loneliness, improve emotional wellbeing, and assist with activities and outings.",
      href: "/services#companionship",
      accent: "blue" as const,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[var(--surface)]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 id="services-heading" className="font-display text-h2 font-bold text-slate-900 mb-4">
            Our Care Services
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            TimeWell Care Services provides a wide range of care and support services tailored to meet the needs of individuals and families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
