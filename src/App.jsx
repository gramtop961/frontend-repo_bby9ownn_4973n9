import { useState } from 'react'
import { Briefcase, Sparkles, Shield, Zap, Layers, Globe, Users, Target, CheckCircle, Menu } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 grid place-items-center text-white font-bold">W</div>
          <span className="text-xl font-semibold tracking-tight">Workyaan</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#use-cases" className="hover:text-gray-900">Use Cases</a>
          <a href="#testimonials" className="hover:text-gray-900">Testimonials</a>
          <a href="/test" className="hover:text-gray-900">System Test</a>
        </div>
        <div className="hidden md:block">
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-2 text-sm font-semibold hover:bg-black transition-colors">
            Get Started
          </a>
        </div>
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-200/60" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2 text-sm">
            <a onClick={() => setOpen(false)} href="#services" className="block px-2 py-2 rounded hover:bg-gray-100">Services</a>
            <a onClick={() => setOpen(false)} href="#use-cases" className="block px-2 py-2 rounded hover:bg-gray-100">Use Cases</a>
            <a onClick={() => setOpen(false)} href="#testimonials" className="block px-2 py-2 rounded hover:bg-gray-100">Testimonials</a>
            <a onClick={() => setOpen(false)} href="/test" className="block px-2 py-2 rounded hover:bg-gray-100">System Test</a>
            <a onClick={() => setOpen(false)} href="#cta" className="block px-2 py-2 rounded bg-gray-900 text-white text-center">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-gray-700">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              Modern. Modular. Workyaan.
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Build better teams with a clean, cohesive workspace
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl">
              A balanced interface that blends clarity and playfulness. Manage services, explore use cases, and inspire trust with a thoughtfully structured experience.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3" id="cta">
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-indigo-700 transition-colors">
                Explore Services
              </a>
              <a href="#use-cases" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white font-semibold hover:bg-black transition-colors">
                See Use Cases
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-gray-600">Secure by design</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-600" />
                <span className="text-sm text-gray-600">Fast & responsive</span>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[500px] md:h-[560px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl border border-black/10 overflow-hidden bg-white/50">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { title: 'Talent Operations', desc: 'Streamlined workflows that keep hiring efficient and transparent.', icon: Briefcase, color: 'from-indigo-500 to-blue-500' },
    { title: 'Security & Compliance', desc: 'Privacy-first controls and audit-friendly documentation.', icon: Shield, color: 'from-emerald-500 to-teal-500' },
    { title: 'Automation', desc: 'Reduce manual steps with event-driven, no-code triggers.', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { title: 'Scalable Structure', desc: 'Modular building blocks that grow with your organization.', icon: Layers, color: 'from-purple-500 to-pink-500' },
  ]
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What we offer</h2>
          <p className="mt-3 text-gray-600">Cohesive, production-ready features packaged in clear, rounded containers with a symmetrical rhythm.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${it.color} text-white grid place-items-center shadow-inner`}>{<it.icon className="h-5 w-5" />}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600">
                Learn more
                <span aria-hidden>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    { icon: Globe, title: 'Global Hiring', desc: 'Orchestrate multi-region onboarding with consistent standards.' },
    { icon: Users, title: 'Team Collaboration', desc: 'Shared visibility across HR, finance, and operations.' },
    { icon: Target, title: 'Goal Tracking', desc: 'Align outcomes with measurable milestones and reviews.' },
    { icon: Layers, title: 'Project Pods', desc: 'Modular squads with clear ownership and timelines.' },
    { icon: Briefcase, title: 'Vendor Management', desc: 'Unified contracts, SLAs, and performance dashboards.' },
    { icon: Shield, title: 'Access Control', desc: 'Role-based permissions baked into every workflow.' },
  ]
  return (
    <section id="use-cases" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Where it fits</h2>
          <p className="mt-3 text-gray-600">Structured layouts and consistent spacing help your teams move faster.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <div key={idx} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gray-900 text-white grid place-items-center shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    {
      name: 'Maya Patel', role: 'Head of People, Northbeam',
      text: 'The interface feels balanced and modern. Our team navigates effortlessly and our hiring cycles are faster.'
    },
    {
      name: 'Jorge Ramirez', role: 'COO, Fluxlab',
      text: 'Cards, grids, and CTAs are exactly where you expect them. It’s intuitive without being boring.'
    },
    {
      name: 'Amelia Chen', role: 'VP Operations, AeroStack',
      text: 'The modular structure scales with us. We added new workflows without redesigning everything.'
    },
  ]
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Trusted by modern teams</h2>
          <p className="mt-3 text-gray-600">A symmetrical rhythm of feedback that speaks to clarity and impact.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600" />
                <div>
                  <figcaption className="text-sm font-semibold text-gray-900">{q.name}</figcaption>
                  <p className="text-xs text-gray-500">{q.role}</p>
                </div>
              </div>
              <blockquote className="mt-4 text-sm text-gray-700 leading-relaxed">“{q.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gray-900 grid place-items-center text-white text-sm font-bold">W</div>
          <span className="text-sm text-gray-600">© {new Date().getFullYear()} Workyaan. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <UseCases />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
