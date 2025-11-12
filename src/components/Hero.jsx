import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-200 to-blue-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-200 to-teal-100 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Live Preview
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Build modern teams, faster.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Workyaan streamlines hiring, onboarding, and project collaboration with an intuitive, modular workspace designed for clarity and momentum.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-gray-800">
                Explore Services
              </a>
              <a href="#use-cases" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:bg-gray-50">
                See Use Cases
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Trusted by teams that value speed, structure, and design.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
