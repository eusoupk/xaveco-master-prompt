import { forwardRef } from 'react';
import { soundGenerator } from "@/hooks/useSound";

interface TransformSectionProps { onInView?: () => void; }

const phases = [
  { phase: "FASE 1", icon: "📝", title: "Descreva", description: "Conte o contexto" },
  { phase: "FASE 2", icon: "⚡", title: "IA Gera",  description: "Mensagens perfeitas" },
  { phase: "FASE 3", icon: "🎯", title: "Escolha",  description: "Selecione o tom" },
  { phase: "BOSS",   icon: "❤️", title: "Conquiste", description: "Use na vida real" },
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
  return (
    <section ref={ref} className="py-16 md:py-24 relative z-10 px-5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 toy-glass rounded-full px-4 py-1.5 text-[hsl(var(--pixel-green))] text-[11px] font-bold uppercase tracking-widest">
            ★ Novo Jogo ★
          </span>
        </div>

        <h2 className="text-center font-black italic text-3xl md:text-4xl tracking-tight mb-3">
          Como Funciona o <span className="text-primary drop-shadow-[0_0_20px_hsl(var(--primary)/0.6)]">XAVECO</span>
        </h2>
        <p className="text-center text-white/60 text-sm md:text-base max-w-xl mx-auto mb-12 md:mb-16">
          O app que cria mensagens que ela <span className="text-white font-bold">NÃO CONSEGUE ignorar</span>.
        </p>

        {/* Fases */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-14 md:mb-20">
          {phases.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => soundGenerator.playHover()}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 rounded-3xl translate-y-1.5" />
              <div className="relative toy-card rounded-3xl p-4 md:p-6 hover:-translate-y-1 transition-transform duration-300 ease-out overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-[hsl(var(--pixel-gold))] text-[10px] md:text-xs font-black uppercase tracking-widest mb-3">
                    🕹️ {p.phase}
                  </div>
                  <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform">{p.icon}</div>
                  <h3 className="text-primary text-base md:text-lg font-black mb-1">{p.title}</h3>
                  <p className="text-white/60 text-xs md:text-sm leading-snug">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Power-ups */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-[hsl(var(--pixel-gold))] text-xs md:text-sm font-black uppercase tracking-widest mb-6 md:mb-8">
            ⬆ Power-Ups ⬆
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {powerUps.map((pu, i) => (
              <div
                key={i}
                onMouseEnter={() => soundGenerator.playPowerUp()}
                className="toy-card rounded-2xl p-3 md:p-4 flex items-center gap-3 hover:border-[hsl(var(--pixel-green))]/50 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[hsl(var(--pixel-green))]/15 border border-[hsl(var(--pixel-green))]/30 flex items-center justify-center text-2xl">
                  {pu.icon}
                </div>
                <div>
                  <div className="text-[hsl(var(--pixel-green))] text-base md:text-lg font-black">{pu.stat}</div>
                  <div className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-wider">{pu.label}</div>
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
