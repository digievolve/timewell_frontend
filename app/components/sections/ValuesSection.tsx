import { Heart, Shield, Users, Award, Check, Clock } from "lucide-react";
import ValueCard from "../cards/ValueCard";

export default function ValuesSection() {
  const values = [
    { Icon: Heart,  title: "Person-Centered Care",       description: "Every care plan is tailored to the individual's unique needs, preferences, and lifestyle." },
    { Icon: Users,  title: "Compassionate Staff",         description: "Carefully recruited, fully trained professionals passionate about high-quality care." },
    { Icon: Check,  title: "Promoting Independence",      description: "We support individuals to continue living fulfilling lives in their own homes." },
    { Icon: Clock,  title: "Reliable & Flexible Support", description: "Flexible care services that adapt to the changing needs of the people we support." },
    { Icon: Shield, title: "Safe & Professional Care",    description: "Strict care standards and best practices to ensure safety, wellbeing, and comfort." },
    { Icon: Award,  title: "Commitment to Excellence",    description: "Continuously striving to improve the quality and standards of our care services." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:gap-20 items-center">
          <div className="max-w-3xl flex flex-col items-center ">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 id="values-heading" className="font-display text-h2 font-bold text-slate-900 mb-5">
              Choosing the Right Care Provider Matters
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              At TimeWell Care Services, we are committed to delivering safe, reliable, and compassionate care that families can trust. We understand that every individual is unique.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-3 bg-primary-50 rounded-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-500" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-700">Haringey, London</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary-50 rounded-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-500" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-700">CQC Registered</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map((v) => (
              <ValueCard key={v.title} Icon={v.Icon} title={v.title} description={v.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
