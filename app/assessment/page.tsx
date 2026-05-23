"use client";
import { useState } from "react";
import PageWrapper from "../components/layout";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import RadioGroup from "../components/ui/RadioGroup";
import Button from "../components/ui/Button";
import { CheckCircle, Heart, Shield, Clock } from "lucide-react";
import { validateAssessmentForm } from "@/utils/validation";
import HeroSection from "../components/ui/HeroSection";

const whoOptions = [{ label: "Myself", value: "myself" }, { label: "Family Member", value: "family" }, { label: "Friend", value: "friend" }];
const careOptions = [{ label: "Home Care", value: "home-care" }, { label: "Supported Living", value: "supported-living" }, { label: "Companionship", value: "companionship" }];
const whenOptions = [{ label: "Immediately", value: "immediately" }, { label: "Within 1–2 weeks", value: "1-2-weeks" }, { label: "Within 1 month", value: "1-month" }];

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

  if (status === "success") {
    return (
      <PageWrapper>
        <section className="min-h-[70vh] flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 to-primary-50/30">
          <div className="max-w-md mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-secondary-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-secondary-600" />
            </div>
            <h1 className="font-display text-h2 font-bold text-slate-900 mb-4">Assessment Requested!</h1>
            <p className="text-slate-600 leading-relaxed mb-8">{message}</p>
            <Button href="/">Return Home</Button>
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
        description="We are always looking for compassionate and dedicated individuals to join our team. Become part of a supportive organization that values its staff and the people we support."
        backgroundImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80"
      />

      {/* Form + Info */}
      <section className="py-16 lg:py-24 bg-white sticky! top-20!">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display font-semibold text-2xl text-slate-900 mb-3">What to Expect</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  After submitting your form, a member of our team will contact you to discuss your care needs, answer any questions, and help create a personalized care plan.
                </p>
              </div>
              {[
                { Icon: Heart, title: "Compassionate Assessment", desc: "We listen carefully to understand your unique situation." },
                { Icon: Shield, title: "No Obligation", desc: "Our free assessment is completely without obligation." },
                { Icon: Clock, title: "Quick Response", desc: "We aim to respond within 1–2 business days." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary-600" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm mb-1">{title}</p>
                    <p className="text-slate-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} noValidate className="bg-slate-50 rounded-3xl p-8 lg:p-10 space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-xl text-slate-900 mb-5">Contact Details</h3>
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

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="font-display font-semibold text-xl text-slate-900 mb-5">Care Information</h3>
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
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{message}</p>
                )}

                <Button type="submit" disabled={status === "loading"} size="lg" className="w-full justify-center">
                  {status === "loading" ? "Submitting..." : "Request Care Assessment"}
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to be contacted by TimeWell Care Services regarding your care needs.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
