import { forwardRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { SocialProofBar } from "@/components/SocialProofBar";
import { usePlansModal } from "@/components/PlansModal";

interface HeroSectionProps { onInView?: () => void; }

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ onInView }, ref) => {
  const { open: openPlans } = usePlansModal();
  useEffect(() => { onInView?.(); }, []);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex flex-col overflow-hidden px-5 pt-6 pb-10">
      <div className="container mx-auto relative z-10 text-center flex flex-col flex-1 max-w-xl">
        {/* Logo 3D — objeto extrudado glossy */}
        <div className="flex justify-center mb-6 mt-2">
          <div className="relative animate-float-soft">
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full scale-150" />
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-[40px] flex items-center justify-center -rotate-3 transition-transform hover:rotate-0 bg-gradient-to-br from-[hsl(320_100%_70%)] via-primary to-[hsl(280_100%_45%)] shadow-[0_25px_50px_-12px_hsl(var(--primary)/0.55),inset_0_4px_0_rgba(255,255,255,0.4),inset_0_-10px_0_rgba(0,0,0,0.25)]">
              <svg className="w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-2 drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
          XAVECO
        </h1>
        <p className="text-primary font-bold tracking-widest uppercase text-[11px] md:text-xs mb-6">
          Desenrola com estilo ♥
        </p>

        <div className="max-w-md mx-auto mb-8 px-2">
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            O app brasileiro pra você parar de travar na hora de falar com ela
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center mb-6">
          <SocialProofBar />
        </div>

        <div className="flex flex-col items-center gap-5 mt-auto">
          <Button
            variant="hero"
            size="lg"
            className="w-full max-w-xs animate-breathe-glow"
            onClick={openPlans}
          >
            ▶ COMEÇAR
          </Button>

          <div className="flex items-center gap-5 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><span className="text-primary">♥</span> Favoritos</span>
            <span className="flex items-center gap-1.5"><span className="text-white/50">✉</span> Mensagens</span>
            <span className="flex items-center gap-1.5"><span className="text-[hsl(var(--pixel-gold))]">★</span> Premium</span>
          </div>
        </div>
      </div>
    </section>
  );
});
HeroSection.displayName = 'HeroSection';
