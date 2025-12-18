import { useState, useEffect } from 'react';

const COMMENTS = [
  { icon: '💬', user: '@lucas_m', text: 'deu certo 😳' },
  { icon: '❤️', user: '@mari_santos', text: 'vou sair com ela hoje' },
  { icon: '💬', user: '@pedro_h', text: 'parece mentira, mas funciona' },
  { icon: '❤️', user: '@gabis_22', text: 'nunca pensei que ia destravar assim' },
  { icon: '💬', user: '@rafa_dev', text: 'usei ontem, já ajudou' },
  { icon: '❤️', user: '@ana_clara', text: 'me salvou numa conversa hoje' },
  { icon: '💬', user: '@thiag0_', text: 'isso é real mesmo' },
  { icon: '❤️', user: '@ju_ferreira', text: 'consegui o número dela' },
];

export const SocialProofBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);
      
      // After fade out, change comment and fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % COMMENTS.length);
        setIsVisible(true);
      }, 300);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const comment = COMMENTS[currentIndex];

  return (
    <div className="flex justify-center mt-8">
      <div 
        className={`
          bg-background/60 border-2 border-border/50 px-4 py-2
          transition-all duration-300 ease-out
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
        `}
      >
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          <span className="text-sm">{comment.icon}</span>
          <span className="text-primary">{comment.user}</span>
          <span className="text-muted-foreground/60">disse:</span>
          <span className="italic text-foreground/80">&quot;{comment.text}&quot;</span>
        </p>
      </div>
    </div>
  );
};
