import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import ThreeD from './components/ThreeD'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <ThreeD />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} PlumberPro. All rights reserved.
      </footer>
    </div>
  )
}

export default App
