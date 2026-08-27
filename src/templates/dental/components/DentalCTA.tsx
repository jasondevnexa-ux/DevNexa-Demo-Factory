import type { Business } from '../../../data/types';
import { getAppointmentHref } from '../utils';
import { MagneticLink } from './MagneticLink';
import { ScrollReveal } from './ScrollReveal';

interface DentalCTAProps {
  business: Business;
}

export function DentalCTA({ business }: DentalCTAProps) {
  const appointmentHref = getAppointmentHref(business);

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, var(--brand-secondary) 85%, white), white 55%, color-mix(in srgb, var(--brand-secondary) 40%, white))`,
        }}
        aria-hidden="true"
      />
      <p
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(4rem,14vw,10rem)] font-semibold tracking-tight text-slate-900/[0.03] whitespace-nowrap"
        aria-hidden="true"
      >
        {business.name}
      </p>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[1.08]">
            Ready to Take Care of Your Smile?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Schedule your visit with our team.
          </p>
          <div className="mt-10">
            <MagneticLink
              href={appointmentHref ?? '#contact'}
              className="group px-10 py-4 text-base"
              showArrow
            >
              Book an Appointment
            </MagneticLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
