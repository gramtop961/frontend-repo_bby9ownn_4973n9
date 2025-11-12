import { Briefcase, Users, Workflow, Shield } from 'lucide-react'

const services = [
  {
    title: 'Talent Sourcing',
    description: 'Find and evaluate top talent with AI-assisted matching and screening.',
    icon: Briefcase,
  },
  {
    title: 'Team Collaboration',
    description: 'Align goals and keep momentum with structured workflows and shared context.',
    icon: Users,
  },
  {
    title: 'Automation',
    description: 'Automate repetitive tasks and approvals to move work forward faster.',
    icon: Workflow,
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade controls, logs, and permissions for peace of mind.',
    icon: Shield,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What you can do with Workyaan</h2>
          <p className="mt-3 text-gray-600">Clean, modular building blocks that scale with your team.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-500 text-white flex items-center justify-center shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
