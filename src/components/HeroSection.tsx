import { forwardRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useTimer } from "@/hooks/useTimer";
import xavecoLogo from "@/assets/xaveco-logo-pixel.png";

interface HeroSectionProps {
  onInView?: () => void;
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ onInView }, ref) => {
  const { timeText, ended } = useTimer();

  useEffect(() => {
    // Hero is always in view on load
    onInView?.();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Timer Badge */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        {ended ? (
          <div className="bg-destructive/30 border-4 border-destructive text-destructive px-6 py-3 pixel-text-shadow">
            Oferta finalizando…
          </div>
        ) : (
          <div className="bg-primary/20 border-4 border-primary text-primary px-6 py-3 flex items-center gap-2 pixel-text-shadow">
            <span className="text-pixel-gold">⚡</span>
            Acesso Limitado • Expira em <span className="tabular-nums text-pixel-gold">{timeText}</span>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center pt-24">
        {/* Pixel Heart Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src={xavecoLogo} 
            alt="Xaveco" 
            className="w-64 md:w-80 lg:w-96 animate-pixel-pulse drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <p className="text-sm md:text-base text-muted-foreground pixel-text-shadow">
            O app brasileiro pra você parar de travar na hora de falar com ela
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button
            variant="hero"
            size="xl"
            className="group animate-pixel-bounce"
            onClick={() => window.location.href = 'https://xaveco.online/'}
          >
            ▶ COMEÇAR
          </Button>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="text-primary">♥</span> Favoritos
            </span>
            <span className="flex items-center gap-2">
              <span className="text-muted-foreground">✉</span> Mensagens
            </span>
            <span className="flex items-center gap-2">
              <span className="text-pixel-gold">★</span> Premium
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
