export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500" />
              <span className="text-xl font-bold tracking-tight">Workyaan</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-sm">
              Modular, modern workflows for teams who value clarity and momentum.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Email: hello@workyaan.com</li>
              <li>Support: support@workyaan.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">CTA</h4>
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-gray-800"
            >
              Book a demo
            </a>
          </div>
        </div>

        <div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Workyaan. All rights reserved.</div>
      </div>
    </footer>
  )
}
