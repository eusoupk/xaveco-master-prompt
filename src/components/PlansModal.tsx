import { createContext, useContext, useState, useCallback, useEffect, useRef, ReactNode } from 'react';
import { X } from 'lucide-react';
import { soundGenerator } from '@/hooks/useSound';

type PlansModalContextType = { open: () => void };
const PlansModalContext = createContext<PlansModalContextType>({ open: () => {} });

export const usePlansModal = () => useContext(PlansModalContext);

interface Plan {
  id: string;
  emoji: string;
  name: string;
  price: string;
  priceSuffix: string;
  badge?: string;
  description: string;
  cta: string;
  url: string;
  highlight?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'weekly',
    emoji: '💜',
    name: 'SEMANAL',
    price: 'R$ 19,90',
    priceSuffix: '/semana',
    description: '7 dias. Ideal para quem quer começar hoje.',
    cta: '▶ COMEÇAR AGORA',
    url: 'https://pay.hotmart.com/V106597454H?off=lkdbuk3f',
  },
  {
    id: 'monthly',
    emoji: '❤️',
    name: 'MENSAL',
    price: 'R$ 49,90',
    priceSuffix: '/mês',
    badge: '⭐ MAIS ESCOLHIDO',
    description: '30 dias. Melhor equilíbrio entre custo e benefício.',
    cta: '▶ ESCOLHER MENSAL',
    url: 'https://pay.hotmart.com/V106597454H?off=agei56h5',
    highlight: true,
  },
  {
    id: 'quarterly',
    emoji: '🔥',
    name: 'TRIMESTRAL',
    price: 'R$ 130,00',
    priceSuffix: '/90 dias',
    description: '90 dias. Mais tempo para utilizar todas as funções do aplicativo.',
    cta: '▶ QUERO 90 DIAS',
    url: 'https://pay.hotmart.com/V106597454H?off=vgvrkbww',
  },
  {
    id: 'yearly',
    emoji: '👑',
    name: 'ANUAL',
    price: 'R$ 467,90',
    priceSuffix: '/ano',
    badge: '💎 Melhor valor por dia',
    description: '1 Ano. Maior economia para quem deseja utilizar o Xaveco durante todo o ano.',
    cta: '▶ QUERO O ANUAL',
    url: 'https://pay.hotmart.com/V106597454H?off=y16ax2gw',
  },
];

export const PlansModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const dismissedRef = useRef(false);
  const AUTO_OPEN_MS = 10_000;
  const SESSION_KEY = 'xaveco_plans_modal_shown';

  const open = useCallback(() => {
    soundGenerator.playPopup?.();
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    dismissedRef.current = true;
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
    soundGenerator.playClose?.();
    setVisible(false);
  }, []);

  useEffect(() => {
    let alreadyShown = false;
    try { alreadyShown = sessionStorage.getItem(SESSION_KEY) === '1'; } catch {}
    if (alreadyShown) return;
    const t = setTimeout(() => {
      if (dismissedRef.current) return;
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
      soundGenerator.playPopup?.();
      setVisible(true);
    }, AUTO_OPEN_MS);
    return () => clearTimeout(t);
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close();
  };

  const handlePlanClick = (plan: Plan) => {
    soundGenerator.playStart?.();
    window.open(plan.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <PlansModalContext.Provider value={{ open }}>
      {children}
      {visible && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 bg-background/85 backdrop-blur-sm animate-fade-in overflow-y-auto"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label="Escolha seu plano"
        >
          <div className="relative w-full max-w-5xl my-auto toy-card rounded-[32px] border-primary/40 neon-pink-glow animate-scale-in p-5 md:p-8">
            <button
              onClick={close}
              className="absolute top-3 right-3 w-9 h-9 rounded-full toy-glass hover:border-primary flex items-center justify-center transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6 md:mb-8 pt-2">
              <p className="text-[11px] text-pixel-gold font-black uppercase tracking-widest mb-2">▸ Escolha Seu Plano ◂</p>
              <h3 className="text-2xl md:text-3xl font-black italic text-primary drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)] mb-2">
                DESBLOQUEIE O XAVECO
              </h3>
              <p className="text-xs md:text-sm text-white/60 max-w-md mx-auto leading-relaxed">
                Todos os planos oferecem acesso completo. Escolha a opção ideal pra você.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-3xl p-4 md:p-5 transition-all duration-300 ease-out hover:-translate-y-1 ${
                    plan.highlight
                      ? 'bg-gradient-to-b from-[hsl(var(--pixel-green))]/20 to-[hsl(var(--pixel-green))]/5 border border-[hsl(var(--pixel-green))]/40 neon-green-glow'
                      : 'toy-card hover:border-primary/50'
                  }`}
                >
                  {plan.badge && (
                    <div
                      className={`absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg ${
                        plan.highlight
                          ? 'bg-gradient-to-b from-[hsl(var(--pixel-green))] to-[hsl(151_100%_38%)] text-background'
                          : 'bg-gradient-to-b from-[hsl(var(--pixel-gold))] to-[hsl(45_100%_45%)] text-background'
                      }`}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div className="text-center mb-3 pt-3">
                    <div className="text-3xl md:text-4xl mb-2">{plan.emoji}</div>
                    <p className="text-xs md:text-sm font-black uppercase tracking-widest text-white/85">{plan.name}</p>
                  </div>

                  <div className="text-center mb-3">
                    <p className={`text-2xl md:text-3xl font-black italic ${plan.highlight ? 'text-[hsl(var(--pixel-green))]' : 'text-[hsl(var(--pixel-gold))]'}`}>
                      {plan.price}
                    </p>
                    <p className="text-[11px] text-white/50 font-medium">{plan.priceSuffix}</p>
                  </div>

                  <p className="text-xs text-white/65 text-center leading-relaxed mb-5 flex-1">
                    {plan.description}
                  </p>

                  <button
                    onClick={() => handlePlanClick(plan)}
                    onMouseEnter={() => soundGenerator.playHover?.()}
                    className={`w-full font-black uppercase text-[11px] tracking-tight py-3 px-3 rounded-2xl border-b-[6px] transition-all duration-200 ease-out hover:-translate-y-[1px] active:translate-y-1 active:border-b-2 ${
                      plan.highlight
                        ? 'bg-gradient-to-b from-[hsl(var(--pixel-green))] to-[hsl(151_100%_38%)] text-background border-[hsl(var(--pixel-green-dark))] shadow-[0_10px_25px_-8px_hsl(var(--pixel-green)/0.5),inset_0_2px_0_rgba(255,255,255,0.4)]'
                        : 'bg-gradient-to-b from-primary to-[hsl(280_100%_40%)] text-white border-[hsl(280_100%_28%)] shadow-[0_10px_25px_-8px_hsl(var(--primary)/0.5),inset_0_2px_0_rgba(255,255,255,0.3)]'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>

            <p className="text-center text-[11px] text-white/50 mt-6">
              ✓ Checkout seguro Hotmart · ✓ Pix, Cartão e Boleto · ✓ Cancele quando quiser
            </p>
          </div>
        </div>
      )}
    </PlansModalContext.Provider>
  );
};