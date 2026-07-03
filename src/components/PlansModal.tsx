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
    emoji: '🟢',
    name: 'SEMANAL',
    price: 'R$ 19,90',
    priceSuffix: '/semana',
    description: 'Ideal para conhecer o app. Renovação automática.',
    cta: '▶ COMEÇAR AGORA',
    url: 'https://pay.hotmart.com/V106597454H?off=lkdbuk3f',
  },
  {
    id: 'monthly',
    emoji: '⭐',
    name: 'MENSAL',
    price: 'R$ 49,90',
    priceSuffix: '/mês',
    badge: 'MAIS ESCOLHIDO',
    description: 'Renovação automática mensal.',
    cta: '▶ QUERO ESSE PLANO',
    url: 'https://pay.hotmart.com/V106597454H?off=agei56h5',
    highlight: true,
  },
  {
    id: 'quarterly',
    emoji: '🔥',
    name: 'TRIMESTRAL',
    price: 'R$ 119,90',
    priceSuffix: '/90 dias',
    badge: 'MELHOR CUSTO-BENEFÍCIO',
    description: 'Renovação automática a cada 90 dias.',
    cta: '▶ ECONOMIZAR',
    url: 'https://pay.hotmart.com/V106597454H?off=vgvrkbww',
  },
  {
    id: 'yearly',
    emoji: '👑',
    name: 'ANUAL',
    price: 'R$ 467,90',
    priceSuffix: '/ano',
    badge: 'MELHOR OFERTA',
    description: 'Maior economia. Renovação automática anual.',
    cta: '▶ QUERO ECONOMIZAR MAIS',
    url: 'https://pay.hotmart.com/V106597454H?off=y16ax2gw',
  },
];

export const PlansModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const mountedAt = useRef<number>(Date.now());
  const MIN_DELAY_MS = 10_000;

  const open = useCallback(() => {
    const elapsed = Date.now() - mountedAt.current;
    if (elapsed < MIN_DELAY_MS) {
      // Antes de 10s, apenas rola suavemente até a hero em vez de abrir o modal
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    soundGenerator.playPopup?.();
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    soundGenerator.playClose?.();
    setVisible(false);
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
          <div className="relative w-full max-w-5xl my-auto bg-card border-2 md:border-4 border-primary shadow-[0_0_60px_hsl(var(--primary)/0.4)] animate-scale-in p-4 md:p-8">
            <button
              onClick={close}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-foreground hover:text-primary transition-colors p-1"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="text-center mb-4 md:mb-8 pt-4 md:pt-2">
              <p className="text-[10px] md:text-xs text-pixel-gold mb-2">▸ ESCOLHA SEU PLANO ◂</p>
              <h3 className="text-sm md:text-xl text-primary pixel-text-shadow mb-1 md:mb-2">
                DESBLOQUEIE O XAVECO
              </h3>
              <p className="text-[8px] md:text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                Todos os planos oferecem acesso completo. Escolha a opção ideal pra você.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex flex-col p-3 md:p-4 border-2 md:border-4 transition-all duration-200 hover:-translate-y-1 ${
                    plan.highlight
                      ? 'border-pixel-green bg-pixel-green/5 shadow-[0_0_25px_hsl(var(--pixel-green)/0.35)]'
                      : 'border-border bg-background/40 hover:border-primary'
                  }`}
                >
                  {plan.badge && (
                    <div
                      className={`absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 md:px-3 md:py-1 text-[7px] md:text-[9px] border-2 ${
                        plan.highlight
                          ? 'bg-pixel-green text-background border-pixel-green-dark'
                          : 'bg-pixel-gold text-background border-pixel-gold/70'
                      }`}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div className="text-center mb-2 md:mb-3 pt-2">
                    <div className="text-2xl md:text-3xl mb-1">{plan.emoji}</div>
                    <p className="text-[10px] md:text-xs text-foreground">{plan.name}</p>
                  </div>

                  <div className="text-center mb-2 md:mb-3">
                    <p className={`text-sm md:text-lg pixel-text-shadow ${plan.highlight ? 'text-pixel-green' : 'text-pixel-gold'}`}>
                      {plan.price}
                    </p>
                    <p className="text-[7px] md:text-[9px] text-muted-foreground">{plan.priceSuffix}</p>
                  </div>

                  <p className="text-[8px] md:text-[10px] text-muted-foreground text-center leading-relaxed mb-3 md:mb-4 flex-1">
                    {plan.description}
                  </p>

                  <button
                    onClick={() => handlePlanClick(plan)}
                    onMouseEnter={() => soundGenerator.playHover?.()}
                    className={`w-full font-pixel uppercase text-[8px] md:text-[10px] py-2 md:py-3 px-2 border-2 md:border-4 border-b-4 md:border-b-8 transition-all duration-150 hover:border-b-2 md:hover:border-b-4 hover:translate-y-0.5 active:translate-y-1 ${
                      plan.highlight
                        ? 'bg-pixel-green text-background border-pixel-green-dark'
                        : 'bg-primary text-primary-foreground border-primary/70'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>

            <p className="text-center text-[7px] md:text-[9px] text-muted-foreground mt-4 md:mt-6">
              ✓ Checkout seguro Hotmart · ✓ Pix, Cartão e Boleto · ✓ Cancele quando quiser
            </p>
          </div>
        </div>
      )}
    </PlansModalContext.Provider>
  );
};