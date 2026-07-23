import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services', label: 'Teeth Whitening' },
  { href: '/services', label: 'Root Canal' },
  { href: '/services', label: 'Dental Implants' },
  { href: '/services', label: 'Orthodontics' },
  { href: '/services', label: 'Emergency Care' },
]

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="relative z-10 section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-14">
          <div>
            <div className="mb-5">
              <div className="text-lg font-heading font-bold leading-tight">Alshafi</div>
              <div className="text-[9px] tracking-[0.25em] uppercase text-primary-foreground/50 font-semibold leading-tight">
                Dental Clinic
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Premium dental care with cutting-edge technology and compassionate service. Your smile is our passion.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/923159086575" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-all">
                <i className="fa-brands fa-whatsapp text-lg" />
              </a>
              <a href="tel:03159086575"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-all">
                <i className="fa-solid fa-phone text-lg" />
              </a>
              <a href="mailto:info@alshafidental.pk"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-all">
                <i className="fa-regular fa-envelope text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-6 text-primary-foreground/70">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/50 hover:text-secondary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-6 text-primary-foreground/70">Services</h3>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i}>
                  <Link href={s.href} className="text-primary-foreground/50 hover:text-secondary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-6 text-primary-foreground/70">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <i className="fa-solid fa-phone text-secondary mt-1 w-4 text-center text-sm" />
                <div>
                  <a href="tel:03159086575" className="text-sm font-medium hover:text-secondary transition-colors">0315-9086575</a>
                  <div className="text-xs text-primary-foreground/40">Available 24/7</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <i className="fa-regular fa-envelope text-secondary mt-1 w-4 text-center text-sm" />
                <div className="text-sm text-primary-foreground/60">info@alshafidental.pk</div>
              </li>
              <li className="flex gap-3 items-start">
                <i className="fa-solid fa-location-dot text-secondary mt-1 w-4 text-center text-sm" />
                <div>
                  <div className="text-sm text-primary-foreground/60">Shakrial, Bharma Town</div>
                  <div className="text-xs text-primary-foreground/40">Near Fazal-e-Rabi Clinic, Islamabad</div>
                </div>
              </li>
              <li className="flex gap-3 items-start pt-2">
                <i className="fa-regular fa-clock text-secondary mt-1 w-4 text-center text-sm" />
                <div>
                  <div className="text-sm text-primary-foreground/60">Mon-Sat: 10 AM - 10 PM</div>
                  <div className="text-xs text-primary-foreground/40">Emergency: 24/7</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/40">
              &copy; {new Date().getFullYear()} Alshafi Dental Clinic. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-foreground/40 hover:text-secondary transition-colors text-xs tracking-wider uppercase">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/40 hover:text-secondary transition-colors text-xs tracking-wider uppercase">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
