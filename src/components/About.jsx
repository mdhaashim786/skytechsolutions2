import { Target, Eye, ArrowUpRight } from 'lucide-react'

const blocks = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To empower businesses through reliable IT and intelligent AI — making advanced technology accessible, practical, and profitable for every team we serve.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'A future where every business runs on a smart, AI-augmented stack — automating the routine so people can focus on what only humans can do.',
    gradient: 'from-indigo-500 to-purple-500',
  },
]

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">About SkyTech</span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built for ambitious teams,{' '}
            <span className="gradient-text">powered by AI</span>
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            We blend rock-solid IT engineering with frontier AI capabilities to
            help organizations move faster, ship smarter, and stay secure.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {blocks.map(({ icon: Icon, title, text, gradient }) => (
            <article key={title} className="reveal card group relative overflow-hidden">
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${gradient} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
              />
              <div className="relative">
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${gradient} shadow-glow`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-slate-300 leading-relaxed">{text}</p>
                <a
                  href="#services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Stats strip */}
        <div className="reveal mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:grid-cols-4">
          {[
            ['200+', 'Businesses served'],
            ['50+', 'AI agents shipped'],
            ['99.99%', 'Uptime guaranteed'],
            ['24/7', 'Expert support'],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-extrabold gradient-text md:text-4xl">{value}</p>
              <p className="mt-1.5 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
