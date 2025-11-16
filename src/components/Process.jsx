import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, ShieldCheck, Wrench, Truck } from 'lucide-react'

export default function Process() {
  useEffect(() => {
    console.log('[Process] mounted')
    return () => console.log('[Process] unmounted')
  }, [])

  const steps = [
    { icon: Wrench, title: 'Diagnose', text: 'We assess the problem with pro tools and clear photos.' },
    { icon: ShieldCheck, title: 'Quote', text: 'Upfront pricing with options so you can choose.' },
    { icon: Clock, title: 'Fix', text: 'Most issues fixed same day, with clean workmanship.' },
    { icon: Truck, title: 'Follow‑up', text: 'We check back to ensure everything is perfect.' }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-black text-gray-900"
        >Our process</motion.h2>
        <p className="mt-2 text-gray-600">Simple, transparent, and convenient — from first call to final cleanup.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-blue-100 bg-blue-50 p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">
                <s.icon />
              </div>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
