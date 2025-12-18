import { forwardRef } from 'react';
import { soundGenerator } from "@/hooks/useSound";

interface TransformSectionProps {
  onInView?: () => void;
}

const phases = [
  {
    phase: "FASE 1",
    icon: "📝",
    title: "Descreva",
    description: "Conte o contexto",
  },
  {
    phase: "FASE 2",
    icon: "⚡",
    title: "IA Gera",
    description: "Mensagens perfeitas",
  },
  {
    phase: "FASE 3",
    icon: "🎯",
    title: "Escolha",
    description: "Selecione o tom",
  },
  {
    phase: "BOSS",
    icon: "❤️",
    title: "Conquiste",
    description: "Use na vida real",
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

export const TransformSection = forwardRef<HTMLElement, TransformSectionProps>((_, ref) => {
  const handlePowerUpHover = () => {
    soundGenerator.playPowerUp();
  };

  return (
    <section ref={ref} className="py-12 md:py-24 relative z-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block bg-pixel-green/20 border-2 md:border-4 border-pixel-green text-pixel-green px-4 md:px-6 py-1 md:py-2 text-[10px] md:text-xs mb-4 md:mb-8">
            ★ NOVO JOGO ★
          </span>
        </div>

        <h2 className="text-center mb-2 md:mb-4 text-lg md:text-2xl">
          Como Funciona o{" "}
          <span className="text-primary">XAVECO</span>
        </h2>

        <p className="text-center text-[10px] md:text-xs text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-16">
          O app que cria mensagens que ela{" "}
          <span className="text-foreground">NÃO CONSEGUE ignorar</span>.
        </p>

        {/* Game Phases */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-card border-2 md:border-4 border-border p-3 md:p-6 hover:border-primary transition-colors group cursor-pointer"
              onMouseEnter={() => soundGenerator.playHover()}
            >
              <div className="text-pixel-gold text-[8px] md:text-xs mb-2 md:mb-4 pixel-text-shadow">
                🕹️ {phase.phase}
              </div>
              <div className="text-2xl md:text-4xl mb-2 md:mb-4 group-hover:animate-pixel-bounce">
                {phase.icon}
              </div>
              <h3 className="text-[10px] md:text-sm mb-1 md:mb-3 text-primary">{phase.title}</h3>
              <p className="text-[8px] md:text-xs text-muted-foreground leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Power-ups Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-[10px] md:text-sm mb-4 md:mb-8 text-pixel-gold">
            ⬆ POWER-UPS ⬆
          </h3>
          
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {powerUps.map((powerUp, index) => (
              <div
                key={index}
                className="bg-secondary/50 border-2 md:border-4 border-secondary p-2 md:p-4 flex items-center gap-2 md:gap-4 hover:border-pixel-green transition-colors cursor-pointer"
                onMouseEnter={handlePowerUpHover}
              >
                <span className="text-lg md:text-2xl">{powerUp.icon}</span>
                <div>
                  <div className="text-pixel-green text-[10px] md:text-sm">{powerUp.stat}</div>
                  <div className="text-[8px] md:text-xs text-muted-foreground">{powerUp.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

TransformSection.displayName = 'TransformSection';
