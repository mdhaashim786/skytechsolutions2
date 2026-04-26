import {
  ShieldCheck,
  Headphones,
  Cloud,
  Smartphone,
  Globe,
  Bot,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    desc: 'End-to-end protection — from threat detection to incident response and compliance hardening.',
    gradient: 'from-rose-500 to-orange-400',
  },
  {
    icon: Headphones,
    title: 'IT Support',
    desc: '24/7 managed IT services keeping your team productive and your infrastructure healthy.',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Migrate, scale, and optimize your cloud across AWS, Azure, and GCP with confidence.',
    gradient: 'from-sky-500 to-blue-400',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform apps that delight users on iOS and Android — built to scale.',
    gradient: 'from-fuchsia-500 to-pink-400',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Lightning-fast, conversion-optimized web apps and marketing sites with modern stacks.',
    gradient: 'from-amber-500 to-yellow-400',
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    desc: 'Production-ready AI agents that automate workflows, support customers, and ship business outcomes.',
    gradient: 'from-blue-500 via-indigo-500 to-cyan-400',
    featured: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Premium services for{' '}
            <span className="gradient-text">modern businesses</span>
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            A full-stack technology partner — from infrastructure and security
            to web, mobile, and intelligent AI systems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, gradient, featured }) => (
            <article
              key={title}
              className={`reveal group relative overflow-hidden rounded-3xl p-[1.5px] transition-all duration-500 hover:-translate-y-1.5 ${
                featured
                  ? 'bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-glow'
                  : 'bg-white/10'
              }`}
            >
              {/* NEW badge */}
              {featured && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md ring-1 ring-white/20">
                  New
                </span>
              )}

              <div
                className={`relative h-full rounded-3xl bg-slate-950/80 p-8 backdrop-blur-xl transition-all duration-500 ${
                  featured
                    ? 'group-hover:bg-slate-950/60'
                    : 'group-hover:bg-slate-900/60'
                }`}
              >
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
                />

                <div
                  className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${gradient} shadow-glow`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                </div>

                <h3 className="relative mt-6 text-xl font-bold text-white">
                  {title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-slate-300">
                  {desc}
                </p>

                <a
                  href="#contact"
                  className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
