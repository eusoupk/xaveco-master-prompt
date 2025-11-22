import { Star, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    rating: 5,
    quote:
      '"Eu era PÉSSIMO em conversar. Travava, ficava nervoso, mandava mensagem e me arrependia. Com o Xaveco, consegui chamar a menina que eu queria há 2 anos. Hoje a gente namora. Parece mentira, mas é real."',
    author: "Lucas M.",
    age: "24 anos",
    badge: "Namora há 4 meses",
  },
  {
    rating: 5,
    quote:
      '"Cansada de caras sem assunto. Decidi testar o Xaveco pra puxar papo com um cara que eu achava interessante mas não sabia como abordar. Funcionou DEMAIS. Ele ficou impressionado com minhas mensagens."',
    author: "Mariana S.",
    age: "27 anos",
    badge: "Primeiro encontro em 3 dias",
  },
  {
    rating: 5,
    quote:
      '"Fiquei 6 meses sendo ignorado. Mudei completamente minha forma de conversar com o Xaveco. Em 2 semanas, 3 meninas diferentes me chamaram pra sair. A diferença é ABSURDA."',
    author: "Rafael P.",
    age: "29 anos",
    badge: "3 encontros em 2 semanas",
  },
];

export const SocialProofSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          Pessoas Reais. Resultados Reais.
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-16">
          Eles estavam na mesma situação que você. Hoje, tudo mudou.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              <p className="text-foreground italic mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              <div className="space-y-2">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.age}
                </p>
                <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                  <Check className="w-3 h-3 mr-1" />
                  {testimonial.badge}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
