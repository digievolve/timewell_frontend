import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  accent?: "blue" | "green";
}

export default function ServiceCard({ Icon, title, description, href = "/services", accent = "blue" }: ServiceCardProps) {
  const accentMap = {
    blue:  { bg: "bg-primary-100",   icon: "text-primary-600",   hover: "group-hover:bg-primary-500",  link: "text-primary-600 hover:text-primary-700" },
    green: { bg: "bg-secondary-100", icon: "text-secondary-600", hover: "group-hover:bg-secondary-500", link: "text-secondary-600 hover:text-secondary-700" },
  };
  const a = accentMap[accent];

  return (
    <Link
      href={href}
      className="group block bg-white rounded-3xl p-8 shadow-card hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100/80"
    >
      <div className={`w-14 h-14 rounded-2xl ${a.bg} flex items-center justify-center mb-5 transition-colors duration-300 ${a.hover}`}>
        <Icon className={`w-7 h-7 ${a.icon} group-hover:text-white transition-colors duration-300`} strokeWidth={1.75} />
      </div>
      <h3 className="font-display font-semibold text-xl text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-5">{description}</p>
      <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${a.link} transition-colors`}>
        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
