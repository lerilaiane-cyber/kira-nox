import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Briefing',
    desc: 'Tudo começa com uma conversa. Kira mergulha fundo no conceito do artista, referências sonoras e o que a música precisa transmitir.',
    tag: 'Discovery',
  },
  {
    number: '02',
    title: 'Composição',
    desc: 'Construção das bases — melodias, progressões harmônicas e estrutura. A identidade sonora começa a tomar forma aqui.',
    tag: 'Creation',
  },
  {
    number: '03',
    title: 'Produção',
    desc: 'Camadas, texturas e arranjos. Cada elemento é pensado pra servir à emoção da faixa, nada é acidental.',
    tag: 'Production',
  },
  {
    number: '04',
    title: 'Mix',
    desc: 'Equilíbrio entre os elementos. O espaço entre os sons é tão importante quanto os próprios sons.',
    tag: 'Mixing',
  },
  {
    number: '05',
    title: 'Master',
    desc: 'O toque final. A faixa ganha corpo, coesão e está pronta pra qualquer plataforma ou sistema de som.',
    tag: 'Mastering',
  },
  {
    number: '06',
    title: 'Entrega',
    desc: 'Arquivos finais, stems separados e suporte pós-entrega. O projeto é seu — Kira só dá a ele a melhor versão possível.',
    tag: 'Delivery',
  },
]

function StepCard({ step }) {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative border rounded-2xl p-8 transition-all duration-700 overflow-hidden ${
        isVisible
          ? 'border-kira-terra/40 bg-kira-dark/60 opacity-100 translate-y-0'
          : 'border-kira-gold/10 bg-kira-dark/20 opacity-30 translate-y-4'
      }`}
    >
      {/* Número grande atrás */}
      <span className="absolute -bottom-4 -right-2 font-display text-[100px] text-kira-gold/5 leading-none select-none group-hover:text-kira-gold/10 transition-colors duration-300">
        {step.number}
      </span>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col gap-4">

        {/* Topo */}
        <div className="flex items-start justify-between">
          <span className={`font-display text-4xl tracking-widest transition-colors duration-500 ${isVisible ? 'text-kira-terra' : 'text-kira-cream/20'}`}>
            {step.number}
          </span>
          <span className="border border-kira-gold/20 text-kira-cream/30 text-[9px] tracking-widest uppercase px-2 py-1 rounded-full">
            {step.tag}
          </span>
        </div>

        {/* Divisor */}
        <div className={`w-full h-px transition-colors duration-500 ${isVisible ? 'bg-kira-terra/30' : 'bg-kira-gold/10'}`} />

        {/* Título */}
        <h3 className={`font-display text-3xl tracking-widest transition-colors duration-500 ${isVisible ? 'text-kira-gold' : 'text-kira-cream/30'}`}>
          {step.title}
        </h3>

        {/* Descrição */}
        <p className={`text-xs leading-relaxed transition-colors duration-500 ${isVisible ? 'text-kira-cream/60' : 'text-kira-cream/20'}`}>
          {step.desc}
        </p>

      </div>
    </div>
  )
}

function Process() {
  return (
    <section id="process" className="relative w-full py-24 bg-kira-bg overflow-hidden">

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-kira-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-kira-terra/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="px-16 mb-16">
        <div className="flex items-end justify-between max-w-6xl mx-auto">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-kira-terra" />
              <span className="text-kira-cream/30 text-[10px] tracking-[0.5em] uppercase">Process</span>
            </div>
            <h2 className="font-display text-kira-cream text-6xl tracking-widest">
              COMO <span className="text-kira-gold">FUNCIONA</span>
            </h2>
          </div>
          <p className="text-kira-cream/30 text-xs tracking-widest uppercase max-w-xs text-right">
            Do conceito ao master — cada etapa com intenção.
          </p>
        </div>
      </div>

      {/* Linha do tempo */}
      <div className="px-16 max-w-6xl mx-auto mb-16">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-0 right-0 h-px bg-kira-gold/10" />
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center gap-3 z-10">
              <div className="w-3 h-3 rounded-full border-2 border-kira-gold/30 bg-kira-bg" />
              <span className="font-display text-sm tracking-widest text-kira-cream/20">
                {step.number}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="px-16">
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Process