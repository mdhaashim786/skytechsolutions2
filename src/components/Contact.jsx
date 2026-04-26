import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  CheckCircle2,
} from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's build something{' '}
            <span className="gradient-text">remarkable</span>
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Tell us about your project — we'll reply within one business day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Left — info */}
          <div className="reveal lg:col-span-2 space-y-5">
            <div className="card !p-7">
              <h3 className="text-xl font-bold text-white">Contact info</h3>
              <p className="mt-2 text-sm text-slate-400">
                Reach out through any channel — we read everything.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'Info@skytechsolutions.us',
                    href: 'mailto:Info@skytechsolutions.us',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+1 (443) 608-6358',
                    href: 'tel:+14436086358',
                  },
                  {
                    icon: MapPin,
                    label: 'Office',
                    value: 'Remote-first · United States',
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-glow">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-white transition hover:text-cyan-300"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card !p-7">
              <h3 className="text-base font-semibold text-white">Follow us</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {[
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Github, label: 'GitHub' },
                  { icon: Instagram, label: 'Instagram' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="reveal lg:col-span-3 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl shadow-soft"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-3xl" />

            <div className="relative space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Your name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, or questions…"
                  rows={6}
                  required
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-cyan-400/10"
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message sent
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500">
                By submitting, you agree to our friendly privacy policy. We'll
                never share your details.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-slate-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-cyan-400/10"
      />
    </div>
  )
}
