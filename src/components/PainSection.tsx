import { Button } from "@/components/ui/button";

const painPoints = [
  'Mandar "oi, tudo bem?" e ser IGNORADO pela 47ª vez',
  'Ver ela online, mas não responder você',
  'Travar na hora de puxar assunto',
  'Ser deixado no vácuo depois de 3 mensagens',
  'Ver ela com outro cara que "sabe conversar"',
  'Ficar na friendzone enquanto outros avançam',
  'Pensar nela todos os dias mas não ter coragem',
  'Ser "o cara legal" mas nunca o cara que ela QUER',
];

export const PainSection = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4 text-destructive">
          ✖ GAME OVER ✖
        </h2>
        <p className="text-center text-lg mb-12 text-muted-foreground">
          Você Está Cansado Disso?
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-12">
          {painPoints.map((pain, index) => (
            <div
              key={index}
              className="bg-destructive/10 border-4 border-destructive/50 p-6 pixel-text-shadow"
            >
              <div className="flex items-start gap-3">
                <span className="text-destructive text-lg">✖</span>
                <p className="text-foreground text-xs leading-relaxed">{pain}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="bg-card/50 border-4 border-border p-8">
            <p className="text-muted-foreground text-xs mb-4">
              ▸ MENSAGEM DO SISTEMA ◂
            </p>
            <p className="text-lg leading-relaxed">
              <span className="text-destructive">Não existe gente feia.</span>
              <br />
              <span className="text-destructive">
                Existe gente que não sabe conversar.
              </span>
            </p>
          </div>
          
          <Button
            variant="game"
            size="lg"
            onClick={() => window.location.href = 'https://xaveco.online/'}
          >
            ★ A Solução Que Muda Tudo
          </Button>
        </div>
      </div>
    </section>
  );
};
