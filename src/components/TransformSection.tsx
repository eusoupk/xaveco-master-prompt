import { Button } from "@/components/ui/button";

const phases = [
  {
    phase: "FASE 1",
    icon: "📝",
    title: "Descreva a Situação",
    description: "Conte sobre ela e o contexto da conversa",
  },
  {
    phase: "FASE 2",
    icon: "⚡",
    title: "Xaveco Gera as Respostas",
    description: "IA cria mensagens perfeitas pra você",
  },
  {
    phase: "FASE 3",
    icon: "🎯",
    title: "Escolha Seu Estilo",
    description: "Selecione o tom que combina com você",
  },
  {
    phase: "BOSS FINAL",
    icon: "❤️",
    title: "Use na Vida Real",
    description: "Manda a mensagem e conquista de verdade",
  },
];

const powerUps = [
  { icon: "❤️", stat: "+99", label: "Confiança" },
  { icon: "🔥", stat: "+85", label: "Atitude" },
  { icon: "⚡", stat: "+70", label: "Velocidade" },
  { icon: "💬", stat: "+95", label: "Criatividade" },
  { icon: "🧠", stat: "+80", label: "Clareza" },
  { icon: "🎯", stat: "+90", label: "Precisão" },
];

export const TransformSection = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="inline-block bg-pixel-green/20 border-4 border-pixel-green text-pixel-green px-6 py-2 text-xs mb-8">
            ★ NOVO JOGO DESBLOQUEADO ★
          </span>
        </div>

        <h2 className="text-center mb-4">
          Como Funciona o{" "}
          <span className="text-primary">XAVECO</span>
        </h2>

        <p className="text-center text-xs text-muted-foreground max-w-2xl mx-auto mb-16">
          O aplicativo secreto que cria mensagens tão perfeitas que ela{" "}
          <span className="text-foreground">NÃO CONSEGUE ignorar</span>.
        </p>

        {/* Game Phases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-card border-4 border-border p-6 hover:border-primary transition-colors group"
            >
              <div className="text-pixel-gold text-xs mb-4 pixel-text-shadow">
                🕹️ {phase.phase}
              </div>
              <div className="text-4xl mb-4 group-hover:animate-pixel-bounce">
                {phase.icon}
              </div>
              <h3 className="text-sm mb-3 text-primary">{phase.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Power-ups Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-sm mb-8 text-pixel-gold">
            ⬆ POWER-UPS DESBLOQUEADOS ⬆
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {powerUps.map((powerUp, index) => (
              <div
                key={index}
                className="bg-secondary/50 border-4 border-secondary p-4 flex items-center gap-4 hover:border-pixel-green transition-colors"
              >
                <span className="text-2xl">{powerUp.icon}</span>
                <div>
                  <div className="text-pixel-green text-sm">{powerUp.stat}</div>
                  <div className="text-xs text-muted-foreground">{powerUp.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
