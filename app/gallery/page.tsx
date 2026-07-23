'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Reveal } from '@/components/ui/reveal'

const categories = ['All', 'Clinic', 'Treatment', 'Team', 'Facilities']

const images = [
  { src: '/images/inspection.jpeg', alt: 'Modern Treatment Room', category: 'Clinic' },
  { src: '/images/booking place.jpeg', alt: 'Reception Area', category: 'Clinic' },
  { src: '/images/wating ares.jpeg', alt: 'Patient Waiting Area', category: 'Facilities' },
  { src: '/images/conceltation.jpeg', alt: 'Consultation Room', category: 'Clinic' },
  { src: '/images/inspection.jpeg', alt: 'Dental Checkup', category: 'Treatment' },
  { src: '/images/booking place.jpeg', alt: 'Clinic Front Desk', category: 'Facilities' },
  { src: '/images/wating ares.jpeg', alt: 'Comfortable Lounge', category: 'Facilities' },
  { src: '/images/conceltation.jpeg', alt: 'Team Consultation', category: 'Team' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? images : images.filter(i => i.category === activeCategory)

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center hero-overlay">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/wating ares.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/60" />
        <div className="relative z-10 section-container text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm mb-6">
              <i className="fa-solid fa-circle text-[6px] text-secondary animate-pulse" />
              Our Gallery
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Inside <span className="text-gradient-gold">Our Clinic</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Take a visual tour of our state-of-the-art facility designed for your comfort and care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 bg-background">
        <div className="section-container">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                  <img src={img.src} alt={img.alt} className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                    <div>
                      <p className="text-primary-foreground font-heading font-bold text-lg">{img.alt}</p>
                      <span className="text-primary-foreground/70 text-xs uppercase tracking-wider">{img.category}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-28 hero-overlay">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/booking place.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative z-10 section-container text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Come See Us in Person
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Experience our premium facility firsthand. Schedule a visit today.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link href="/contact" className="btn-premium bg-secondary text-primary-foreground hover:bg-secondary/90 shadow-lg">
              <i className="fa-regular fa-calendar-check" />
              Book a Visit
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
