import { MessageCircleX, Clock, UserX } from "lucide-react";

const painPoints = [
  {
    icon: MessageCircleX,
    text: "Você manda textão e recebe 'kk'?",
  },
  {
    icon: UserX,
    text: "Cansado de perder tempo com quem não te nota?",
  },
  {
    icon: Clock,
    text: "Enquanto você pensa no que mandar… outro cara já chamou ela.",
  },
];

export const PainSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Reconhece essa situação?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-destructive/20 border border-destructive/30 group-hover:bg-destructive/30 transition-colors">
                      <Icon className="w-8 h-8 text-destructive" />
                    </div>
                    <p className="text-lg font-semibold leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
