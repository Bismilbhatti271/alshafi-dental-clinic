'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Reveal } from '@/components/ui/reveal'

const services = [
  { icon: 'fa-regular fa-pen-to-square', title: 'General Dentistry', desc: 'Checkups, cleanings & fillings' },
  { icon: 'fa-regular fa-star', title: 'Teeth Whitening', desc: 'Professional brightening' },
  { icon: 'fa-solid fa-tooth', title: 'Root Canal', desc: 'Pain-free treatment' },
  { icon: 'fa-regular fa-gem', title: 'Crowns & Bridges', desc: 'Custom restorations' },
  { icon: 'fa-solid fa-teeth', title: 'Dental Implants', desc: 'Permanent replacement' },
  { icon: 'fa-solid fa-chart-line', title: 'Orthodontics', desc: 'Perfect alignment' },
]

const stats = [
  { icon: 'fa-regular fa-calendar', value: '15+', label: 'Years Experience' },
  { icon: 'fa-regular fa-face-smile', value: '5000+', label: 'Happy Patients' },
  { icon: 'fa-solid fa-star', value: '4.9/5', label: 'Patient Rating' },
  { icon: 'fa-solid fa-trophy', value: '100%', label: 'Satisfaction' },
]

export default function Home() {
  return (
    <div className="w-full">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-spin-slow">
            <path fill="oklch(0.65 0.12 85)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.2,88.1,-0.9C86.2,14.5,79.8,28.9,70.4,41.1C61,53.3,48.5,63.3,34.7,71.1C20.9,78.9,5.8,84.5,-8.4,83.2C-22.6,81.9,-36,73.7,-48.4,63.2C-60.9,52.7,-72.4,39.9,-78.1,24.8C-83.9,9.7,-83.9,-7.7,-77.8,-22.6C-71.7,-37.6,-59.5,-50.1,-46.1,-58.3C-32.8,-66.4,-18.2,-70.2,-2.9,-68.1C12.4,-66,26.5,-58,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
            <path fill="oklch(0.65 0.12 85)" d="M39.9,-65.9C53.3,-59.9,66.8,-52.3,74.2,-41C81.6,-29.7,83.1,-14.8,79.5,-1.8C75.9,11.2,67.3,22.4,57.8,32.6C48.4,42.8,38.1,52,26.6,58.5C15,65,2.2,68.8,-9.8,67.1C-21.8,65.4,-33.1,58.2,-43.1,48.7C-53.2,39.2,-62.1,27.5,-66.7,14C-71.3,0.6,-71.6,-14.7,-65.5,-27.1C-59.3,-39.5,-46.7,-49,-33.9,-55.6C-21.1,-62.2,-8.1,-65.9,3.9,-71.9C15.9,-77.9,26.5,-71.9,39.9,-65.9Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full border border-secondary/10 animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-secondary/10 animate-float" />

        <div className="relative z-10 w-full pt-32 pb-32 md:pt-40 md:pb-40">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Reveal>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 text-sm">
                    <i className="fa-solid fa-tooth text-secondary text-xs" />
                    Islamabad&apos;s Trusted Dental Clinic
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground leading-[0.95] tracking-tight">
                    Your Smile,{' '}
                    <span className="text-gradient-gold">Our Passion</span>
                  </h1>
                </Reveal>
                <Reveal delay={150}>
                  <p className="text-lg md:text-xl text-primary-foreground/60 leading-relaxed max-w-xl font-light">
                    Experience world-class dental care with cutting-edge technology and a team of compassionate professionals dedicated to your perfect smile.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact"
                      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-primary-foreground rounded-xl font-semibold text-base overflow-hidden shadow-xl shadow-secondary/30 hover:shadow-2xl hover:shadow-secondary/40 transition-all">
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <i className="fa-regular fa-calendar-check relative" />
                      <span className="relative">Book Appointment</span>
                      <i className="fa-solid fa-arrow-right text-sm relative group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a href="https://wa.me/923159086575" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-foreground/20 text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary-foreground/10 hover:border-primary-foreground/30 transition-all group">
                      <i className="fa-brands fa-whatsapp text-xl group-hover:scale-110 transition-transform" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </Reveal>
                <Reveal delay={250}>
                  <div className="flex flex-wrap gap-8 pt-4">
                    {stats.slice(0, 3).map((s, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl md:text-4xl font-heading font-bold text-secondary">{s.value}</div>
                        <div className="text-xs text-primary-foreground/50 tracking-wider uppercase mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-10 bg-gradient-to-br from-secondary/10 via-transparent to-transparent rounded-full blur-3xl" />
                  <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full border-2 border-secondary/20 flex items-center justify-center animate-float-slow bg-primary-foreground/5 backdrop-blur-sm">
                    <div className="text-center px-8">
                      <div className="text-7xl md:text-8xl font-heading font-bold text-gradient-gold leading-none">4.9</div>
                      <div className="flex justify-center gap-1 mt-4 mb-3">
                        {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-secondary" />)}
                      </div>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-secondary/50 to-transparent mx-auto mb-3" />
                      <p className="text-primary-foreground/70 text-sm font-medium">Google Reviews</p>
                      <p className="text-primary-foreground/40 text-xs mt-1">5000+ Happy Patients</p>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 w-16 h-16 rounded-2xl bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center animate-float">
                    <i className="fa-solid fa-star text-secondary text-2xl" />
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                    <i className="fa-solid fa-shield-halved text-primary-foreground/80 text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10 leading-none">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-auto" style={{ height: '80px' }}>
            <path fill="oklch(0.985 0.005 90)" d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z" />
            <path fill="oklch(0.985 0.005 90)" d="M0,80 C360,40 1080,100 1440,60 L1440,120 L0,120 Z" opacity="0.5" />
          </svg>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="relative -mt-20 z-20">
        <div className="section-container">
          <Reveal>
            <div className="bg-card rounded-2xl border border-border shadow-xl p-8 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((s, i) => (
                  <div key={i} className="text-center group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <i className={`${s.icon} text-secondary`} />
                    </div>
                    <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-32 md:py-40 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent rounded-[2.5rem]" />
                <div className="relative image-frame shadow-2xl">
                  <img src="/images/wating ares.jpeg" alt="Alshafi Dental" className="w-full h-[32rem] object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-xl border border-border">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-quote-left text-secondary text-xl" />
                    <p className="text-sm font-medium text-foreground">Patient comfort is our priority</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="space-y-6 lg:pl-8">
              <Reveal delay={100}>
                <div className="gold-accent" />
              </Reveal>
              <Reveal delay={150}>
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[0.95]">
                  Welcome to <br />
                  <span className="text-gradient">Alshafi Dental</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  At Alshafi Dental Clinic, we combine premium dental care with a warm, welcoming atmosphere. Our team uses the latest technology to provide the highest quality treatment.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict sterilization standards and focus on personalized care for every patient, whether you need a routine checkup or advanced dental treatment.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {[
                    { icon: 'fa-solid fa-user-doctor', label: 'Expert Team' },
                    { icon: 'fa-solid fa-microscope', label: 'Modern Tech' },
                    { icon: 'fa-solid fa-hand-sparkles', label: 'Sterilized' },
                    { icon: 'fa-solid fa-badge-check', label: 'Certified' },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-muted">
                      <i className={`${f.icon} text-secondary`} />
                      <span className="font-medium text-sm text-foreground">{f.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={350}>
                <Link href="/about" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                  <i className="fa-regular fa-circle-right" />
                  Learn More About Us
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-32 md:py-40 bg-muted">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-16">
              <div className="gold-accent mx-auto mb-4" />
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[0.95] mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive dental care tailored to your needs with advanced technology
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card-premium p-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <i className={`${s.icon} text-xl text-secondary`} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors group/link">
                    Learn More <i className="fa-solid fa-arrow-right text-xs group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                <i className="fa-regular fa-eye" />
                View All Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-32 md:py-40 bg-background">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-16">
              <div className="gold-accent mx-auto mb-4" />
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[0.95] mb-4">
                Why Choose Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                What sets Alshafi Dental Clinic apart
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-solid fa-microscope', title: 'Latest Technology', desc: 'Advanced equipment for precise, comfortable treatment' },
              { icon: 'fa-solid fa-user-doctor', title: 'Expert Team', desc: 'Highly qualified professionals with years of experience' },
              { icon: 'fa-regular fa-face-smile', title: 'Pain-Free Care', desc: 'Gentle techniques and modern anesthesia' },
              { icon: 'fa-solid fa-people-group', title: 'Family Friendly', desc: 'Services for patients of all ages' },
              { icon: 'fa-solid fa-hand-sparkles', title: 'Sterilized Environment', desc: 'Highest hygiene standards always maintained' },
              { icon: 'fa-regular fa-credit-card', title: 'Transparent Pricing', desc: 'Competitive rates with no hidden charges' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="card-premium p-8 text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <i className={`${item.icon} text-2xl text-secondary`} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS CAROUSEL ===== */}
      <section className="py-32 md:py-40 bg-muted overflow-hidden">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-16">
              <div className="gold-accent mx-auto mb-4" />
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[0.95] mb-4">
                What Patients Say
              </h2>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-secondary" />)}
              </div>
              <p className="text-muted-foreground">Trusted by thousands of happy patients</p>
            </div>
          </Reveal>
        </div>
        <ReviewCarousel />
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="py-32 md:py-40 bg-background">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-16">
              <div className="gold-accent mx-auto mb-4" />
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[0.95] mb-4">
                Our Clinic
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                State-of-the-art facility designed for your comfort
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: '/images/inspection.jpeg', alt: 'Treatment Room' },
              { src: '/images/booking place.jpeg', alt: 'Reception' },
              { src: '/images/wating ares.jpeg', alt: 'Waiting Area' },
              { src: '/images/conceltation.jpeg', alt: 'Consultation' },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 100}>
                <Link href="/gallery" className="group relative block overflow-hidden rounded-2xl shadow-lg">
                  <img src={img.src} alt={img.alt} className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                    <div className="flex items-center gap-2">
                      <span className="text-primary-foreground font-heading font-bold">{img.alt}</span>
                      <i className="fa-solid fa-arrow-right text-primary-foreground text-sm" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="text-center mt-12">
              <Link href="/gallery" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                <i className="fa-regular fa-images" />
                View Full Gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-32 md:py-40 hero-overlay">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/booking place.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative z-10 section-container text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-[0.95] mb-8">
              Ready for Your <br />
              <span className="text-gradient-gold">Perfect Smile?</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-12">
              Book your appointment today and experience the difference of premium dental care.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-premium bg-secondary text-primary-foreground hover:bg-secondary/90 shadow-xl shadow-secondary/25">
                <i className="fa-regular fa-calendar-check" />
                Book Appointment
              </Link>
              <a href="tel:03159086575" className="btn-premium border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <i className="fa-solid fa-phone" />
                Call 0315-9086575
              </a>
              <a href="https://wa.me/923159086575" target="_blank" rel="noopener noreferrer" className="btn-premium border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <i className="fa-brands fa-whatsapp" />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Floating Actions */}
      <FloatingActions />
    </div>
  )
}

function ReviewCarousel() {
  const [current, setCurrent] = useState(0)

  const reviews = [
    { name: 'Fatima Khan', text: 'Dr. Alshafi is excellent! The clinic is modern and I felt completely comfortable throughout my treatment.', rating: 5, tag: 'Root Canal' },
    { name: 'Ahmed Hassan', text: 'Best dental experience I\'ve had. Professional staff, reasonable prices, and amazing results.', rating: 5, tag: 'Teeth Whitening' },
    { name: 'Zahra Mohammad', text: 'Pain-free root canal! Everything was explained clearly and I felt at ease the entire time.', rating: 5, tag: 'Root Canal' },
    { name: 'Usman Ali', text: 'The team is incredibly friendly and professional. My smile has never looked better!', rating: 5, tag: 'General Checkup' },
    { name: 'Sana Malik', text: 'I was terrified of dentists until I came here. Now I actually look forward to my visits.', rating: 5, tag: 'Emergency Care' },
  ]

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % reviews.length), 4000)
    return () => clearInterval(timer)
  }, [reviews.length])

  const prev = () => setCurrent(prev => (prev - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent(prev => (prev + 1) % reviews.length)

  return (
    <div className="section-container">
      <Reveal>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="min-w-full px-2">
                  <div className="card-premium p-10 md:p-12 text-center">
                    <div className="flex justify-center gap-1 mb-5">
                      {[...Array(review.rating)].map((_, r) => <i key={r} className="fa-solid fa-star text-secondary" />)}
                    </div>
                    <i className="fa-solid fa-quote-left text-2xl text-secondary/30 mb-4 block" />
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div>
                        <p className="font-heading font-bold text-foreground text-lg">{review.name}</p>
                        <span className="text-xs text-secondary font-medium">{review.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg hover:bg-muted transition-all text-foreground">
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg hover:bg-muted transition-all text-foreground">
            <i className="fa-solid fa-chevron-right" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-secondary' : 'w-2 bg-border'}`} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}

function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 flex gap-2 z-40">
        <a href="tel:03159086575" className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition text-sm">
          <i className="fa-solid fa-phone" /> Call
        </a>
        <a href="https://wa.me/923159086575" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition text-sm">
          <i className="fa-brands fa-whatsapp" /> Chat
        </a>
        <Link href="/contact" className="flex-1 bg-secondary text-primary-foreground py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-secondary/90 transition text-sm">
          <i className="fa-regular fa-calendar-check" /> Book
        </Link>
      </div>

      {/* Desktop floating */}
      <div className="hidden md:flex fixed right-6 bottom-8 flex-col gap-3 z-40">
        <a href="https://wa.me/923159086575" target="_blank" rel="noopener noreferrer"
          className="w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 hover:shadow-xl">
          <i className="fa-brands fa-whatsapp text-2xl" />
        </a>
        <a href="tel:03159086575"
          className="w-14 h-14 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg transition-all hover:scale-110 hover:shadow-xl">
          <i className="fa-solid fa-phone text-xl" />
        </a>
        {showScroll && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 rounded-2xl bg-secondary hover:bg-secondary/90 text-primary-foreground flex items-center justify-center shadow-lg transition-all hover:scale-110">
            <i className="fa-solid fa-arrow-up text-xl" />
          </button>
        )}
      </div>

      <div className="hidden md:block fixed left-6 bottom-8 z-40">
        <Link href="/contact"
          className="bg-secondary text-primary-foreground px-5 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2 text-sm">
          <i className="fa-regular fa-calendar-check" />
          Book Now
        </Link>
      </div>
    </>
  )
}
