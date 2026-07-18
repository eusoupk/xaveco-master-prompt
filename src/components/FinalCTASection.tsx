import { forwardRef } from 'react';

interface FinalCTASectionProps { onInView?: () => void; }

export const FinalCTASection = forwardRef<HTMLElement, FinalCTASectionProps>((_, ref) => {
  return (
    <section ref={ref} className="py-16 md:py-24 relative z-10 px-5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-10 md:space-y-14">
          <div className="relative">
            <div className="absolute inset-0 bg-black/40 rounded-3xl translate-y-1.5" />
            <div className="relative toy-card rounded-3xl p-6 md:p-10">
              <p className="text-[hsl(var(--pixel-gold))] text-xs font-black uppercase tracking-widest mb-4">
                ▸ Mensagem Final ◂
              </p>
              <p className="text-white/70 italic text-base md:text-lg mb-4">
                &quot;As melhores conversas começam com uma única mensagem.&quot;
              </p>
              <p className="text-primary font-black italic text-2xl md:text-3xl drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                O Xaveco escreve por você.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-white/50 text-xs mb-3">© 2024 Xaveco. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-4 text-xs">
              <a href="#" className="text-white/60 hover:text-primary underline transition-colors">Termos</a>
              <span className="text-white/40">e</span>
              <a href="#" className="text-white/60 hover:text-primary underline transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
FinalCTASection.displayName = 'FinalCTASection';
