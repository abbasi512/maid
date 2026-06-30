'use client'

import { motion } from 'framer-motion'
import { Shield, Star, Zap, Clock, RefreshCcw, Leaf } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Thoroughly Verified Staff',
    description:
      'Every candidate undergoes comprehensive background checks including criminal records, references, and identity verification before placement.',
  },
  {
    icon: Star,
    title: 'Professional Training',
    description:
      'All staff complete structured training programs covering household skills, safety protocols, and professional conduct standards.',
  },
  {
    icon: Zap,
    title: 'Instant Updates',
    description:
      'Real-time notifications on staff placement, scheduling changes, and any service updates via WhatsApp and SMS.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'Choose from hourly, daily, part-time, full-time, or live-in arrangements that fit around your lifestyle and budget.',
  },
  {
    icon: RefreshCcw,
    title: 'Replacement Guarantee',
    description:
      'Not satisfied with your assigned staff? We provide a prompt replacement at no additional cost, ensuring uninterrupted service.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Practices',
    description:
      'Our staff are trained in sustainable cleaning methods and responsible household management to reduce environmental impact.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-teal-600 text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Why Kaam Wali
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            The Difference That Matters
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We go beyond placement — we build trust, ensure quality, and stand behind every
            professional we send to your home.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-7 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-50 transition-all duration-300 bg-slate-50/40 hover:bg-white cursor-default"
              >
                <div className="w-12 h-12 bg-teal-50 group-hover:bg-teal-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-400">
                  <Icon
                    size={22}
                    className="text-teal-600 group-hover:text-white transition-colors duration-400"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-teal-600 to-teal-500 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
              Ready to experience the difference?
            </h3>
            <p className="text-white/70 text-base">
              Join thousands of satisfied households across Pakistan.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-teal-700 font-semibold px-8 py-3.5 rounded-full hover:bg-teal-50 transition-colors duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-900/20"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
