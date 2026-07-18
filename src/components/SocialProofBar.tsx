import { useState, useEffect } from 'react';

const COMMENTS = [
  { icon: '💬', user: '@lucas_m',    text: 'deu certo 😳' },
  { icon: '❤️', user: '@mari_santos', text: 'vou sair com ela hoje' },
  { icon: '💬', user: '@pedro_h',    text: 'parece mentira, mas funciona' },
  { icon: '❤️', user: '@gabis_22',   text: 'nunca pensei que ia destravar assim' },
  { icon: '💬', user: '@rafa_dev',   text: 'usei ontem, já ajudou' },
  { icon: '❤️', user: '@ana_clara',  text: 'me salvou numa conversa hoje' },
  { icon: '💬', user: '@thiag0_',    text: 'isso é real mesmo' },
  { icon: '❤️', user: '@ju_ferreira', text: 'consegui o número dela' },
];

export const SocialProofBar = () => {
  const [i, setI] = useState(0);
  const [vis, setVis] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setVis(false);
      setTimeout(() => { setI((p) => (p + 1) % COMMENTS.length); setVis(true); }, 260);
    }, 4000);
    return () => clearInterval(t);
  }, []);
  const c = COMMENTS[i];
  return (
    <div className="flex justify-center w-full px-2">
      <div
        className={`toy-glass rounded-full px-4 py-2 flex items-center gap-2 text-xs shadow-xl transition-all duration-300 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}
      >
        <span className="text-sm">{c.icon}</span>
        <span className="text-primary font-bold">{c.user}</span>
        <span className="text-white/50 hidden sm:inline">disse:</span>
        <span className="italic text-white/85 truncate max-w-[180px] sm:max-w-none">&quot;{c.text}&quot;</span>
      </div>
    </div>
  );
};
