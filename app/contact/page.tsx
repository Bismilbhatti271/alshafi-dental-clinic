'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Reveal } from '@/components/ui/reveal'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' })
    }, 3000)
  }

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center hero-overlay">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/conceltation.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/60" />
        <div className="relative z-10 section-container text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm mb-6">
              <i className="fa-solid fa-circle text-[6px] text-secondary animate-pulse" />
              Get in Touch
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Let&apos;s Talk About <br /><span className="text-gradient-gold">Your Smile</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Ready to book? We&apos;re here to help you achieve the smile you deserve.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-12 z-20">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-solid fa-phone', title: 'Call Us', desc: 'Available 24/7', action: '0315-9086575', href: 'tel:03159086575', color: 'from-primary/5 to-primary/10' },
              { icon: 'fa-regular fa-envelope', title: 'Email Us', desc: 'Reply within 24hrs', action: 'info@alshafidental.pk', href: 'mailto:info@alshafidental.pk', color: 'from-secondary/5 to-secondary/10' },
              { icon: 'fa-solid fa-location-dot', title: 'Visit Us', desc: 'Clinic Location', action: 'Shakrial, Islamabad', href: '#', color: 'from-accent/5 to-accent/10' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 border border-border/50 backdrop-blur-sm card-premium`}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-secondary text-lg`} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <a href={item.href} className="text-secondary font-semibold hover:text-secondary/80 transition-colors">{item.action}</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 md:py-32 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">
                  Book Your <span className="text-gradient">Appointment</span>
                </h2>
              </Reveal>

              {submitted ? (
                <Reveal>
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <i className="fa-regular fa-circle-check text-3xl text-green-600" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-green-900 mb-2">Request Received!</h3>
                    <p className="text-green-700 text-sm">We&apos;ll confirm your appointment via WhatsApp within 1-2 hours.</p>
                  </div>
                </Reveal>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Your name' },
                    { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '0315-9086575' },
                  ].map((f, i) => (
                    <Reveal key={f.name} delay={i * 50}>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">{f.label}</label>
                        <input type={f.type} name={f.name} value={(formData as any)[f.name]} onChange={handleChange} required
                          className="w-full px-4 py-3.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary bg-card transition-all"
                          placeholder={f.placeholder} />
                      </div>
                    </Reveal>
                  ))}
                  <Reveal delay={150}>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Service Required *</label>
                      <select name="service" value={formData.service} onChange={handleChange} required
                        className="w-full px-4 py-3.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary bg-card transition-all">
                        <option value="">Select a service</option>
                        {['General Checkup', 'Teeth Whitening', 'Root Canal', 'Dental Implants', 'Braces/Orthodontics', 'Crowns & Bridges', 'Scaling & Polishing', 'Emergency Care', 'Other'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </Reveal>
                  <Reveal delay={180}>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Preferred Date *</label>
                      <input type="date" name="date" value={formData.date} onChange={handleChange} required
                        className="w-full px-4 py-3.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary bg-card transition-all" />
                    </div>
                  </Reveal>
                  <Reveal delay={210}>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                        className="w-full px-4 py-3.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary bg-card transition-all resize-none"
                        placeholder="Tell us about your dental concerns..." />
                    </div>
                  </Reveal>
                  <Reveal delay={240}>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button type="submit"
                        className="flex-1 btn-premium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                        <i className="fa-regular fa-paper-plane" />
                        Book via Website
                      </button>
                      <a href="https://wa.me/923159086575" target="_blank" rel="noopener noreferrer"
                        className="flex-1 btn-premium bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg">
                        <i className="fa-brands fa-whatsapp" />
                        Book via WhatsApp
                      </a>
                    </div>
                  </Reveal>
                </form>
              )}
            </div>

            <div className="space-y-8 lg:pl-8">
              <Reveal delay={100}>
                <div className="card-premium p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <i className="fa-regular fa-clock text-secondary text-2xl" />
                    <h3 className="text-2xl font-heading font-bold text-foreground">Hours</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between pb-4 border-b border-border">
                      <span className="font-medium text-foreground">Mon - Sat</span>
                      <span className="text-muted-foreground">10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between pb-4 border-b border-border">
                      <span className="font-medium text-foreground">Sunday</span>
                      <span className="text-muted-foreground">By Appointment</span>
                    </div>
                    <div className="flex justify-between pt-2 bg-secondary/10 p-4 rounded-xl">
                      <span className="font-medium text-secondary">Emergency</span>
                      <span className="text-secondary font-semibold">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="card-premium p-8 bg-gradient-to-br from-[#25D366]/5 to-[#128C7E]/5 border-[#25D366]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <i className="fa-brands fa-whatsapp text-3xl text-[#25D366]" />
                    <h3 className="text-2xl font-heading font-bold text-foreground">WhatsApp Booking</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    Get instant confirmation. Send us a message and we&apos;ll respond promptly.
                  </p>
                  <a href="https://wa.me/923159086575" target="_blank" rel="noopener noreferrer"
                    className="btn-premium bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg w-full">
                    <i className="fa-brands fa-whatsapp" />
                    Send WhatsApp Message
                    <i className="fa-solid fa-arrow-right text-sm" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="card-premium p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent">
                  <div className="flex items-center gap-3 mb-6">
                    <i className="fa-solid fa-location-dot text-secondary text-2xl" />
                    <h3 className="text-2xl font-heading font-bold text-foreground">Location</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">Alshafi Dental Clinic</h4>
                      <p className="text-muted-foreground text-sm">Near Fazal-e-Rabi Clinic, Shakrial</p>
                      <p className="text-muted-foreground text-sm">Bharma Town, Islamabad</p>
                    </div>
                    <div className="flex gap-3">
                      <a href="tel:03159086575" className="flex-1 btn-premium bg-primary text-primary-foreground hover:bg-primary/90">
                        <i className="fa-solid fa-phone" />
                        Call Now
                      </a>
                      <Link href="/" className="flex-1 btn-premium border border-border text-foreground hover:bg-muted">
                        <i className="fa-solid fa-location-dot" />
                        Directions
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
