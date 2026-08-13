import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div id="home" className="relative w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-6 overflow-hidden">

      {/* Static Background Glow — no infinite animation for performance */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-400/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
        className="relative"
      >
        <Image 
          src={assets.profile_img} 
          alt="profile" 
          className="rounded-full w-20 sm:w-40 border-4 border-purple-300/50 shadow-xl shadow-purple-500/30"
          priority
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center gap-2 text-lg md:text-2xl mb-2 font-Ovo text-gray-800 dark:text-white"
      >
        Hi! I'm 
        <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Dimpal Gogoi
        </span>
        <Image src={assets.hand_icon} alt="wave" className="w-6" />
      </motion.h3>

      {/* Main Title */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-xl sm:text-2xl lg:text-[38px] font-extrabold leading-tight"
      >
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
          Computer Science Student @ Tezpur University
        </span>
        <br />
        <span className="text-gray-700 dark:text-gray-200 text-lg sm:text-xl lg:text-2xl font-semibold">
          Developer • Learner • Innovator
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-2xl mx-auto font-Ovo text-gray-600 text-sm sm:text-base lg:text-lg dark:text-gray-300 mt-2"
      >
        Passionate about building <span className="text-purple-600 dark:text-purple-400 font-semibold">real-world solutions</span> with technology.
        Skilled in web development (MERN stack), databases, IoT systems, and computer networks.
      </motion.p>

      {/* Call To Actions */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="flex flex-col sm:flex-row gap-4 mt-4 items-center"
      >
        <a
          href="#contact"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium text-sm sm:text-base
          shadow-lg hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          Contact Me <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-8 py-3 rounded-full border-2 border-purple-300 dark:border-purple-500
          bg-white dark:bg-transparent text-gray-800 dark:text-white font-medium text-sm sm:text-base
          hover:border-purple-500 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          My Resume <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </motion.div>
    </div>
  )
}

export default Header
