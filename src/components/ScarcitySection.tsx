import { forwardRef } from 'react';
import { Button } from "@/components/ui/button";
import { useTimer } from "@/hooks/useTimer";
import { usePlansModal } from "@/components/PlansModal";

interface ScarcitySectionProps { onInView?: () => void; }

export const ScarcitySection = forwardRef<HTMLElement, ScarcitySectionProps>((_, ref) => {
  const { timeText } = useTimer();
  const { open: openPlans } = usePlansModal();

  return (
    <section ref={ref} className="py-16 md:py-24 relative z-10 px-5">
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          <div className="absolute inset-0 bg-destructive/20 blur-3xl rounded-[40px]" />
          <div className="relative toy-card rounded-[32px] p-6 md:p-12 border-destructive/30 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-destructive/20 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-center font-black italic text-2xl md:text-4xl tracking-tight mb-4 text-destructive drop-shadow-[0_0_20px_hsl(var(--destructive)/0.6)]">
                ⚠ ALERTA ⚠
              </h2>
              <p className="text-center text-sm md:text-base text-white/70 mb-1">
                Enquanto Você Decide...
              </p>
              <p className="text-center text-base md:text-xl font-black text-destructive mb-8 md:mb-10 leading-snug">
                Alguém está mandando mensagem pra pessoa que você quer.
              </p>

              {/* Escolha BAD/GOOD ENDING — dois portais 3D */}
              <div className="toy-glass rounded-3xl p-4 md:p-6 mb-8">
                <p className="text-center text-[hsl(var(--pixel-gold))] text-xs font-black uppercase tracking-widest mb-5">
                  ▸ Selecione Seu Destino ◂
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-destructive/40 rounded-2xl translate-y-1.5" />
                    <div className="relative rounded-2xl p-4 bg-gradient-to-b from-destructive/25 to-destructive/10 border border-destructive/40 flex items-start gap-3">
                      <div className="w-9 h-9 shrink-0 rounded-xl bg-destructive/25 border border-destructive/50 flex items-center justify-center text-destructive font-black">✖</div>
                      <div>
                        <p className="text-destructive font-black text-xs uppercase tracking-widest mb-1">Bad Ending</p>
                        <p className="text-white/70 text-sm">Continuar travando e sendo ignorado</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-[hsl(var(--pixel-green))]/40 rounded-2xl translate-y-1.5" />
                    <div className="relative rounded-2xl p-4 bg-gradient-to-b from-[hsl(var(--pixel-green))]/25 to-[hsl(var(--pixel-green))]/10 border border-[hsl(var(--pixel-green))]/40 flex items-start gap-3">
                      <div className="w-9 h-9 shrink-0 rounded-xl bg-[hsl(var(--pixel-green))]/25 border border-[hsl(var(--pixel-green))]/50 flex items-center justify-center text-[hsl(var(--pixel-green))] font-black">★</div>
                      <div>
                        <p className="text-[hsl(var(--pixel-green))] font-black text-xs uppercase tracking-widest mb-1">Good Ending</p>
                        <p className="text-white/70 text-sm">Virar o cara que ela QUER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                {/* Cronômetro digital em caixa metálica */}
                <div className="rounded-2xl px-5 py-3 bg-gradient-to-b from-[hsl(263_40%_18%)] to-[hsl(263_40%_10%)] border border-white/10 shadow-[inset_0_2px_0_rgba(255,255,255,0.1),0_10px_30px_-10px_rgba(0,0,0,0.6)] flex items-center gap-3">
                  <span className="text-destructive text-lg">⏱</span>
                  <span className="text-xs text-white/60 font-bold uppercase tracking-widest">Tempo</span>
                  <span className="tabular-nums text-[hsl(var(--pixel-gold))] text-2xl font-black tracking-tight drop-shadow-[0_0_10px_hsl(var(--pixel-gold)/0.5)]">
                    {timeText}
                  </span>
                </div>

                <Button variant="hero" size="xl" onClick={openPlans} className="animate-breathe-glow">
                  ▶ GOOD ENDING
                </Button>

                <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-white/50">
                  <span>✓ Acesso imediato</span>
                  <span>✓ Sem mensalidade</span>
                  <span>✓ Garantia 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
ScarcitySection.displayName = 'ScarcitySection';
