import { Button } from "@/components/ui/button";
import { useTimer } from "@/hooks/useTimer";

export const ScarcitySection = () => {
  const { timeText } = useTimer();

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-4 border-destructive p-8 md:p-12">
            <h2 className="text-center mb-6 text-destructive">
              ⚠ ALERTA ⚠
            </h2>

            <p className="text-center text-xs mb-2">
              Enquanto Você Decide...
            </p>
            <p className="text-center text-sm text-destructive mb-8 pixel-text-shadow">
              Alguém está mandando mensagem pra pessoa que você quer.
            </p>

            {/* Options as game choices */}
            <div className="bg-secondary/30 border-4 border-secondary p-6 mb-8">
              <p className="text-center text-xs mb-6 text-pixel-gold">
                ▸ SELECIONE SEU DESTINO ◂
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-destructive/10 border-4 border-destructive/50">
                  <span className="text-destructive text-lg">✖</span>
                  <div>
                    <p className="text-xs text-destructive mb-1">OPÇÃO A - BAD ENDING:</p>
                    <p className="text-xs text-muted-foreground">
                      Continuar travando, sendo ignorado, vendo ela com outros
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-pixel-green/10 border-4 border-pixel-green/50">
                  <span className="text-pixel-green text-lg">★</span>
                  <div>
                    <p className="text-xs text-pixel-green mb-1">OPÇÃO B - GOOD ENDING:</p>
                    <p className="text-xs text-muted-foreground">
                      Ter as mensagens perfeitas e virar o cara que ela QUER
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="bg-destructive/20 border-4 border-destructive text-destructive px-6 py-3 text-xs">
                ⏱ TEMPO RESTANTE: <span className="tabular-nums text-pixel-gold">{timeText}</span>
              </div>

              <Button
                variant="hero"
                size="xl"
                className="group"
                onClick={() => window.location.href = 'https://xaveco.online/'}
              >
                ▶ ESCOLHER GOOD ENDING
              </Button>

              <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
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
};
