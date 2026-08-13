import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 dark:from-[#1a003a] dark:via-[#0d001a] dark:to-[#1a003a]" />

      {/* Dark mode top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent dark:via-pink-500 opacity-60" />

      {/* Dark mode ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-600/0 dark:bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center py-10">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="DKG Logo"
          className="w-36 mx-auto mb-5"
        />

        <a
          href="mailto:gogoidimpal546@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5
          bg-white/15 dark:bg-white/5
          border border-white/25 dark:border-purple-400/30
          backdrop-blur-sm rounded-full
          text-white font-medium text-sm
          hover:bg-white/25 dark:hover:bg-purple-900/40
          transition-all duration-300"
        >
          <Image src={assets.mail_icon_dark} alt="mail" className="w-4" />
          gogoidimpal546@gmail.com
        </a>
      </div>

      <div className="relative z-10 sm:flex items-center justify-between border-t border-white/15 dark:border-purple-800/40 mx-10 py-6">
        <p className="text-white/70 dark:text-gray-400 text-sm mb-4 sm:mb-0 text-center sm:text-left">
          © {new Date().getFullYear()} Dimpal Gogoi. All rights reserved.
        </p>

        <ul className="flex items-center justify-center gap-8">
          {[
            { label: 'GitHub', href: 'https://github.com/dkg1212' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/dimpalgogoi' },
            { label: 'Twitter', href: 'https://twitter.com/dimpalgogoi' },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 dark:text-gray-400 text-sm hover:text-white dark:hover:text-purple-300 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
