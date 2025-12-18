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
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % COMMENTS.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const comment = COMMENTS[currentIndex];

  return (
    <div className="flex justify-center mt-4 md:mt-8 w-full px-2">
      <div 
        className={`
          bg-background/60 border border-border/50 md:border-2 px-3 md:px-4 py-1.5 md:py-2
          transition-all duration-300 ease-out max-w-full
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
        `}
      >
        <p className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1 md:gap-2 flex-wrap justify-center">
          <span className="text-xs md:text-sm">{comment.icon}</span>
          <span className="text-primary">{comment.user}</span>
          <span className="text-muted-foreground/60 hidden sm:inline">disse:</span>
          <span className="italic text-foreground/80 truncate max-w-[150px] sm:max-w-none">&quot;{comment.text}&quot;</span>
        </p>
      </div>
    </div>
  );
};
