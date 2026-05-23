"use client";
import { useState } from "react";
import PageWrapper from "../components/layout";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { CheckCircle, DollarSign, Clock, TrendingUp, Users, Heart, Star } from "lucide-react";
import { validateCareerForm } from "@/utils/validation";
import { siteConfig } from "@/config/site";

const roles = [
  { label: "Support Worker",       value: "support-worker" },
  { label: "Care Assistant",       value: "care-assistant" },
  { label: "Senior Support Worker",value: "senior-support-worker" },
  { label: "Live-in Carer",        value: "live-in-carer" },
];

const benefits = [
  { Icon: DollarSign,   title: "Competitive Pay",           desc: "Fair, competitive compensation that reflects your skills and experience." },
  { Icon: Clock,        title: "Flexible Working Hours",    desc: "We work around your schedule with flexible shift patterns." },
  { Icon: TrendingUp,   title: "Training & Development",    desc: "Comprehensive training and ongoing career development opportunities." },
  { Icon: Users,        title: "Proper Staff Induction",    desc: "Thorough onboarding to ensure you're supported from day one." },
  { Icon: Heart,        title: "Supportive Management",     desc: "A management team that genuinely cares about your wellbeing." },
  { Icon: Star,         title: "Make a Real Difference",    desc: "Work that truly matters, improving lives every single day." },
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

  if (status === "success") {
    return (
      <PageWrapper>
        <section className="min-h-[70vh] flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 to-primary-50/30">
          <div className="max-w-md mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-secondary-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-secondary-600" />
            </div>
            <h1 className="font-display text-h2 font-bold text-slate-900 mb-4">Application Received!</h1>
            <p className="text-slate-600 mb-8">{msg}</p>
            <Button href="/">Return Home</Button>
          </div>
        </section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-primary-50/40 to-secondary-50/30 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Join Our Team
          </span>
          <h1 className="font-display text-h1 font-bold text-slate-900 mb-5">
            Work With TimeWell Care Services
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We are always looking for compassionate and dedicated individuals to join our team. Become part of a supportive organization that values its staff and the people we support.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-h2 font-bold text-slate-900 mb-4">Why Join Our Team?</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Working with TimeWell Care Services means becoming part of a supportive organization where every team member is valued.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-white transition-all duration-200 group">
                <div className="w-11 h-11 rounded-xl bg-primary-100 group-hover:bg-primary-500 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Roles + Apply Form */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Roles sidebar */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-h3 font-bold text-slate-900 mb-6">Available Roles</h2>
              <div className="space-y-3 mb-10">
                {roles.map((r) => (
                  <div key={r.value} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-card">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-700 font-medium">{r.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                If you are passionate about caring for others, we would love to hear from you. You can also send your CV directly to{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary-600 hover:underline font-medium">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>

            {/* Apply form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl p-8 lg:p-10 shadow-card border border-slate-100 space-y-5">
                <h2 className="font-display font-semibold text-2xl text-slate-900 mb-1">Apply Today</h2>
                <p className="text-slate-500 text-sm mb-4">Fill in your details and we'll be in touch.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input label="Full Name" value={form.name} onChange={set("name")} error={errors.name} placeholder="Your name" required />
                  <Input label="Phone Number" type="tel" value={form.phone} onChange={set("phone")} error={errors.phone} placeholder="+44 ..." required />
                </div>
                <Input label="Email Address" type="email" value={form.email} onChange={set("email")} error={errors.email} placeholder="you@example.com" required />
                <Select
                  label="Role Applying For"
                  options={roles}
                  value={form.role}
                  onChange={set("role")}
                  error={errors.role}
                  placeholder="Select a role..."
                  required
                />
                <Textarea
                  label="Tell us about yourself / Cover letter"
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your experience, why you want to join us, and what makes you a great carer..."
                  rows={5}
                />

                {status === "error" && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{msg}</p>
                )}

                <Button type="submit" disabled={status === "loading"} size="lg" className="w-full justify-center">
                  {status === "loading" ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
