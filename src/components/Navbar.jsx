function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5">
      
      {/* Fundo com blur */}
      <div className="absolute inset-0 bg-kira-bg/70 backdrop-blur-md border-b border-kira-gold/10" />

      {/* Logo */}
      <div className="relative flex flex-col leading-none">
        <span className="font-display text-kira-gold text-3xl tracking-widest">
          KIRA NOX
        </span>
        <span className="text-kira-terra text-xs tracking-[0.3em] uppercase">
          — sound producer
        </span>
      </div>

      {/* Links */}
      <ul className="relative flex items-center gap-10 text-kira-cream text-xs tracking-widest uppercase">
        <li>
          <a href="#about" className="group flex flex-col items-center gap-1 hover:text-kira-gold transition-colors">
            About
            <span className="block h-px w-0 bg-kira-gold group-hover:w-full transition-all duration-300" />
          </a>
        </li>
        <li>
          <a href="#works" className="group flex flex-col items-center gap-1 hover:text-kira-gold transition-colors">
            Works
            <span className="block h-px w-0 bg-kira-gold group-hover:w-full transition-all duration-300" />
          </a>
        </li>
        <li>
          <a href="#process" className="group flex flex-col items-center gap-1 hover:text-kira-gold transition-colors">
            Process
            <span className="block h-px w-0 bg-kira-gold group-hover:w-full transition-all duration-300" />
          </a>
        </li>
        <li>
          <a href="#contact" className="group flex flex-col items-center gap-1 hover:text-kira-gold transition-colors">
            Contact
            <span className="block h-px w-0 bg-kira-gold group-hover:w-full transition-all duration-300" />
          </a>
        </li>
      </ul>

      {/* Botão */}
      
       <a href="#contact"
        className="relative group overflow-hidden border border-kira-terra text-kira-cream text-xs tracking-widest uppercase px-6 py-3"
      >
        <span className="absolute inset-0 bg-kira-terra translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <span className="relative">✦ Book a Session</span>
      </a>

    </nav>
  )
}

export default Navbar