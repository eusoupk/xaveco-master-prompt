import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,hsl(var(--orange-glow)/0.2)_0%,transparent_60%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Final Headline */}
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Se você não puxar assunto direito,{" "}
            <span className="text-primary">outro puxa.</span>
            <br />
            Torne-se o cara que{" "}
            <span className="text-primary">ela prefere.</span>
          </h2>

          {/* Final CTA */}
          <div className="pt-8">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
            >
              Desbloquear meu Xaveco por R$ 19,90
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-muted-foreground pt-8">
            Plano semanal • Cancele quando quiser • Ativação instantânea
          </p>
        </div>
      </div>
    </section>
  );
};
