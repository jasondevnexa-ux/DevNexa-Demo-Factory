import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Business } from '../../../data/types';
import { useInteractionCapabilities } from '../hooks/useInteractionCapabilities';
import { getAppointmentHref, hasAbout, hasDoctors } from '../utils';
import { MagneticLink } from './MagneticLink';

interface DentalNavbarProps {
  business: Business;
}

export function DentalNavbar({ business }: DentalNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { reducedMotion } = useInteractionCapabilities();
  const appointmentHref = getAppointmentHref(business);
  const showDoctors = hasDoctors(business);
  const showAbout = hasAbout(business);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    ...(showAbout ? [{ label: 'About', href: '#about' }] : []),
    ...(showDoctors ? [{ label: 'Doctors', href: '#doctors' }] : []),
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const appointmentButton = (
    <MagneticLink
      href={appointmentHref ?? '#contact'}
      className="dental-btn-compact group"
      showArrow
    >
      Book an Appointment
    </MagneticLink>
  );

  return (
    <header
      className={`dental-navbar sticky top-0 z-50 border-b ${scrolled ? 'is-scrolled' : 'is-top'} ${!reducedMotion ? 'dental-hero-enter dental-hero-delay-0' : ''}`}
    >
      <nav
        className="dental-navbar-inner mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="flex min-w-0 shrink-0 items-center gap-3 transition-opacity hover:opacity-80"
        >
          {business.branding.logo ? (
            <img
              src={business.branding.logo}
              alt={business.name}
              className="h-9 w-auto max-w-[140px] object-contain"
            />
          ) : (
            <span className="truncate text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
              {business.name}
            </span>
          )}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="dental-nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">{appointmentButton}</div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[4.5rem] z-40 bg-white/98 backdrop-blur-md md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex h-full flex-col px-4 py-6">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-md px-3 py-3 text-base text-slate-700 transition-colors hover:bg-slate-50 hover:text-[var(--brand-primary)]"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-slate-100 pt-6">{appointmentButton}</div>
          </div>
        </div>
      )}
    </header>
  );
}
