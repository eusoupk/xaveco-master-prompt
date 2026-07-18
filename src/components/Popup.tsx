import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { soundGenerator } from '@/hooks/useSound';

interface PopupProps { visible: boolean; onClose: () => void; }

export const Popup = ({ visible, onClose }: PopupProps) => {
  useEffect(() => { if (visible) soundGenerator.playPopup(); }, [visible]);
  if (!visible) return null;

  const handleCtaClick = () => onClose();
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) { soundGenerator.playClose(); onClose(); }
  };
  const handleClose = () => { soundGenerator.playClose(); onClose(); };

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-5 animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="relative toy-card rounded-[28px] p-7 md:p-9 max-w-md w-full animate-scale-in neon-pink-glow border-primary/40">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full toy-glass hover:border-primary flex items-center justify-center transition-colors"
          aria-label="Fechar popup"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive to-[hsl(0_100%_45%)] flex items-center justify-center text-3xl shadow-[0_15px_30px_-10px_hsl(var(--destructive)/0.6),inset_0_2px_0_rgba(255,255,255,0.3)] animate-float-soft">
            ⏰
          </div>
        </div>

        <h3 className="font-black italic text-primary text-center text-lg md:text-xl leading-tight mb-4 drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
          🚨 ALGUÉM PODE ESTAR CONVERSANDO COM ELA AGORA...
        </h3>

        <div className="toy-glass rounded-2xl p-4 md:p-5 mb-6 space-y-3">
          <p className="text-sm text-white/85 text-center leading-relaxed">
            Não perca tempo pensando na mensagem perfeita.
          </p>
          <p className="text-sm text-white/85 text-center leading-relaxed">
            Descubra como a <span className="text-primary font-bold">Inteligência Artificial do Xaveco</span> cria mensagens personalizadas pra aumentar suas chances de conseguir uma resposta.
          </p>
        </div>

        <Button onClick={handleCtaClick} variant="hero" size="lg" className="w-full">
          ▶ DESCOBRIR AGORA
        </Button>
      </div>
    </div>
  );
};
