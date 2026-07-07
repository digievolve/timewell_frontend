import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "../components/layout";
import AnimateIn from "../components/ui/AnimateIn";
import {
  Shield, User, Briefcase, Globe, FileText, Lock,
  Clock, Share2, CheckCircle, Mail, Phone, MapPin,
  Eye, Edit3, Trash2, PauseCircle, Download, XCircle,
  AlertTriangle, ClipboardList, FolderArchive 
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Data Protection & Privacy Policy" };


const toc = [
  { id: "who-we-are",        label: "Who We Are" },
  { id: "what-we-collect",   label: "What We Collect" },
  { id: "how-we-use",        label: "How We Use It" },
  { id: "legal-basis",       label: "Legal Basis" },
  { id: "storage",           label: "Storage & Security" },
  { id: "retention",         label: "Retention" },
  { id: "sharing",           label: "Sharing" },
  { id: "your-rights",       label: "Your Rights" },
  { id: "changes",           label: "Changes" },
];


const rights = [
  { Icon: Eye,         title: "Access",         description: "Request a copy of the personal data we hold about you." },
  { Icon: Edit3,       title: "Rectification",  description: "Ask us to correct inaccurate or incomplete information." },
  { Icon: Trash2,      title: "Erasure",        description: "Request deletion of your data in certain circumstances." },
  { Icon: PauseCircle, title: "Restriction",    description: "Ask us to restrict how we process your information." },
  { Icon: AlertTriangle, title: "Objection",    description: "Object to processing based on legitimate interests." },
  { Icon: Download,    title: "Portability",    description: "Receive your data in a structured, portable format." },
  { Icon: XCircle,     title: "Withdraw Consent", description: "Withdraw consent at any time where it is the legal basis." },
];


const dataCategories = [
  {
    Icon: User,
    label: "Service Users & Families",
    color: "bg-primary-100 text-primary-600",
    items: [
      "Full name, address, and contact details",
      "Date of birth and next of kin information",
      "Health and medical information relevant to care needs",
      "Care assessments, care plans, and daily records",
      "Financial information for billing purposes",
    ],
  },
  {
    Icon: Briefcase,
    label: "Job Applicants & Staff",
    color: "bg-secondary-100 text-secondary-600",
    items: [
      "Name, address, and contact details",
      "Employment history and references",
      "Qualifications and training records",
      "DBS check information",
      "Right to work documentation",
    ],
  },
  {
    Icon: Globe,
    label: "Website Visitors",
    color: "bg-slate-100 text-slate-600",
    items: [
      "Information submitted through contact forms",
      "Cookies and website usage data (see our Cookie Policy)",
    ],
  },
];

/* ── Legal bases ───────────────────────────────────────────────────── */
const legalBases = [
  { title: "Consent",              desc: "Where you have given clear consent for us to process your data." },
  { title: "Contract",             desc: "Where processing is necessary to fulfil a care or employment agreement." },
  { title: "Legal Obligation",     desc: "Where we are required by law to process your data." },
  { title: "Vital Interests",      desc: "Where processing is necessary to protect someone's life." },
  { title: "Legitimate Interests", desc: "Where processing serves our legitimate business purposes without overriding your rights." },
];


const securityItems = [
  {
    icon: <Lock />,
    text: "Stored securely in line with our data retention policy",
  },
  {
    icon: <User />,
    text: "Access restricted to authorised staff only",
  },
  {
    icon: <ClipboardList />,
    text: "Staff receive data protection and confidentiality training",
  },
  {
    icon: <FolderArchive />,
    text: "Paper records stored securely and disposed of confidentially",
  },
];

export default function PrivacyPage() {
  return (
    <PageWrapper>

      <section className="relative overflow-hidden" style={{ minHeight: "400px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/96 via-slate-900/88 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

        {/* Rings */}
        <div className="absolute -top-16 -right-16 pointer-events-none" aria-hidden="true">
          <div className="w-[340px] h-[340px] rounded-full border border-white/6" />
          <div className="absolute inset-8  rounded-full border border-white/8" />
          <div className="absolute inset-20 rounded-full border border-primary-400/15" />
        </div>
        {/* Dots */}
        <div className="absolute bottom-8 left-0 w-56 h-36 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1.5px, transparent 1.5px)", backgroundSize: "22px 22px" }} />

        <div className="relative py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 text-primary-300" />
              Legal
            </div>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Data Protection &<br />
              <span className="text-primary-300">Privacy Policy</span>
            </h1>
          </AnimateIn>
          <AnimateIn direction="up" delay={200}>
            <p className="text-white/65 text-base max-w-xl mx-auto leading-relaxed">
              Your privacy matters to us. This policy explains how we collect, use, store, and protect your personal information.
            </p>
          </AnimateIn>
          <AnimateIn direction="none" delay={300}>
            <div className="flex items-center justify-center gap-3 mt-7">
              <div className="h-px w-10 bg-white/20 rounded-full" />
              <span className="text-white/40 text-xs">Last updated: May 2026</span>
              <div className="h-px w-10 bg-white/20 rounded-full" />
            </div>
          </AnimateIn>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", height: "56px", width: "100%" }}>
            <path d="M0,32 C360,56 1080,8 1440,32 L1440,56 L0,56 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ── Main content + sticky TOC ──────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* ── Sticky table of contents ──────────────────────────── */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-28">
                <AnimateIn direction="left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">On This Page</p>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[16px] text-slate-500 hover:text-primary-600 hover:bg-primary-50 transition-all duration-150 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-primary-400 transition-colors shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  {/* Quick contact box */}
                  <div className="mt-8 p-5 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl text-white">
                    <p className="font-semibold text-[16px] mb-2">Questions about your data?</p>
                    <p className="text-white/70 text-xs leading-relaxed mb-4">
                      Contact our team and we'll respond within 30 days.
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </AnimateIn>
              </div>
            </aside>

            {/* ── Policy content ──────────────────────────────────────── */}
            <div className="lg:col-span-3 space-y-8">

              {/* Who We Are */}
              <AnimateIn direction="up">
                <div id="who-we-are" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-primary-600" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">Who We Are</h2>
                  </div>
                  <p className="text-slate-600 text-[16px] leading-relaxed mb-5">
                    TimeWell Care Services is the <strong className="text-slate-800">data controller</strong> responsible for your personal data, as defined under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { Icon: Mail,   label: "Email",   value: siteConfig.contact.email,   href: `mailto:${siteConfig.contact.email}` },
                      { Icon: Phone,  label: "Phone",   value: siteConfig.contact.phone,   href: `tel:${siteConfig.contact.phone}` },
                      { Icon: MapPin, label: "Address", value: siteConfig.contact.address, href: undefined },
                    ].map(({ Icon, label, value, href }) => (
                      <div key={label} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className="w-3.5 h-3.5 text-primary-500" />
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
                        </div>
                        {href ? (
                          <a href={href} className="text-[16px] text-slate-700 hover:text-primary-600 transition-colors break-all font-medium">{value}</a>
                        ) : (
                          <p className="text-[16px] text-slate-700 font-medium">{value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* What We Collect */}
              <AnimateIn direction="up">
                <div id="what-we-collect" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-secondary-600" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">What Information We Collect</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {dataCategories.map(({ Icon, label, color, items }) => (
                      <div key={label} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-2.5 mb-4">
                          <div className={`w-8 h-8 rounded-lg ${color.split(" ")[0]} flex items-center justify-center`}>
                            <Icon className={`w-4 h-4 ${color.split(" ")[1]}`} strokeWidth={2} />
                          </div>
                          <p className="font-semibold text-slate-800 text-[16px]">{label}</p>
                        </div>
                        <ul className="space-y-1.5">
                          {items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-slate-600 text-[16px]">
                              <CheckCircle className="w-3.5 h-3.5 text-secondary-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* How We Use */}
              <AnimateIn direction="up">
                <div id="how-we-use" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                      <Eye className="w-5 h-5 text-primary-600" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">How We Use Your Information</h2>
                  </div>
                  <p className="text-slate-600 text-[16px] leading-relaxed mb-5">We use your personal data to:</p>
                  <ul className="space-y-2.5">
                    {[
                      "Assess and deliver care services tailored to individual needs",
                      "Communicate with you, your family, and healthcare professionals",
                      "Process job applications and manage employment",
                      "Meet our legal and regulatory obligations",
                      "Improve our services and respond to feedback",
                      "Handle complaints and safeguarding concerns",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-600 text-[16px] p-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <CheckCircle className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>

              {/* Legal Basis */}
              <AnimateIn direction="up">
                <div id="legal-basis" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-amber-600" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">Legal Basis for Processing</h2>
                  </div>
                  <div className="space-y-3">
                    {legalBases.map(({ title, desc }) => (
                      <div key={title} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-100 transition-colors">
                        <div className="w-2 shrink-0 rounded-full bg-primary-600 mt-1" style={{ minHeight: "40px" }} />
                        <div>
                          <p className="font-semibold text-slate-800 text-[16px] mb-1">{title}</p>
                          <p className="text-slate-500 text-[16px] leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 p-4 rounded-2xl bg-primary-50 border border-primary-100">
                    <p className="text-primary-800 text-xs leading-relaxed">
                      <strong>Special category data</strong> (such as health information) is processed under additional conditions in Article 9 of the UK GDPR, including the provision of health or social care.
                    </p>
                  </div>
                </div>
              </AnimateIn>

              {/* Storage & Security */}
              <AnimateIn direction="up">
                <div id="storage" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5 text-secondary-600" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">How We Store &amp; Protect Your Data</h2>
                  </div>
                  <p className="text-slate-600 text-[16px] leading-relaxed mb-5">
                    We take the security of your personal data seriously and implement appropriate technical and organisational measures to protect your information from unauthorised access, loss, or misuse.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {securityItems.map(({ icon, text }) => (
                      <div key={text} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-lg shrink-0 mt-0.5">{icon}</span>
                        <p className="text-slate-600 text-[16px] leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Retention */}
              <AnimateIn direction="up">
                <div id="retention" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary-600" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">How Long We Keep Your Data</h2>
                  </div>
                  <p className="text-slate-600 text-[16px] leading-relaxed">
                    We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. For care records, we follow guidance from the <strong className="text-slate-800">Care Quality Commission (CQC)</strong> and relevant health and social care regulations.
                  </p>
                </div>
              </AnimateIn>

              {/* Sharing */}
              <AnimateIn direction="up">
                <div id="sharing" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center shrink-0">
                      <Share2 className="w-5 h-5 text-secondary-600" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">Sharing Your Information</h2>
                  </div>
                  <p className="text-slate-600 text-[16px] leading-relaxed mb-5">
                    We may share your personal data with the following when necessary:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Healthcare professionals involved in your care",
                      "Local authorities and safeguarding bodies (where required)",
                      "Regulatory bodies such as the Care Quality Commission",
                      "Emergency services (where necessary)",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-slate-600 text-[16px] p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle className="w-4 h-4 text-secondary-500 shrink-0" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 rounded-2xl bg-secondary-50 border border-secondary-100 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-secondary-600 shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-secondary-800 text-[16px] leading-relaxed">
                      <strong>We will never sell your personal data to third parties.</strong> Any sharing of information is done in accordance with data protection law and, where appropriate, with your consent.
                    </p>
                  </div>
                </div>
              </AnimateIn>

              {/* Your Rights */}
              <AnimateIn direction="up">
                <div id="your-rights" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary-600" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">Your Rights</h2>
                  </div>
                  <p className="text-slate-600 text-[16px] leading-relaxed mb-6">
                    Under UK data protection law, you have the following rights:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                    {rights.map(({ Icon, title, description }) => (
                      <div key={title} className="group p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-primary-50/40 transition-all duration-200">
                        <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 group-hover:bg-primary-500 group-hover:border-primary-500 flex items-center justify-center mb-3 transition-all duration-200">
                          <Icon className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors duration-200" strokeWidth={2} />
                        </div>
                        <p className="font-semibold text-slate-800 text-[16px] mb-1">{title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                    <p className="font-semibold text-[16px] mb-1">Exercise Your Rights</p>
                    <p className="text-white/75 text-xs leading-relaxed mb-3">
                      To exercise any of these rights, please contact us. We will respond within <strong className="text-white">30 days</strong>.
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </AnimateIn>

              {/* Changes */}
              <AnimateIn direction="up">
                <div id="changes" className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm scroll-mt-28">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      <Edit3 className="w-5 h-5 text-slate-600" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">Changes to This Policy</h2>
                  </div>
                  <p className="text-slate-600 text-[16px] leading-relaxed">
                    We may update this policy from time to time to reflect changes in law, our practices, or our services. Any significant changes will be communicated where appropriate. The most current version will always be available on this page.
                  </p>
                  <p className="text-slate-400 text-xs mt-4">Last updated: May 2026</p>
                </div>
              </AnimateIn>

            </div>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
