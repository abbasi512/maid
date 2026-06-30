'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  Heart,
  Stethoscope,
  Baby,
  HeartPulse,
  Users,
  Users2,
  ChefHat,
  Car,
  HelpCircle,
  Globe,
  Dumbbell,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Maid Services',
    description:
      'Professional cleaning, laundry, and household management. Part-time, full-time, or live-in options available.',
    colorClasses: {
      icon: 'text-teal-600',
      iconBg: 'bg-teal-50',
      border: 'border-teal-100 hover:border-teal-300',
      arrow: 'text-teal-600',
    },
  },
  {
    icon: Heart,
    title: 'Nanny Services',
    description:
      'Caring, trained nannies for child supervision, daily routines, and age-appropriate educational support.',
    colorClasses: {
      icon: 'text-rose-600',
      iconBg: 'bg-rose-50',
      border: 'border-rose-100 hover:border-rose-300',
      arrow: 'text-rose-600',
    },
  },
  {
    icon: Stethoscope,
    title: 'Nursing Staff',
    description:
      'Qualified nurses for patient care, elderly support, post-surgical recovery, and medical assistance.',
    colorClasses: {
      icon: 'text-blue-600',
      iconBg: 'bg-blue-50',
      border: 'border-blue-100 hover:border-blue-300',
      arrow: 'text-blue-600',
    },
  },
  {
    icon: Baby,
    title: 'Baby Sitting',
    description:
      'Trusted, attentive babysitters available hourly, part-time, or full-time for peace of mind.',
    colorClasses: {
      icon: 'text-yellow-600',
      iconBg: 'bg-yellow-50',
      border: 'border-yellow-100 hover:border-yellow-300',
      arrow: 'text-yellow-600',
    },
  },
  {
    icon: HeartPulse,
    title: 'Patient Care',
    description:
      'Dedicated attendants for hygiene support, medication reminders, and daily mobility assistance.',
    colorClasses: {
      icon: 'text-red-600',
      iconBg: 'bg-red-50',
      border: 'border-red-100 hover:border-red-300',
      arrow: 'text-red-600',
    },
  },
  {
    icon: Users,
    title: 'Elder Care',
    description:
      'Compassionate companions providing medical support, daily assistance, and meaningful company for seniors.',
    colorClasses: {
      icon: 'text-purple-600',
      iconBg: 'bg-purple-50',
      border: 'border-purple-100 hover:border-purple-300',
      arrow: 'text-purple-600',
    },
  },
  {
    icon: Users2,
    title: 'Couple Team Services',
    description:
      'Professional husband-wife teams for seamless complete household management and property care.',
    colorClasses: {
      icon: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
      border: 'border-indigo-100 hover:border-indigo-300',
      arrow: 'text-indigo-600',
    },
  },
  {
    icon: ChefHat,
    title: 'Cook & Chef',
    description:
      'Skilled cooks for daily meals, special events, and authentic regional Pakistani cuisine preparation.',
    colorClasses: {
      icon: 'text-orange-600',
      iconBg: 'bg-orange-50',
      border: 'border-orange-100 hover:border-orange-300',
      arrow: 'text-orange-600',
    },
  },
  {
    icon: Car,
    title: 'Driver Services',
    description:
      'Licensed, professional drivers for personal, family, school runs, and corporate transportation.',
    colorClasses: {
      icon: 'text-slate-600',
      iconBg: 'bg-slate-50',
      border: 'border-slate-200 hover:border-slate-400',
      arrow: 'text-slate-600',
    },
  },
  {
    icon: HelpCircle,
    title: 'Helper Services',
    description:
      'Versatile household helpers for general tasks, grocery errands, and flexible daily support needs.',
    colorClasses: {
      icon: 'text-teal-600',
      iconBg: 'bg-teal-50',
      border: 'border-teal-100 hover:border-teal-300',
      arrow: 'text-teal-600',
    },
  },
  {
    icon: Globe,
    title: 'Translator Assistant',
    description:
      'Multilingual support staff for business meetings, events, and day-to-day language assistance.',
    colorClasses: {
      icon: 'text-green-600',
      iconBg: 'bg-green-50',
      border: 'border-green-100 hover:border-green-300',
      arrow: 'text-green-600',
    },
  },
  {
    icon: Dumbbell,
    title: 'Personal Gym Trainer',
    description:
      'Certified fitness professionals delivering personalized in-home workout plans and training sessions.',
    colorClasses: {
      icon: 'text-pink-600',
      iconBg: 'bg-pink-50',
      border: 'border-pink-100 hover:border-pink-300',
      arrow: 'text-pink-600',
    },
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-teal-600 text-xs font-medium tracking-[0.2em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Professional Services, Tailored to You
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Every service is delivered by background-verified, professionally trained staff —
            giving you complete peace of mind in your own home.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.045, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`bg-white border ${service.colorClasses.border} rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg group`}
              >
                <div
                  className={`w-11 h-11 ${service.colorClasses.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={20} className={service.colorClasses.icon} />
                </div>
                <h3 className="font-display font-semibold text-navy-900 mb-2 text-base leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                <div
                  className={`mt-4 flex items-center gap-1 ${service.colorClasses.arrow} text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-0`}
                >
                  Learn more <ArrowRight size={13} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-navy-900 hover:bg-navy-800 text-white px-9 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/30 hover:-translate-y-0.5"
          >
            Book a Service Today
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
