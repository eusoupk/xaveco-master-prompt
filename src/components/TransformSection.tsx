import { ArrowRight } from "lucide-react";

const transformations = [
  { from: "Do tímido", to: "ao perigoso" },
  { from: "Do ignorado", to: "ao desejado" },
  { from: "Do vácuo", to: "ao: 'nossa, que papo gostoso 💋'" },
];

export const TransformSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-black">
            A Transformação que{" "}
            <span className="text-primary">Você Precisa</span>
          </h2>

          <div className="space-y-8">
            {transformations.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 md:gap-8 p-6 rounded-2xl bg-card/30 border border-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group"
              >
                <span className="text-xl md:text-2xl font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.from}
                </span>
                
                <ArrowRight className="w-8 h-8 text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
                
                <span className="text-xl md:text-2xl font-bold text-primary">
                  {item.to}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
