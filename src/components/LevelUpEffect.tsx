import { useEffect, useState } from 'react';
import { soundGenerator } from '@/hooks/useSound';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
}

interface LevelUpEffectProps {
  show: boolean;
  level: number;
  sectionName?: string;
}

const PIXEL_COLORS = [
  'hsl(350, 85%, 55%)', // pink/red
  'hsl(145, 70%, 45%)', // green
  'hsl(45, 100%, 50%)', // gold
  'hsl(280, 70%, 50%)', // purple
  'hsl(200, 80%, 50%)', // blue
  'hsl(30, 90%, 55%)',  // orange
];

export const LevelUpEffect = ({ show, level, sectionName }: LevelUpEffectProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show && !visible) {
      setVisible(true);
      soundGenerator.playSuccess();

      // Generate pixel confetti particles
      const newParticles: Particle[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: 50 + (Math.random() - 0.5) * 20,
          y: 50,
          color: PIXEL_COLORS[Math.floor(Math.random() * PIXEL_COLORS.length)],
          size: Math.random() < 0.5 ? 8 : 12,
          velocityX: (Math.random() - 0.5) * 15,
          velocityY: -Math.random() * 10 - 5,
          rotation: Math.random() * 360,
        });
      }
      setParticles(newParticles);

      // Animate particles
      const interval = setInterval(() => {
        setParticles(prev => 
          prev.map(p => ({
            ...p,
            x: p.x + p.velocityX * 0.3,
            y: p.y + p.velocityY * 0.3,
            velocityY: p.velocityY + 0.8, // gravity
            rotation: p.rotation + 10,
          })).filter(p => p.y < 150)
        );
      }, 30);

      // Hide after animation
      const timeout = setTimeout(() => {
        setVisible(false);
        setParticles([]);
        clearInterval(interval);
      }, 2000);

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {/* Level Up Panel — holographic 3D */}
      <div className="animate-level-up-text">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-3xl scale-125" />
          <div className="relative toy-glass rounded-3xl px-8 py-6 text-center border-primary/40 neon-pink-glow">
            <div className="text-pixel-gold text-[11px] font-black tracking-widest mb-2 animate-pulse">
              ★ ★ ★ LEVEL UP ★ ★ ★
            </div>
            <div className="text-3xl md:text-5xl text-primary font-black italic drop-shadow-[0_0_20px_hsl(var(--primary)/0.7)]">
              LEVEL {level}
            </div>
            {sectionName && (
              <div className="text-xs text-white/70 mt-2 uppercase tracking-widest font-bold">
                {sectionName}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pixel Confetti */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            boxShadow: `0 0 ${particle.size}px ${particle.color}`,
          }}
        />
      ))}

      {/* Flash effect */}
      <div className="absolute inset-0 bg-pixel-gold/10 animate-flash pointer-events-none" />
    </div>
  );
};
