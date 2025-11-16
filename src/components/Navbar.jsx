import { useState } from 'react'
import { Menu, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-black tracking-tight">PlumberPro</a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#testimonials" className="hover:text-blue-600">Reviews</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
              <Phone size={16} /> 24/7 (555) 123-4567
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-black/5">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <a onClick={() => setOpen(false)} href="#services" className="block">Services</a>
            <a onClick={() => setOpen(false)} href="#about" className="block">About</a>
            <a onClick={() => setOpen(false)} href="#testimonials" className="block">Reviews</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block">Contact</a>
            <a onClick={() => setOpen(false)} href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow">
              <Phone size={16} /> 24/7 (555) 123-4567
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
