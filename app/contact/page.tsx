"use client";
import { useState } from "react";
import PageWrapper from "../components/layout";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { validateContactForm } from "@/utils/validation";

const careOptions = [
  { label: "Home Care",        value: "home-care" },
  { label: "Supported Living", value: "supported-living" },
  { label: "Companionship",    value: "companionship" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", typeOfCare: "", message: "" });
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [status, setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg]         = useState("");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateContactForm(form as Record<string, string>);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...form }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setMsg("Thank you for reaching out! We'll be in touch within 1–2 business days.");
    } catch {
      setStatus("error");
      setMsg("Something went wrong. Please call or email us directly.");
    }
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-primary-50/40 to-secondary-50/30 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h1 className="font-display text-h1 font-bold text-slate-900 mb-4">Contact TimeWell Care Services</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            We are here to answer your questions and discuss your care needs.
          </p>
        </div>
      </section>

      {/* Contact details + Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display font-semibold text-2xl text-slate-900">Our Details</h2>
              {[
                { Icon: MapPin, label: "Service Area",  value: siteConfig.contact.address,             href: undefined },
                { Icon: Phone,  label: "Phone",         value: siteConfig.contact.phone,                href: `tel:${siteConfig.contact.phone}` },
                { Icon: Mail,   label: "Email",         value: siteConfig.contact.email,                href: `mailto:${siteConfig.contact.email}` },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
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
              ))}

              {/* Complaints */}
              <div id="complaints" className="p-5 bg-amber-50 border border-amber-200 rounded-2xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Complaints &amp; Concerns</p>
                    <p className="text-amber-800 text-sm leading-relaxed">
                      If you are unhappy with your care or have any concerns, please contact us at{" "}
                      <a href={`mailto:${siteConfig.contact.email}`} className="underline">
                        {siteConfig.contact.email}
                      </a>
                      . We aim to respond within 2–5 working days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {status === "success" ? (
                <div className="bg-secondary-50 border border-secondary-200 rounded-3xl p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-secondary-600 mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-xl text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-600">{msg}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="bg-slate-50 rounded-3xl p-8 lg:p-10 space-y-5">
                  <h2 className="font-display font-semibold text-2xl text-slate-900 mb-1">Request Care</h2>
                  <p className="text-slate-500 text-sm mb-4">Please complete the form and a member of our team will contact you.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input label="Name" value={form.name} onChange={set("name")} error={errors.name} placeholder="Your name" required />
                    <Input label="Phone Number" type="tel" value={form.phone} onChange={set("phone")} error={errors.phone} placeholder="+44 ..." required />
                  </div>
                  <Input label="Email Address" type="email" value={form.email} onChange={set("email")} error={errors.email} placeholder="you@example.com" required />
                  <Select
                    label="Type of Care Needed"
                    options={careOptions}
                    value={form.typeOfCare}
                    onChange={set("typeOfCare")}
                    placeholder="Select care type..."
                  />
                  <Textarea
                    label="Message"
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us how we can help..."
                    rows={4}
                  />

                  {status === "error" && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{msg}</p>
                  )}

                  <Button type="submit" disabled={status === "loading"} size="lg" className="w-full justify-center">
                    {status === "loading" ? "Sending..." : "Submit"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
