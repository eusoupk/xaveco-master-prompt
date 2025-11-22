import { X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PopupProps {
  visible: boolean;
  onClose: () => void;
}

export const Popup = ({ visible, onClose }: PopupProps) => {
  if (!visible) return null;

  const handleCtaClick = () => {
    onClose();
    window.location.href = 'https://xaveco.online/';
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-gradient-to-br from-[#FF1744] to-[#FF4081] p-8 rounded-3xl max-w-md w-full shadow-2xl animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:scale-110 transition-transform"
          aria-label="Fechar popup"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <Clock className="w-8 h-8 text-white" />
          </div>
        </div>

        <h3 className="text-2xl font-black text-white text-center mb-3">
          ⚠️ ATENÇÃO!
        </h3>

        <p className="text-white text-center mb-6 leading-relaxed">
          Enquanto você lê isso,{' '}
          <strong className="underline decoration-wavy">
            alguém está mandando mensagem pra pessoa que você quer
          </strong>
          .<br />E provavelmente sabe exatamente o que falar.
        </p>

        <Button
          onClick={handleCtaClick}
          className="w-full bg-white text-[#FF1744] hover:bg-white/90 font-black text-lg py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Não Vou Perder Mais Tempo
        </Button>
      </div>
    </div>
  );
};
