import { Wrench, Zap, Users, DollarSign, Brain } from 'lucide-react'

const items = [
  {
    icon: Wrench,
    title: 'Tailored Solutions',
    desc: 'Engineered around your business model — never one-size-fits-all.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Zap,
    title: 'Fast Support',
    desc: 'Median first response under 15 minutes, 24/7 availability.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Senior engineers, security pros, and AI specialists on every project.',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    desc: 'Transparent plans that scale with you — no surprise invoices.',
    gradient: 'from-fuchsia-500 to-pink-400',
  },
  {
    icon: Brain,
    title: 'AI-First Approach',
    desc: 'We bake intelligence into every layer of your stack from day one.',
    gradient: 'from-indigo-500 to-purple-500',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why SkyTech</span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The advantage of an{' '}
            <span className="gradient-text">AI-first partner</span>
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Five reasons teams trust SkyTech Solutions to design, deliver, and
            scale their technology stack.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, gradient }, i) => (
            <article
              key={title}
              className={`reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${gradient} opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
              />

              <div className="relative flex items-start gap-5">
                <div
                  className={`shrink-0 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${gradient} shadow-glow`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
