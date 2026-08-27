interface CursorSpotlightProps {
  enabled: boolean;
}

export function CursorSpotlight({ enabled }: CursorSpotlightProps) {
  if (!enabled) {
    return null;
  }

  return (
    <div
      className="dental-cursor-spotlight pointer-events-none fixed inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}
