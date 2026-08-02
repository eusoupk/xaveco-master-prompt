import { forwardRef } from 'react';
import { APP_LOGIN_URL } from '@/lib/links';

interface FinalCTASectionProps { onInView?: () => void; }

export const FinalCTASection = forwardRef<HTMLElement, FinalCTASectionProps>((_, ref) => {
  return (
    <section ref={ref} className="py-16 md:py-24 relative z-10 px-5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-10 md:space-y-14">
          <div className="relative">
            <div className="absolute inset-0 bg-black/40 rounded-3xl translate-y-1.5" />
            <div className="relative toy-card rounded-3xl p-6 md:p-10">
              <p className="text-[hsl(var(--pixel-gold))] text-xs font-black uppercase tracking-widest mb-4">
                ▸ Mensagem Final ◂
              </p>
              <p className="text-white/70 italic text-base md:text-lg mb-4">
                &quot;As melhores conversas começam com uma única mensagem.&quot;
              </p>
              <p className="text-primary font-black italic text-2xl md:text-3xl drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                O Xaveco escreve por você.
              </p>
            </div>
          </div>

          {/* Pós-compra — 3 passos */}
          <div className="relative text-left">
            <div className="absolute inset-0 bg-black/40 rounded-3xl translate-y-1.5" />
            <div className="relative toy-card rounded-3xl p-6 md:p-10 space-y-5">
              <p className="text-[hsl(var(--pixel-gold))] text-xs font-black uppercase tracking-widest text-center">
                ▸ Já Comprou? Libere Seu Acesso ◂
              </p>

              <div className="flex items-start gap-3">
                <span className="text-lg">1️⃣</span>
                <p className="text-sm text-white/80 leading-relaxed">
                  <span className="font-black text-white">Compra aprovada na Hotmart.</span> A liberação é automática — sem WhatsApp, sem espera.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">2️⃣</span>
                <p className="text-sm text-white/80 leading-relaxed">
                  Acesse <span className="font-black text-primary">desenrola-comigo.lovable.app/login</span> e digite o <span className="font-black text-white">MESMO e-mail usado na compra</span>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">3️⃣</span>
                <p className="text-sm text-white/80 leading-relaxed">
                  Clique no <span className="font-black text-[hsl(var(--pixel-gold))]">link mágico</span> que chega no e-mail e o acesso premium é liberado na hora.
                </p>
              </div>

              <a
                href={APP_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full font-black uppercase text-[11px] tracking-tight py-3 px-3 rounded-2xl border-b-[6px] transition-all duration-200 ease-out hover:-translate-y-[1px] active:translate-y-1 active:border-b-2 bg-gradient-to-b from-[hsl(var(--pixel-green))] to-[hsl(151_100%_38%)] text-background border-[hsl(var(--pixel-green-dark))] shadow-[0_10px_25px_-8px_hsl(var(--pixel-green)/0.5),inset_0_2px_0_rgba(255,255,255,0.4)]"
              >
                ▶ Já comprei · Entrar no app
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-white/50 text-xs mb-3">© 2024 Xaveco. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-4 text-xs">
              <a href="#" className="text-white/60 hover:text-primary underline transition-colors">Termos</a>
              <span className="text-white/40">e</span>
              <a href="#" className="text-white/60 hover:text-primary underline transition-colors">Privacidade</a>
            </div>
            <p className="mt-3 text-xs">
              <a href={APP_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary underline transition-colors">
                Já comprei / Entrar no app
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
FinalCTASection.displayName = 'FinalCTASection';
