import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center
      text-center px-4 sm:px-6 gap-4 sm:gap-5 overflow-hidden pt-20"
    >
      {/* Background blobs — clipped, no overflow */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-violet-400/20 dark:bg-purple-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-pink-400/20 dark:bg-pink-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-48 sm:h-64 bg-orange-300/10 dark:bg-violet-500/8 blur-[80px] rounded-full pointer-events-none -z-10" />

      {/* Profile image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
        className="relative flex-shrink-0"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 blur-md opacity-50 scale-110" />
        <Image
          src={assets.profile_img}
          alt="Dimpal Gogoi"
          className="relative z-10 rounded-full w-28 sm:w-36 md:w-44 border-4 border-white dark:border-purple-900 shadow-2xl shadow-purple-400/30"
          priority
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center flex-wrap gap-2 text-base sm:text-lg md:text-xl font-Ovo text-gray-600 dark:text-gray-300"
      >
        Hi! I'm
        <span className="font-bold bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
          Dimpal Gogoi
        </span>
        <Image src={assets.hand_icon} alt="wave" className="w-5 sm:w-6" />
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="w-full max-w-2xl font-extrabold leading-tight"
      >
        <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
          CS Student @ Tezpur University
        </span>
        <br />
        <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-500 dark:text-purple-200 tracking-wide">
          Developer • Learner • Innovator
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full max-w-xl font-Ovo text-gray-500 dark:text-gray-400 text-sm sm:text-base"
      >
        Passionate about building{' '}
        <span className="text-violet-600 dark:text-violet-400 font-semibold">real-world solutions</span> with technology.
        MERN stack, databases, IoT systems, and computer networks.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-none sm:w-auto items-center justify-center"
      >
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 py-3 rounded-full
          bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400
          text-white font-semibold text-sm sm:text-base
          shadow-lg shadow-violet-400/40 hover:shadow-violet-500/60 hover:scale-105
          transition-all duration-300 flex items-center justify-center gap-2"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-sm sm:text-base
          border-2 border-violet-300 dark:border-purple-500/60
          text-violet-700 dark:text-purple-300
          bg-white dark:bg-purple-950/40
          hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-purple-900/50
          hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          className="w-5 h-5 border-2 border-violet-300 dark:border-purple-600 rounded-full flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 bg-violet-400 dark:bg-purple-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Header
