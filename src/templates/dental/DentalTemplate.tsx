import { useRef } from 'react';
import type { Business } from '../../data/types';
import { useInteractionCapabilities } from './hooks/useInteractionCapabilities';
import { useMousePosition } from './hooks/useMousePosition';
import { CursorSpotlight } from './components/CursorSpotlight';
import { DentalAbout } from './components/DentalAbout';
import { DentalCTA } from './components/DentalCTA';
import { DentalDoctors } from './components/DentalDoctors';
import { DentalFooter } from './components/DentalFooter';
import { DentalHero } from './components/DentalHero';
import { DentalNavbar } from './components/DentalNavbar';
import { DentalServices } from './components/DentalServices';
import { getBrandStyles } from './utils';

interface DentalTemplateProps {
  business: Business;
}

export function DentalTemplate({ business }: DentalTemplateProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const { interactionsEnabled } = useInteractionCapabilities();

  useMousePosition(rootRef, interactionsEnabled);

  return (
    <div
      ref={rootRef}
      className="dental-template relative min-h-screen overflow-x-hidden bg-[#fafafa] text-slate-900 antialiased"
      style={getBrandStyles(business)}
    >
      <CursorSpotlight enabled={interactionsEnabled} />
      <div className="relative z-[2]">
        <DentalNavbar business={business} />
        <main>
          <DentalHero business={business} />
          <DentalServices business={business} />
          <DentalAbout business={business} />
          <DentalDoctors business={business} />
          <DentalCTA business={business} />
        </main>
        <DentalFooter business={business} />
      </div>
    </div>
  );
}
