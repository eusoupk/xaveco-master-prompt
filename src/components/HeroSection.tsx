import { forwardRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useTimer } from "@/hooks/useTimer";
import { useOnlineCounter } from "@/hooks/useOnlineCounter";
import { SocialProofBar } from "@/components/SocialProofBar";
import xavecoLogo from "@/assets/xaveco-logo-pixel.png";

interface HeroSectionProps {
  onInView?: () => void;
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ onInView }, ref) => {
  const { timeText, ended } = useTimer();
  const { formattedCount } = useOnlineCounter();

  useEffect(() => {
    onInView?.();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Timer Badge / Online Counter */}
      <div className="absolute top-3 md:top-8 left-1/2 -translate-x-1/2 z-10 w-auto max-w-[65%] md:max-w-none">
        {ended ? (
          <div className="bg-pixel-green/20 border border-pixel-green md:border-4 text-pixel-green px-2 md:px-6 py-1.5 md:py-3 pixel-text-shadow animate-pulse flex items-center justify-center gap-1.5 md:gap-2 text-[8px] md:text-xs">
            <span className="relative flex h-1.5 w-1.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pixel-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-3 md:w-3 bg-pixel-green"></span>
            </span>
            <span className="text-sm md:text-lg">🎮</span>
            <span className="whitespace-nowrap">Jogadores ativos: <span className="text-pixel-gold tabular-nums">{formattedCount}</span></span>
          </div>
        ) : (
          <div className="bg-primary/20 border border-primary md:border-4 text-primary px-2 md:px-6 py-1.5 md:py-3 flex items-center justify-center gap-1 md:gap-2 pixel-text-shadow text-[8px] md:text-xs">
            <span className="text-pixel-gold">⚡</span>
            <span className="whitespace-nowrap">Acesso Limitado • Expira em <span className="tabular-nums text-pixel-gold">{timeText}</span></span>
          </div>
        )}
      </div>

      <div className="container mx-auto relative z-10 text-center pt-16 md:pt-24">
        {/* Pixel Heart Logo */}
        <div className="flex justify-center mb-4 md:mb-6">
          <img 
            src={xavecoLogo} 
            alt="Xaveco" 
            className="w-48 sm:w-64 md:w-80 lg:w-96 animate-pixel-pulse drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 mb-8 md:mb-12 px-2">
          <p className="text-[10px] sm:text-xs md:text-base text-muted-foreground pixel-text-shadow leading-relaxed">
            O app brasileiro pra você parar de travar na hora de falar com ela
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Button
            variant="hero"
            size="lg"
            className="group animate-pixel-bounce text-xs md:text-sm px-8 md:px-12 h-12 md:h-16"
            onClick={() => window.location.href = 'https://xaveco.online/'}
          >
            ▶ COMEÇAR
          </Button>

          <div className="flex items-center gap-3 md:gap-6 text-[10px] md:text-xs text-muted-foreground">
            <span className="flex items-center gap-1 md:gap-2">
              <span className="text-primary">♥</span> Favoritos
            </span>
            <span className="flex items-center gap-1 md:gap-2">
              <span className="text-muted-foreground">✉</span> Mensagens
            </span>
            <span className="flex items-center gap-1 md:gap-2">
              <span className="text-pixel-gold">★</span> Premium
            </span>
          </div>

          {/* Social Proof Bar */}
          <SocialProofBar />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
