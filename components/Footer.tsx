import { Phone, Mail } from 'lucide-react'

const serviceLinks = [
  'Maid Services',
  'Nanny Services',
  'Nursing Staff',
  'Baby Sitting',
  'Patient Care',
  'Elder Care',
  'Cook & Chef',
  'Driver Services',
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center">
                <span className="text-white font-bold font-display text-sm">K</span>
              </div>
              <span className="font-display text-lg font-bold">
                Kaam <span className="text-teal-400">Wali</span>
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-6">
              Pakistan&apos;s most trusted provider of professional, background-verified female staff for
              homes and businesses.
            </p>
            <div className="space-y-2.5">
              <a
                href="tel:+923306363300"
                className="flex items-center gap-2.5 text-white/35 hover:text-teal-400 transition-colors text-sm group"
              >
                <Phone size={13} className="group-hover:scale-110 transition-transform" />
                +92 330 636 3300
              </a>
              <a
                href="mailto:info@kaamwali.org"
                className="flex items-center gap-2.5 text-white/35 hover:text-teal-400 transition-colors text-sm group"
              >
                <Mail size={13} className="group-hover:scale-110 transition-transform" />
                info@kaamwali.org
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white/60 mb-4 text-[11px] tracking-[0.18em] uppercase">
              Our Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/35 hover:text-teal-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white/60 mb-4 text-[11px] tracking-[0.18em] uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/35 hover:text-teal-400 transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Book column */}
          <div>
            <h3 className="font-semibold text-white/60 mb-4 text-[11px] tracking-[0.18em] uppercase">
              Book a Service
            </h3>
            <p className="text-white/35 text-sm mb-5 leading-relaxed">
              Ready to find the perfect household professional? We&apos;re here to help.
            </p>
            <a
              href="#contact"
              className="inline-block bg-teal-600 hover:bg-teal-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/25 hover:-translate-y-px"
            >
              Get Started
            </a>
            <div className="mt-8">
              <p className="text-white/30 text-[11px] uppercase tracking-wider mb-3">Follow us</p>
              <div className="flex gap-2.5">
                {[
                  { letter: 'f', label: 'Facebook' },
                  { letter: 'in', label: 'Instagram' },
                  { letter: 'li', label: 'LinkedIn' },
                  { letter: 'x', label: 'X/Twitter' },
                ].map(({ letter, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-8 h-8 rounded-full bg-white/8 hover:bg-teal-600/35 text-white/40 hover:text-white transition-all duration-200 text-[10px] font-medium"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-xs">
            © 2025 Kaam Wali. All Rights Reserved.
          </p>
          <p className="text-white/15 text-xs">
            Empowering households across Pakistan with trusted female staff.
          </p>
        </div>
      </div>
    </footer>
  )
}
