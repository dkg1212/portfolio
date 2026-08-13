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
      {/* Static background glow */}
      <div className="absolute inset-0 -z-10 opacity-20 blur-3xl bg-gradient-to-r from-purple-400/30 via-pink-300/20 to-blue-400/30 rounded-full pointer-events-none"></div>

      {/* Headings */}
      <motion.h4
        className="text-center text-lg mb-2 font-Ovo text-purple-500 dark:text-pink-300"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-16 my-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-64 sm:w-80 flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 via-pink-400 to-yellow-300 rounded-3xl blur-lg opacity-30"></div>
          <Image
            src={assets.user_image}
            alt="Dimpal Gogoi"
            className="w-full rounded-3xl relative z-10 shadow-xl"
          />
        </motion.div>

        {/* Text & Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1"
        >
          <p className="mb-6 max-w-2xl font-Ovo text-gray-700 dark:text-white/80 leading-relaxed">
            Hi, I'm <span className="font-semibold text-purple-600 dark:text-pink-400">Dimpal Gogoi</span>,
            a Computer Science student at Tezpur University, actively seeking opportunities
            where I can apply my skills and grow as a developer. My core interests lie in
            <span className="text-purple-600 dark:text-purple-400"> web development (MERN stack)</span>, databases, IoT systems,
            and computer networks.
          </p>

          <p className="mb-8 max-w-2xl font-Ovo text-gray-700 dark:text-white/70 leading-relaxed">
            I've built projects like an <span className="italic font-medium">Inter-Hostel Tournament Management System</span>
            {" "}and an <span className="italic font-medium">IoT-enabled fire alarm</span>. Outside of tech, I play guitar 🎸 — it fuels my creativity.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mb-8">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ y: -4 }}
                key={index}
                className="border border-purple-200 dark:border-white/20 rounded-xl p-5 cursor-pointer 
                bg-white dark:bg-[#2a004a]/40 shadow-sm
                hover:shadow-md hover:border-purple-400 dark:hover:border-pink-400/50 transition-all duration-300"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-2"
                />
                <h3 className="my-3 font-semibold text-gray-800 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/70">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools Section */}
          <h4 className="mb-4 text-gray-700 font-Ovo dark:text-white/80 text-lg font-medium">
            Tools I use
          </h4>

          <ul className="flex flex-wrap gap-4">
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1, rotate: 5 }}
                key={index}
                className="flex items-center justify-center w-14 sm:w-16 aspect-square 
                border border-purple-200 dark:border-white/20 rounded-xl bg-white dark:bg-[#1a002a]/60 
                shadow-sm hover:shadow-md hover:border-purple-400 dark:hover:border-purple-400/50 cursor-pointer 
                transition-all duration-300"
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
