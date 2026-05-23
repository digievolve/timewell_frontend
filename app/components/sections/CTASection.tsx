import Button from "../ui/Button";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-500 rounded-4xl p-10 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-secondary-400/30 blur-2xl" />
          </div>
          <div className="relative">
            <h2 id="cta-heading" className="font-display text-h2 font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Contact TimeWell Care Services today to arrange a free care assessment. Our team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/assessment" variant="secondary" size="lg">
                Book Free Assessment <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border-2 border-white/40 text-white hover:bg-white/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
