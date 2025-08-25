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
      transition={{ duration: 1 }}
    >
      {/* Floating Gradient Glow Behind */}
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-gradient-to-r from-purple-500/40 via-pink-400/30 to-blue-500/40 rounded-full"></div>

      {/* Headings */}
      <motion.h4
        className="text-center text-lg mb-2 font-Ovo text-gray-600 dark:text-pink-200"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About Me
      </motion.h2>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-64 sm:w-80"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 rounded-3xl blur-xl opacity-40 animate-pulse"></div>
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl relative z-10 shadow-xl shadow-purple-500/20"
          />
        </motion.div>

        {/* Text & Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-white/80 leading-relaxed">
            Hi, I’m <span className="font-semibold text-purple-600 dark:text-pink-400">Dimpal Gogoi</span>, 
            a Computer Science student at Tezpur University, actively seeking opportunities 
            where I can apply my skills and grow as a developer. My core interests lie in 
            <span className="text-purple-500"> web development (MERN stack)</span>, databases, IoT systems, 
            and computer networks.  
            <br /><br />
            I’ve built projects like an <span className="italic">Inter-Hostel Tournament Management System</span> 
            and an <span className="italic">IoT-enabled fire alarm</span>, applying my knowledge to solve real-world problems.  
            Beyond coding, I love experimenting with C++/Python and constantly learning new tools to expand my arsenal.
          </p>

          <p className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-white/70 leading-relaxed">
            Outside of tech, I’m passionate about playing the guitar 🎸 — it fuels my creativity and keeps me balanced.  
            I’m eager to bring this same <span className="text-pink-500">energy, curiosity, and innovation</span> 
            to professional challenges ahead.
          </p>

          {/* Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05, y: -5 }}
                key={index}
                className="border border-gray-300 rounded-xl p-6 cursor-pointer 
                bg-white/70 dark:bg-[#2a004a]/40 backdrop-blur-md shadow-md
                hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-500"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80 text-lg"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.15, rotate: 6 }}
                key={index}
                className="flex items-center justify-center w-14 sm:w-16 aspect-square 
                border border-gray-300 dark:border-white/30 rounded-xl bg-white/70 dark:bg-[#1a002a]/60 
                backdrop-blur-md shadow hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer 
                transition-all duration-500"
              >
                <Image src={tool} alt="Tool" className="w-6 sm:w-8" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
