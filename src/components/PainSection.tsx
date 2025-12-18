import { forwardRef } from 'react';
import { Button } from "@/components/ui/button";

interface PainSectionProps {
  onInView?: () => void;
}

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
    <section ref={ref} className="py-12 md:py-24 relative z-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-center mb-2 md:mb-4 text-destructive text-lg md:text-2xl">
          ✖ GAME OVER ✖
        </h2>
        <p className="text-center text-sm md:text-lg mb-8 md:mb-12 text-muted-foreground">
          Você Está Cansado Disso?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-5xl mx-auto mb-8 md:mb-12">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="bg-destructive/10 border-2 md:border-4 border-destructive/50 p-3 md:p-6 pixel-text-shadow"
            >
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-destructive text-sm md:text-lg">✖</span>
                <p className="text-foreground text-[10px] md:text-xs leading-relaxed">{pain}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4 md:space-y-6 max-w-2xl mx-auto">
          <div className="bg-card/50 border-2 md:border-4 border-border p-4 md:p-8">
            <p className="text-muted-foreground text-[10px] md:text-xs mb-2 md:mb-4">
              ▸ MENSAGEM DO SISTEMA ◂
            </p>
            <p className="text-sm md:text-lg leading-relaxed">
              <span className="text-destructive">Não existe gente feia.</span>
              <br />
              <span className="text-destructive">
                Existe gente que não sabe conversar.
              </span>
            </p>
          </div>
          
          <Button
            variant="game"
            size="default"
            className="text-[10px] md:text-xs h-10 md:h-12 px-4 md:px-8"
            onClick={() => window.location.href = 'https://xaveco.online/'}
          >
            ★ A Solução Que Muda Tudo
          </Button>
        </div>
      </div>
    </section>
  );
});

PainSection.displayName = 'PainSection';
