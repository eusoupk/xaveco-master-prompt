import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
}

export const StarryBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() < 0.7 ? 2 : Math.random() < 0.9 ? 3 : 4,
          opacity: Math.random() * 0.5 + 0.3,
          animationDelay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.size > 3 ? 'hsl(var(--star-bright))' : 'hsl(var(--star))',
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            boxShadow: star.size > 3 ? '0 0 4px hsl(var(--star-bright))' : 'none',
          }}
        />
      ))}
      
      {/* Pixel city skyline at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,120 L0,100 L20,100 L20,80 L40,80 L40,90 L60,90 L60,70 L80,70 L80,85 L100,85 L100,60 L120,60 L120,80 L140,80 L140,55 L160,55 L160,75 L180,75 L180,50 L200,50 L200,70 L220,70 L220,45 L240,45 L240,65 L260,65 L260,40 L280,40 L280,60 L300,60 L300,35 L320,35 L320,55 L340,55 L340,75 L360,75 L360,50 L380,50 L380,70 L400,70 L400,45 L420,45 L420,65 L440,65 L440,55 L460,55 L460,75 L480,75 L480,60 L500,60 L500,80 L520,80 L520,50 L540,50 L540,70 L560,70 L560,40 L580,40 L580,60 L600,60 L600,35 L620,35 L620,55 L640,55 L640,45 L660,45 L660,65 L680,65 L680,55 L700,55 L700,75 L720,75 L720,50 L740,50 L740,70 L760,70 L760,60 L780,60 L780,80 L800,80 L800,55 L820,55 L820,75 L840,75 L840,45 L860,45 L860,65 L880,65 L880,40 L900,40 L900,60 L920,60 L920,50 L940,50 L940,70 L960,70 L960,55 L980,55 L980,75 L1000,75 L1000,60 L1020,60 L1020,80 L1040,80 L1040,65 L1060,65 L1060,85 L1080,85 L1080,70 L1100,70 L1100,90 L1120,90 L1120,75 L1140,75 L1140,95 L1160,95 L1160,80 L1180,80 L1180,100 L1200,100 L1200,120 Z"
            fill="hsl(var(--city-silhouette))"
          />
          {/* Windows */}
          {Array.from({ length: 50 }).map((_, i) => (
            <rect
              key={i}
              x={20 + (i % 20) * 58}
              y={50 + Math.floor(i / 20) * 25}
              width="3"
              height="4"
              fill={Math.random() > 0.5 ? 'hsl(var(--window-light))' : 'transparent'}
              className="animate-window-flicker"
              style={{ animationDelay: `${Math.random() * 5}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};
