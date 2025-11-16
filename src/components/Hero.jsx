import { motion } from 'framer-motion'
import { Shield, Zap, Wrench } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900"
            >
              Fast, reliable plumbing for homes and businesses
            </motion.h1>
            <p className="mt-6 text-lg text-gray-600">
              From burst pipes to brand new installs — licensed pros on call 24/7. Transparent pricing, spotless work, guaranteed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">
                Get a free quote
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-gray-900 font-semibold shadow border border-gray-200 hover:bg-gray-50">
                Explore services
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2"><Zap className="text-blue-600" size={18} /><span>24/7 Emergency</span></div>
              <div className="flex items-center gap-2"><Wrench className="text-blue-600" size={18} /><span>Licensed & Insured</span></div>
              <div className="flex items-center gap-2"><Shield className="text-blue-600" size={18} /><span>Work Guaranteed</span></div>
            </dl>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-xl">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1280&auto=format&fit=crop" alt="Plumber at work" className="rounded-xl w-full object-cover aspect-video" />
            </div>
            <div className="absolute -bottom-6 -left-6 rotate-2 bg-blue-600 text-white px-4 py-2 rounded shadow">
              Same-day service available
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
