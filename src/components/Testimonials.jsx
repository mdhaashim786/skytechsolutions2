import { Star, Quote, ShieldCheck, StarHalf } from 'lucide-react'

// Real reviews sourced from Clutch (clutch.co/profile/skytech-solutions)
const reviews = [
  {
    name: 'Edward Pilkington',
    role: 'Chief Marketing Officer',
    company: 'Diageo',
    initials: 'EP',
    rating: 5,
    project: 'Order Processing & Inventory Management',
    gradient: 'from-blue-500 to-cyan-400',
    text: 'Their proactive approach kept things on track, and dedication stood out at every stage of the engagement.',
  },
  {
    name: 'Sankaran Jayagopi',
    role: 'CTO',
    company: 'PsiberTech Solutions',
    initials: 'SJ',
    rating: 5,
    project: 'IT & Business Services',
    gradient: 'from-indigo-500 to-purple-500',
    text: 'They feel like an integral part of our team — responsive, reliable, and deeply invested in our success.',
  },
  {
    name: 'Grace Ottley',
    role: 'CEO',
    company: 'All City Duct Cleaning',
    initials: 'GO',
    rating: 4.5,
    project: 'Digital Marketing, Customer Service & Sales',
    gradient: 'from-fuchsia-500 to-pink-400',
    text: 'What stood out most about SkyTech Solutions was their all-in-one service offering — one partner for everything we needed.',
  },
  {
    name: 'Mai Alosaimi',
    role: 'Budget Controller',
    company: 'Telecom Company',
    initials: 'MA',
    rating: 5,
    project: 'Custom Software Development',
    gradient: 'from-emerald-500 to-teal-400',
    text: 'They ensured complete transparency and timely project execution from kickoff all the way through to delivery.',
  },
  {
    name: 'Ned Linnen',
    role: 'EVP & Chief HR Officer',
    company: 'Avis Budget Group',
    initials: 'NL',
    rating: 5,
    project: 'Call Center Services',
    gradient: 'from-amber-500 to-orange-400',
    text: 'They balanced accuracy with an ear-to-ear customer focus — the kind of operational quality that is genuinely hard to find.',
  },
  {
    name: 'Joe Lewis',
    role: 'President of Sales',
    company: 'Merchants Bank Inc.',
    initials: 'JL',
    rating: 4,
    project: 'BPO & Call Center Services',
    gradient: 'from-sky-500 to-blue-500',
    text: 'The relationship with the staff on a personal and business level is exceptional — they treat our customers like their own.',
  },
]

function Stars({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <div className="flex items-center gap-1 text-amber-300">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} className="h-4 w-4 fill-current" />
      ))}
      {half && <StarHalf className="h-4 w-4 fill-current" />}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`e${i}`} className="h-4 w-4 text-white/15" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-pad relative">
      <div className="container-x">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="eyebrow">Loved by clients</span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Real results from{' '}
            <span className="gradient-text">real businesses</span>
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Don't take our word for it — here's what teams shipping with SkyTech
            have to say.
          </p>

          {/* Aggregate rating */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
            <Stars rating={4.8} />
            <span className="text-sm font-semibold text-white">4.8 / 5</span>
            <span className="text-sm text-slate-400">·</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-300" />
              Verified on Clutch
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-glow"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-white/[0.06] group-hover:text-white/[0.12] transition-colors" />

              <Stars rating={r.rating} />

              <p className="mt-5 text-[15px] leading-relaxed text-slate-200">
                "{r.text}"
              </p>

              <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-400">
                {r.project}
              </p>

              <div className="mt-7 flex items-center gap-3.5 border-t border-white/10 pt-5">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${r.gradient} text-sm font-bold text-white shadow-glow`}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-slate-400">
                    {r.role} · {r.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-xs text-slate-500">
          Reviews sourced from verified clients on{' '}
          <a
            href="https://clutch.co/profile/skytech-solutions"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 underline-offset-4 hover:text-white hover:underline"
          >
            Clutch
          </a>
          .
        </p>
      </div>
    </section>
  )
}
