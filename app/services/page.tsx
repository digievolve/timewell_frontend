import type { Metadata } from "next";
import Image from "next/image";
import PageWrapper from "../components/layout";
import Button from "../components/ui/Button";
import { Home, Building2, Coffee, Check, ArrowRight } from "lucide-react";
import HeroSection from "../components/ui/HeroSection";
import AnimateIn from "../components/ui/AnimateIn";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = { title: "Our Services" };

const services = [
  {
    id: "home-care",
    Icon: Home,
    title: "Home Care",
    tagline: "Care in the place you love most",
    imageUrl: "/images/image8.png",
    imageAlt: "Carer helping elderly person at home",
    description:
      "Supporting individuals in their own homes with daily living activities such as personal care, meal preparation, medication support, and companionship.",
    features: [
      "Meal preparation and nutrition assistance",
      "Medication reminders and support",
      "Companionship and social interaction",
      "Escort to appointments and social activities",
      "Reduced risks of falls and hospitalisations",
      "Personal hygiene, dressing, and mobility support (CQC in-view)",
    ],
    accentFrom: "from-primary-600",
    accentTo: "to-primary-800",
    statValue: "24/7",
    statLabel: "Flexible Support",
  },
  {
    id: "supported-living",
    Icon: Building2,
    title: "Supported Living",
    tagline: "Independence with the right support",
    imageUrl: "/images/image9.png",
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
    accentFrom: "from-secondary-600",
    accentTo: "to-secondary-800",
    statValue: "100%",
    statLabel: "Person-Centred",
  },
  {
    id: "companionship",
    Icon: Coffee,
    title: "Companionship",
    tagline: "Warmth, connection, and presence",
    imageUrl:  "/images/image5.png",
    imageAlt: "Companion carer sharing a moment with an elderly person",
    description:
      "Providing social support and companionship to reduce loneliness and improve emotional wellbeing, with meaningful connections that enrich daily life.",
    features: [
      "Meaningful conversation and social interaction",
      "Accompanying to shops and errands",
      "Walks, outings, and leisure activities",
      "Support with hobbies and interests",
      "Emotional support and friendship",
      "Reducing isolation and loneliness",
    ],
    accentFrom: "from-primary-500",
    accentTo: "to-secondary-600",
    statValue: "5★",
    statLabel: "Rated Service",
  },
];

const commitments = [
  "Delivering high-quality person-centered care",
  "Promoting independence and wellbeing",
  "Providing compassionate and reliable support",
  "Working in partnership with families and professionals",
];

// Section background alternates: light, tinted, light
const sectionBgs = [
  "bg-white",
  "bg-gradient-to-br from-slate-50 via-primary-50/30 to-secondary-50/20",
  "bg-white",
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <HeroSection
        badge="What We Offer"
        title="Our Care Services"
        badgeVariant="primary"
        description="TimeWell Care Services provides a wide range of care and support services tailored to meet the needs of individuals and families across London."
        backgroundImage="/images/services.png"
        waveColor="#ffffff"
      />

      {services.map(({ id, Icon, title, tagline, imageUrl, imageAlt, description, features, accentFrom, accentTo, statValue, statLabel }, idx) => (
        <section
          key={id}
          id={id}
          className={`relative py-24 lg:py-32 overflow-hidden ${sectionBgs[idx]}`}
          aria-labelledby={`${id}-heading`}
        >
          {/* Subtle background glow on even sections */}
          {idx % 2 === 0 && (
            <div
              className="absolute pointer-events-none"
              style={{
                width: "600px", height: "600px", borderRadius: "50%", opacity: 0.06,
                background: "radial-gradient(circle, #38AADD 0%, transparent 70%)",
                top: "50%", right: idx === 0 ? "-10%" : undefined, left: idx === 2 ? "-10%" : undefined,
                transform: "translateY(-50%)",
              }}
            />
          )}

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? "" : ""}`}>

              {/* ── Text column ─────────────────────────────────────── */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <AnimateIn direction={idx % 2 === 0 ? "left" : "right"}>
                  {/* Service chip */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${accentFrom} ${accentTo} text-white text-xs font-semibold mb-5 shadow-lg`}>
                    <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                    {title}
                  </div>

                  {/* Tagline */}
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-3">{tagline}</p>

                  {/* Heading */}
                  <h2 id={`${id}-heading`} className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                    {title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-8 text-sm lg:text-base">{description}</p>

                  {/* Features */}
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
                </AnimateIn>
              </div>

              {/* ── Image column ─────────────────────────────────────── */}
              <div className={`relative ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <AnimateIn direction={idx % 2 === 0 ? "right" : "left"} delay={100}>
                  {/* Decorative frame offset */}
                  <div
                    className={`absolute -z-10 inset-0 rounded-3xl bg-gradient-to-br ${accentFrom} ${accentTo} opacity-20`}
                    style={{ transform: `translate(${idx % 2 === 0 ? "12px" : "-12px"}, 12px)` }}
                  />

                  <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-300/40">
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Floating stat badge */}
                  <div
                    className={`absolute bg-gradient-to-br ${accentFrom} ${accentTo} text-white rounded-2xl shadow-xl px-5 py-4`}
                    style={{
                      bottom: "-20px",
                      [idx % 2 === 0 ? "left" : "right"]: "-20px",
                    }}
                  >
                    <p className="font-display text-2xl font-bold leading-none">{statValue}</p>
                    <p className="text-white/80 text-xs mt-1">{statLabel}</p>
                  </div>
                </AnimateIn>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── Commitment & CTA ─────────────────────────────────────────────
          Dark background with background image                         */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1400&q=80)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 to-primary-700/90" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn direction="up">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-5">
              Our Commitment
            </span>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Our Promise to You
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {commitments.map((c, idx) => (
              <AnimateIn key={c} direction="up" delay={([0, 100, 200, 300] as const)[idx]}>
                <div className="flex items-start gap-3 text-left bg-white/8 hover:bg-white/14 backdrop-blur-sm border border-white/10 rounded-2xl p-4 transition-colors duration-200">
                  <Check className="w-4 h-4 text-secondary-400 shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/85 text-sm">{c}</span>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn direction="up" delay={400}>
            <p className="text-white/60 mb-8 text-base">
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
          </AnimateIn>
        </div>
      </section>
    </PageWrapper>
  );
}
