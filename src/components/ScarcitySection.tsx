import { AlertCircle } from "lucide-react";

export const ScarcitySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-primary/10 border-2 border-primary/50 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="p-3 rounded-full bg-primary/20 border border-primary/30 flex-shrink-0">
                <AlertCircle className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Lançamento oficial até 31 de dezembro
                </h3>
                <p className="text-lg text-muted-foreground">
                  Preço fixado somente para os primeiros usuários
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
