import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-20 sm:py-24 scroll-mt-20 relative overflow-hidden
      bg-white dark:bg-[#0a1628]"
    >
      {/* Subtle orbs */}
      <div className="orb w-72 h-72 top-0 right-0 bg-cyan-400/8 dark:bg-cyan-500/6" />
      <div className="orb w-72 h-72 bottom-0 left-0 bg-teal-400/8 dark:bg-teal-500/5" />

      {/* Section label */}
      <motion.p
        className="text-center text-xs font-semibold mb-2 text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.25em]"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Introduction
      </motion.p>

      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        About Me
      </motion.h2>

      <div className="flex justify-center mt-3 mb-12 sm:mb-16">
        <div className="h-0.5 w-12 rounded-full bg-cyan-500" />
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative w-52 sm:w-64 lg:w-72 flex-shrink-0 mx-auto lg:mx-0"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-teal-500/20 blur-lg" />
          <Image
            src={assets.user_image}
            alt="Dimpal Gogoi"
            className="w-full rounded-2xl relative z-10 shadow-2xl shadow-slate-200 dark:shadow-black/50
            ring-1 ring-slate-200 dark:ring-slate-700"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex-1 w-full"
        >
          <p className="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            Hi, I&apos;m{' '}
            <span className="font-bold text-slate-900 dark:text-white">Dimpal Gogoi</span>,
            a Computer Science student at Tezpur University. My core interests lie in{' '}
            <span className="text-cyan-600 dark:text-cyan-400 font-medium">web development (MERN stack)</span>,
            databases, IoT systems, and computer networks.
          </p>

          <p className="mb-8 text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            I&apos;ve built projects like an{' '}
            <span className="text-slate-700 dark:text-slate-200 font-medium">Inter-Hostel Tournament Management System</span>
            {' '}and an{' '}
            <span className="text-slate-700 dark:text-slate-200 font-medium">IoT-enabled fire alarm</span>.
            Outside tech, I play guitar 🎸 — keeps the creativity alive.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ y: -3 }}
                key={index}
                className="light-card glow-card rounded-xl p-4 sm:p-5 cursor-pointer
                border border-slate-200 dark:border-slate-700/60
                bg-slate-50 dark:bg-slate-800/50
                hover:border-cyan-300 dark:hover:border-cyan-700
                transition-all duration-200 group"
              >
                <div className="w-0 group-hover:w-full h-0.5 rounded-full bg-cyan-500 transition-all duration-300 mb-3" />
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-6 sm:w-7" />
                <h3 className="my-2 font-bold text-slate-800 dark:text-white text-sm">{title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="mb-3 text-slate-500 dark:text-slate-400 text-xs font-bold tracking-widest uppercase">
            Tools I use
          </h4>
          <ul className="flex flex-wrap gap-3">
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.12, rotate: 4, y: -3 }}
                key={index}
                className="light-card glow-card flex items-center justify-center w-12 sm:w-14 aspect-square
                rounded-xl border border-slate-200 dark:border-slate-700/60
                bg-white dark:bg-slate-800/60
                cursor-pointer transition-all duration-200
                hover:border-cyan-300 dark:hover:border-cyan-700"
              >
                <Image src={tool} alt="Tool" className="w-6 sm:w-8" />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About
