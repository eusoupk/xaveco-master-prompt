export const FinalCTASection = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="bg-card border-4 border-border p-8">
            <p className="text-xs text-pixel-gold mb-4">▸ MENSAGEM FINAL ◂</p>
            <p className="text-sm text-muted-foreground italic mb-4">
              "As melhores conversas da sua vida começam com uma única mensagem."
            </p>
            <p className="text-lg text-primary pixel-text-shadow">
              O Xaveco escreve essa mensagem por você.
            </p>
          </div>

          <div className="pt-8 border-t-4 border-border">
            <p className="text-xs text-muted-foreground mb-4">
              © 2024 Xaveco. Todos os direitos reservados.
            </p>
            <div className="flex justify-center gap-6 text-xs">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors underline">
                Termos de Serviço
              </a>
              <span className="text-muted-foreground">e</span>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors underline">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
