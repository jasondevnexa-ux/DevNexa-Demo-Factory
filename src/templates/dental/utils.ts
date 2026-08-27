import type { CSSProperties } from 'react';
import type { Business } from '../../data/types';

export const DEFAULT_HERO_HEADLINE = 'Exceptional Dental Care, Designed Around You';

export function getBrandStyles(business: Business): CSSProperties {
  return {
    '--brand-primary': business.branding.primaryColor ?? '#0f766e',
    '--brand-secondary': business.branding.secondaryColor ?? '#f0fdfa',
  } as CSSProperties;
}

export function getAppointmentHref(business: Business): string | null {
  if (business.contact.phone) {
    return `tel:${business.contact.phone.replace(/\s/g, '')}`;
  }
  if (business.contact.whatsapp) {
    return `https://wa.me/${business.contact.whatsapp.replace(/\D/g, '')}`;
  }
  return null;
}

export function hasDoctors(business: Business): boolean {
  return Boolean(business.doctors && business.doctors.length > 0);
}

export function hasAbout(business: Business): boolean {
  return Boolean(
    business.about &&
      (business.about.title || business.about.description || business.about.image),
  );
}
