import { useEffect, useRef } from 'react';
import type { Business } from '../../../data/types';
import { useInteractionCapabilities } from '../hooks/useInteractionCapabilities';
import { DEFAULT_HERO_HEADLINE, getAppointmentHref } from '../utils';
import { MagneticLink } from './MagneticLink';

interface DentalHeroProps {
  business: Business;
}

export function DentalHero({ business }: DentalHeroProps) {
  const headline = business.hero.headline ?? DEFAULT_HERO_HEADLINE;
  const appointmentHref = getAppointmentHref(business);
  const imageRef = useRef<HTMLDivElement>(null);
  const { interactionsEnabled, reducedMotion } = useInteractionCapabilities();
  const hasHeroImage = Boolean(business.hero.image);

  useEffect(() => {
    const container = imageRef.current;
    if (!interactionsEnabled || !hasHeroImage || !container) {
      return;
    }

    const image = container.querySelector('img');
    if (!image) {
      return;
    }

    let frame = 0;

    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
        const moveX = relativeX * -10;
        const moveY = relativeY * -10;

        image.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.03)`;
      });
    };

    const onLeave = () => {
      image.style.transform = 'translate3d(0, 0, 0) scale(1)';
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
      onLeave();
    };
  }, [hasHeroImage, interactionsEnabled]);

  const enterClass = reducedMotion ? '' : 'dental-hero-enter';

  return (
    <section id="home" className="relative overflow-hidden bg-[#fafafa]">
      <div
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ backgroundColor: 'color-mix(in srgb, var(--brand-secondary) 70%, white)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-12 left-8 hidden h-px w-32 bg-[var(--brand-primary)] opacity-30 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:min-h-[88vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl">
          <p
            className={`text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--brand-primary)] ${enterClass} dental-hero-delay-100`}
          >
            {business.category}
          </p>
          <h1
            className={`mt-5 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[4.25rem] ${enterClass} dental-hero-delay-200`}
          >
            {headline}
          </h1>
          {business.hero.description && (
            <p
              className={`mt-7 max-w-lg text-base leading-[1.75] text-slate-600 sm:text-lg ${enterClass} dental-hero-delay-350`}
            >
              {business.hero.description}
            </p>
          )}
          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row sm:items-center ${enterClass} dental-hero-delay-450`}
          >
            <MagneticLink
              href={appointmentHref ?? '#contact'}
              className="group"
              showArrow
            >
              Book an Appointment
            </MagneticLink>
            <MagneticLink href="#services" variant="secondary" magnetic={false}>
              Explore Services
            </MagneticLink>
          </div>
        </div>

        <div className={`relative ${enterClass} dental-hero-delay-250`}>
          {hasHeroImage ? (
            <div ref={imageRef} className="group relative">
              <div
                className="absolute -inset-3 -z-10 rounded-[2rem] opacity-60"
                style={{ backgroundColor: 'var(--brand-secondary)' }}
                aria-hidden="true"
              />
              <div className="overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                <div className="aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5] lg:max-h-[min(72vh,680px)]">
                  <img
                    src={business.hero.image}
                    alt={`${business.name} clinic`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              {business.contact.openingHours && (
                <div className="absolute bottom-6 left-6 max-w-[220px] rounded-2xl border border-white/30 bg-white/90 px-4 py-3 text-xs leading-relaxed text-slate-600 shadow-lg backdrop-blur-sm">
                  <p className="font-medium text-slate-900">Opening Hours</p>
                  <p className="mt-1">{business.contact.openingHours}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="relative">
              <div
                className="absolute -inset-3 -z-10 rounded-[2rem]"
                style={{ backgroundColor: 'var(--brand-secondary)' }}
                aria-hidden="true"
              />
              <div
                className="flex aspect-[4/5] items-center justify-center rounded-[1.75rem] border border-slate-200/70 sm:aspect-[5/4] lg:aspect-[4/5] lg:max-h-[min(72vh,680px)]"
                style={{ backgroundColor: 'color-mix(in srgb, var(--brand-secondary) 55%, white)' }}
                aria-hidden="true"
              >
                <div className="px-8 text-center">
                  <div
                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/70"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--brand-primary) 8%, white)' }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-9 w-9 text-[var(--brand-primary)]"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.2.5 2.3 1.2 3.1-.8.4-1.5 1-2 1.8C5.5 14.5 6.5 17 8.5 18c1 .6 2.2.6 3.3 0 1-.6 1.7-1.6 2-2.7.3 1.1 1 2.1 2 2.7 1.1.6 2.3.6 3.3 0 2-1 3-3.5 2.3-5.6-.5-.8-1.2-1.4-2-1.8.7-.8 1.2-1.9 1.2-3.1C16.5 5 14.5 3 12 3Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-slate-700">Clinic Image</p>
                  <p className="mt-1 text-xs text-slate-500">Visual placeholder</p>
                </div>
              </div>
              {business.contact.openingHours && (
                <div className="absolute bottom-6 left-6 max-w-[220px] rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 text-xs leading-relaxed text-slate-600 shadow-lg">
                  <p className="font-medium text-slate-900">Opening Hours</p>
                  <p className="mt-1">{business.contact.openingHours}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
