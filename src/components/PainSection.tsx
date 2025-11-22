import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const painPoints = [
  'Mandar "oi, tudo bem?" e ser IGNORADO pela 47ª vez',
  'Ver ela online, mas não responder você (enquanto responde os outros)',
  'Travar na hora de puxar assunto e perder a chance',
  'Ser deixado no vácuo depois de 3 mensagens',
  'Ver ela com outro cara que "sabe conversar"',
  'Ficar na friendzone enquanto outros avançam',
  'Pensar nela todos os dias mas não ter coragem de chamar',
  'Ser "o cara legal" mas nunca o cara que ela QUER',
];

export const PainSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          Você Está <span className="text-destructive">Cansado</span> Disso?
        </h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-12">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="bg-destructive/5 border-l-4 border-destructive/50 p-6 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <p className="text-foreground">{pain}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            A verdade que ninguém te conta:
          </p>
          <p className="text-2xl md:text-3xl font-black leading-tight">
            <span className="text-destructive">Não existe gente feia.</span>
            <br />
            <span className="text-destructive">
              Existe gente que não sabe conversar.
            </span>
          </p>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            size="lg"
            onClick={() => window.location.href = 'https://xaveco.online/'}
          >
            ✨ A Solução Que Muda Tudo
          </Button>
        </div>
      </div>
    </section>
  );
};
