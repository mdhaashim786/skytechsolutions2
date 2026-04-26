import { Sparkles, Linkedin, Twitter, Github, Instagram } from 'lucide-react'

const cols = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Services',
    links: [
      'Cybersecurity',
      'IT Support',
      'Cloud Solutions',
      'Web Development',
      'Mobile Development',
      'AI Agents',
    ],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-glow">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[15px] font-bold tracking-tight text-white">
                  SkyTech
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">
                  Solutions
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm text-slate-400">
              Empowering businesses with smart tech and AI solutions —
              engineered for scale, designed for outcomes.
            </p>

            <div className="mt-6 flex gap-2.5">
              {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-slate-400 transition hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SkyTech Solutions · skytechsolutions.us
            · All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
