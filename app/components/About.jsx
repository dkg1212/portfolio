import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-16 sm:py-20 scroll-mt-20 relative section-bg-light dark:bg-transparent overflow-hidden"
    >
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-300/15 dark:bg-purple-600/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-300/15 dark:bg-pink-600/8 blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* Label */}
      <motion.p
        className="text-center text-xs font-semibold mb-2 text-violet-500 dark:text-purple-400 uppercase tracking-[0.2em]"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Introduction
      </motion.p>

      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        About Me
      </motion.h2>

      <div className="flex justify-center mt-3 mb-10 sm:mb-14">
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-48 sm:w-60 lg:w-72 flex-shrink-0 mx-auto lg:mx-0"
        >
          <div className="absolute -inset-2 bg-gradient-to-tr from-violet-500 via-pink-500 to-orange-400 rounded-3xl blur-lg opacity-35 dark:opacity-50" />
          <Image
            src={assets.user_image}
            alt="Dimpal Gogoi"
            className="w-full rounded-3xl relative z-10 shadow-xl shadow-violet-300/30 dark:shadow-purple-900/50"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex-1 w-full"
        >
          <p className="mb-4 font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            Hi, I'm{' '}
            <span className="font-bold text-violet-600 dark:text-purple-400">Dimpal Gogoi</span>,
            a Computer Science student at Tezpur University. My core interests lie in{' '}
            <span className="text-pink-600 dark:text-pink-400 font-medium">web development (MERN stack)</span>,
            databases, IoT systems, and computer networks.
          </p>

          <p className="mb-8 font-Ovo text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
            I've built projects like an{' '}
            <span className="text-violet-600 dark:text-violet-300 font-medium italic">Inter-Hostel Tournament Management System</span>
            {' '}and an{' '}
            <span className="text-pink-600 dark:text-pink-300 font-medium italic">IoT-enabled fire alarm</span>.
            Outside tech, I play guitar 🎸 — keeps the creativity alive.
          </p>

          {/* Info Cards — 1 col mobile, 3 col sm+ */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 w-full">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ y: -4 }}
                key={index}
                className="light-card glow-card rounded-xl p-4 sm:p-5 cursor-pointer
                border border-violet-200 dark:border-purple-800/60
                bg-white dark:bg-purple-950/50
                hover:border-violet-400 dark:hover:border-pink-500/60
                transition-all duration-300 group"
              >
                <div className="h-0.5 w-0 group-hover:w-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-300 mb-3" />
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-6 sm:w-7" />
                <h3 className="my-2 font-bold text-gray-800 dark:text-white text-sm">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="mb-3 text-gray-700 dark:text-purple-300 text-xs font-bold tracking-widest uppercase">
            Tools I use
          </h4>

          <ul className="flex flex-wrap gap-3">
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.12, rotate: 5, y: -3 }}
                key={index}
                className="light-card glow-card flex items-center justify-center w-12 sm:w-14 aspect-square
                rounded-xl border border-violet-200 dark:border-purple-800/60
                bg-white dark:bg-purple-950/50
                cursor-pointer transition-all duration-300
                hover:border-violet-400 dark:hover:border-pink-500/60"
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
