'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  {
    value: 100,
    suffix: '+',
    label: 'Monthly Placements',
    description: 'Verified staff placed every month',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Clients who rehire and recommend',
  },
  {
    value: 12000,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Families served across Pakistan',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Cities Covered',
    description: 'Growing presence nationwide',
  },
]

function CountUp({
  value,
  suffix,
  inView,
}: {
  value: number
  suffix: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = value / (duration / step)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-navy-950 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-teal-400 text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Our Impact
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            Numbers That Speak for Us
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-white/8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative p-8 lg:p-10 text-center group hover:bg-navy-800/60 transition-colors duration-300 ${
                i < 3 ? 'border-r border-white/8' : ''
              } ${i < 2 ? 'border-b border-white/8 lg:border-b-0' : ''}`}
            >
              {/* Teal accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-teal mb-3">
                <CountUp value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-white font-semibold text-sm lg:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-white/35 text-xs lg:text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
