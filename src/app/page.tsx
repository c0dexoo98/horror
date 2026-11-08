'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    import('@/game/main').then(({ launch }) => {
      if (ref.current) launch(ref.current);
    });
  }, []);

  return (
    <main
      ref={ref}
      id="hv-container"
      style={{
        position: 'fixed',
        inset: 0,
        background: '#020204',
        overflow: 'hidden',
        touchAction: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
      }}
      aria-label="Hollow Vale — horror survival game"
    />
  );
}
