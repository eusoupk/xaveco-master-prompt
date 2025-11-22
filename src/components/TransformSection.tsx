import { Button } from "@/components/ui/button";

const features = [
  {
    icon: "💬",
    title: "Mensagens que Fazem Ela RESPONDER",
    description:
      'Esqueça "oi, tudo bem?". Tenha aberturas que geram curiosidade instantânea.',
  },
  {
    icon: "❤️",
    title: "Crie Conexão Emocional REAL",
    description:
      "Conversas que fazem ela sentir algo especial. Não é manipulação, é inteligência emocional.",
  },
  {
    icon: "⚡",
    title: "Escape da Friendzone",
    description:
      "Mensagens estratégicas que despertam atração sem parecer forçado ou desesperado.",
  },
  {
    icon: "✨",
    title: "Pareça Confiante (Mesmo Tremendo)",
    description:
      "Tenha as palavras certas mesmo quando a ansiedade bater. Confiança é questão de preparação.",
  },
  {
    icon: "📈",
    title: 'Se Destaque dos "Outros Caras"',
    description:
      "Enquanto eles mandam clichês, você manda mensagens que ela vai querer mostrar pras amigas.",
  },
  {
    icon: "🔐",
    title: "Scripts Completos para Encontro",
    description:
      "Da primeira mensagem até marcar o encontro. Cada etapa planejada para o sucesso.",
  },
];

export const TransformSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <Button
            variant="outline"
            className="bg-green-600/10 border-green-600/30 text-green-400 hover:bg-green-600/20 mb-8"
          >
            ✨ A Solução Que Muda Tudo
          </Button>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          Apresentando o{" "}
          <span className="bg-gradient-to-r from-primary via-[#FF4081] to-[#FF1744] bg-clip-text text-transparent">
            Xaveco
          </span>
        </h2>

        <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
          O aplicativo secreto que cria mensagens tão perfeitas, tão naturais e
          tão interessantes que a pessoa{" "}
          <strong className="text-foreground">simplesmente NÃO CONSEGUE ignorar</strong>.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[#FF1744] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
