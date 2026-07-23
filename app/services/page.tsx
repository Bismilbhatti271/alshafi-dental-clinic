'use client'

import Link from 'next/link'
import { Reveal } from '@/components/ui/reveal'

const services = [
  { icon: 'fa-regular fa-star', name: 'Teeth Whitening', description: 'Professional teeth whitening for a brighter, more confident smile that lights up every room.' },
  { icon: 'fa-solid fa-tooth', name: 'Root Canal Treatment', description: 'Expert endodontic care to save your natural teeth with minimal discomfort.' },
  { icon: 'fa-regular fa-gem', name: 'Dental Implants', description: 'Permanent tooth replacement solution with natural appearance and lasting durability.' },
  { icon: 'fa-solid fa-chart-line', name: 'Braces & Orthodontics', description: 'Straighten your teeth with modern orthodontic treatments for a perfect smile.' },
  { icon: 'fa-regular fa-pen-to-square', name: 'General Dentistry', description: 'Comprehensive checkups, cleaning, and preventive care for optimal oral health.' },
  { icon: 'fa-regular fa-face-smile', name: 'Cosmetic Dentistry', description: 'Enhance your smile with veneers, bonding, and aesthetic treatments.' },
  { icon: 'fa-solid fa-teeth', name: 'Crown & Bridge', description: 'Custom crowns and bridges to restore damaged or missing teeth seamlessly.' },
  { icon: 'fa-solid fa-hand-sparkles', name: 'Gum Treatment', description: 'Specialized care for gum health and disease prevention.' },
  { icon: 'fa-regular fa-clock', name: 'Emergency Care', description: '24/7 emergency dental care for urgent situations. We\'re always here for you.' },
  { icon: 'fa-regular fa-face-smile-wink', name: 'Pediatric Dentistry', description: 'Specialized care for children\'s dental health in a friendly, comforting environment.' },
  { icon: 'fa-solid fa-scissors', name: 'Extractions', description: 'Safe and painless tooth extraction when necessary with gentle aftercare.' },
  { icon: 'fa-solid fa-crown', name: 'Dentures', description: 'Custom-fitted dentures for complete tooth replacement with natural comfort.' },
]

const highlights = [
  { icon: 'fa-solid fa-syringe', title: 'Painless Procedures', desc: 'Modern techniques ensure comfortable, pain-free treatments' },
  { icon: 'fa-solid fa-microscope', title: 'Advanced Technology', desc: 'State-of-the-art equipment for precise diagnostics' },
  { icon: 'fa-regular fa-heart', title: 'Personalized Care', desc: 'Treatment plans customized to your specific needs' },
]

export default function Services() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center hero-overlay">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/inspection.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" />
        <div className="relative z-10 section-container text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm mb-6">
              <i className="fa-solid fa-circle text-[6px] text-secondary animate-pulse" />
              Our Services
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Complete <span className="text-gradient-gold">Dental Care</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Comprehensive dental solutions tailored to your unique needs with precision and compassion
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="card-premium p-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <i className={`${s.icon} text-xl text-secondary`} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-secondary transition-colors">{s.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors group/link">
                    Book Now <i className="fa-solid fa-arrow-right text-xs group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Reveal>
                <div className="gold-accent" />
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-[0.95]">
                  Excellence in <br />
                  <span className="text-gradient">Every Treatment</span>
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="text-muted-foreground leading-relaxed">
                  We combine advanced technology with personalized care to deliver exceptional results for every patient.
                </p>
              </Reveal>
              <div className="space-y-6">
                {highlights.map((h, i) => (
                  <Reveal key={i} delay={200 + i * 50}>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <i className={`${h.icon} text-primary`} />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">{h.title}</h3>
                        <p className="text-muted-foreground text-sm">{h.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={350}>
                <Link href="/contact" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                  <i className="fa-regular fa-calendar-check" />
                  Book Appointment
                </Link>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent rounded-[2.5rem]" />
                <div className="relative image-frame shadow-2xl">
                  <img src="/images/wating ares.jpeg" alt="Alshafi Dental" className="w-full h-[30rem] object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-32 hero-overlay">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/booking place.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative z-10 section-container text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Schedule Your Visit Today
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Don&apos;t wait for dental problems. Get expert care now.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-premium bg-secondary text-primary-foreground hover:bg-secondary/90 shadow-lg">
                <i className="fa-regular fa-calendar-check" />
                Book Appointment
              </Link>
              <a href="tel:03159086575" className="btn-premium border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <i className="fa-solid fa-phone" />
                Call 0315-9086575
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
