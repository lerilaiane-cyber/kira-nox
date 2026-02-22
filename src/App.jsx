import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Works from './components/Works'
import Process from './components/Process'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <main className="bg-kira-bg min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Works />
      <Process />
      <Testimonials />
    </main>
  )
}

export default App