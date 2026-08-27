import { useMediaQuery } from './useMediaQuery';

export function useInteractionCapabilities() {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const finePointer = useMediaQuery('(pointer: fine)');

  return {
    reducedMotion,
    finePointer,
    interactionsEnabled: finePointer && !reducedMotion,
  };
}
