import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center
      text-center px-4 sm:px-6 gap-5 sm:gap-6 overflow-hidden pt-20 bg-slate-50 dark:bg-[#020817]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-100 pointer-events-none" />

      {/* Glow orbs */}
      <div className="orb w-80 h-80 top-[-60px] left-[-60px] bg-cyan-400/15 dark:bg-cyan-500/10" />
      <div className="orb w-96 h-96 bottom-[-80px] right-[-80px] bg-teal-400/12 dark:bg-teal-500/8" />
      <div className="orb w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300/20 dark:bg-slate-700/20" />

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
        border border-emerald-200 dark:border-emerald-800/60
        bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Open to opportunities
      </motion.div>

      {/* Profile image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 140, delay: 0.1 }}
        className="relative z-10 flex-shrink-0"
      >
        <div className="absolute inset-0 rounded-full ring-4 ring-cyan-500/30 dark:ring-cyan-400/20 scale-110 blur-sm" />
        <Image
          src={assets.profile_img}
          alt="Dimpal Gogoi"
          className="relative z-10 rounded-full w-28 sm:w-36 md:w-44
          ring-2 ring-slate-200 dark:ring-slate-700
          shadow-2xl shadow-slate-300/40 dark:shadow-black/60"
          priority
        />
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="relative z-10 flex items-center justify-center flex-wrap gap-2 text-base sm:text-lg text-slate-500 dark:text-slate-400"
      >
        Hi, I&apos;m
        <span className="font-bold text-slate-900 dark:text-white">Dimpal Gogoi</span>
        <Image src={assets.hand_icon} alt="wave" className="w-5 sm:w-6" />
      </motion.p>

      {/* Main heading */}
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="relative z-10 w-full max-w-3xl font-bold leading-tight"
      >
        <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white">
          CS Student &amp; Full-Stack
        </span>
        <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-500 dark:text-cyan-400">
          Developer
        </span>
        <span className="block text-sm sm:text-base md:text-lg font-medium text-slate-400 dark:text-slate-500 mt-2 tracking-wide">
          @ Tezpur University
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="relative z-10 w-full max-w-lg text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
      >
        Building{' '}
        <span className="text-slate-700 dark:text-slate-200 font-medium">real-world solutions</span>{' '}
        with the MERN stack, databases, IoT systems, and computer networks.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="relative z-10 flex flex-col sm:flex-row gap-3 items-center justify-center"
      >
        <a
          href="#contact"
          className="px-7 py-3 rounded-full font-semibold text-sm
          bg-cyan-500 hover:bg-cyan-400 text-white
          shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105
          transition-all duration-200 flex items-center gap-2"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-7 py-3 rounded-full font-semibold text-sm
          border border-slate-300 dark:border-slate-700
          text-slate-700 dark:text-slate-200
          bg-white dark:bg-slate-900
          hover:border-cyan-400 dark:hover:border-cyan-600
          hover:text-cyan-600 dark:hover:text-cyan-400
          hover:scale-105 transition-all duration-200 flex items-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        className="relative z-10 flex items-center gap-6 sm:gap-10 mt-2"
      >
        {[
          { value: '6+', label: 'Projects' },
          { value: '1', label: 'Internship' },
          { value: '4+', label: 'Certificates' },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
            <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">{label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="text-[10px] text-slate-400 dark:text-slate-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Header
