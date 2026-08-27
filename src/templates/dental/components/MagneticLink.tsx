import { ArrowRight } from 'lucide-react';
import { useRef, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { useInteractionCapabilities } from '../hooks/useInteractionCapabilities';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

interface MagneticLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  magnetic?: boolean;
  showArrow?: boolean;
  variant?: 'primary' | 'secondary';
}

export function MagneticLink({
  children,
  magnetic = true,
  showArrow = false,
  variant = 'primary',
  className = '',
  ...props
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { interactionsEnabled } = useInteractionCapabilities();

  useMagneticEffect(ref, magnetic && interactionsEnabled);

  const baseClass =
    variant === 'primary'
      ? 'dental-btn-primary'
      : 'dental-btn-secondary';

  return (
    <a
      ref={ref}
      className={`group ${baseClass} ${className}`.trim()}
      {...props}
    >
      <span className="relative z-[1] inline-flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
        )}
      </span>
    </a>
  );
}
