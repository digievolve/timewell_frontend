import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function ValueCard({ Icon, title, description }: ValueCardProps) {
  return (
    <div className="flex gap-4 p-6 rounded-2xl bg-white/70 border border-slate-100 hover:border-primary-200 hover:bg-white transition-all duration-200">
      <div className="w-11 h-11 rounded-xl bg-primary-100 to-secondary-100 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary-600" strokeWidth={2} />
      </div>
      <div>
        <h4 className="font-semibold text-slate-800 mb-1">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
