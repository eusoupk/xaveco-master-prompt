import { forwardRef } from 'react';

interface SocialProofSectionProps { onInView?: () => void; }

const testimonials = [
  { rating: 5, quote: '"Com o Xaveco, consegui chamar a menina que eu queria. Hoje a gente namora."', author: "Lucas M.",   age: "24 anos", badge: "Namora há 4 meses" },
  { rating: 5, quote: '"Testei pra puxar papo com um cara interessante. Funcionou DEMAIS."',           author: "Mariana S.", age: "27 anos", badge: "1º encontro em 3 dias" },
  { rating: 5, quote: '"Em 2 semanas, 3 meninas me chamaram pra sair. A diferença é ABSURDA."',        author: "Rafael P.",  age: "29 anos", badge: "3 encontros" },
];

export const SocialProofSection = forwardRef<HTMLElement, SocialProofSectionProps>((_, ref) => {
  return (
    <section ref={ref} className="py-16 md:py-24 relative z-10 px-5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center font-black italic text-3xl md:text-4xl tracking-tight mb-3">
          <span className="text-[hsl(var(--pixel-gold))] drop-shadow-[0_0_20px_hsl(var(--pixel-gold)/0.5)]">⭐ HALL DA FAMA ⭐</span>
        </h2>
        <p className="text-center text-white/60 text-sm md:text-base mb-12 md:mb-16">
          Jogadores que zeraram o jogo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-black/40 rounded-3xl translate-y-1.5" />
              <div className="relative toy-card rounded-3xl p-6 hover:-translate-y-1 transition-transform duration-300 ease-out overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[hsl(var(--pixel-gold))]/10 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <span key={k} className="text-[hsl(var(--pixel-gold))] text-xl drop-shadow-[0_0_8px_hsl(var(--pixel-gold)/0.6)]">★</span>
                    ))}
                  </div>
                  <div className="toy-glass rounded-2xl p-4 mb-5">
                    <p className="text-white/90 text-sm italic leading-relaxed">{t.quote}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-primary font-black text-base">{t.author}</p>
                    <p className="text-white/50 text-xs">{t.age}</p>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--pixel-green))]/15 border border-[hsl(var(--pixel-green))]/30 text-[hsl(var(--pixel-green))] px-3 py-1 text-[11px] font-bold">
                      ✓ {t.badge}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
SocialProofSection.displayName = 'SocialProofSection';
