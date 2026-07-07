"use client";
import { useState } from "react";
import PageWrapper from "../components/layout";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import RadioGroup from "../components/ui/RadioGroup";
import Button from "../components/ui/Button";
import { CheckCircle, Heart, Shield, Clock, Phone, ArrowRight } from "lucide-react";
import { validateAssessmentForm } from "@/utils/validation";
import HeroSection from "../components/ui/HeroSection";
import AnimateIn from "../components/ui/AnimateIn";
import { siteConfig } from "@/config/site";

const whoOptions   = [{ label: "Myself", value: "myself" }, { label: "Family Member", value: "family" }, { label: "Friend", value: "friend" }];
const careOptions  = [{ label: "Home Care", value: "home-care" }, { label: "Supported Living", value: "supported-living" }, { label: "Companionship", value: "companionship" }];
const whenOptions  = [{ label: "Immediately", value: "immediately" }, { label: "Within 1–2 weeks", value: "1-2-weeks" }, { label: "Within 1 month", value: "1-month" }];

const infoCards = [
  {
    Icon: Heart,
    title: "Compassionate Assessment",
    desc: "We listen carefully to understand your unique situation and create a tailored care plan.",
    accent: "bg-primary-100",
    iconColor: "text-primary-600",
  },
  {
    Icon: Shield,
    title: "No Obligation",
    desc: "Our free assessment comes with absolutely no commitment or pressure to proceed.",
    accent: "bg-secondary-100",
    iconColor: "text-secondary-600",
  },
  {
    Icon: Clock,
    title: "Quick Response",
    desc: "We aim to respond within 1–2 business days of receiving your enquiry.",
    accent: "bg-primary-100",
    iconColor: "text-primary-600",
  },
];

export default function AssessmentPage() {
  const [form, setForm] = useState({
    fullName: "", phone: "", email: "",
    whoNeedsCare: "", typeOfCare: "", whenNeeded: "", description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateAssessmentForm(form as Record<string, string>);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "assessment", ...form }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setMessage("Thank you! A member of our team will be in touch within 1–2 business days.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or call us directly.");
    }
  }

  /* ── Success state ─────────────────────────────────────────────── */
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
              <h1 className="font-display text-4xl font-bold text-slate-900 mb-4">Assessment Requested!</h1>
            </AnimateIn>
            <AnimateIn direction="up" delay={200}>
              <p className="text-slate-600 leading-relaxed mb-8">{message}</p>
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
        badge="Free Assessment"
        title="Request Your Care Assessment"
        description="Tell us about your care needs and a member of our friendly team will contact you to discuss how we can help."
        backgroundImage="/images/image10.png"
        waveColor="#f8fafc"
      />

      {/* ── Form + Info ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4eefb 0%, transparent 70%)", transform: "translate(30%, -20%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ── Info sidebar ──────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-6">
              <AnimateIn direction="left">
                {/* Intro card */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-7 text-white mb-6 relative overflow-hidden">
                  {/* Decorative rings inside card */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-white/10 pointer-events-none" />
                  <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full border border-white/10 pointer-events-none" />
                  <h2 className="font-display font-semibold text-xl mb-3">What to Expect</h2>
                  <p className="text-white/75 text-[16px] leading-relaxed">
                    After submitting your form, a member of our team will contact you to discuss your care needs, answer questions, and help create a personalised care plan.
                  </p>
                  <div className="mt-5 pt-5 border-t border-white/15 flex items-center gap-3">
                    <Phone className="w-4 h-4 text-white/70 shrink-0" />
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-white/90 text-[16px] font-medium hover:text-white transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </AnimateIn>

              {/* Feature cards */}
              {infoCards.map(({ Icon, title, desc, accent, iconColor }, index) => (
                <AnimateIn key={title} direction="left" delay={([100, 200, 300] as const)[index]}>
                  <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-200">
                    <div className={`w-11 h-11 rounded-xl ${accent} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${iconColor}`} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-[16px] mb-1">{title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            {/* ── Form ─────────────────────────────────────────────── */}
            <div className="lg:col-span-3">
              <AnimateIn direction="right">
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
                  {/* Form header */}
                  <div className="mb-8 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="font-display font-semibold text-xl text-slate-900">Free Care Assessment</h3>
                    </div>
                    <p className="text-slate-500 text-[16px] ml-11">
                      Complete this form and we'll be in touch within 1–2 business days.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Contact details */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Contact Details</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Input
                          label="Full Name"
                          value={form.fullName}
                          onChange={set("fullName")}
                          error={errors.fullName}
                          placeholder="Your full name"
                          required
                        />
                        <Input
                          label="Phone Number"
                          type="tel"
                          value={form.phone}
                          onChange={set("phone")}
                          error={errors.phone}
                          placeholder="+44 ..."
                          required
                        />
                      </div>
                      <Input
                        label="Email Address"
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        error={errors.email}
                        placeholder="you@example.com"
                        required
                        className="mt-5"
                      />
                    </div>

                    {/* Care information */}
                    <div className="border-t border-slate-100 pt-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">Care Information</h4>
                      <div className="space-y-5">
                        <RadioGroup
                          label="Who needs care?"
                          name="whoNeedsCare"
                          options={whoOptions}
                          value={form.whoNeedsCare}
                          onChange={(v) => setForm((f) => ({ ...f, whoNeedsCare: v }))}
                          error={errors.whoNeedsCare}
                        />
                        <RadioGroup
                          label="Type of care needed"
                          name="typeOfCare"
                          options={careOptions}
                          value={form.typeOfCare}
                          onChange={(v) => setForm((f) => ({ ...f, typeOfCare: v }))}
                          error={errors.typeOfCare}
                        />
                        <RadioGroup
                          label="When is care needed?"
                          name="whenNeeded"
                          options={whenOptions}
                          value={form.whenNeeded}
                          onChange={(v) => setForm((f) => ({ ...f, whenNeeded: v }))}
                          error={errors.whenNeeded}
                        />
                        <Textarea
                          label="Brief description of care needs"
                          value={form.description}
                          onChange={set("description")}
                          placeholder="Please describe the care needs, any specific requirements, or questions you have..."
                          rows={4}
                        />
                      </div>
                    </div>

                    {status === "error" && (
                      <p className="text-[16px] text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{message}</p>
                    )}

                    <Button type="submit" disabled={status === "loading"} size="lg" className="w-full justify-center">
                      {status === "loading" ? "Submitting…" : <>Request Care Assessment <ArrowRight className="w-4 h-4" /></>}
                    </Button>
                    <p className="text-xs text-slate-400 text-center">
                      By submitting this form you agree to be contacted by TimeWell Care Services regarding your care needs.
                    </p>
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
