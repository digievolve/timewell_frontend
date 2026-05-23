import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating?: number;
}

export default function TestimonialCard({ quote, name, role, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-100 flex flex-col gap-5">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200 fill-slate-200"}`}
          />
        ))}
      </div>
      <p className="text-slate-700 text-sm leading-relaxed italic flex-1">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-primary-200 to-secondary-200 flex items-center justify-center text-primary-700 font-bold text-sm shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-slate-800 text-sm">{name}</p>
          <p className="text-slate-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
