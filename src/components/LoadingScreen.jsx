import { useEffect, useState } from 'react'

function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2000)
    const timer2 = setTimeout(() => setVisible(false), 2600)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[999] bg-kira-bg flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Blob decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kira-terra/20 rounded-full blur-3xl pointer-events-none" />

      {/* Logo animada */}
      <div className="relative flex flex-col items-center gap-4">
        <span
          className="font-display text-kira-gold tracking-widest"
          style={{
            fontSize: '8vw',
            animation: 'fadeInUp 0.8s ease forwards',
          }}
        >
          KIRA NOX
        </span>
        <span
          className="text-kira-cream/30 text-xs tracking-[0.5em] uppercase"
          style={{ animation: 'fadeInUp 0.8s ease 0.3s forwards', opacity: 0 }}
        >
          Sound has no shape. Until now.
        </span>

        {/* Barra de loading */}
        <div className="w-48 h-px bg-kira-gold/10 mt-6 overflow-hidden">
          <div
            className="h-full bg-kira-terra"
            style={{ animation: 'loadingBar 1.8s ease forwards' }}
          />
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen