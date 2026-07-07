"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const pathname  = usePathname();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparent only on homepage
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialise
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // Decide bg
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed  inset-x-0  top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-white"
          : "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(56,170,221,0.1)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-30">

          {/* Logo — white version on transparent bg */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src={siteConfig.logo}
              alt="TimeWell Care Services"
              width={9000}
              height={9000}
              className={`w-70 transition-all duration-300`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ?
                       "text-primary-600 bg-primary-50"
                    
                    : "text-slate-600 hover:text-primary-600 hover:bg-primary-50/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className={`flex items-center gap-2 text-sm transition-colors text-slate-600 hover:text-primary-600 `}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{siteConfig.contact.phone}</span>
            </a>
            <Link
              href="/assessment"
              className="px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-blue hover:shadow-lg hover:-translate-y-0.5"
            >
              Free Assessment
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-color text-slate-700 hover:bg-slate-100 `}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-primary-600 bg-primary-50"
                  : "text-slate-700 hover:text-primary-600 hover:bg-primary-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 px-4 py-3 text-sm text-slate-600"
            >
              <Phone className="w-4 h-4 text-primary-500" />
              {siteConfig.contact.phone}
            </a>
            <Link
              href="/assessment"
              className="block text-center px-5 py-3 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              Free Care Assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}