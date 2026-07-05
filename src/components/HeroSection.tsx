import { forwardRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useTimer } from "@/hooks/useTimer";
import { useOnlineCounter } from "@/hooks/useOnlineCounter";
import { SocialProofBar } from "@/components/SocialProofBar";
import { usePlansModal } from "@/components/PlansModal";
import xavecoLogo from "@/assets/xaveco-logo-pixel.png";

interface HeroSectionProps {
  onInView?: () => void;
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ onInView }, ref) => {
  const { timeText, ended } = useTimer();
  const { formattedCount } = useOnlineCounter();
  const { open: openPlans } = usePlansModal();

  useEffect(() => {
    onInView?.();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="container mx-auto relative z-10 text-center pt-8 md:pt-12">
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

          {/* Social Proof Bar */}
          <SocialProofBar />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
