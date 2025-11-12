const testimonials = [
  {
    quote:
      'We reduced onboarding time by 40% and finally have a single source of truth everyone can follow.',
    author: 'Ava Collins',
    role: 'Operations Lead, Orbit Labs',
  },
  {
    quote:
      'It’s the rare tool that is both delightful and rigorous. Our team ships faster and with fewer meetings.',
    author: 'Luis Martinez',
    role: 'Head of Product, Nera',
  },
  {
    quote:
      'Workyaan brought structure without friction. The modular approach clicked with our workflows.',
    author: 'Priya Shah',
    role: 'Agency Partner, Forma Co.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What teams are saying</h2>
          <p className="mt-3 text-gray-600">Real results from teams who switched to a modular workflow.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-500">
                <span className="font-medium text-gray-900">{t.author}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
