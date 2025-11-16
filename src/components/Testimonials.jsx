export default function Testimonials() {
  const items = [
    {
      name: 'Sarah M.',
      text: 'They arrived in 30 minutes and fixed our burst pipe before it caused real damage. Friendly and professional!'
    },
    {
      name: 'Tom & Lisa',
      text: 'Upgraded to a tankless heater — clean install and they walked us through everything. Highly recommend.'
    },
    {
      name: 'Jamal R.',
      text: 'Clear pricing, no surprises. Our go-to plumber for rentals and our home.'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900">What customers say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-xl border border-blue-100 bg-blue-50 p-6">
              <blockquote className="text-gray-700">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
