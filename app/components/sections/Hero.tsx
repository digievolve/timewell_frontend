import Image from "next/image";
import Button from "../ui/Button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";

interface HeroProps {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl?: string;
  imageAlt?: string;
  badges?: { icon: React.ReactNode; text: string }[];
}

export default function Hero({
  title,
  titleHighlight,
  subtitle,
  primaryCta,
  secondaryCta,
  imageUrl,
  imageAlt = "Care services",
  badges,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-primary-50/40 to-secondary-50/30 min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-100/50 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-secondary-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full !bg-primary-500 animate-pulse" aria-hidden="true" />
              Trusted Home Care in London
            </div>
            <h1 className="font-display text-hero font-bold text-slate-900 mb-6 leading-tight">
              {title}
              {titleHighlight && (
                <>
                  {" "}
                  <span className="text-primary-500">{titleHighlight}</span>
                </>
              )}
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">{subtitle}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label} <ArrowRight className="w-5 h-5" />
              </Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {(
                badges || [
                  { icon: <Shield className="w-4 h-4 text-secondary-600" />, text: "Fully Vetted Staff" },
                  { icon: <Clock className="w-4 h-4 text-secondary-600" />,  text: "Flexible Hours" },
                  { icon: <Users className="w-4 h-4 text-secondary-600" />, text: "Person-Centered" },
                ]
              ).map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  {badge.icon}
                  <span className="text-sm text-slate-600 font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          {imageUrl && (
            <div className="relative animate-fade-up delay-200">
              <div className="relative rounded-4xl overflow-hidden aspect-[3/2] shadow-[0_20px_60px_rgba(56,170,221,0.2)]">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                  // sizes="(max-width: 1024px) 80vw, 50vw"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card-lg p-5 flex items-center gap-4 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-lg leading-none">100%</p>
                  <p className="text-slate-500 text-xs mt-0.5">Vetted & Trained Carers</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
