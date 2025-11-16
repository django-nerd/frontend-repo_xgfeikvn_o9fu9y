import { Suspense } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function ThreeD() {
  return (
    <section id="showcase" className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-black text-gray-900"
            >
              Modern tools for spotless work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 text-gray-600"
            >
              We use pro‑grade equipment to diagnose and fix issues fast — from leak detection to camera inspections. Explore the 3D rig we bring to jobs.
            </motion.p>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="mt-6 space-y-2 text-sm text-gray-700"
            >
              {['Camera inspections','Thermal leak detection','Pipe lining & descaling','Eco‑friendly options'].map((t, i) => (
                <motion.li key={i} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {t}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="relative aspect-video rounded-2xl border border-blue-100 bg-white shadow-xl overflow-hidden">
            <Suspense fallback={<div className="w-full h-full grid place-items-center text-gray-500">Loading 3D…</div>}>
              {/* Public demo scene from Spline */}
              <Spline scene="https://prod.spline.design/4Bv2oB3hV9WB8f0j/scene.splinecode" />
            </Suspense>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 to-white/0" />
          </div>
        </div>
      </div>
    </section>
  )
}
