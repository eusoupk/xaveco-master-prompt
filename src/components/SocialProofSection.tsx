import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Mandei a mensagem que o app sugeriu. Ela respondeu na hora.",
    rating: 5,
  },
  {
    text: "Parei de ser o plano B.",
    rating: 5,
  },
  {
    text: "Funciona MESMO.",
    rating: 5,
  },
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Nossos Usuários Dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Resultados reais de homens que tomaram controle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm space-y-4"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg font-medium leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
