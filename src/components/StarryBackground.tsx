import { useEffect, useState } from 'react';

interface Star { id: number; x: number; y: number; size: number; opacity: number; delay: number; }

export const StarryBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const arr: Star[] = [];
    for (let i = 0; i < 90; i++) {
      arr.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() < 0.7 ? 1.5 : Math.random() < 0.9 ? 2.5 : 4,
        opacity: Math.random() * 0.6 + 0.3,
        delay: Math.random() * 4,
      });
    }
    setStars(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Nebula blobs — luz de palco 3D */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-[120px] bg-primary/15" />
      <div className="absolute top-1/3 -right-32 w-[380px] h-[380px] rounded-full blur-[120px] bg-[hsl(var(--pixel-green))]/8" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[140px] bg-[hsl(var(--pixel-purple))]/10" />

      {/* Estrelas — partículas suaves */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: s.size > 3 ? 'hsl(var(--star-bright))' : 'hsl(var(--star))',
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            boxShadow: s.size > 2 ? `0 0 ${s.size * 2}px hsl(var(--star-bright) / 0.6)` : 'none',
          }}
        />
      ))}

      {/* Diorama low-poly da cidade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(263_82%_4%)] to-transparent" />
        <svg viewBox="0 0 1200 160" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cityGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="hsl(263 70% 14%)" />
              <stop offset="1" stopColor="hsl(263 82% 5%)" />
            </linearGradient>
          </defs>
          <path
            d="M0,160 L0,110 L60,110 L80,80 L120,80 L140,60 L200,60 L220,90 L280,90 L300,50 L360,50 L380,75 L440,75 L460,40 L520,40 L540,70 L600,70 L620,55 L680,55 L700,85 L760,85 L780,45 L840,45 L860,75 L920,75 L940,60 L1000,60 L1020,90 L1080,90 L1100,70 L1160,70 L1180,100 L1200,100 L1200,160 Z"
            fill="url(#cityGrad)"
          />
          {Array.from({ length: 60 }).map((_, i) => (
            <rect
              key={i}
              x={20 + (i % 20) * 58}
              y={70 + Math.floor(i / 20) * 22}
              width="4"
              height="5"
              rx="1"
              fill={Math.random() > 0.45 ? 'hsl(51 100% 65%)' : 'transparent'}
              className="animate-window-flicker"
              style={{ animationDelay: `${Math.random() * 5}s`, filter: 'drop-shadow(0 0 3px hsl(51 100% 65%))' }}
            />
          ))}
        </svg>
      </div>

      {/* Spotlight base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-primary/15 to-transparent blur-2xl" />
    </div>
  );
};
