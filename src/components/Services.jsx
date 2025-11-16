import { useEffect, useState } from 'react'
import { Droplets, Flame, Wrench, Zap } from 'lucide-react'

const iconMap = {
  droplet: Droplets,
  flame: Flame,
  pipe: Wrench,
  zap: Zap,
}

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data.services || [])
      } catch (e) {
        setServices([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900">Popular services</h2>
        <p className="mt-2 text-gray-600">Everything from quick fixes to complex installs.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-40 rounded-xl bg-white border border-blue-100 animate-pulse" />
            ))
          ) : (
            services.map((s) => {
              const Icon = iconMap[s.icon] || Wrench
              return (
                <div key={s.id} className="rounded-xl bg-white border border-blue-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{s.description}</p>
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}
