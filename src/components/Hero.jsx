import { ArrowRight, Calendar, Star, Sparkles, Cpu, Bot, Cloud, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      {/* Hero radial accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[80%] bg-hero-radial" />
      {/* Floating gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute -top-16 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/20 blur-3xl animate-pulse-slow" />

      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div className="reveal">
          <div className="eyebrow">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            AI-First Technology Partner
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            Empowering Businesses with{' '}
            <span className="gradient-text">Smart Tech & AI Solutions</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            From reliable IT services to intelligent AI agents, we help you
            scale faster and smarter — building the infrastructure modern
            businesses need to win.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              <Calendar className="h-4 w-4" /> Book Consultation
            </a>
          </div>

          {/* Trust badge */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {[
                'from-blue-400 to-indigo-500',
                'from-cyan-400 to-blue-500',
                'from-indigo-400 to-purple-500',
                'from-sky-400 to-cyan-500',
              ].map((g, i) => (
                <span
                  key={i}
                  className={`h-9 w-9 rounded-full bg-gradient-to-br ${g} ring-2 ring-slate-950`}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-400">
                Trusted by <span className="text-slate-200 font-semibold">200+</span> businesses worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Right — abstract AI illustration */}
        <div className="relative reveal">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-cyan-400/30 blur-2xl" />
            {/* Card */}
            <div className="relative h-full w-full rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-2xl shadow-glow overflow-hidden">
              {/* Inner orb */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-glow-lg animate-float">
                  <div className="absolute inset-2 rounded-full bg-slate-950/60 backdrop-blur-md grid place-items-center">
                    <Cpu className="h-20 w-20 text-cyan-300" strokeWidth={1.4} />
                  </div>
                  {/* Orbit dots */}
                  <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-glow" />
                  <span className="absolute top-1/2 -right-2 h-3 w-3 -translate-y-1/2 rounded-full bg-indigo-300 shadow-glow" />
                  <span className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-300 shadow-glow" />
                  <span className="absolute top-1/2 -left-2 h-3 w-3 -translate-y-1/2 rounded-full bg-sky-300 shadow-glow" />
                </div>
              </div>

              {/* Floating mini cards */}
              <div className="absolute left-6 top-8 glass rounded-2xl px-4 py-3 shadow-soft animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300">AI Agent</p>
                    <p className="text-sm font-semibold text-white">Online</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-6 top-20 glass rounded-2xl px-4 py-3 shadow-soft animate-float [animation-delay:1.5s]">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300">Threats</p>
                    <p className="text-sm font-semibold text-white">0 active</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass rounded-2xl px-4 py-3 shadow-soft animate-float [animation-delay:3s]">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                    <Cloud className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300">Cloud Uptime</p>
                    <p className="text-sm font-semibold text-white">99.99%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom angled divider */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-24 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  )
}
