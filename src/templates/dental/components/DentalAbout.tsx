import type { Business } from '../../../data/types';
import { hasAbout } from '../utils';
import { ScrollReveal } from './ScrollReveal';

interface DentalAboutProps {
  business: Business;
}

export function DentalAbout({ business }: DentalAboutProps) {
  if (!hasAbout(business) || !business.about) {
    return null;
  }

  const { title, description, image } = business.about;
  const hasImage = Boolean(image);

  return (
    <section id="about" className="relative overflow-hidden bg-[#fafafa] py-24 sm:py-28">
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 opacity-30 lg:block"
        style={{
          backgroundImage:
            'linear-gradient(to right, transparent, color-mix(in srgb, var(--brand-secondary) 40%, transparent))',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {hasImage ? (
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <ScrollReveal>
              <div className="relative">
                <div
                  className="absolute -left-4 top-8 h-24 w-24 rounded-full border border-[var(--brand-primary)] opacity-20"
                  aria-hidden="true"
                />
                <div className="overflow-hidden rounded-[1.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                  <div className="aspect-[5/4] overflow-hidden">
                    <img
                      src={image}
                      alt={title ? `${title} at ${business.name}` : `About ${business.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="lg:py-6">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--brand-primary)]">
                  About Us
                </p>
                {title && (
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[2.75rem] sm:leading-[1.08]">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="mt-7 text-base leading-[1.8] text-slate-600 sm:text-lg">
                    {description}
                  </p>
                )}
                <div
                  className="mt-10 h-px w-16 bg-[var(--brand-primary)] opacity-40"
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
          </div>
        ) : (
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center lg:max-w-4xl lg:text-left">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--brand-primary)]">
                About Us
              </p>
              {title && (
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[2.75rem] sm:leading-[1.08]">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mx-auto mt-7 max-w-2xl text-base leading-[1.8] text-slate-600 sm:text-lg lg:mx-0">
                  {description}
                </p>
              )}
              <div
                className="mx-auto mt-10 h-px w-16 bg-[var(--brand-primary)] opacity-40 lg:mx-0"
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
