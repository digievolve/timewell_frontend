"use client";
import { useState } from "react";
import PageWrapper from "../components/layout";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { CheckCircle, DollarSign, Clock, TrendingUp, Users, Heart, Star, ArrowRight, Send } from "lucide-react";
import { validateCareerForm } from "@/utils/validation";
import { siteConfig } from "@/config/site";
import HeroSection from "../components/ui/HeroSection";
import AnimateIn from "../components/ui/AnimateIn";

const roles = [
  { label: "Support Worker",        value: "support-worker" },
  { label: "Care Assistant",        value: "care-assistant" },
  { label: "Senior Support Worker", value: "senior-support-worker" },
  { label: "Live-in Carer",         value: "live-in-carer" },
];

const benefits = [
  { Icon: DollarSign,  title: "Competitive Pay",         color: "#E76F51", desc: "Fair compensation that reflects your skills, experience, and dedication." },
  { Icon: Clock,       title: "Flexible Working Hours",  color: "#55ec0e", desc: "We build rotas around your life, not the other way around." },
  { Icon: TrendingUp,  title: "Training & Development",  color: "#1bb4cf", desc: "Comprehensive induction, ongoing CPD, and real career progression." },
  { Icon: Users,       title: "Proper Staff Induction",  color: "#bc00eb", desc: "Thorough onboarding so you're fully supported from day one." },
  { Icon: Heart,       title: "Supportive Management",   color: "#8ef00f", desc: "Leaders who genuinely care about your wellbeing, not just outcomes." },
  { Icon: Star,        title: "Make a Real Difference",  color: "#d82e04", desc: "Work that truly matters — improving someone's life every single day." },
];

export default function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", message: "" });
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg]         = useState("");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateCareerForm(form as Record<string, string>);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "career", ...form }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setMsg("Thank you for your application! We'll review it and be in touch soon.");
    } catch {
      setStatus("error");
      setMsg("Something went wrong. Please try sending your CV directly to our email.");
    }
  }

  /* ── Success state ──────────────────────────────────────────────── */
  if (status === "success") {
    return (
      <PageWrapper>
        <section className="min-h-[70vh] flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 to-primary-50/30">
          <div className="max-w-md mx-auto px-4 text-center">
            <AnimateIn direction="scale">
              <div className="w-24 h-24 rounded-full bg-secondary-100 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-secondary-100">
                <CheckCircle className="w-12 h-12 text-secondary-600" />
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <h1 className="font-display text-4xl font-bold text-slate-900 mb-4">Application Received!</h1>
            </AnimateIn>
            <AnimateIn direction="up" delay={200}>
              <p className="text-slate-600 mb-8">{msg}</p>
            </AnimateIn>
            <AnimateIn direction="up" delay={300}>
              <Button href="/">Return Home</Button>
            </AnimateIn>
          </div>
        </section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <HeroSection
        badge="Join Our Team"
        title="Work With TimeWell Care Services"
        description="We are always looking for compassionate and dedicated individuals to join our team. Become part of a supportive organisation that truly values its people."
        backgroundImage="/images/career.webp"
        waveColor="#0a0f1a"
      />

      {/* ── Why Join — DARK section ──────────────────────────────────────
          slate-950 background, glass benefit cards                     */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0f1a 0%, #0a2229 50%, #0a0f1a 100%)" }}
      >
        {/* Glow blobs */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #38AADD 0%, transparent 70%)", transform: "translate(-30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #8DC64C 0%, transparent 70%)", transform: "translate(25%, 25%)" }}
        />
        {/* Grid lines */}
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
                Why Join Us
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
                A Place Where You<br />
                <span className="text-primary-400">Truly Belong</span>
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto text-[16px]">
                Working with TimeWell means joining a supportive team where every member is valued, heard, and developed.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
           
            {benefits.map(({ Icon, title, desc, color }) => (
            <div
              key={title}
              className="relative pt-8 px-4 group"
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
                  {desc}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* ── Roles + Apply form ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        {/* Subtle bg glow */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4eefb 0%, transparent 70%)", transform: "translate(-20%, 20%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ── Roles sidebar ──────────────────────────────────────── */}
            <div className="lg:col-span-2">
              <AnimateIn direction="left">
                {/* Heading */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
                  Open Positions
                </span>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">Available Roles</h2>

                {/* Role cards with gradient left border */}
                <div className="space-y-3 mb-8">
                  {roles.map((r, index) => (
                    <div
                      key={r.value}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-200 group"
                    >
                      <div className="w-1 h-8 rounded-full bg-gradient-to-b from-primary-400 to-secondary-400 shrink-0" />
                      <span className="text-slate-700 font-medium text-[16px] group-hover:text-primary-700 transition-colors">{r.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-400 ml-auto transition-colors" />
                    </div>
                  ))}
                </div>

                {/* CV direct send info */}
                <div className="p-5 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl text-white">
                  <p className="font-semibold text-[16px] mb-2">Send your CV directly</p>
                  <p className="text-white/70 text-xs leading-relaxed mb-3">
                    Passionate about care but don't see your role listed? We'd still love to hear from you.
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white transition-colors"
                  >
                    <Send className="w-3 h-3" />
                    {siteConfig.contact.email}
                  </a>
                </div>
              </AnimateIn>
            </div>

            {/* ── Apply form ──────────────────────────────────────────── */}
            <div className="lg:col-span-3">
              <AnimateIn direction="right">
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
                  {/* Form header */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-secondary-500 flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                      <h2 className="font-display font-semibold text-xl text-slate-900">Apply Today</h2>
                    </div>
                    <p className="text-slate-500 text-[16px] ml-11">Fill in your details and we'll be in touch.</p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input label="Full Name"    value={form.name}  onChange={set("name")}  error={errors.name}  placeholder="Your name"  required />
                      <Input label="Phone Number" type="tel" value={form.phone} onChange={set("phone")} error={errors.phone} placeholder="+44 ..." required />
                    </div>
                    <Input label="Email Address" type="email" value={form.email} onChange={set("email")} error={errors.email} placeholder="you@example.com" required />
                    <Select
                      label="Role Applying For"
                      options={roles}
                      value={form.role}
                      onChange={set("role")}
                      error={errors.role}
                      placeholder="Select a role…"
                      required
                    />
                    <Textarea
                      label="Tell us about yourself / Cover letter"
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tell us about your experience, why you want to join us, and what makes you a great carer…"
                      rows={5}
                    />

                    {status === "error" && (
                      <p className="text-[16px] text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{msg}</p>
                    )}

                    <Button type="submit" disabled={status === "loading"} size="lg" className="w-full justify-center">
                      {status === "loading" ? "Submitting…" : <>Submit Application <ArrowRight className="w-4 h-4" /></>}
                    </Button>
                  </form>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
