'use client'

import Link from 'next/link'
import { Reveal } from '@/components/ui/reveal'

const milestones = [
  { year: '2010', title: 'Clinic Founded', desc: 'Dr. Alshafi established the clinic with a vision for premium dental care.' },
  { year: '2015', title: 'Expanded Services', desc: 'Added advanced treatments including implants and orthodontics.' },
  { year: '2020', title: 'Modern Upgrade', desc: 'State-of-the-art equipment and digital dentistry integration.' },
  { year: '2024', title: '5,000+ Smiles', desc: 'Celebrated treating over 5,000 satisfied patients.' },
]

const values = [
  { icon: 'fa-solid fa-heart', title: 'Compassion', desc: 'Every patient deserves gentle, understanding care.' },
  { icon: 'fa-solid fa-gem', title: 'Excellence', desc: 'We pursue the highest standards in every treatment.' },
  { icon: 'fa-solid fa-handshake', title: 'Trust', desc: 'Built on transparent communication and integrity.' },
  { icon: 'fa-solid fa-lightbulb', title: 'Innovation', desc: 'Embracing the latest technology for better outcomes.' },
]

export default function About() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center hero-overlay">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/conceltation.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/60" />
        <div className="relative z-10 section-container text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm mb-6">
              <i className="fa-solid fa-circle text-[6px] text-secondary animate-pulse" />
              About Our Clinic
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Dedicated to <br /><span className="text-gradient-gold">Your Smile</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              For over 15 years, Alshafi Dental Clinic has been transforming smiles with a perfect blend of expertise, technology, and genuine care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent rounded-3xl" />
                <div className="relative image-frame shadow-2xl">
                  <img src="/images/wating ares.jpeg" alt="Alshafi Dental Clinic" className="w-full h-[30rem] object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
                  <div className="text-3xl font-heading font-bold text-secondary">15+</div>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </Reveal>
            <div className="space-y-6">
              <Reveal delay={100}>
                <div className="gold-accent" />
              </Reveal>
              <Reveal delay={150}>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                  Our Story
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-muted-foreground leading-relaxed">
                  Alshafi Dental Clinic was founded with a simple mission: provide world-class dental care in a warm, welcoming environment. What started as a small practice has grown into one of Islamabad&apos;s most trusted dental destinations.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <p className="text-muted-foreground leading-relaxed">
                  Our team combines decades of collective experience with a passion for innovation. We invest in the latest technology and continuously refine our techniques to ensure every patient receives the best possible care.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-lg">
                    <i className="fa-solid fa-check-circle text-secondary text-sm" />
                    <span className="text-sm font-medium">5000+ Patients</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-lg">
                    <i className="fa-solid fa-star text-secondary text-sm" />
                    <span className="text-sm font-medium">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-lg">
                    <i className="fa-solid fa-award text-secondary text-sm" />
                    <span className="text-sm font-medium">Award Winning</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-16">
              <div className="gold-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide everything we do</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card-premium p-8 text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <i className={`${v.icon} text-2xl text-secondary`} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-background">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-16">
              <div className="gold-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Milestones that shaped our clinic</p>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary/30 via-secondary/10 to-transparent hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className={`relative flex items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:flex flex-1 justify-end">
                      {i % 2 === 0 && (
                        <div className="text-right">
                          <div className="text-4xl font-heading font-bold text-secondary">{m.year}</div>
                          <h3 className="font-heading font-bold text-xl text-foreground mt-2">{m.title}</h3>
                          <p className="text-muted-foreground text-sm mt-2">{m.desc}</p>
                        </div>
                      )}
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-lg" />
                    </div>
                    <div className="hidden md:flex flex-1">
                      {i % 2 !== 0 && (
                        <div>
                          <div className="text-4xl font-heading font-bold text-secondary">{m.year}</div>
                          <h3 className="font-heading font-bold text-xl text-foreground mt-2">{m.title}</h3>
                          <p className="text-muted-foreground text-sm mt-2">{m.desc}</p>
                        </div>
                      )}
                    </div>
                    <div className="md:hidden card-premium p-6 w-full">
                      <div className="text-2xl font-heading font-bold text-secondary mb-1">{m.year}</div>
                      <h3 className="font-heading font-bold text-lg text-foreground">{m.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{m.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-muted">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-16">
              <div className="gold-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Passionate professionals dedicated to your smile</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: '/images/conceltation.jpeg',
                name: 'Dr. Muhammad Alshafi',
                role: 'Founder & Lead Dentist',
                desc: 'BDS with 15+ years of experience in general and cosmetic dentistry.',
              },
              {
                img: '/images/inspection.jpeg',
                name: 'Dr. Sarah Ahmed',
                role: 'Orthodontics Specialist',
                desc: 'Specialized in braces, aligners, and advanced orthodontic treatments.',
              },
              {
                img: '/images/wating ares.jpeg',
                name: 'Dr. Usman Khan',
                role: 'Implantologist',
                desc: 'Expert in dental implants and restorative procedures.',
              },
            ].map((member, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card-premium overflow-hidden group">
                  <div className="relative h-72 overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-foreground">{member.name}</h3>
                    <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 hero-overlay">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/booking place.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative z-10 section-container text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Experience the Alshafi Difference
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Join thousands of happy patients and discover premium dental care that puts your comfort first.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-premium bg-secondary text-primary-foreground hover:bg-secondary/90 shadow-lg">
                <i className="fa-regular fa-calendar-check" />
                Book Appointment
              </Link>
              <Link href="/services" className="btn-premium border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <i className="fa-regular fa-eye" />
                View Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
