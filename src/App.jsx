import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import ThreeD from './components/ThreeD'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <ErrorBoundary name="Hero"><Hero /></ErrorBoundary>
        <ErrorBoundary name="Services"><Services /></ErrorBoundary>
        <ErrorBoundary name="Process"><Process /></ErrorBoundary>
        <ErrorBoundary name="ThreeD"><ThreeD /></ErrorBoundary>
        <ErrorBoundary name="Testimonials"><Testimonials /></ErrorBoundary>
        <ErrorBoundary name="FAQ"><FAQ /></ErrorBoundary>
        <ErrorBoundary name="Contact"><Contact /></ErrorBoundary>
      </main>
      <footer className="border-t border-black/5 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} PlumberPro. All rights reserved.
      </footer>
    </div>
  )
}

export default App
