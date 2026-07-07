import type { Metadata } from "next";
import Image from "next/image";
import PageWrapper from "../components/layout";
import { Heart, Eye, Lightbulb, Shield, Award, Users, Check, Quote } from "lucide-react";
import Button from "../components/ui/Button";
import AnimateIn from "../components/ui/AnimateIn";

export const metadata: Metadata = { title: "About Us" };

const values = [
  { Icon: Heart,     title: "Compassion",  color: "#E76F51", description: "We treat every individual with kindness, empathy, and understanding." },
  { Icon: Users,     title: "Respect",     color: "#55ec0e", description: "We honor the dignity, independence, and choices of every person we support." },
  { Icon: Shield,    title: "Integrity",   color: "#1bb4cf", description: "We deliver care with honesty, transparency, and accountability." },
  { Icon: Award,     title: "Excellence",  color: "#bc00eb", description: "We continuously strive to improve the quality and standards of our care services." },
  { Icon: Check,     title: "Commitment",  color: "#8ef00f", description: "We are dedicated to making a positive difference in the lives of those we support." },
  { Icon: Lightbulb, title: "Innovation",  color: "#d82e04", description: "We embrace best practices and new approaches to enhance the care we deliver." },
];

const commitments = [
  "Recruiting skilled and compassionate care professionals",
  "Providing ongoing training and development for staff",
  "Delivering person-centered care plans tailored to individual needs",
  "Promoting independence and wellbeing",
  "Ensuring safe, respectful, and professional care at all times",
];

const leadership = [
  {
    name: "Maureen Ifeyinwa Emenike",
    title: "Director",
    image: "/images/dir1.png",
    bio: "Maureen oversees the strategic and operational direction of the organisation, ensuring that every service delivered reflects the highest standards of care and professional excellence.",
    initials: "ME",
    accentFrom: "from-secondary-600",
    accentTo:   "to-secondary-800",
  },
  {
    name: "Stella C. Ngozi Ede",
    title: "Director",
    image: "/images/dir2.png",
    bio: "Stella brings extensive experience in health and social care leadership. Her vision and drive for compassionate, person-centred care are the foundation on which TimeWell Care Services was built.",
    initials: "SN",
    accentFrom: "from-primary-600",
    accentTo:   "to-primary-800",
  },
  
];

export default function AboutPage() {
  return (
    <PageWrapper>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "500px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url(/images/image9.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-800/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />

        {/* Rings */}
        <div className="absolute -top-16 -right-16 pointer-events-none" aria-hidden="true">
          <div className="w-[380px] h-[380px] rounded-full border border-white/6" />
          <div className="absolute inset-8  rounded-full border border-white/8" />
          <div className="absolute inset-20 rounded-full border border-primary-400/15" />
        </div>
        {/* Dot grid */}
        <div
          className="absolute bottom-10 left-0 w-64 h-40 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative py-28 lg:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn direction="up" delay={0}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm">
              About Us
            </span>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              About TimeWell<br />
              <span className="text-primary-300">Care Services</span>
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={200}>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Care is more than providing support with daily tasks — it is about preserving dignity, promoting independence, and improving quality of life.
            </p>
          </AnimateIn>
          <AnimateIn direction="none" delay={300}>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-12 bg-white/20 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              <div className="h-px w-12 bg-white/20 rounded-full" />
            </div>
          </AnimateIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", height: "56px", width: "100%" }}>
            <path d="M0,32 C360,56 1080,8 1440,32 L1440,56 L0,56 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4eefb 0%, transparent 70%)", transform: "translate(-30%, -30%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <AnimateIn direction="left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-5">
                  Our Story
                </span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Founded With<br />
                  <span className="text-primary-500">Purpose</span>
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-[16px] lg:text-base">
                  <p>
                    TimeWell Care Services was founded with a clear purpose: to provide compassionate, reliable, and person-centered care that families can truly trust. We recognise that every individual has unique needs, preferences, and life experiences, which is why we tailor our services to ensure the highest level of personalised care.
                  </p>
                  <p>
                    We are committed to supporting people to live fulfilling lives in the comfort and familiarity of their own homes or in supported living environments where they feel safe and valued. Our experienced team works closely with individuals, families, and healthcare professionals to deliver care that meets their physical, emotional, and social needs.
                  </p>
                  <p>
                    At TimeWell Care Services, we carefully select and train our staff to ensure they provide care with professionalism, empathy, and respect. Our carers are not only skilled professionals but also compassionate individuals who genuinely care about the wellbeing of those they support.
                  </p>
                </div>

                <div className="mt-8 flex items-start gap-3 pl-5 border-l-4 border-primary-400 bg-primary-50/60 rounded-r-xl py-4 pr-5">
                  <Quote className="w-5 h-5 text-primary-400 shrink-0 mt-0.5 fill-primary-300" strokeWidth={0} />
                  <p className="font-medium text-slate-700 italic text-[16px] leading-relaxed">
                    Because at TimeWell Care Services, caring for people is not just our profession — it is our commitment.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={150}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-2xl shadow-primary-200/40">
                  <Image
                    src="/images/image10.png"
                    alt="Compassionate carer with elderly client"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-primary-200 -z-10" />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
                  <p className="text-3xl font-bold text-primary-600 font-display leading-none">100%</p>
                  <p className="text-slate-500 text-xs mt-1">Person-Centred Care</p>
                </div>
                <div className="absolute top-5 -right-5 bg-secondary-500 text-white rounded-2xl shadow-lg px-4 py-2.5">
                  <p className="text-xs font-bold uppercase tracking-wide">CQC (In-view)</p>
                  <p className="text-xs font-medium opacity-90">Registered</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Meet Our Leadership ──────────────────────────────────────────
          Portrait cards for Stella Ngozi and Maureen Emwnike           */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #f8fafc 0%, #eef8fe 50%, #f8fafc 100%)" }}
      >
        {/* Decorative rings — top right */}
        <div className="absolute -top-20 -right-20 pointer-events-none" aria-hidden="true">
          <div className="w-[440px] h-[440px] rounded-full border border-primary-100" />
          <div className="absolute inset-12 rounded-full border border-primary-100/60" />
          <div className="absolute inset-24 rounded-full border border-primary-200/40" />
        </div>
        {/* Dot grid — bottom left */}
        <div
          className="absolute bottom-0 left-0 w-72 h-56 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #38AADD 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <AnimateIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
                The People Behind TimeWell
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Meet Our <span className="text-primary-500">Leadership</span>
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto text-[16px] leading-relaxed">
                Our directors bring a wealth of experience, passion, and dedication to everything TimeWell Care Services delivers.
              </p>
            </div>
          </AnimateIn>

          {/* Portrait cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {leadership.map(({ name, title, image, bio, initials, accentFrom, accentTo }, i) => (
              <AnimateIn
                key={name}
                direction={i === 0 ? "left" : "right"}
                delay={i === 0 ? 0 : 150}
              >
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-primary-200/30 hover:-translate-y-2 transition-all duration-400">
                  <div className="relative overflow-hidden" style={{ height: "340px" }}>
                    <Image
                      src={image}
                      alt={`Portrait of ${name}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Subtle bottom gradient for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

                    {/* Accent chip top-left */}
                    <div
                      className={`absolute top-5 left-5 bg-gradient-to-r ${accentFrom} ${accentTo} text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-lg backdrop-blur-sm`}
                    >
                      {title}
                    </div>
                  </div>

                  {/* ── Card body ─────────────────────────────────────── */}
                  <div className="p-7">
                    {/* Name + role */}
                    <div className="mb-4">
                      <h3 className="font-display text-xl font-bold text-slate-900 leading-tight mb-1">
                        {name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-0.5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo}`} />
                        <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{title}</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-slate-500 text-[16px] leading-relaxed">
                      {bio}
                    </p>

                    {/* Bottom rule with gradient */}
                    <div
                      className={`mt-6 h-0.5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} opacity-30 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </div>

                </div>
              </AnimateIn>
            ))}
          </div>

        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/image7.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/92 to-primary-700/85" />
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4">
                Our Purpose
              </span>
              <h2 className="font-display text-4xl font-bold text-white">Mission &amp; Vision</h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                Icon: Heart, label: "Our Mission",
                text: "To provide high-quality, compassionate care that empowers individuals to live safely, independently, and with dignity.",
                accent: "bg-primary-500",
              },
              {
                Icon: Eye, label: "Our Vision",
                text: "To become a trusted and respected care provider, recognised for delivering exceptional person-centred care that improves lives and strengthens communities.",
                accent: "bg-secondary-500",
              },
            ].map(({ Icon, label, text, accent }, i) => (
              <AnimateIn key={label} direction="scale" delay={i * 150 as 0 | 150}>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 hover:bg-white/15 transition-colors duration-300 h-full">
                  <div className={`w-12 h-12 rounded-2xl ${accent} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-white mb-3">{label}</h3>
                  <p className="text-white/75 leading-relaxed text-[16px]">{text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────────────────────────── */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #0a2229 60%, #0f172a 100%)" }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #38AADD 0%, transparent 65%)", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #8DC64C 0%, transparent 65%)", transform: "translate(-25%, 25%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-primary-500/15 border border-primary-500/25 text-primary-300 text-xs font-semibold uppercase tracking-wider mb-4">
                What Drives Us
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-[16px]">
                Our values guide every interaction, every decision, and every care plan we create.
              </p>
            </div>
          </AnimateIn>

      
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map(({ Icon, title, description, color }) => (
            <div
              key={title}
              className="relative pt-8 group"
            >
              {/* Floating Icon */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-0 z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: color }}
              >
                <Icon
                  className="w-7 h-7 text-white"
                  strokeWidth={2}
                />
              </div>

              {/* Card */}
              <div className="bg-white rounded-[28px] px-8 pt-14 pb-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ color }}
                >
                  {title}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-8">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ── Commitment to Quality ─────────────────────────────────────── */}
      <section className="py-24 lg:py-28 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-16 items-center">

            <div className="lg:col-span-2 mb-10 lg:mb-0">
              <AnimateIn direction="left">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-5">
                  Our Promise
                </span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Commitment<br />to Quality
                </h2>
                <p className="text-white/80 text-base leading-relaxed">
                  We hold ourselves to the highest standards — because the people we care for deserve nothing less.
                </p>
              </AnimateIn>
            </div>

            <div className="lg:col-span-3">
              <AnimateIn direction="right">
                <ul className="space-y-3 mb-8">
                  {commitments.map((commitment) => (
                    <li
                      key={commitment}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors"
                    >
                      <Check className="w-5 h-5 text-secondary-300 shrink-0 mt-0.5" />
                      <span className="text-white text-[16px] leading-relaxed">{commitment}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/assessment" size="lg" variant="secondary">
                  Book a Free Care Assessment
                </Button>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}