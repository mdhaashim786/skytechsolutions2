import { Star, Quote, ShieldCheck, StarHalf, MapPin } from 'lucide-react'

// Real reviews sourced from Google (skytechsolutions.us)
const reviews = [
  {
    name: 'Shoiabur Mohammed',
    initials: 'SM',
    rating: 5,
    when: 'a year ago',
    meta: '7 reviews · 8 photos',
    gradient: 'from-blue-500 to-cyan-400',
    text: 'The best customer service I have received so far for any electronics repair. One stop solution for all electronic repairs — had my Dell laptop screen replaced and my LG TV fixed at a very reasonable price. Highly recommend.',
  },
  {
    name: 'Imran Pathan',
    initials: 'IP',
    rating: 5,
    when: 'Edited a year ago',
    meta: '3 reviews',
    gradient: 'from-indigo-500 to-purple-500',
    text: 'The best folks to reach out for your IT needs. Highly recommend them.',
  },
  {
    name: 'David Hyson',
    initials: 'DH',
    rating: 5,
    when: '5 years ago',
    meta: '5 reviews',
    gradient: 'from-fuchsia-500 to-pink-400',
    text: 'I get the friendliest customer service. I would recommend Sky Tech to my friends and family.',
  },
  {
    name: 'BAABA SULE',
    initials: 'BS',
    rating: 5,
    when: '5 years ago',
    meta: 'Local Guide · 12 reviews · 49 photos',
    localGuide: true,
    gradient: 'from-emerald-500 to-teal-400',
    text: 'It was a great experience. Good and professional service that I can recommend to my friends.',
  },
  {
    name: 'Madhu Mohan Damodaran',
    initials: 'MM',
    rating: 5,
    when: '5 years ago',
    meta: 'Local Guide · 31 reviews · 17 photos',
    localGuide: true,
    gradient: 'from-amber-500 to-orange-400',
    categories: ['Responsiveness', 'Quality', 'Professionalism', 'Value'],
  },
  {
    name: 'Kimberly Scott',
    initials: 'KS',
    rating: 5,
    when: '5 years ago',
    meta: '2 reviews · 1 photo',
    gradient: 'from-sky-500 to-blue-500',
    categories: ['Responsiveness', 'Quality', 'Professionalism', 'Value'],
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

function GoogleG({ className = 'h-4 w-4' }) {
  // Google "G" mark
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.6 12.227c0-.694-.062-1.36-.18-2H12v3.787h5.39a4.61 4.61 0 0 1-2 3.025v2.513h3.235c1.892-1.744 2.975-4.31 2.975-7.325Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.964-.895 6.625-2.448l-3.235-2.513c-.896.6-2.04.957-3.39.957-2.604 0-4.81-1.76-5.598-4.123H3.063v2.59A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.402 13.873A6.012 6.012 0 0 1 6.09 12c0-.65.112-1.282.31-1.873v-2.59H3.064A10 10 0 0 0 2 12c0 1.612.385 3.137 1.063 4.463l3.34-2.59Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.998c1.467 0 2.785.503 3.823 1.491l2.866-2.865C16.96 3.014 14.696 2 12 2A9.998 9.998 0 0 0 3.063 7.537l3.34 2.59C7.19 7.762 9.395 6 12 6Z"
      />
    </svg>
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
            Don't take our word for it — here's what our customers say on
            Google.
          </p>

          {/* Aggregate rating */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
            <GoogleG className="h-4 w-4" />
            <span className="text-sm font-semibold text-white">5.0</span>
            <Stars rating={5} />
            <span className="text-sm text-slate-400">·</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-300" />
              Verified Google reviews
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

              <div className="flex items-center justify-between gap-3">
                <Stars rating={r.rating} />
                <GoogleG className="h-3.5 w-3.5 opacity-80" />
              </div>

              {r.text ? (
                <p className="mt-5 text-[15px] leading-relaxed text-slate-200">
                  "{r.text}"
                </p>
              ) : (
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                    Positive
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {r.categories.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-slate-200"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-7 flex items-center gap-3.5 border-t border-white/10 pt-5">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${r.gradient} text-sm font-bold text-white shadow-glow`}
                >
                  {r.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-sm font-semibold text-white">
                      {r.name}
                    </p>
                    {r.localGuide && (
                      <span
                        title="Google Local Guide"
                        className="inline-flex items-center gap-0.5 rounded-full bg-amber-300/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-200"
                      >
                        <MapPin className="h-2.5 w-2.5" />
                        Local Guide
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {r.meta} · {r.when}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-xs text-slate-500">
          Reviews shown as posted on{' '}
          <a
            href="https://www.google.com/search?q=skytechsolutions.us+reviews"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 underline-offset-4 hover:text-white hover:underline"
          >
            Google
          </a>
          .
        </p>
      </div>
    </section>
  )
}
