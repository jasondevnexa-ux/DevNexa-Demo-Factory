import { useEffect, type RefObject } from 'react';

export function useMousePosition(
  targetRef: RefObject<HTMLElement | null>,
  enabled: boolean,
): void {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    let frame = 0;

    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const element = targetRef.current;
        if (!element) {
          return;
        }

        element.style.setProperty('--mouse-x', `${event.clientX}px`);
        element.style.setProperty('--mouse-y', `${event.clientY}px`);
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
    };
  }, [enabled, targetRef]);
}
