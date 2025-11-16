import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

// Lazy load Spline at runtime so we can gracefully handle failures
function useSpline() {
  const [SplineComp, setSplineComp] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        console.log('[ThreeD] attempting to load @splinetool/react-spline')
        const mod = await import('@splinetool/react-spline')
        if (mounted) {
          setSplineComp(() => mod.default)
          console.log('[ThreeD] Spline module loaded')
        }
      } catch (e) {
        console.error('[ThreeD] Failed to load Spline module', e)
        if (mounted) setError(e)
      }
    })()
    return () => { mounted = false }
  }, [])

  return { SplineComp, error }
}

export default function ThreeD() {
  useEffect(() => {
    console.log('[ThreeD] mounted')
    return () => console.log('[ThreeD] unmounted')
  }, [])

  const search = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
  const disabled = useMemo(() => (search?.get('no3d') === '1') || false, [search])
  const { SplineComp, error } = useSpline()

  const FallbackCard = ({ title = 'Interactive 3D preview unavailable' }) => (
    <div className="relative aspect-video rounded-2xl border border-blue-100 bg-white shadow-xl overflow-hidden grid place-items-center">
      <div className="text-center px-6">
        <div className="text-base font-semibold text-gray-900">{title}</div>
        <div className="mt-1 text-sm text-gray-600">{disabled ? '3D disabled via no3d=1' : error ? 'There was a problem loading the 3D viewer.' : 'Loading 3D…'}</div>
        <div className="mt-3 text-xs text-gray-500">You can continue browsing — this section is optional.</div>
      </div>
    </div>
  )

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
          <div className="relative">
            {disabled ? (
              <FallbackCard title="3D preview disabled" />
            ) : error ? (
              <FallbackCard />
            ) : SplineComp ? (
              <div className="relative aspect-video rounded-2xl border border-blue-100 bg-white shadow-xl overflow-hidden">
                <Suspense fallback={<FallbackCard />}>
                  <SplineComp
                    scene="https://prod.spline.design/4Bv2oB3hV9WB8f0j/scene.splinecode"
                    onLoad={() => console.log('[ThreeD] Spline loaded')}
                    onMouseDown={() => console.log('[ThreeD] user interacting')}
                  />
                </Suspense>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 to-white/0" />
              </div>
            ) : (
              <FallbackCard />
            )}
            <div className="mt-2 text-xs text-gray-500">Tip: append <code>?no3d=1</code> to the URL to disable this section. Append <code>?debug=1</code> to show error details.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
