import TestimonialCard from "../cards/TestimonialCard";

const testimonials = [
  {
    quote: "TimeWell Care Services has been exceptional. The carers treat my mother with such dignity and warmth. It feels like she has an extended family looking out for her.",
    name: "Patricia O.",
    role: "Family Member",
    rating: 5,
  },
  {
    quote: "Finding reliable, compassionate home care was a challenge until we found TimeWell. The team is professional, punctual, and genuinely caring. We couldn't be happier.",
    name: "James M.",
    role: "Service User's Son",
    rating: 5,
  },
  {
    quote: "The supported living service has transformed my life. I have independence and confidence I didn't think was possible. The staff truly understand my needs.",
    name: "David A.",
    role: "Service User",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-900 via-slate-900 to-slate-900" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-800 text-primary-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="font-display text-h2 font-bold text-white mb-4">
            What Our Families Say
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            The trust of families and the wellbeing of those we support is at the heart of everything we do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
