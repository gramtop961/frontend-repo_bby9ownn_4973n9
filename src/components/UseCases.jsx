import { Sparkles, Globe, Building2, Rocket } from 'lucide-react'

const cases = [
  { title: 'Agencies', desc: 'Coordinate cross-functional teams with clear briefs and approvals.', icon: Building2 },
  { title: 'Startups', desc: 'Move from idea to ship with structured sprints and async updates.', icon: Rocket },
  { title: 'Remote Teams', desc: 'Keep alignment across time zones with context-rich streams.', icon: Globe },
  { title: 'Creators', desc: 'Collaborate with clients using shared boards and milestones.', icon: Sparkles },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for real workflows</h2>
          <p className="mt-3 text-gray-600">Practical scenarios that show how Workyaan fits your day-to-day.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-500 text-white flex items-center justify-center shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
