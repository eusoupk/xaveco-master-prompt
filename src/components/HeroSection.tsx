import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary font-semibold text-sm backdrop-blur-sm">
              🔥 Lançamento Oficial
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Chega de ser{" "}
            <span className="text-primary drop-shadow-[0_0_30px_hsl(var(--orange-glow)/0.5)]">
              ignorado.
            </span>
            <br />
            Agora é você quem escolhe{" "}
            <span className="text-primary drop-shadow-[0_0_30px_hsl(var(--orange-glow)/0.5)]">
              quem responde.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O Xaveco cria mensagens irresistíveis por você.{" "}
            <span className="text-foreground font-semibold">
              Torne-se o cara que ela NÃO consegue deixar no vácuo.
            </span>
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
            >
              Desbloquear Xaveco – R$ 19,90 por semana
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              7 segundos para começar a usar
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
