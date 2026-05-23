import Link from "next/link";
import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/images/logo-nobg.png" alt="logo" width={9000} height={9000} className="w-20" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Compassionate, person-centered care delivered with dignity and respect. Supporting individuals to live safely and independently.
            </p>
            <div className="flex items-center gap-3">
              <a href={siteConfig.socials.facebook} aria-label="Facebook" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors"><FaFacebook className="w-4 h-4" /></a>
              <a href={siteConfig.socials.instagram} aria-label="Instagram" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors"><FaInstagram className="w-4 h-4" /></a>
              <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors"><FaLinkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
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
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} TimeWell Care Services. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact#complaints" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Complaints
            </Link>
            <Link href="/about" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
