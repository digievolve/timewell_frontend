import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "../components/layout";
import AnimateIn from "../components/ui/AnimateIn";
import { Cookie, Settings, BarChart2, Zap, Shield, Mail, Info, ToggleRight, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Cookie Policy" };

/* ── Cookie types ──────────────────────────────────────────────────── */
const cookieTypes = [
  {
    Icon: Zap,
    title: "Strictly Necessary",
    badge: "Always On",
    badgeStyle: "bg-secondary-100 text-secondary-700",
    description:
      "These cookies are essential for our website to function correctly. They enable core features such as page navigation, form submission, and security. Without them, the website cannot work properly.",
    examples: ["Session management", "Security tokens", "Form validation"],
    canDisable: false,
  },
  {
    Icon: Settings,
    title: "Functional",
    badge: "Optional",
    badgeStyle: "bg-primary-100 text-primary-700",
    description:
      "These cookies allow the website to remember your preferences and settings to provide a more personalised experience when you visit.",
    examples: ["Language preferences", "Accessibility settings", "Previously entered information"],
    canDisable: true,
  },
  {
    Icon: BarChart2,
    title: "Analytics",
    badge: "Optional",
    badgeStyle: "bg-primary-100 text-primary-700",
    description:
      "These cookies help us understand how visitors use our website, so we can improve the experience. All data collected is anonymous and aggregated.",
    examples: ["Page views and navigation paths", "Time spent on each page", "Error and performance tracking"],
    canDisable: true,
  },
];

/* ── Browser guides ─────────────────────────────────────────────────── */
const browsers = [
  { name: "Google Chrome",    href: "https://support.google.com/chrome/answer/95647" },
  { name: "Mozilla Firefox",  href: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" },
  { name: "Microsoft Edge",   href: "https://support.microsoft.com/en-gb/windows/manage-cookies-in-microsoft-edge" },
  { name: "Apple Safari",     href: "https://support.apple.com/en-gb/guide/safari/sfri11471/mac" },
];

export default function CookiesPage() {
  return (
    <PageWrapper>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "380px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/96 via-slate-900/88 to-slate-900/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

        {/* Rings */}
        <div className="absolute -top-12 -right-12 pointer-events-none" aria-hidden="true">
          <div className="w-[300px] h-[300px] rounded-full border border-white/6" />
          <div className="absolute inset-8  rounded-full border border-white/8" />
          <div className="absolute inset-16 rounded-full border border-secondary-400/15" />
        </div>
        {/* Dots */}
        <div className="absolute bottom-8 left-0 w-52 h-32 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1.5px, transparent 1.5px)", backgroundSize: "22px 22px" }} />

        <div className="relative py-24 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm">
              <Cookie className="w-3.5 h-3.5 text-secondary-300" />
              Legal
            </div>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Cookie <span className="text-secondary-300">Policy</span>
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={200}>
            <p className="text-white/65 text-base max-w-xl mx-auto leading-relaxed">
              This policy explains how TimeWell Care Services uses cookies and similar technologies when you visit our website.
            </p>
          </AnimateIn>
          <AnimateIn direction="none" delay={300}>
            <div className="flex items-center justify-center gap-3 mt-7">
              <div className="h-px w-10 bg-white/20 rounded-full" />
              <span className="text-white/40 text-xs">Effective Date: May 2026</span>
              <div className="h-px w-10 bg-white/20 rounded-full" />
            </div>
          </AnimateIn>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", height: "56px", width: "100%" }}>
            <path d="M0,32 C360,56 1080,8 1440,32 L1440,56 L0,56 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── What are cookies ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
              {[
                {
                  Icon: Cookie,
                  title: "What are cookies?",
                  text: "Small text files placed on your device when you visit a website. They help sites remember information about your visit.",
                  bg: "bg-primary-50",
                  border: "border-primary-100",
                  iconBg: "bg-primary-100",
                  iconColor: "text-primary-600",
                },
                {
                  Icon: Shield,
                  title: "Are they harmful?",
                  text: "No. Cookies cannot carry viruses or access information on your device beyond what they store themselves.",
                  bg: "bg-secondary-50",
                  border: "border-secondary-100",
                  iconBg: "bg-secondary-100",
                  iconColor: "text-secondary-600",
                },
                {
                  Icon: ToggleRight,
                  title: "Can I control them?",
                  text: "Yes. You can manage or disable most cookies through your browser settings at any time.",
                  bg: "bg-slate-50",
                  border: "border-slate-100",
                  iconBg: "bg-slate-100",
                  iconColor: "text-slate-600",
                },
              ].map(({ Icon, title, text, bg, border, iconBg, iconColor }) => (
                <div key={title} className={`rounded-2xl p-6 border ${bg} ${border}`}>
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} strokeWidth={1.75} />
                  </div>
                  <p className="font-semibold text-slate-800 text-[16px] mb-2">{title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* How we use cookies */}
          <AnimateIn direction="up">
            <div className="mb-10">
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-3">How We Use Cookies</h2>
              <p className="text-slate-600 text-[16px] leading-relaxed">
                We use cookies to ensure our website functions correctly, remember your preferences, understand how visitors use the site, and continuously improve our online services.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Cookie type cards ──────────────────────────────────────────── */}
      <section className="py-10 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {cookieTypes.map(({ Icon, title, badge, badgeStyle, description, examples, canDisable }, i) => (
              <AnimateIn key={title} direction="up" delay={([0, 150, 300] as const)[i]}>
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                  {/* Card header */}
                  <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-600" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeStyle}`}>
                        {badge}
                      </span>
                      {/* Toggle indicator */}
                      <div className={`w-10 h-5 rounded-full relative transition-colors ${canDisable ? "bg-slate-200" : "bg-secondary-400"}`}>
                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${canDisable ? "left-0.5" : "left-5"}`} />
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-8 py-6">
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-5">{description}</p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Examples</p>
                      <div className="flex flex-wrap gap-2">
                        {examples.map((ex) => (
                          <span key={ex} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-medium">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                    {!canDisable && (
                      <div className="mt-4 flex items-center gap-2 text-secondary-700 bg-secondary-50 border border-secondary-100 rounded-xl px-4 py-2.5">
                        <Info className="w-3.5 h-3.5 shrink-0" />
                        <p className="text-xs">These cookies are required for the site to function and cannot be disabled.</p>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Managing cookies ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4eefb 0%, transparent 70%)", transform: "translate(20%, -20%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <Settings className="w-5 h-5 text-primary-600" strokeWidth={1.75} />
                </div>
                <h2 className="font-display text-2xl font-bold text-slate-900">Managing Your Cookies</h2>
              </div>

              <p className="text-slate-600 text-[16px] leading-relaxed mb-6">
                You can control and manage cookies through your browser settings. Most browsers allow you to refuse new cookies, delete existing ones, or be notified when a new cookie is set. Please note that disabling certain cookies may affect the functionality of our website.
              </p>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Browser guides</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {browsers.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-primary-50/40 transition-all duration-200"
                  >
                    <span className="text-[16px] font-medium text-slate-700 group-hover:text-primary-700 transition-colors">{name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-primary-400 transition-colors" />
                  </a>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 flex items-start gap-3">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-amber-800 text-xs leading-relaxed">
                  For more information about cookies in general and how to manage them, visit{" "}
                  <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 hover:text-amber-900">
                    www.aboutcookies.org
                  </a>
                  {" "}or{" "}
                  <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 hover:text-amber-900">
                    www.allaboutcookies.org
                  </a>.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Contact + related links ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Questions card */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-7 text-white relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border border-white/10 pointer-events-none" />
                <h3 className="font-display font-semibold text-xl mb-3">Questions about cookies?</h3>
                <p className="text-white/70 text-[16px] leading-relaxed mb-5">
                  If you have any questions about how we use cookies, please contact us.
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 text-[16px] font-semibold text-white/90 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Related policy card */}
              <div className="rounded-3xl p-7 bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-secondary-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Related Policies</h3>
                  <p className="text-slate-500 text-[16px] leading-relaxed mb-5">
                    Read our full Data Protection &amp; Privacy Policy for more information on how we protect your personal data.
                  </p>
                </div>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 text-[16px] font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  View Privacy Policy
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </AnimateIn>

          {/* Last updated */}
          <AnimateIn direction="up" delay={100}>
            <p className="text-center text-slate-400 text-xs mt-10">
              This Cookie Policy was last updated in May 2026. We may update it periodically, please check back for the latest version.
            </p>
          </AnimateIn>
        </div>
      </section>

    </PageWrapper>
  );
}
