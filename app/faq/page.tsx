'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Reveal } from '@/components/ui/reveal'

const faqs = [
  {
    q: 'Do I need an appointment?',
    a: 'Yes, we recommend booking an appointment for regular treatments. However, we handle emergency cases immediately without appointment. Call us at 0315-9086575 for urgent care.',
    icon: 'fa-regular fa-calendar',
  },
  {
    q: 'Is the treatment painful?',
    a: 'We use modern anesthesia techniques to ensure all procedures are as comfortable as possible. Most patients report little to no discomfort. Our gentle approach and advanced numbing methods make dental visits a pleasant experience.',
    icon: 'fa-regular fa-face-smile',
  },
  {
    q: 'How long does a Root Canal take?',
    a: 'Root canal treatment typically takes 1-2 sessions depending on the tooth complexity. Each session lasts about 45-60 minutes. We ensure you are comfortable throughout the procedure.',
    icon: 'fa-regular fa-clock',
  },
  {
    q: 'How much do treatments cost?',
    a: 'Our pricing is transparent and competitive. We provide detailed treatment plans with costs before any procedure. Contact us for a personalized quote tailored to your needs.',
    icon: 'fa-regular fa-credit-card',
  },
  {
    q: 'How often should I visit the dentist?',
    a: 'We recommend visiting every 6 months for regular checkups and professional cleaning to maintain optimal oral health. Patients with specific conditions may need more frequent visits.',
    icon: 'fa-regular fa-calendar-check',
  },
  {
    q: 'Do you provide emergency treatment?',
    a: 'Yes! We provide 24/7 emergency dental care. Call us immediately at 0315-9086575 for urgent issues like severe pain, trauma, or knocked-out teeth.',
    icon: 'fa-solid fa-truck-medical',
  },
  {
    q: 'Do you treat children?',
    a: 'Absolutely! We have specialized pediatric dental services. Our team is trained to make children feel comfortable and at ease. We create a fun, friendly environment for young patients.',
    icon: 'fa-regular fa-face-smile-wink',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, bank transfers, and major payment methods. For large procedures, we offer flexible payment plans to make treatment accessible.',
    icon: 'fa-regular fa-credit-card',
  },
  {
    q: 'How do I book an appointment?',
    a: 'You can book through our website contact form, call us at 0315-9086575, or send a message on WhatsApp. We confirm appointments within 1-2 hours.',
    icon: 'fa-regular fa-message',
  },
  {
    q: 'Do you offer teeth whitening?',
    a: 'Yes, we offer professional teeth whitening treatments that provide dramatic results in a single session. Our custom whitening solutions are safe, effective, and long-lasting.',
    icon: 'fa-regular fa-sparkles',
  },
]

const categories = ['All', 'Appointments', 'Treatments', 'Payments', 'Emergency']

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All' ? faqs : faqs

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center hero-overlay">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/conceltation.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/60" />
        <div className="relative z-10 section-container text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm mb-6">
              <i className="fa-solid fa-circle text-[6px] text-secondary animate-pulse" />
              FAQ
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Everything you need to know about our dental services and care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 md:py-32 bg-background">
        <div className="section-container max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 mb-14">
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

          <div className="space-y-3">
            {filtered.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 40}>
                <div className="card-premium overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <i className={`${faq.icon} text-secondary text-sm`} />
                      </div>
                      <span className="font-heading font-semibold text-foreground">{faq.q}</span>
                    </div>
                    <i className={`fa-solid fa-chevron-down text-secondary text-sm transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-5 pt-0 border-t border-border mx-6">
                      <p className="text-muted-foreground leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-24 md:py-28 bg-muted">
        <div className="section-container text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mx-auto mb-6">
              <i className="fa-regular fa-circle-question text-3xl text-secondary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              We&apos;re here to help. Reach out to us anytime and we&apos;ll get back to you promptly.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                <i className="fa-regular fa-envelope" />
                Contact Us
              </Link>
              <a href="https://wa.me/923159086575" target="_blank" rel="noopener noreferrer"
                className="btn-premium bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg">
                <i className="fa-brands fa-whatsapp" />
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
