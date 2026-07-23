'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-md' : 'glass-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group">
            <div className="hidden sm:block">
              <div className={`text-base md:text-lg font-heading font-bold leading-tight tracking-tight transition-colors ${
                scrolled ? 'text-primary' : 'text-primary-foreground'
              }`}>
                Alshafi
              </div>
              <div className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-secondary font-semibold leading-tight">
                Dental Clinic
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive(item.href)
                    ? scrolled ? 'text-primary' : 'text-primary-foreground'
                    : scrolled
                      ? 'text-muted-foreground hover:text-foreground'
                      : 'text-primary-foreground/70 hover:text-primary-foreground'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`btn-premium shadow-lg ${
                scrolled
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20'
                  : 'bg-secondary text-primary-foreground hover:bg-secondary/90 shadow-secondary/25'
              }`}
            >
              <i className="fa-regular fa-calendar-check" />
              Book Now
            </Link>
          </div>

          <button
            className={`lg:hidden relative w-10 h-10 rounded-lg transition-colors flex items-center justify-center ${
              scrolled ? 'hover:bg-muted' : 'hover:bg-primary-foreground/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 rounded-full transition-all ${
                scrolled ? 'bg-foreground' : 'bg-primary-foreground'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block h-0.5 rounded-full transition-all ${
                scrolled ? 'bg-foreground' : 'bg-primary-foreground'
              } ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 rounded-full transition-all ${
                scrolled ? 'bg-foreground' : 'bg-primary-foreground'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className={`lg:hidden pb-6 space-y-1 animate-fade-in-down rounded-2xl ${
            scrolled ? '' : 'bg-primary/90 backdrop-blur-xl p-4 -mx-4'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? scrolled ? 'text-primary bg-primary/5' : 'text-primary-foreground bg-primary-foreground/10'
                    : scrolled
                      ? 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      : 'text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className={`block w-full px-4 py-3 rounded-lg font-semibold text-center text-sm transition-colors ${
                  scrolled
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-secondary text-primary-foreground hover:bg-secondary/90'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fa-regular fa-calendar-check mr-2" />
                Book Appointment
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
