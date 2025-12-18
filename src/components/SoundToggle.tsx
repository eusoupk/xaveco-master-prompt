import { useState } from 'react';
import { soundGenerator } from '@/hooks/useSound';

export const SoundToggle = () => {
  const [enabled, setEnabled] = useState(true);

  const toggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    soundGenerator.setEnabled(newState);
    if (newState) {
      soundGenerator.playClick();
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 bg-card border-4 border-border p-3 hover:border-primary transition-colors group"
      aria-label={enabled ? 'Desativar som' : 'Ativar som'}
    >
      <span className="text-xl group-hover:animate-pixel-bounce inline-block">
        {enabled ? '🔊' : '🔇'}
      </span>
    </button>
  );
};
