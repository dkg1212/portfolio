import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative mt-16 sm:mt-20 overflow-hidden w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-pink-500 to-orange-400 dark:from-[#1a003a] dark:via-[#0d001a] dark:to-[#1a003a]" />
      <div className="absolute inset-0 pointer-events-none opacity-15 dark:opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 text-center py-10 px-4">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="DKG"
          className="w-28 sm:w-32 mx-auto mb-5 drop-shadow"
        />

        <a
          href="mailto:gogoidimpal546@gmail.com"
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5
          bg-white/20 dark:bg-white/5
          border border-white/35 dark:border-purple-400/30
          backdrop-blur-sm rounded-full
          text-white font-semibold text-xs sm:text-sm
          hover:bg-white/30 hover:scale-105 transition-all duration-300"
        >
          <Image src={assets.mail_icon_dark} alt="mail" className="w-4" />
          gogoidimpal546@gmail.com
        </a>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/15 dark:border-purple-800/40 mx-4 sm:mx-10 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/75 dark:text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Dimpal Gogoi. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {[
              { label: 'GitHub', href: 'https://github.com/dkg1212' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/dimpalgogoi' },
              { label: 'Twitter', href: 'https://twitter.com/dimpalgogoi' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer"
                  className="text-white/75 dark:text-gray-400 text-xs sm:text-sm font-medium hover:text-white dark:hover:text-purple-300 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
