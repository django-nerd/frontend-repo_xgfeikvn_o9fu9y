import { useState } from 'react'
import { Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to submit. Please try again.')
      setStatus({ loading: false, success: 'Thanks! We received your request and will reach out shortly.', error: null })
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-black text-gray-900">Need a plumber now?</h2>
            <p className="mt-2 text-gray-600">Call anytime or send a request — we usually respond within minutes.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="tel:+15551234567" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">
                <Phone size={18} /> Call (555) 123-4567
              </a>
            </div>
            <ul className="mt-8 space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>Upfront pricing and no surprise fees</li>
              <li>Fully licensed, insured, and background-checked</li>
              <li>We protect floors and clean up after every job</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Request a free quote</h3>
            <form className="mt-4 grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-md border border-gray-200 p-2" placeholder="Name" required />
              <input name="email" value={form.email} onChange={handleChange} className="w-full rounded-md border border-gray-200 p-2" placeholder="Email" type="email" required />
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-md border border-gray-200 p-2" placeholder="Phone" required />
              <input name="service" value={form.service} onChange={handleChange} className="w-full rounded-md border border-gray-200 p-2" placeholder="Service needed" required />
              <textarea name="message" value={form.message} onChange={handleChange} className="w-full rounded-md border border-gray-200 p-2" placeholder="Describe the issue" rows={4} />
              <button disabled={status.loading} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 disabled:opacity-60">
                <Send size={18} /> {status.loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
            {status.success && (
              <p className="mt-4 flex items-center gap-2 text-green-700 text-sm"><CheckCircle2 size={18}/> {status.success}</p>
            )}
            {status.error && (
              <p className="mt-4 flex items-center gap-2 text-red-700 text-sm"><AlertCircle size={18}/> {status.error}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
