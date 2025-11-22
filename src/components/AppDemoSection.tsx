import { Copy, Zap, MessageSquare } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const features = [
  {
    icon: MessageSquare,
    title: "O Xaveco responde por você",
  },
  {
    icon: Copy,
    title: "Copiar & enviar em 1 toque",
  },
  {
    icon: Zap,
    title: "Mensagens prontas pra QUALQUER situação",
  },
];

export const AppDemoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Como Funciona o{" "}
              <span className="text-primary">Xaveco</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Simples, rápido e eficaz
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* App Mockup */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-500 rounded-full" />
              <img
                src={appMockup}
                alt="Xaveco App Interface"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:translate-x-2 backdrop-blur-sm"
                  >
                    <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
