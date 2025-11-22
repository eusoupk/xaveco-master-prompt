import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useTimer } from "@/hooks/useTimer";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const { timeText, ended } = useTimer();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card">
      {/* Badge com Timer */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        {ended ? (
          <div className="bg-destructive/20 border border-destructive/30 text-destructive px-6 py-3 rounded-full font-bold">
            Oferta finalizando…
          </div>
        ) : (
          <div className="bg-primary/10 border border-primary/20 text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Acesso Limitado • Expira em <span className="tabular-nums">{timeText}</span>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center pt-24">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
          Pare de Ser
          <br />
          <span className="bg-gradient-to-r from-primary via-[#FF4081] to-[#FF1744] bg-clip-text text-transparent">
            IGNORADO
          </span>
        </h1>

        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <p className="text-lg md:text-xl text-muted-foreground">
            Você sabe aquela pessoa que você quer há meses?
          </p>
          <p className="text-lg md:text-xl font-bold text-foreground">
            Aquela que você pensa antes de dormir?
          </p>
          <p className="text-lg md:text-xl font-bold text-primary">
            Chegou a hora de parar de sonhar.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button
            variant="hero"
            size="xl"
            className="group"
            onClick={() => window.location.href = 'https://xaveco.online/'}
          >
            Quero Parar de Ser Ignorado
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-muted-foreground">
            ✓ Acesso imediato • ✓ Sem enrolação
          </p>
        </div>
      </div>
    </section>
  );
};
