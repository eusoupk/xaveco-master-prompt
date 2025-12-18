import { soundGenerator } from '@/hooks/useSound';

interface StickyButtonProps {
  visible: boolean;
}

export const StickyButton = ({ visible }: StickyButtonProps) => {
  const handleClick = () => {
    soundGenerator.playStart();
    window.location.href = 'https://xaveco.online/';
  };

  const handleHover = () => {
    soundGenerator.playHover();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleHover}
      className={`fixed left-1/2 -translate-x-1/2 bg-pixel-green text-background px-4 md:px-8 py-3 md:py-4 font-pixel text-[10px] md:text-xs border-2 md:border-4 border-b-4 md:border-b-8 border-pixel-green-dark shadow-[0_0_30px_hsl(var(--pixel-green)/0.5)] z-40 transition-all duration-300 hover:border-b-2 md:hover:border-b-4 hover:translate-y-1 uppercase ${
        visible ? 'bottom-4 md:bottom-6' : '-bottom-24'
      }`}
    >
      ▶ ATIVAR – R$ 19,90/SEM
    </button>
  );
};
