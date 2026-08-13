import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Light mode: vivid gradient. Dark mode: deep purple */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-pink-500 to-orange-400 dark:from-[#1a003a] dark:via-[#0d001a] dark:to-[#1a003a]" />

      {/* Light mode texture dots */}
      <div className="absolute inset-0 dot-pattern opacity-20 dark:opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Glow orb dark mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-500/0 dark:bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center py-12">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="DKG Logo"
          className="w-36 mx-auto mb-5 drop-shadow-lg"
        />

        <a
          href="mailto:gogoidimpal546@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5
          bg-white/20 dark:bg-white/5
          border border-white/35 dark:border-purple-400/30
          backdrop-blur-sm rounded-full
          text-white font-semibold text-sm
          hover:bg-white/30 dark:hover:bg-purple-900/40 hover:scale-105
          transition-all duration-300 shadow-sm"
        >
          <Image src={assets.mail_icon_dark} alt="mail" className="w-4" />
          gogoidimpal546@gmail.com
        </a>
      </div>

      <div className="relative z-10 sm:flex items-center justify-between border-t border-white/15 dark:border-purple-800/40 mx-5 sm:mx-10 py-6 text-center sm:text-left">
        <p className="text-white/80 dark:text-gray-400 text-sm mb-4 sm:mb-0 text-center sm:text-left">
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
                className="text-white/75 dark:text-gray-400 text-sm font-medium hover:text-white dark:hover:text-purple-300 transition-colors duration-200"
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
