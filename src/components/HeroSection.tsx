import { forwardRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { SocialProofBar } from "@/components/SocialProofBar";
import { usePlansModal } from "@/components/PlansModal";
import xavecoLogo from "@/assets/xaveco-logo-pixel.png";

interface HeroSectionProps {
  onInView?: () => void;
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ onInView }, ref) => {
  const { open: openPlans } = usePlansModal();

  useEffect(() => {
    onInView?.();
  }, []);

  return (
    <section ref={ref} className="relative min-h-[80vh] flex flex-col overflow-hidden px-4 pt-4 md:pt-6 pb-6 md:pb-10">
      <div className="container mx-auto relative z-10 text-center flex flex-col flex-1">
        {/* Pixel Heart Logo - topo */}
        <div className="flex justify-center mb-3 md:mb-4">
          <img 
            src={xavecoLogo} 
            alt="Xaveco" 
            className="w-36 sm:w-48 md:w-64 lg:w-72 animate-pixel-pulse drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4 mb-4 md:mb-6 px-2">
          <p className="text-[10px] sm:text-xs md:text-base text-muted-foreground pixel-text-shadow leading-relaxed">
            O app brasileiro pra você parar de travar na hora de falar com ela
          </p>
        </div>

        {/* Info visível já na primeira dobra */}
        <div className="flex-1 flex items-center justify-center">
          <SocialProofBar />
        </div>

        {/* CTA no final do hero */}
        <div className="flex flex-col items-center gap-3 md:gap-4 mt-auto">
          <Button
            variant="hero"
            size="lg"
            className="group animate-pixel-bounce text-xs md:text-sm px-8 md:px-12 h-12 md:h-16"
            onClick={openPlans}
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
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
