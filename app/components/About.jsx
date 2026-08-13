import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-5 sm:px-8 md:px-[10%] py-16 sm:py-20 scroll-mt-20 relative section-bg-light dark:bg-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Light mode: colourful blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet-300/20 dark:bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-300/20 dark:bg-pink-600/8 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Label */}
      <motion.h4
        className="text-center text-xs font-semibold mb-3 text-violet-500 dark:text-purple-400 uppercase tracking-[0.2em]"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      {/* Divider */}
      <div className="flex justify-center mt-4 mb-14">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-52 sm:w-64 lg:w-80 flex-shrink-0 mx-auto lg:mx-0"
        >
          {/* Gradient frame behind image */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-violet-500 via-pink-500 to-orange-400 rounded-3xl blur-lg opacity-40 dark:opacity-50" />
          <Image
            src={assets.user_image}
            alt="Dimpal Gogoi"
            className="w-full rounded-3xl relative z-10 shadow-2xl shadow-violet-300/40 dark:shadow-purple-900/50"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1"
        >
          <p className="mb-5 max-w-2xl font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed text-base">
            Hi, I'm{' '}
            <span className="font-bold text-violet-600 dark:text-purple-400">Dimpal Gogoi</span>,
            a Computer Science student at Tezpur University. My core interests lie in{' '}
            <span className="text-pink-600 dark:text-pink-400 font-medium">web development (MERN stack)</span>,
            databases, IoT systems, and computer networks.
          </p>

          <p className="mb-8 max-w-2xl font-Ovo text-gray-500 dark:text-gray-400 leading-relaxed text-base">
            I've built projects like an{' '}
            <span className="text-violet-600 dark:text-violet-300 font-medium italic">Inter-Hostel Tournament Management System</span>
            {' '}and an{' '}
            <span className="text-pink-600 dark:text-pink-300 font-medium italic">IoT-enabled fire alarm</span>.
            Outside tech, I play guitar 🎸 — it keeps the creativity alive.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mb-8 w-full">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ y: -5, scale: 1.02 }}
                key={index}
                className="light-card glow-card rounded-xl p-5 cursor-pointer
                border border-violet-200 dark:border-purple-800/60
                bg-white dark:bg-purple-950/50
                hover:border-violet-400 dark:hover:border-pink-500/60
                transition-all duration-300 group"
              >
                {/* Coloured top bar on hover */}
                <div className="h-1 w-0 group-hover:w-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-300 mb-3" />
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7" />
                <h3 className="my-3 font-bold text-gray-800 dark:text-white text-sm">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="mb-4 text-gray-700 dark:text-purple-300 text-sm font-bold tracking-widest uppercase">
            Tools I use
          </h4>

          <ul className="flex flex-wrap gap-3">
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.15, rotate: 6, y: -4 }}
                key={index}
                className="light-card glow-card flex items-center justify-center w-14 sm:w-16 aspect-square
                rounded-xl border border-violet-200 dark:border-purple-800/60
                bg-white dark:bg-purple-950/50
                cursor-pointer transition-all duration-300
                hover:border-violet-400 dark:hover:border-pink-500/60"
              >
                <Image src={tool} alt="Tool" className="w-7 sm:w-9" />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
