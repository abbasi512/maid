'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Farah Khan',
    role: 'Homeowner, Karachi',
    ago: '20 days ago',
    rating: 5,
    text: "Kaam Wali has completely transformed our home life. The maid they placed is professional, punctual, and genuinely cares about her work. The whole process from booking to placement took less than 48 hours. Couldn't be happier!",
    initials: 'FK',
    avatarBg: 'bg-teal-600',
  },
  {
    name: 'Dr. Saima Mirza',
    role: 'Medical Professional, Lahore',
    ago: '52 days ago',
    rating: 5,
    text: "As a doctor, I need complete trust in whoever enters my home. Kaam Wali's thorough vetting process gave me that peace of mind. The nursing staff they provided for my mother is impeccably trained and incredibly compassionate.",
    initials: 'SM',
    avatarBg: 'bg-blue-600',
  },
  {
    name: 'Hira Muneeb',
    role: 'Working Mother, Islamabad',
    ago: '10 days ago',
    rating: 5,
    text: "Finding a trustworthy babysitter was my greatest anxiety going back to work. Kaam Wali found us a wonderful nanny my children already adore. She's attentive, patient, and brings such warmth to our home every single day.",
    initials: 'HM',
    avatarBg: 'bg-purple-600',
  },
  {
    name: 'Ayesha Raza',
    role: 'Business Owner, Rawalpindi',
    ago: '35 days ago',
    rating: 5,
    text: "I use Kaam Wali for office cleaning staff and the quality is exceptional. Professional, efficient, always on time. My team noticed the difference immediately. Highly recommend for businesses looking for reliable support.",
    initials: 'AR',
    avatarBg: 'bg-amber-600',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused) return
    const interval = setInterval(next, 5500)
    return () => clearInterval(interval)
  }, [paused, next])

  return (
    <section
      id="testimonials"
      className="bg-navy-900 py-24 relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-teal-600/8 blur-[120px]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-teal-800/10 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-teal-400 text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Client Stories
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative min-h-[320px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="w-full glass-card rounded-3xl p-8 lg:p-12 text-center"
            >
              <Quote size={30} className="text-teal-500/40 mx-auto mb-6" />

              <p className="text-white/78 text-lg lg:text-xl leading-relaxed mb-8 font-light italic max-w-2xl mx-auto">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-7">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={17} className="text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonials[current].avatarBg} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {testimonials[current].initials}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{testimonials[current].name}</div>
                  <div className="text-white/40 text-sm">{testimonials[current].role}</div>
                </div>
                <div className="ml-4 text-white/25 text-xs hidden sm:block">
                  {testimonials[current].ago}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-white hover:bg-white/12 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === current ? 'w-8 bg-teal-400' : 'w-1.5 bg-white/25 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-white hover:bg-white/12 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Trustpilot mention */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-white/30 text-sm">
            Rated{' '}
            <span className="text-gold-400 font-semibold">4.9 / 5</span> across{' '}
            <span className="text-white/50">12,000+ reviews</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
