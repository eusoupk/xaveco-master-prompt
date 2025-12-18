import { forwardRef } from 'react';

interface SocialProofSectionProps {
  onInView?: () => void;
}

const testimonials = [
  {
    rating: 5,
    quote: '"Com o Xaveco, consegui chamar a menina que eu queria. Hoje a gente namora."',
    author: "Lucas M.",
    age: "24 anos",
    badge: "Namora há 4 meses",
  },
  {
    rating: 5,
    quote: '"Testei pra puxar papo com um cara interessante. Funcionou DEMAIS."',
    author: "Mariana S.",
    age: "27 anos",
    badge: "1º encontro em 3 dias",
  },
  {
    rating: 5,
    quote: '"Em 2 semanas, 3 meninas me chamaram pra sair. A diferença é ABSURDA."',
    author: "Rafael P.",
    age: "29 anos",
    badge: "3 encontros",
  },
];

export const SocialProofSection = forwardRef<HTMLElement, SocialProofSectionProps>((_, ref) => {
  return (
    <section ref={ref} className="py-12 md:py-24 relative z-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-center mb-2 md:mb-4 text-lg md:text-2xl">
          ⭐ HALL DA FAMA ⭐
        </h2>
        <p className="text-center text-[10px] md:text-xs text-muted-foreground mb-8 md:mb-16">
          Jogadores que zeraram o jogo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border-2 md:border-4 border-border p-4 md:p-6 hover:border-pixel-gold transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-pixel-gold text-sm md:text-lg">★</span>
                ))}
              </div>

              {/* Message box style */}
              <div className="bg-secondary/50 border border-secondary md:border-2 p-2 md:p-4 mb-3 md:mb-6">
                <p className="text-[10px] md:text-xs text-foreground italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              <div className="space-y-1 md:space-y-2">
                <p className="text-xs md:text-sm text-primary">{testimonial.author}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">
                  {testimonial.age}
                </p>
                <div className="inline-block bg-pixel-green/20 border border-pixel-green md:border-2 text-pixel-green px-2 md:px-3 py-0.5 md:py-1 text-[8px] md:text-xs">
                  ✓ {testimonial.badge}
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
