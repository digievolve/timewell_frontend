import type { Metadata } from "next";
import Image from "next/image";
import PageWrapper from "../components/layout";
import Button from "../components/ui/Button";
import { Home, Building2, Coffee, Check, ArrowRight } from "lucide-react";
import HeroSection from "../components/ui/HeroSection";

export const metadata: Metadata = { title: "Our Services" };

const services = [
  {
    id: "home-care",
    Icon: Home,
    title: "Home Care",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80",
    imageAlt: "Carer helping elderly person at home",
    description:
      "Supporting individuals in their own homes with daily living activities such as personal care, meal preparation, medication support, and companionship.",
    features: [
      "Personal hygiene, dressing, and mobility support",
      "Meal preparation and nutrition assistance",
      "Medication reminders and support",
      "Companionship and social interaction",
      "Escort to appointments and social activities",
      "Reduced risks of falls and hospitalizations",
    ],
  },
  {
    id: "supported-living",
    Icon: Building2,
    title: "Supported Living",
    imageUrl: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=700&q=80",
    imageAlt: "Support worker with client in a supported living environment",
    description:
      "Providing tailored support for individuals with learning disabilities, autism, or mental health needs to live independently in a safe and supportive environment.",
    features: [
      "Tailored support plans for individual needs",
      "Support with learning disabilities and autism",
      "Mental health support and wellbeing",
      "Independent living skills development",
      "Community access and social inclusion",
      "24/7 support options available",
    ],
  },
  {
    id: "companionship",
    Icon: Coffee,
    title: "Companionship",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&q=80",
    imageAlt: "Companion carer sharing a moment with an elderly person",
    description:
      "Providing social support and companionship to reduce loneliness and improve emotional wellbeing.",
    features: [
      "Meaningful conversation and social interaction",
      "Accompanying to shops and errands",
      "Walks, outings, and leisure activities",
      "Support with hobbies and interests",
      "Emotional support and friendship",
      "Reducing isolation and loneliness",
    ],
  },
];

const commitments = [
  "Delivering high-quality person-centered care",
  "Promoting independence and wellbeing",
  "Providing compassionate and reliable support",
  "Working in partnership with families and professionals",
];

export default function ServicesPage() {
  return (
    <PageWrapper>

      <HeroSection
              badge="What We Offer"
              title="Work With TimeWell Care Services"
              badgeVariant="primary"
              description="TimeWell Care Services provides a wide range of care and support services tailored to meet the needs of individuals and families."
              backgroundImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80"
            />


      {services.map(({ id, Icon, title, imageUrl, imageAlt, description, features }, idx) => (
        <section
          key={id}
          id={id}
          className={`py-20 lg:py-28 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
          aria-labelledby={`${id}-heading`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary-600" strokeWidth={1.75} />
                </div>
                <h2 id={`${id}-heading`} className="font-display text-h2 font-bold text-slate-900 mb-4">
                  {title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-7">{description}</p>
                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-secondary-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-secondary-600" strokeWidth={3} />
                      </span>
                      <span className="text-slate-700 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/assessment">
                  Book Free Assessment <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className={`relative ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="rounded-4xl overflow-hidden aspect-[4/3] shadow-card-lg">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Commitment & CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-h2 font-bold mb-5">Our Commitment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {commitments.map((c) => (
              <div key={c} className="flex items-start gap-3 text-left bg-white/10 rounded-2xl p-4">
                <Check className="w-4 h-4 text-secondary-400 shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-primary-100 text-sm">{c}</span>
              </div>
            ))}
          </div>
          <p className="text-primary-200 mb-8 text-lg">
            If you or a loved one requires care or support, our team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/assessment" variant="secondary" size="lg">
              Book a Care Assessment <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
