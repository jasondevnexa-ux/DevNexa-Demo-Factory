import { ArrowUpRight } from 'lucide-react';
import type { Business } from '../../../data/types';
import { ScrollReveal } from './ScrollReveal';

interface DentalServicesProps {
  business: Business;
}

function formatServiceNumber(index: number): string {
  return String(index + 1).padStart(2, '0');
}

export function DentalServices({ business }: DentalServicesProps) {
  if (business.services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--brand-primary)]">
              What We Offer
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[2.75rem]">
              Our Services
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Comprehensive dental care tailored to your needs, delivered with precision and care.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {business.services.map((service, index) => {
            const isFeatured = index === 0 && business.services.length > 2;

            return (
              <ScrollReveal
                key={service.name}
                className={isFeatured ? 'lg:col-span-7' : 'lg:col-span-5'}
                delay={index * 80}
              >
                <article
                  className={`dental-service-card group h-full ${isFeatured ? 'is-featured' : ''}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-medium tracking-[0.2em] text-slate-400 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">
                      {formatServiceNumber(index)}
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--brand-primary)]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    {service.name}
                  </h3>
                  {service.description && (
                    <p className="mt-4 max-w-prose text-sm leading-relaxed text-slate-600 sm:text-base">
                      {service.description}
                    </p>
                  )}
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
