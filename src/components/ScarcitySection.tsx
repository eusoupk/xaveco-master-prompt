import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, X, Check } from "lucide-react";
import { useTimer } from "@/hooks/useTimer";

export const ScarcitySection = () => {
  const { timeText } = useTimer();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--destructive)/0.1)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-6">
              Enquanto Você Decide...
            </h2>

            <p className="text-center text-lg md:text-xl mb-2">
              Alguém está mandando mensagem pra pessoa que você quer.
            </p>
            <p className="text-center text-lg md:text-xl font-bold text-destructive mb-8">
              E provavelmente sabe exatamente o que falar.
            </p>

            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-center font-bold mb-6">Você tem duas opções:</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <X className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Opção 1:</p>
                    <p className="text-sm text-muted-foreground">
                      Continuar travando, sendo ignorado, vendo ela com outros caras
                      enquanto você fica só pensando "e se eu tivesse falado algo
                      diferente?"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-600/5 border border-green-600/20 rounded-lg">
                  <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold mb-1">Opção 2:</p>
                    <p className="text-sm text-muted-foreground">
                      Ter as mensagens perfeitas, despertar interesse real, criar
                      conexão de verdade e finalmente virar o cara que ela QUER
                      conversar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 bg-destructive/10 text-destructive px-6 py-3 rounded-full border border-destructive/30">
                <Clock className="w-4 h-4" />
                <span className="font-bold">
                  Oferta expira em <span className="tabular-nums">{timeText}</span>
                </span>
              </div>

              <Button
                variant="hero"
                size="xl"
                className="group"
                onClick={() => window.location.href = 'https://xaveco.online/'}
              >
                Quero Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-muted-foreground">
                ✓ Acesso imediato • ✓ Sem mensalidade • ✓ Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
