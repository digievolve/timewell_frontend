import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/config/site";

const services = [
  { label: "Home Care", href: "/services#home-care" },
  { label: "Supported Living", href: "/services#supported-living" },
  { label: "Companionship", href: "/services#companionship" },
  { label: "Book Assessment", href: "/assessment" },
  { label: "Careers", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-3 text-sm">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-primary-100 transition-colors font-medium">
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-primary-100 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                {siteConfig.contact.email}
              </a>
              <span className="flex items-center gap-2 text-primary-100">
                <Clock className="w-3.5 h-3.5" />
                {siteConfig.contact.activeHours}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a href={siteConfig.socials.facebook} aria-label="Facebook" className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><FaFacebook className="w-3.5 h-3.5" /></a>
              <a href={siteConfig.socials.instagram} aria-label="Instagram" className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><FaInstagram className="w-3.5 h-3.5" /></a>
              <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><FaLinkedin className="w-3.5 h-3.5" /></a>
              <a href={siteConfig.contact.whatsapp} aria-label="WhatsApp" className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer body ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

          {/* Brand — 4 cols */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <img
                src={siteConfig.logo}
                alt="TimeWell Care Services logo"
                width={9000}
                height={9000}
                className="w-50 brihtness-75"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Compassionate, person-centred care delivered with dignity and respect. Supporting individuals to live safely, independently, and with confidence in their own homes.
            </p>
            {/* Social row */}
            <div className="flex items-center gap-2 mb-6">
              <a href={siteConfig.socials.facebook} aria-label="Facebook" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"><FaFacebook className="w-4 h-4" /></a>
              <a href={siteConfig.socials.instagram} aria-label="Instagram" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"><FaInstagram className="w-4 h-4" /></a>
              <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200"><FaLinkedin className="w-4 h-4" /></a>
              <a href={siteConfig.contact.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#25D366] flex items-center justify-center transition-colors duration-200"><FaWhatsapp className="w-4 h-4" /></a>
            </div>
            {/* CQC badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
              CQC Registeration In-view
            </div>
          </div>

          {/* Quick Links — 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center gap-1.5 text-slate-400 hover:text-primary-400 text-sm transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="flex items-center gap-1.5 text-slate-400 hover:text-primary-400 text-sm transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter — 4 cols */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-start gap-3 text-slate-400 hover:text-primary-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-3 text-slate-400 hover:text-primary-400 text-sm transition-colors break-all">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" />
                  {siteConfig.contact.address}
                </span>
              </li>
              <li>
                <span className="flex items-start gap-3 text-slate-400 text-sm">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" />
                  {siteConfig.contact.activeHours}
                </span>
              </li>
            </ul>

            {/* Book CTA */}
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-primary-900/30"
            >
              Book a Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} TimeWell Care Services Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/contact#complaints" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Complaints Policy
            </Link>
            <Link href="/privacy" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
