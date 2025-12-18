const testimonials = [
  {
    rating: 5,
    quote:
      '"Eu era PÉSSIMO em conversar. Travava, ficava nervoso. Com o Xaveco, consegui chamar a menina que eu queria há 2 anos. Hoje a gente namora."',
    author: "Lucas M.",
    age: "24 anos",
    badge: "Namora há 4 meses",
  },
  {
    rating: 5,
    quote:
      '"Decidi testar o Xaveco pra puxar papo com um cara que eu achava interessante. Funcionou DEMAIS. Ele ficou impressionado com minhas mensagens."',
    author: "Mariana S.",
    age: "27 anos",
    badge: "1º encontro em 3 dias",
  },
  {
    rating: 5,
    quote:
      '"Fiquei 6 meses sendo ignorado. Mudei minha forma de conversar. Em 2 semanas, 3 meninas me chamaram pra sair. A diferença é ABSURDA."',
    author: "Rafael P.",
    age: "29 anos",
    badge: "3 encontros em 2 semanas",
  },
];

export const SocialProofSection = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4">
          ⭐ HALL DA FAMA ⭐
        </h2>
        <p className="text-center text-xs text-muted-foreground mb-16">
          Jogadores que zeraram o jogo da conquista
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border-4 border-border p-6 hover:border-pixel-gold transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-pixel-gold text-lg">★</span>
                ))}
              </div>

              {/* Message box style */}
              <div className="bg-secondary/50 border-2 border-secondary p-4 mb-6">
                <p className="text-xs text-foreground italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-primary">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.age}
                </p>
                <div className="inline-block bg-pixel-green/20 border-2 border-pixel-green text-pixel-green px-3 py-1 text-xs">
                  ✓ {testimonial.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
