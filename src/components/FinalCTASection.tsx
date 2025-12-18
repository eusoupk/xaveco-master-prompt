import { forwardRef } from 'react';

interface FinalCTASectionProps {
  onInView?: () => void;
}

export const FinalCTASection = forwardRef<HTMLElement, FinalCTASectionProps>((_, ref) => {
  return (
    <section ref={ref} className="py-12 md:py-24 relative z-10 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-12">
          <div className="bg-card border-2 md:border-4 border-border p-4 md:p-8">
            <p className="text-[10px] md:text-xs text-pixel-gold mb-2 md:mb-4">▸ MENSAGEM FINAL ◂</p>
            <p className="text-[10px] md:text-sm text-muted-foreground italic mb-2 md:mb-4">
              &quot;As melhores conversas começam com uma única mensagem.&quot;
            </p>
            <p className="text-sm md:text-lg text-primary pixel-text-shadow">
              O Xaveco escreve por você.
            </p>
          </div>

          <div className="pt-4 md:pt-8 border-t-2 md:border-t-4 border-border">
            <p className="text-[8px] md:text-xs text-muted-foreground mb-2 md:mb-4">
              © 2024 Xaveco. Todos os direitos reservados.
            </p>
            <div className="flex justify-center gap-3 md:gap-6 text-[8px] md:text-xs">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors underline">
                Termos
              </a>
              <span className="text-muted-foreground">e</span>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors underline">
                Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FinalCTASection.displayName = 'FinalCTASection';
