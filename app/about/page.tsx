import type { Metadata } from "next";
import Image from "next/image";
import PageWrapper from "../components/layout";
import { Heart, Eye, Lightbulb, Shield, Award, Users, Check } from "lucide-react";
import Button from "../components/ui/Button";

export const metadata: Metadata = { title: "About Us" };

const values = [
  { Icon: Heart,    title: "Compassion",  description: "We treat every individual with kindness, empathy, and understanding." },
  { Icon: Users,    title: "Respect",     description: "We honor the dignity, independence, and choices of every person we support." },
  { Icon: Shield,   title: "Integrity",   description: "We deliver care with honesty, transparency, and accountability." },
  { Icon: Award,    title: "Excellence",  description: "We continuously strive to improve the quality and standards of our care services." },
  { Icon: Check,    title: "Commitment",  description: "We are dedicated to making a positive difference in the lives of those we support." },
  { Icon: Lightbulb,title: "Innovation",  description: "We embrace best practices and new approaches to enhance the care we deliver." },
];

const commitments = [
  "Recruiting skilled and compassionate care professionals",
  "Providing ongoing training and development for staff",
  "Delivering person-centered care plans tailored to individual needs",
  "Promoting independence and wellbeing",
  "Ensuring safe, respectful, and professional care at all times",
];

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-primary-50/40 to-secondary-50/30 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
            About Us
          </span>
          <h1 className="font-display text-h1 font-bold text-slate-900 mb-5">
            About TimeWell Care Services
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Care is more than providing support with daily tasks, it is about preserving dignity, promoting independence, and improving quality of life.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-display text-h2 font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  TimeWell Care Services was founded with a clear purpose: to provide compassionate, reliable, and person-centered care that families can truly trust. We recognize that every individual has unique needs, preferences, and life experiences, which is why we tailor our services to ensure the highest level of personalized care.
                </p>
                <p>
                  We are committed to supporting people to live fulfilling lives in the comfort and familiarity of their own homes or in supported living environments where they feel safe and valued. Whether someone requires occasional support or more specialized care, our experienced team works closely with individuals, families, and healthcare professionals to deliver care that meets their physical, emotional, and social needs.
                </p>
                <p>
                  At TimeWell Care Services, we carefully select and train our staff to ensure they provide care with professionalism, empathy, and respect. Our carers are not only skilled professionals but also compassionate individuals who genuinely care about the wellbeing of those they support.
                </p>
                <p className="font-medium text-slate-800 italic border-l-4 border-primary-400 pl-4">
                  Because at TimeWell Care Services, caring for people is not just our profession, it is our commitment.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-4xl overflow-hidden aspect-square shadow-card-lg">
                <Image
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=700&q=80"
                  alt="Compassionate carer with elderly client"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card-lg p-5 border border-slate-100">
                <p className="text-3xl font-bold text-primary-600 font-display">100%</p>
                <p className="text-slate-500 text-xs mt-0.5">Person-Centered Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-display font-semibold text-2xl mb-3">Our Mission</h3>
              <p className="text-primary-100 leading-relaxed">
                To provide high-quality, compassionate care that empowers individuals to live safely, independently, and with dignity.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-display font-semibold text-2xl mb-3">Our Vision</h3>
              <p className="text-primary-100 leading-relaxed">
                To become a trusted and respected care provider, recognized for delivering exceptional person-centered care that improves lives and strengthens communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-h2 font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Our values guide every interaction, decision, and care plan we create.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ Icon, title, description }) => (
              <div key={title} className="bg-white rounded-3xl p-7 shadow-card border border-slate-100 hover:border-primary-200 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 group-hover:bg-primary-500 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Quality */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-h2 font-bold text-slate-900 mb-5">Our Commitment to Quality Care</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            At TimeWell Care Services, we are committed to maintaining high standards of care by:
          </p>
          <ul className="space-y-3 text-left max-w-xl mx-auto mb-10">
            {commitments.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-secondary-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-secondary-600" strokeWidth={3} />
                </span>
                <span className="text-slate-700">{c}</span>
              </li>
            ))}
          </ul>
          <Button href="/assessment" size="lg">
            Book a Free Care Assessment
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
