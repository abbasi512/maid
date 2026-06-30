'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, CheckCircle2, Star } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.14 } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
    >
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Teal glow top-right */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-teal-600/15 blur-[140px]" />
        {/* Deep teal glow bottom-left */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-800/20 blur-[100px]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Text content */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="pt-16 lg:pt-0"
          >
            {/* Trust badge */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 bg-teal-600/15 border border-teal-500/25 rounded-full px-4 py-1.5 mb-8">
                <Shield size={13} className="text-teal-400" />
                <span className="text-teal-300 text-xs font-medium tracking-wider uppercase">
                  Pakistan&apos;s Most Trusted Staffing Network
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-display font-bold leading-[1.05] mb-6"
            >
              <span className="block text-white text-5xl sm:text-6xl lg:text-[4.5rem]">
                Trusted Female
              </span>
              <span className="block text-white text-5xl sm:text-6xl lg:text-[4.5rem]">
                Staff for
              </span>
              <span className="block text-gradient-teal text-5xl sm:text-6xl lg:text-[4.5rem]">
                Every Home
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-white/55 text-lg leading-relaxed max-w-lg mb-9"
            >
              Professionally trained, background-verified female professionals across Pakistan.
              Maids, nannies, nurses, cooks, and more — reliable help at your doorstep.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#services"
                className="group flex items-center gap-2.5 bg-teal-600 hover:bg-teal-500 text-white px-7 py-3.5 rounded-full font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-teal-600/30 hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-white/8 hover:bg-white/14 text-white border border-white/18 px-7 py-3.5 rounded-full font-medium transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                Book Now
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-x-7 gap-y-3"
            >
              {[
                { icon: CheckCircle2, text: 'Background Verified' },
                { icon: Shield, text: 'Professionally Trained' },
                { icon: Star, text: '98% Satisfaction Rate' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={15} className="text-teal-400 shrink-0" />
                  <span className="text-white/50 text-sm">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="relative flex items-center justify-center py-16 lg:py-0"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-teal-600/15 blur-3xl animate-pulse-slow" />
            </div>

            {/* Orbital rings */}
            <div className="relative w-72 h-72 lg:w-[380px] lg:h-[380px]">
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full opacity-25 animate-spin-slow"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="196"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="6 10"
                />
              </svg>
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] opacity-15 animate-spin-slow-rev"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="196"
                  stroke="#2DD4BF"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="3 14"
                />
              </svg>

              {/* Center card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 h-44 lg:w-52 lg:h-52 rounded-2xl bg-gradient-to-br from-teal-700/50 to-teal-500/20 border border-teal-500/30 backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-teal-900/50">
                  <div className="text-center">
                    <div className="font-display text-5xl lg:text-6xl font-bold text-white leading-none">
                      12K
                    </div>
                    <div className="text-teal-300 text-xs mt-2 tracking-widest uppercase">
                      Happy Clients
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 -left-4 lg:-left-10 glass-card rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="text-2xl font-bold font-display text-white leading-none">98%</div>
              <div className="text-white/45 text-[11px] mt-0.5">Satisfaction Rate</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 -right-4 lg:-right-10 glass-card rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="text-2xl font-bold font-display text-white leading-none">100+</div>
              <div className="text-white/45 text-[11px] mt-0.5">Monthly Placements</div>
            </motion.div>

            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-14 glass-card rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="text-2xl font-bold font-display text-white leading-none">15+</div>
              <div className="text-white/45 text-[11px] mt-0.5">Cities Covered</div>
            </motion.div>

            {/* Service labels orbiting */}
            {[
              { label: 'Maid Services', top: '4%', left: '50%', tx: '-50%' },
              { label: 'Nursing Staff', top: '50%', right: '0%', tx: '0' },
              { label: 'Nanny Care', bottom: '4%', left: '50%', tx: '-50%' },
              { label: 'Cook & Chef', top: '50%', left: '0%', tx: '-100%' },
            ].map(({ label, ...pos }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                className="absolute bg-navy-800/80 border border-teal-600/30 rounded-full px-3 py-1 text-teal-300 text-[10px] font-medium tracking-wide whitespace-nowrap"
                style={{
                  top: pos.top,
                  bottom: pos.bottom,
                  left: pos.left,
                  right: pos.right,
                  transform: pos.tx !== '0' ? `translateX(${pos.tx})` : undefined,
                }}
              >
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-px h-7 bg-gradient-to-b from-teal-400/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
