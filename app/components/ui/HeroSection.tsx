"use client"
interface HeroSectionProps {
  badge?: string;
  badgeVariant?: "primary" | "secondary";
  title: string;
  description: string;
  backgroundImage?: string;
}

export default function HeroSection({
  badge,
  badgeVariant = "secondary",
  title,
  description,
  backgroundImage = "/images/care-bg.jpg",
}: HeroSectionProps) {
  const badgeStyles = {
    primary: "bg-primary-100 text-primary-700",
    secondary: "bg-secondary-100 text-secondary-700",
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-30 from-slate-50 via-primary-50/90 to-secondary-50/80" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${badgeStyles[badgeVariant]}`}
          >
            {badge}
          </span>
        )}

        <h1 className="font-display text-h1 font-bold text-slate-900 mb-5">
          {title}
        </h1>

        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}