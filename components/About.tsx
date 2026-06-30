'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Award, MapPin, Clock, Target } from 'lucide-react'

const checkpoints = [
  'Rigorously screened and background-verified staff',
  'Flexible plans — hourly, daily, or live-in',
  'Coverage across 15+ major cities in Pakistan',
  '24/7 support with guaranteed staff replacement',
  'Ongoing professional training and development',
  'Transparent pricing with no hidden charges',
]

const infoCards = [
  {
    icon: Target,
    title: 'Our Vision',
    desc: 'To be the leading provider of trusted female workforce solutions across Pakistan and beyond.',
    iconBg: 'bg-teal-500/15',
    iconColor: 'text-teal-400',
  },
  {
    icon: Award,
    title: 'Our Mission',
    desc: 'Empowering households with reliable, skilled female staff and creating dignified employment.',
    iconBg: 'bg-gold-500/15',
    iconColor: 'text-gold-400',
  },
  {
    icon: MapPin,
    title: '15+ Cities',
    desc: 'Serving households and businesses across major Pakistani cities with a growing nationwide presence.',
    iconBg: 'bg-teal-500/15',
    iconColor: 'text-teal-400',
  },
  {
    icon: Clock,
    title: 'Open 6 Days',
    desc: 'Our team is available Sunday through Friday, 10:00 AM to 8:00 PM — ready to help whenever you need.',
    iconBg: 'bg-gold-500/15',
    iconColor: 'text-gold-400',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-navy-900 py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute -left-40 top-0 w-[400px] h-[400px] rounded-full bg-teal-800/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-teal-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Pakistan&apos;s Leading{' '}
              <span className="text-gradient-teal">Female Staffing</span> Agency
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-5">
              Kaam Wali was founded with a clear purpose: connecting capable, dignified women with
              households that need professional support — building trust between families and their
              household professionals.
            </p>
            <p className="text-white/40 leading-relaxed mb-10">
              Every staff member undergoes thorough background verification, professional skills
              training, and regular performance reviews. We don&apos;t just place staff — we build lasting
              relationships rooted in reliability.
            </p>

            {/* Checkpoints */}
            <div className="grid sm:grid-cols-2 gap-3">
              {checkpoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={15} className="text-teal-400 mt-0.5 shrink-0" />
                  <span className="text-white/55 text-sm leading-snug">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {infoCards.map(({ icon: Icon, title, desc, iconBg, iconColor }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <div
                  className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon size={18} className={iconColor} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-white/38 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
