import { useEffect, type RefObject } from 'react';

const MAGNETIC_RADIUS = 120;
const MAX_OFFSET = 8;

export function useMagneticEffect(
  targetRef: RefObject<HTMLElement | null>,
  enabled: boolean,
): void {
  useEffect(() => {
    const element = targetRef.current;
    if (!enabled || !element) {
      return;
    }

    const reset = () => {
      element.style.transform = 'translate3d(0, 0, 0)';
    };

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance >= MAGNETIC_RADIUS || distance === 0) {
        reset();
        return;
      }

      const pull = (1 - distance / MAGNETIC_RADIUS) * MAX_OFFSET;
      const offsetX = (deltaX / distance) * pull;
      const offsetY = (deltaY / distance) * pull;

      element.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    element.addEventListener('mouseleave', reset);

    return () => {
      window.removeEventListener('mousemove', onMove);
      element.removeEventListener('mouseleave', reset);
      reset();
    };
  }, [enabled, targetRef]);
}
