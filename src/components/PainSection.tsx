import { forwardRef } from 'react';
import { Button } from "@/components/ui/button";
import { goToCheckout } from "@/lib/links";

interface PainSectionProps { onInView?: () => void; }

const painPoints = [
  'Mandar "oi, tudo bem?" e ser IGNORADO',
  'Ver ela online, mas não responder você',
  'Travar na hora de puxar assunto',
  'Ser deixado no vácuo',
  'Ver ela com outro cara',
  'Ficar na friendzone',
  'Não ter coragem de chamar',
  'Ser "o cara legal" mas nunca o cara que ela QUER',
];

export const PainSection = forwardRef<HTMLElement, PainSectionProps>((_, ref) => {

  return (
    <section ref={ref} className="py-16 md:py-24 relative z-10 px-5">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 justify-center mb-3">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-destructive/50" />
          <h2 className="text-destructive font-black italic uppercase tracking-widest text-xl md:text-2xl drop-shadow-[0_0_20px_hsl(var(--destructive)/0.5)]">
            ✖ Game Over ✖
          </h2>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-destructive/50" />
        </div>
        <p className="text-center text-white/60 text-sm md:text-base mb-10 md:mb-14">
          Você Está Cansado Disso?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-12">
          {painPoints.map((pain, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-black/40 rounded-3xl translate-y-1.5" />
              <div className="relative toy-card rounded-3xl p-5 md:p-6 flex items-start gap-3 hover:-translate-y-0.5 transition-transform duration-300 ease-out overflow-hidden">
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-destructive/15 blur-3xl pointer-events-none" />
                <div className="relative z-10 w-9 h-9 shrink-0 rounded-xl bg-destructive/15 border border-destructive/30 flex items-center justify-center">
                  <span className="text-destructive text-lg font-black">✖</span>
                </div>
                <p className="relative z-10 text-white/90 text-sm md:text-[15px] leading-snug font-medium pt-1">{pain}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="toy-card rounded-3xl p-6 md:p-8">
            <p className="text-[hsl(var(--pixel-gold))] text-[11px] tracking-widest uppercase font-bold mb-3">
              ▸ Mensagem do Sistema ◂
            </p>
            <p className="text-lg md:text-2xl font-black italic leading-tight">
              <span className="text-destructive">Não existe gente feia.</span>
              <br />
              <span className="text-destructive">Existe gente que não sabe conversar.</span>
            </p>
          </div>
          <Button variant="game" size="lg" onClick={goToCheckout}>
            ★ A Solução Que Muda Tudo
          </Button>
        </div>
      </div>
    </section>
  );
});
PainSection.displayName = 'PainSection';
