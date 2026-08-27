import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import type { Business } from '../../../data/types';
import { ScrollReveal } from './ScrollReveal';

interface DentalFooterProps {
  business: Business;
}

export function DentalFooter({ business }: DentalFooterProps) {
  const { contact, social } = business;
  const hasContactInfo = Boolean(
    contact.phone ||
      contact.whatsapp ||
      contact.email ||
      contact.address ||
      contact.openingHours,
  );
  const hasSocial = Boolean(social?.instagram || social?.facebook);

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {business.name}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
                {business.category} — get in touch to learn more or schedule a visit.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-slate-500 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Now
                  </a>
                )}
                {contact.whatsapp && (
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-slate-500 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp Us
                  </a>
                )}
                {contact.mapsUrl && (
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-slate-500 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Get Directions
                  </a>
                )}
              </div>
            </div>

            {hasContactInfo && (
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-white">
                  Contact Information
                </h3>
                <ul className="mt-8 space-y-5 text-sm sm:text-base">
                  {contact.phone && (
                    <li className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className="dental-footer-link hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {contact.phone}
                      </a>
                    </li>
                  )}
                  {contact.email && (
                    <li className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="dental-footer-link break-all hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {contact.email}
                      </a>
                    </li>
                  )}
                  {contact.address && (
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
                      <span>{contact.address}</span>
                    </li>
                  )}
                  {contact.openingHours && (
                    <li className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" aria-hidden="true" />
                      <span>{contact.openingHours}</span>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </ScrollReveal>

        {hasSocial && (
          <ScrollReveal delay={80}>
            <div className="mt-14 border-t border-slate-800 pt-10">
              <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-white">Follow Us</h3>
              <div className="mt-5 flex flex-wrap gap-6">
                {social?.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dental-footer-link inline-flex items-center gap-2 text-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Instagram
                  </a>
                )}
                {social?.facebook && (
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dental-footer-link inline-flex items-center gap-2 text-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Facebook
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        )}

        <div className="mt-14 border-t border-slate-800 pt-8">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
