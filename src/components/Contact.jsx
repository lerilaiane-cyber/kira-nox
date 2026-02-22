function Contact() {
  return (
    <section id="contact" className="relative w-full bg-kira-bg overflow-hidden">

      {/* Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-kira-terra/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-kira-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* MAKE NOISE gigante */}
      <div className="relative flex flex-col items-center justify-center pt-24 pb-8 overflow-hidden">
        
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span className="font-display text-[15vw] leading-none tracking-widest select-none whitespace-nowrap bg-gradient-to-r from-kira-terra via-kira-gold to-kira-terra bg-clip-text text-transparent opacity-20">
            MAKE NOISE
          </span>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 px-16 pb-24 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-kira-terra" />
            <span className="text-kira-cream/30 text-[10px] tracking-[0.5em] uppercase">Contact</span>
            <div className="w-8 h-px bg-kira-terra" />
          </div>
          <h2 className="font-display text-kira-cream text-6xl tracking-widest">
            VAMOS <span className="text-kira-gold">CRIAR</span>
          </h2>
          <p className="text-kira-cream/40 text-xs tracking-widest uppercase max-w-md">
            Tem um projeto em mente? Conta pra Kira — ela vai transformar sua ideia em som.
          </p>
        </div>

        {/* Grid — formulário + info */}
        <div className="flex gap-12 items-start">

          {/* Formulário */}
          <div className="flex-1 border border-kira-gold/20 bg-kira-dark/40 backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-6">

            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-kira-cream/30 text-[10px] tracking-widest uppercase">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="bg-kira-bg/60 border border-kira-gold/20 rounded-lg px-4 py-3 text-kira-cream text-sm placeholder:text-kira-cream/20 focus:outline-none focus:border-kira-terra transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-kira-cream/30 text-[10px] tracking-widest uppercase">Email</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-kira-bg/60 border border-kira-gold/20 rounded-lg px-4 py-3 text-kira-cream text-sm placeholder:text-kira-cream/20 focus:outline-none focus:border-kira-terra transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-kira-cream/30 text-[10px] tracking-widest uppercase">Tipo de projeto</label>
              <select className="bg-kira-bg/60 border border-kira-gold/20 rounded-lg px-4 py-3 text-kira-cream text-sm focus:outline-none focus:border-kira-terra transition-colors appearance-none">
                <option value="" className="bg-kira-bg">Selecione...</option>
                <option value="ep" className="bg-kira-bg">EP</option>
                <option value="single" className="bg-kira-bg">Single</option>
                <option value="mixtape" className="bg-kira-bg">Mixtape</option>
                <option value="album" className="bg-kira-bg">Álbum</option>
                <option value="collab" className="bg-kira-bg">Collab</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-kira-cream/30 text-[10px] tracking-widest uppercase">Mensagem</label>
              <textarea
                rows={5}
                placeholder="Conta sobre seu projeto, referências, vibe..."
                className="bg-kira-bg/60 border border-kira-gold/20 rounded-lg px-4 py-3 text-kira-cream text-sm placeholder:text-kira-cream/20 focus:outline-none focus:border-kira-terra transition-colors resize-none"
              />
            </div>

            <button className="relative group overflow-hidden border border-kira-terra text-kira-cream text-xs tracking-widest uppercase px-6 py-4 w-full">
              <span className="absolute inset-0 bg-kira-terra translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">✦ Enviar Mensagem</span>
            </button>

          </div>

          {/* Info lateral */}
          <div className="w-72 flex flex-col gap-6">

            <div className="border border-kira-gold/20 bg-kira-dark/40 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-4">
              <span className="text-kira-cream/30 text-[10px] tracking-widest uppercase">Email</span>
              <span className="text-kira-gold text-sm tracking-wide">kira@kiranox.com</span>
              <div className="w-full h-px bg-kira-gold/10" />
              <span className="text-kira-cream/30 text-[10px] tracking-widest uppercase">Resposta em</span>
              <span className="text-kira-cream/60 text-sm">Até 48 horas</span>
            </div>

            <div className="border border-kira-gold/20 bg-kira-dark/40 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-4">
              <span className="text-kira-cream/30 text-[10px] tracking-widest uppercase">Redes Sociais</span>
              <div className="flex flex-col gap-3">
                {['Instagram', 'SoundCloud', 'Spotify', 'Bandcamp'].map((social) => (
                  
                   <a  key={social}
                    href="#"
                    className="flex items-center justify-between group/social"
                  >
                    <span className="text-kira-cream/50 text-xs tracking-widest uppercase group-hover/social:text-kira-gold transition-colors duration-300">{social}</span>
                    <span className="text-kira-terra group-hover/social:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-kira-gold/10 px-16 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-display text-kira-gold text-xl tracking-widest">KIRA NOX</span>
          <span className="text-kira-cream/20 text-[10px] tracking-widest uppercase">© 2024 — Todos os direitos reservados</span>
          <span className="text-kira-cream/20 text-[10px] tracking-widest uppercase">Sound has no shape. Until now.</span>
        </div>
      </div>

    </section>
  )
}

export default Contact