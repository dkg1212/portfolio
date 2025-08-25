import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div id="home" className="relative w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-6 overflow-hidden">

      {/* Subtle Animated Background Glow */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/30 blur-[160px] rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-500/30 blur-[160px] rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
        className="relative"
      >
        <Image 
          src={assets.profile_img} 
          alt="profile" 
          className="rounded-full w-40 border-4 border-white/30 shadow-xl shadow-purple-500/40"
        />
        {/* Glowing ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-purple-400/60 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-2 text-lg md:text-2xl mb-2 font-Ovo"
      >
        Hi! I'm 
        <span className="font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Dimpal Gogoi
        </span>
        <Image src={assets.hand_icon} alt="wave" className="w-6" />
      </motion.h3>

      {/* Main Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[52px] font-extrabold bg-gradient-to-r 
        from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text leading-tight"
      >
        Computer Science Student @ Tezpur University  
        <br />
        <span className="text-white/90 dark:text-gray-200">Developer • Learner • Innovator</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-gray-300 mt-4"
      >
        Passionate about building <span className="text-purple-500 font-semibold">real-world solutions</span>  
        with technology. Skilled in web development (MERN stack), databases, IoT systems, and  
        computer networks — always learning, always innovating. 🚀
      </motion.p>

      {/* Call To Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-transparent rounded-full 
          bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium 
          shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          Contact Me <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border border-gray-300 rounded-full 
          bg-white/80 backdrop-blur-lg text-gray-900 font-medium 
          shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          My Resume <Image src={assets.download_icon} alt="download" className="w-4" />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
