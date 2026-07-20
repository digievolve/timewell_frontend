"use client";
import { useState } from "react";
import PageWrapper from "../components/layout";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, MessageSquare, Flag } from "lucide-react";
import { siteConfig } from "@/config/site";
import { validateContactForm } from "@/utils/validation";
import AnimateIn from "../components/ui/AnimateIn";
import HeroSection from "../components/ui/HeroSection";

const careOptions = [
  { label: "Home Care", value: "home-care" },
  { label: "Supported Living", value: "supported-living" },
  { label: "Companionship", value: "companionship" },
];

const complaintOptions = [
  { label: "Quality of Care", value: "quality-of-care" },
  { label: "Staff Conduct", value: "staff-conduct" },
  { label: "Communication", value: "communication" },
  { label: "Billing Issue", value: "billing" },
  { label: "Other", value: "other" },
];

type FormType = "care" | "complaint";

export default function ContactPage() {
  const [formType, setFormType] = useState<FormType>("care");
  const [form, setForm] = useState({ name: "", email: "", phone: "", typeOfCare: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateContactForm(form as Record<string, string>);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      let emailFormType: "requestCare" | "complaint";
      let formData: any;
      
      if (formType === "care") {
        emailFormType = "requestCare";
        formData = {
          name: form.name,
          phoneNumber: form.phone,
          emailAddress: form.email,
          careType: form.typeOfCare,
          message: form.message
        };
      } else {
        emailFormType = "complaint";
        formData = {
          name: form.name,
          phoneNumber: form.phone,
          emailAddress: form.email,
          complaintType: form.typeOfCare,
          complaintDetails: form.message
        };
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: emailFormType,
          formData: formData
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setMsg(
        formType === "care"
          ? "Thank you for reaching out! We'll be in touch within 1–2 business days."
          : "Thank you for your feedback. We aim to respond within 2–5 working days."
      );
    } catch {
      setStatus("error");
      setMsg("Something went wrong. Please call or email us directly.");
    }
  }

  return (
    <PageWrapper>
      <HeroSection
        badge="Get in Touch"
        title="Contact TimeWell Care Services"
        description="We are here to answer your questions and discuss your care needs."
        backgroundImage="/images/image7.webp"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimateIn direction="right" delay={0}>
                <h2 className="font-display font-semibold text-2xl text-slate-900">Our Details</h2>
              </AnimateIn>

              {[
                { Icon: MapPin, label: "Service Area", value: siteConfig.contact.area, href: undefined },
                { Icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
                { Icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
              ].map(({ Icon, label, value, href }, index) => (
                <AnimateIn
                  key={label}
                  direction="right"
                  delay={(index * 100) as 0 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 500}
                >
                  <div className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary-200 transition-all duration-200">
                    <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary-600" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5 uppercase tracking-wider font-medium">{label}</p>
                      {href ? (
                        <a href={href} className="text-slate-800 font-medium hover:text-primary-600 transition-colors break-all">{value}</a>
                      ) : (
                        <p className="text-slate-800 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                </AnimateIn>
              ))}

               {/* Complaints */}
              <AnimateIn direction="right" delay={300}>
                <div id="complaints" className="p-5 bg-amber-50 border border-amber-200 rounded-2xl hover:border-amber-300 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="font-semibold text-amber-900 mb-1">Complaints &amp; Concerns</p>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        If you are unhappy with your care or have any concerns, please contact us at{" "}
                        <a href={`mailto:${siteConfig.contact.email}`} className="underline hover:text-amber-900">
                          {siteConfig.contact.email}
                        </a>
                        . We aim to respond within 2–5 working days.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Form with Toggle */}
            <div className="lg:col-span-3">
              {status === "success" ? (
                <AnimateIn direction="scale" delay={0}>
                  <div className="bg-secondary-50 border border-secondary-200 rounded-3xl p-10 text-center">
                    <CheckCircle className="w-14 h-14 text-secondary-600 mx-auto mb-4" />
                    <h3 className="font-display font-semibold text-xl text-slate-900 mb-3">
                      {formType === "care" ? "Message Sent!" : "Complaint Received"}
                    </h3>
                    <p className="text-slate-600">{msg}</p>
                  </div>
                </AnimateIn>
              ) : (
                <AnimateIn direction="left" delay={0}>
                  <form onSubmit={handleSubmit} noValidate className="bg-slate-50 rounded-3xl p-8 lg:p-10 space-y-5">
                    {/* Toggle Switch */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setFormType("care")}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                            formType === "care"
                              ? "bg-primary-600 text-white shadow-md"
                              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                          }`}
                        >
                          <MessageSquare className="w-4 h-4" />
                          Request Care
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormType("complaint")}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                            formType === "complaint"
                              ? "bg-amber-600 text-white shadow-md"
                              : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                          }`}
                        >
                          <Flag className="w-4 h-4" />
                          Make a Complaint
                        </button>
                      </div>
                    </div>

                    {/* Dynamic Header */}
                    <div>
                      <h2 className="font-display font-semibold text-2xl text-slate-900 mb-1">
                        {formType === "care" ? "Request Care" : "Submit a Complaint"}
                      </h2>
                      <p className="text-slate-500 text-sm">
                        {formType === "care"
                          ? "Please complete the form and a member of our team will contact you."
                          : "We take all complaints seriously. Please provide details below."}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <AnimateIn direction="up" delay={100}>
                        <Input
                          label="Name"
                          value={form.name}
                          onChange={set("name")}
                          error={errors.name}
                          placeholder="Your name"
                          required
                        />
                      </AnimateIn>
                      <AnimateIn direction="up" delay={100}>
                        <Input
                          label="Phone Number"
                          type="tel"
                          value={form.phone}
                          onChange={set("phone")}
                          error={errors.phone}
                          placeholder="+44 ..."
                          required
                        />
                      </AnimateIn>
                    </div>

                    <AnimateIn direction="up" delay={150}>
                      <Input
                        label="Email Address"
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        error={errors.email}
                        placeholder="you@example.com"
                        required
                      />
                    </AnimateIn>

                    <AnimateIn direction="up" delay={200}>
                      <Select
                        label={formType === "care" ? "Type of Care Needed" : "Type of Complaint"}
                        options={formType === "care" ? careOptions : complaintOptions}
                        value={form.typeOfCare}
                        onChange={set("typeOfCare")}
                        placeholder={formType === "care" ? "Select care type..." : "Select complaint type..."}
                      />
                    </AnimateIn>

                    <AnimateIn direction="up" delay={250}>
                      <Textarea
                        label={formType === "care" ? "Message" : "Complaint Details"}
                        value={form.message}
                        onChange={set("message")}
                        placeholder={
                          formType === "care"
                            ? "Tell us how we can help..."
                            : "Please describe your complaint in detail..."
                        }
                        rows={4}
                      />
                    </AnimateIn>

                    {/* Complaint disclaimer */}
                    {formType === "complaint" && (
                      <AnimateIn direction="up" delay={250}>
                        <div className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                          <p>We aim to acknowledge all complaints within 2 working days and resolve within 5–10 working days.</p>
                        </div>
                      </AnimateIn>
                    )}

                    {status === "error" && (
                      <AnimateIn direction="up" delay={300}>
                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{msg}</p>
                      </AnimateIn>
                    )}

                    <AnimateIn direction="up" delay={300}>
                      <Button
                        type="submit"
                        disabled={status === "loading"}
                        size="lg"
                        className={`w-full justify-center ${
                          formType === "complaint" ? "bg-amber-600 hover:bg-amber-700" : ""
                        }`}
                      >
                        {status === "loading"
                          ? "Sending..."
                          : formType === "care"
                          ? "Submit Request"
                          : "Submit Complaint"}
                      </Button>
                    </AnimateIn>
                  </form>
                </AnimateIn>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}