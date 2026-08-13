import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div
      id="home"
      className="relative w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col
      items-center justify-center gap-6 overflow-hidden"
    >
      {/* Dark mode deep glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-700/30 dark:bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-pink-600/20 dark:bg-pink-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 dark:bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
        className="relative"
      >
        {/* Glow ring behind image */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 blur-md opacity-60 scale-110" />
        <Image
          src={assets.profile_img}
          alt="Dimpal Gogoi"
          className="relative z-10 rounded-full w-24 sm:w-44 border-4 border-white/80 dark:border-purple-900/80 shadow-2xl"
          priority
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex items-center justify-center gap-2 text-lg md:text-2xl font-Ovo text-gray-700 dark:text-gray-300"
      >
        Hi! I'm
        <span className="font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
          Dimpal Gogoi
        </span>
        <Image src={assets.hand_icon} alt="wave" className="w-6" />
      </motion.h3>

      {/* Main Title */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl sm:text-2xl lg:text-[36px] font-extrabold leading-tight"
      >
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
          Computer Science Student @ Tezpur University
        </span>
        <br />
        <span className="text-gray-600 dark:text-purple-200 text-base sm:text-lg lg:text-2xl font-semibold tracking-wide">
          Developer &nbsp;•&nbsp; Learner &nbsp;•&nbsp; Innovator
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="max-w-2xl mx-auto font-Ovo text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-lg"
      >
        Passionate about building{' '}
        <span className="text-purple-600 dark:text-purple-400 font-semibold">real-world solutions</span> with technology.
        Skilled in MERN stack, databases, IoT systems, and computer networks.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 mt-2 items-center"
      >
        <a
          href="#contact"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
          text-white font-semibold text-sm sm:text-base
          shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105
          transition-all duration-300 flex items-center gap-2"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-8 py-3 rounded-full font-semibold text-sm sm:text-base
          border-2 border-purple-400/60 dark:border-purple-500/60
          text-purple-700 dark:text-purple-300
          bg-white/80 dark:bg-purple-950/40
          hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/50
          hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </motion.div>
    </div>
  )
}

export default Header
