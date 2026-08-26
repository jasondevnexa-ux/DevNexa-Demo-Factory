import { pearlDental } from './businesses/pearlDental';
import { smileDental } from './businesses/smileDental';
import type { Business } from './types';

const businesses: Business[] = [pearlDental, smileDental];

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((business) => business.slug === slug);
}
