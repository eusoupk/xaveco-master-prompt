import { soundGenerator } from '@/hooks/useSound';
import { goToCheckout } from '@/lib/links';

interface StickyButtonProps { visible: boolean; }

export const StickyButton = ({ visible }: StickyButtonProps) => {
  const handleClick = () => { soundGenerator.playStart(); goToCheckout(); };
  const handleHover = () => soundGenerator.playHover();
  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleHover}
      className={`fixed left-1/2 -translate-x-1/2 z-40 px-7 py-4 rounded-2xl font-black text-sm uppercase tracking-tight bg-gradient-to-b from-[hsl(var(--pixel-green))] to-[hsl(151_100%_38%)] text-[hsl(var(--background))] border-b-[6px] border-[hsl(var(--pixel-green-dark))] shadow-[0_18px_40px_-10px_hsl(var(--pixel-green)/0.55),inset_0_2px_0_rgba(255,255,255,0.5)] transition-all duration-300 ease-out hover:-translate-y-[1px] active:translate-y-1 active:border-b-2 ${
        visible ? 'bottom-5' : '-bottom-28'
      }`}
    >
      ▶ ATIVAR — R$ 59,90/MÊS
    </button>
  );
};
