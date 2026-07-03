import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { soundGenerator } from '@/hooks/useSound';
import { usePlansModal } from '@/components/PlansModal';

interface PopupProps {
  visible: boolean;
  onClose: () => void;
}

export const Popup = ({ visible, onClose }: PopupProps) => {
  const { open: openPlans } = usePlansModal();
  useEffect(() => {
    if (visible) {
      soundGenerator.playPopup();
    }
  }, [visible]);

  if (!visible) return null;

  const handleCtaClick = () => {
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      soundGenerator.playClose();
      onClose();
    }
  };

  const handleClose = () => {
    soundGenerator.playClose();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-card border-4 border-primary p-8 max-w-md w-full shadow-[0_0_40px_hsl(var(--primary)/0.3)] animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
          aria-label="Fechar popup"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex justify-center mb-4">
          <div className="text-4xl animate-pixel-bounce">⏰</div>
        </div>

        <h3 className="text-lg text-primary text-center mb-4 pixel-text-shadow">
          🚨 ALGUÉM PODE ESTAR CONVERSANDO COM ELA AGORA...
        </h3>

        <div className="bg-secondary/50 border-2 border-secondary p-4 mb-6 space-y-3">
          <p className="text-xs text-foreground text-center leading-relaxed">
            Não perca tempo pensando na mensagem perfeita.
          </p>
          <p className="text-xs text-foreground text-center leading-relaxed">
            Descubra como a <span className="text-primary">Inteligência Artificial do Xaveco</span> cria mensagens personalizadas pra aumentar suas chances de conseguir uma resposta.
          </p>
        </div>

        <Button
          onClick={handleCtaClick}
          variant="hero"
          size="lg"
          className="w-full"
        >
          ▶ DESCOBRIR AGORA
        </Button>
      </div>
    </div>
  );
};
