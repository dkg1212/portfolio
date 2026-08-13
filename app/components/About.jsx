import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Deep purple glow — more visible in dark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/10 dark:bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.h4
        className="text-center text-lg mb-2 font-Ovo text-purple-500 dark:text-purple-400 tracking-widest uppercase text-sm"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center gap-16 my-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-64 sm:w-80 flex-shrink-0"
        >
          {/* Gradient glow behind image */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 rounded-3xl blur-xl opacity-30 dark:opacity-50" />
          <Image
            src={assets.user_image}
            alt="Dimpal Gogoi"
            className="w-full rounded-3xl relative z-10 shadow-2xl dark:shadow-purple-900/50"
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
          <p className="mb-6 max-w-2xl font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I'm{' '}
            <span className="font-bold text-purple-600 dark:text-purple-400">Dimpal Gogoi</span>,
            a Computer Science student at Tezpur University, actively seeking opportunities
            to apply my skills and grow as a developer. My core interests lie in{' '}
            <span className="text-pink-600 dark:text-pink-400 font-medium">web development (MERN stack)</span>,
            databases, IoT systems, and computer networks.
          </p>

          <p className="mb-8 max-w-2xl font-Ovo text-gray-600 dark:text-gray-400 leading-relaxed">
            I've built projects like an{' '}
            <span className="italic text-gray-700 dark:text-gray-300 font-medium">Inter-Hostel Tournament Management System</span>
            {' '}and an{' '}
            <span className="italic text-gray-700 dark:text-gray-300 font-medium">IoT-enabled fire alarm</span>.
            Outside of tech, I play guitar 🎸 — it keeps the creativity alive.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mb-8">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ y: -5, scale: 1.02 }}
                key={index}
                className="glow-card rounded-xl p-5 cursor-pointer border
                border-purple-200/80 dark:border-purple-800/60
                bg-white dark:bg-purple-950/50
                shadow-sm dark:shadow-purple-900/30
                hover:border-purple-400 dark:hover:border-pink-500/60
                transition-all duration-300"
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-2" />
                <h3 className="my-3 font-semibold text-gray-800 dark:text-white">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <h4 className="mb-4 text-gray-700 dark:text-purple-300 text-base font-semibold tracking-wide">
            Tools I use
          </h4>

          <ul className="flex flex-wrap gap-3">
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.15, rotate: 6 }}
                key={index}
                className="glow-card flex items-center justify-center w-14 sm:w-16 aspect-square
                rounded-xl border border-purple-200/80 dark:border-purple-800/60
                bg-white dark:bg-purple-950/50
                shadow-sm cursor-pointer transition-all duration-300
                hover:border-purple-400 dark:hover:border-pink-500/60"
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
