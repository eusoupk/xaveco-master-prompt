import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--orange-glow)/0.15)_0%,transparent_70%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-card/50 border-2 border-primary/30 backdrop-blur-xl shadow-2xl space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Pronto para se tornar{" "}
                <span className="text-primary">inesquecível?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Junte-se aos homens que decidiram parar de ser ignorados
              </p>

              <div className="pt-4 space-y-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  className="group w-full md:w-auto"
                >
                  Ativar Xaveco Agora – R$ 19,90/semana
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>7 segundos para começar a usar</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Ativação instantânea</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Sem compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
