import { Bot, MessageSquare, Workflow, Mic, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

const points = [
  {
    icon: MessageSquare,
    title: 'Automate customer support',
    desc: 'AI agents that resolve tickets, answer FAQs, and escalate intelligently — 24/7.',
  },
  {
    icon: Mic,
    title: 'Build chatbots & voice assistants',
    desc: 'Brand-aligned conversational interfaces across web, app, voice, and messaging.',
  },
  {
    icon: Workflow,
    title: 'Streamline workflows with AI agents',
    desc: 'Replace repetitive ops with autonomous agents wired into your tools and data.',
  },
]

export default function AISolutions() {
  return (
    <section id="ai" className="relative section-pad">
      {/* Dark backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#070b1f] to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-50 animate-gradient-shift"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(59,130,246,0.18), rgba(99,102,241,0.18), rgba(14,165,233,0.18), rgba(168,85,247,0.18))',
            backgroundSize: '300% 300%',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left content */}
          <div className="reveal">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              AI Solutions
            </span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-[52px] leading-[1.05]">
              AI-Powered Automation for{' '}
              <span className="gradient-text">Modern Businesses</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              We design, build, and deploy intelligent AI agents that work
              alongside your team — turning manual processes into autonomous,
              measurable outcomes.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-glow">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">{title}</h4>
                    <p className="text-sm text-slate-300">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                Build Your AI Agent <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-secondary">
                See capabilities
              </a>
            </div>
          </div>

          {/* Right — chat-style preview */}
          <div className="reveal relative">
            <div className="relative mx-auto max-w-md">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-cyan-400/30 blur-3xl" />

              <div className="relative rounded-[32px] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-2xl shadow-glow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-glow">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">SkyTech AI Agent</p>
                      <p className="text-xs text-emerald-400 flex items-center gap-1.5">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Online now
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">v2.4</span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-4 py-2.5 text-sm text-slate-200">
                    Hi! I can automate your customer support and resolve 80% of
                    tickets autonomously.
                  </div>
                  <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-blue-500 to-cyan-400 px-4 py-2.5 text-sm text-white shadow-glow">
                    Can you integrate with our CRM and Slack?
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-4 py-2.5 text-sm text-slate-200">
                    Absolutely — HubSpot, Salesforce, Slack, Zendesk, and 40+
                    other tools. Want me to walk you through setup?
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2.5">
                  {['80% faster', '24/7 coverage', 'Multilingual'].map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-medium text-slate-300"
                    >
                      <CheckCircle2 className="h-3 w-3 text-cyan-300" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
