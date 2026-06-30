'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react'

const serviceOptions = [
  'Maid Services',
  'Nanny Services',
  'Nursing Staff',
  'Baby Sitting',
  'Patient Care',
  'Elder Care',
  'Couple Team Services',
  'Cook & Chef',
  'Driver Services',
  'Helper Services',
  'Translator Assistant',
  'Personal Gym Trainer',
]

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+92 330 636 3300', href: 'tel:+923306363300' },
  { icon: Mail, label: 'Email', value: 'info@kaamwali.org', href: 'mailto:info@kaamwali.org' },
  { icon: Clock, label: 'Working Hours', value: 'Sun – Fri: 10:00 AM – 8:00 PM', href: null },
  { icon: MapPin, label: 'Coverage', value: '15+ Cities Across Pakistan', href: null },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    }, 3500)
  }

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-600 text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Book Your Service Today
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Tell us what you need and we&apos;ll match you with the perfect professional within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="bg-navy-900 rounded-3xl p-8 h-full text-white relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-teal-600/15 blur-3xl pointer-events-none" />

              <h3 className="font-display text-2xl font-bold mb-1.5 relative z-10">
                Contact Information
              </h3>
              <p className="text-white/45 text-sm mb-9 relative z-10">
                We&apos;re available 6 days a week to assist you
              </p>

              <div className="space-y-6 relative z-10">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-600/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white/35 text-[11px] uppercase tracking-wider mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-white hover:text-teal-400 transition-colors text-sm font-medium"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-white text-sm font-medium">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
                <p className="text-white/35 text-[11px] uppercase tracking-wider mb-4">
                  Follow us
                </p>
                <div className="flex gap-3">
                  {[
                    { letter: 'f', label: 'Facebook' },
                    { letter: 'in', label: 'Instagram' },
                    { letter: 'li', label: 'LinkedIn' },
                    { letter: 'x', label: 'X/Twitter' },
                  ].map(({ letter, label }) => (
                    <button
                      key={label}
                      aria-label={label}
                      className="w-9 h-9 rounded-full bg-white/8 hover:bg-teal-600/35 text-white/50 hover:text-white transition-all duration-200 text-[11px] font-medium"
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-[400px] flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-teal-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1.5 tracking-wide uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 outline-none transition-all text-slate-800 placeholder-slate-400 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1.5 tracking-wide uppercase">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 0000000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 outline-none transition-all text-slate-800 placeholder-slate-400 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5 tracking-wide uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 outline-none transition-all text-slate-800 placeholder-slate-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5 tracking-wide uppercase">
                      Service Required *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 outline-none transition-all text-slate-800 bg-white text-sm appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1.5 tracking-wide uppercase">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your requirements, schedule, or any specific needs..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/15 outline-none transition-all resize-none text-slate-800 placeholder-slate-400 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-500 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-xl hover:shadow-teal-600/25 hover:-translate-y-0.5"
                  >
                    Send Message
                    <Send size={15} />
                  </button>

                  <p className="text-slate-400 text-xs text-center">
                    We&apos;ll respond within 24 hours · Sun–Fri 10AM–8PM
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
