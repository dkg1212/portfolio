import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative mt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 w-full h-full 
      bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 
      dark:from-purple-900 dark:via-pink-900 dark:to-blue-800 
      opacity-90 blur-3xl"></div>

      <div className="text-center py-10">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="DKG Logo"
          className="w-36 mx-auto mb-4"
        />

        <a
          href="mailto:gogoidimpal546@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 dark:bg-black/40 
          backdrop-blur-md rounded-full text-white dark:text-pink-200 font-semibold 
          transition-all duration-300 hover:scale-105 hover:bg-white/50 dark:hover:bg-black/60"
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail"
            className="w-5"
          />
          gogoidimpal546@gmail.com
        </a>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-white/30 mx-10 py-6">
        <p className="text-white/80 dark:text-white/70 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Dimpal Gogoi. All rights reserved.
        </p>

        <ul className="flex items-center justify-center gap-8">
          <li>
            <a
              href="https://github.com/dimpalgogoi"
              target="_blank"
              className="text-white/80 dark:text-white/70 hover:text-pink-400 dark:hover:text-cyan-400 transition-all duration-300"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/dimpalgogoi"
              target="_blank"
              className="text-white/80 dark:text-white/70 hover:text-pink-400 dark:hover:text-cyan-400 transition-all duration-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/dimpalgogoi"
              target="_blank"
              className="text-white/80 dark:text-white/70 hover:text-pink-400 dark:hover:text-cyan-400 transition-all duration-300"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
