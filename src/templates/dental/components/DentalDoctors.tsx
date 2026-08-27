import { ArrowUpRight, UserRound } from 'lucide-react';
import type { Business } from '../../../data/types';
import { hasDoctors } from '../utils';
import { ScrollReveal } from './ScrollReveal';

interface DentalDoctorsProps {
  business: Business;
}

export function DentalDoctors({ business }: DentalDoctorsProps) {
  if (!hasDoctors(business) || !business.doctors) {
    return null;
  }

  return (
    <section id="doctors" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--brand-primary)]">
              Our Team
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-[2.75rem]">
              Meet Our Doctors
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Experienced professionals dedicated to providing thoughtful, patient-centered care.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:max-w-5xl">
          {business.doctors.map((doctor, index) => (
            <ScrollReveal key={doctor.name} delay={index * 100}>
              <article className="dental-doctor-card group">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  {doctor.image ? (
                    <>
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="dental-doctor-image h-full w-full object-cover"
                      />
                      <div className="dental-doctor-overlay absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center"
                      style={{ backgroundColor: 'color-mix(in srgb, var(--brand-secondary) 50%, white)' }}
                    >
                      <UserRound className="h-16 w-16 text-[var(--brand-primary)] opacity-60" aria-hidden="true" />
                    </div>
                  )}
                  <ArrowUpRight
                    className="absolute right-5 top-5 h-5 w-5 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-medium tracking-tight text-slate-900">{doctor.name}</h3>
                  {doctor.specialization && (
                    <p className="mt-2 text-sm text-[var(--brand-primary)]">{doctor.specialization}</p>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
