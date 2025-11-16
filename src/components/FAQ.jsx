import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Do you offer 24/7 emergency service?',
    a: 'Yes. Our team is on call around the clock for urgent issues like burst pipes, backups, and leaks.'
  },
  {
    q: 'Are estimates free?',
    a: 'Absolutely. We provide transparent quotes before any work begins and offer options when possible.'
  },
  {
    q: 'What areas do you serve?',
    a: 'We cover the metro area and surrounding suburbs. Same‑day service is available in most zones.'
  },
  {
    q: 'Do you warranty your work?',
    a: 'All work is guaranteed. Parts include manufacturer warranties as well.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  useEffect(() => {
    console.log('[FAQ] mounted')
    return () => console.log('[FAQ] unmounted')
  }, [])

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-gray-200 rounded-xl border border-blue-100 bg-white">
          {faqs.map((item, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left p-5 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">{item.q}</span>
                <ChevronDown className={`transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </div>
              <div className={`grid transition-[grid-template-rows] duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="pt-3 text-sm text-gray-600">{item.a}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
