import { useState } from 'react';
import { soundGenerator } from '@/hooks/useSound';

export const SoundToggle = () => {
  const [enabled, setEnabled] = useState(true);
  const toggle = () => {
    const s = !enabled;
    setEnabled(s);
    soundGenerator.setEnabled(s);
    if (s) soundGenerator.playClick();
  };
  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 w-11 h-11 rounded-2xl toy-glass hover:border-primary/60 transition-all flex items-center justify-center shadow-lg hover:scale-105 active:scale-95"
      aria-label={enabled ? 'Desativar som' : 'Ativar som'}
    >
      <span className="text-lg">{enabled ? '🔊' : '🔇'}</span>
    </button>
  );
};
