import { forwardRef } from 'react';
import { Button } from "@/components/ui/button";
import { useTimer } from "@/hooks/useTimer";

interface ScarcitySectionProps {
  onInView?: () => void;
}

export const ScarcitySection = forwardRef<HTMLElement, ScarcitySectionProps>((_, ref) => {
  const { timeText } = useTimer();

  return (
    <section ref={ref} className="py-12 md:py-24 relative z-10 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 md:border-4 border-destructive p-4 md:p-12">
            <h2 className="text-center mb-4 md:mb-6 text-destructive text-lg md:text-2xl">
              ⚠ ALERTA ⚠
            </h2>

            <p className="text-center text-[10px] md:text-xs mb-1 md:mb-2">
              Enquanto Você Decide...
            </p>
            <p className="text-center text-xs md:text-sm text-destructive mb-4 md:mb-8 pixel-text-shadow">
              Alguém está mandando mensagem pra pessoa que você quer.
            </p>

            {/* Options as game choices */}
            <div className="bg-secondary/30 border-2 md:border-4 border-secondary p-3 md:p-6 mb-4 md:mb-8">
              <p className="text-center text-[10px] md:text-xs mb-3 md:mb-6 text-pixel-gold">
                ▸ SELECIONE SEU DESTINO ◂
              </p>

              <div className="space-y-2 md:space-y-4">
                <div className="flex items-start gap-2 md:gap-3 p-2 md:p-4 bg-destructive/10 border-2 md:border-4 border-destructive/50">
                  <span className="text-destructive text-sm md:text-lg">✖</span>
                  <div>
                    <p className="text-[10px] md:text-xs text-destructive mb-0.5 md:mb-1">BAD ENDING:</p>
                    <p className="text-[8px] md:text-xs text-muted-foreground">
                      Continuar travando e sendo ignorado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 md:gap-3 p-2 md:p-4 bg-pixel-green/10 border-2 md:border-4 border-pixel-green/50">
                  <span className="text-pixel-green text-sm md:text-lg">★</span>
                  <div>
                    <p className="text-[10px] md:text-xs text-pixel-green mb-0.5 md:mb-1">GOOD ENDING:</p>
                    <p className="text-[8px] md:text-xs text-muted-foreground">
                      Virar o cara que ela QUER
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 md:gap-6">
              <div className="bg-destructive/20 border-2 md:border-4 border-destructive text-destructive px-3 md:px-6 py-2 md:py-3 text-[10px] md:text-xs">
                ⏱ TEMPO: <span className="tabular-nums text-pixel-gold">{timeText}</span>
              </div>

              <Button
                variant="hero"
                size="default"
                className="group text-[10px] md:text-sm h-10 md:h-16 px-6 md:px-12"
                onClick={() => window.location.href = 'https://xaveco.online/'}
              >
                ▶ GOOD ENDING
              </Button>

              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-[8px] md:text-xs text-muted-foreground">
                <span>✓ Acesso imediato</span>
                <span>✓ Sem mensalidade</span>
                <span>✓ Garantia 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ScarcitySection.displayName = 'ScarcitySection';
