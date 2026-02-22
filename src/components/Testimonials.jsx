import { useRef } from 'react'

const testimonials = [
  {
    name: 'Luna Voss',
    role: 'Cantora Independente',
    photo: '/src/assets/person1.jpg',
    quote: 'Kira transformou completamente o som do meu EP. Ela entende exatamente o que você quer expressar antes mesmo de você conseguir colocar em palavras.',
  },
  {
    name: 'Davi Maren',
    role: 'Produtor & DJ',
    photo: '/src/assets/person2.jpg',
    quote: 'Trabalhar com a Kira foi uma das melhores decisões da minha carreira. O processo dela é único — cada detalhe tem intenção.',
  },
  {
    name: 'Aya Sato',
    role: 'Artista Experimental',
    photo: '/src/assets/person3.jpg',
    quote: 'Nunca imaginei que minha música poderia soar tão densa e ao mesmo tempo tão limpa. Kira tem um ouvido absurdo.',
  },
  {
    name: 'Theo Vale',
    role: 'Compositor',
    photo: '/src/assets/person4.jpg',
    quote: 'A Kira não só produz — ela eleva. Cada sessão parece uma colaboração real, nunca um serviço.',
  },
  {
    name: 'Mila Sable',
    role: 'Cantora & Letrista',
    photo: '/src/assets/person5.jpg',
    quote: 'O mix do meu álbum ficou tão bom que até eu mesma fiquei surpresa. Kira Nox é outro nível.',
  },
  {
    name: 'Ren Okada',
    role: 'Músico Alternativo',
    photo: '/src/assets/person6.jpg',
    quote: 'Ela tem uma sensibilidade rara pra música experimental. Não força nada — deixa o som respirar do jeito certo.',
  },
  {
    name: 'Clara Nox',
    role: 'Artista Pop Underground',
    photo: '/src/assets/person7.jpg',
    quote: 'Cada faixa que a Kira toca vira uma obra. Ela pensa no som como arte, não como produto.',
  },
  {
    name: 'Felix Drum',
    role: 'Beatmaker',
    photo: '/src/assets/person8.jpg',
    quote: 'Aprendi mais sobre produção nas sessões com a Kira do que em anos estudando sozinho. Ela compartilha o conhecimento com generosidade.',
  },
]

function Testimonials() {
  const containerRef = useRef(null)

  return (
    <section id="testimonials" className="relative w-full py-5 bg-kira-bg overflow-hidden">

      {/* Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-kira-terra/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="px-16 mb-16">
        <div className="flex items-end justify-between max-w-6xl mx-auto">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-kira-terra" />
              <span className="text-kira-cream/30 text-[10px] tracking-[0.5em] uppercase">Testimonials</span>
            </div>
            <h2 className="font-display text-kira-cream text-6xl tracking-widest">
              O QUE <span className="text-kira-gold">DIZEM</span>
            </h2>
          </div>
          <p className="text-kira-cream/30 text-xs tracking-widest uppercase max-w-xs text-right">
            Artistas que passaram pelo estúdio da Kira.
          </p>
        </div>
      </div>

      {/* Carrossel animado */}
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6 pb-4 w-max"
          style={{ animation: 'works-marquee 35s linear infinite' }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
        >
          {[...testimonials, ...testimonials].map((person, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 border border-kira-gold/20 bg-kira-dark/40 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-4 group hover:border-kira-terra/40 hover:bg-kira-dark/70 transition-all duration-300"
            >
              {/* Quote */}
              <span className="font-display text-kira-terra/40 text-6xl leading-none">"</span>

              <p className="text-kira-cream/60 text-sm leading-relaxed group-hover:text-kira-cream/80 transition-colors duration-300 -mt-6">
                {person.quote}
              </p>

              {/* Divisor */}
              <div className="w-full h-px bg-kira-gold/10 group-hover:bg-kira-terra/20 transition-colors duration-300" />

              {/* Pessoa */}
              <div className="flex items-center gap-4">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-kira-gold/20 group-hover:border-kira-terra/40 transition-colors duration-300"
                />
                <div className="flex flex-col">
                  <span className="text-kira-gold text-sm font-display tracking-widest">{person.name}</span>
                  <span className="text-kira-cream/30 text-[10px] tracking-widest uppercase">{person.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Testimonials