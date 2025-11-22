import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground italic">
              "As melhores conversas da sua vida começam com uma única mensagem."
            </p>
            <p className="text-2xl md:text-3xl font-black">
              O Xaveco escreve essa mensagem por você.
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-8">
              © 2024 Xaveco. Todos os direitos reservados.
              <br />
              Pare de ser ignorado. Comece a ser notado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
