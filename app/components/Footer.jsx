import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative overflow-hidden w-full bg-slate-900 dark:bg-[#020817]">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

      {/* Glow orb */}
      <div className="orb w-80 h-48 top-0 left-1/2 -translate-x-1/2 bg-cyan-500/8 dark:bg-cyan-500/5" />

      {/* Main content */}
      <div className="relative z-10 text-center pt-12 pb-8 px-4">
        <Image
          src={assets.logo_dark}
          alt="DKG"
          className="w-24 sm:w-28 mx-auto mb-6 opacity-90"
        />

        <p className="text-slate-400 text-sm mb-5 max-w-sm mx-auto">
          Building thoughtful software, one commit at a time.
        </p>

        <a
          href="mailto:gogoidimpal546@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5
          bg-white/5 border border-white/10 backdrop-blur-sm rounded-full
          text-slate-300 font-medium text-xs sm:text-sm
          hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-200"
        >
          <Image src={assets.mail_icon_dark} alt="mail" className="w-4" />
          gogoidimpal546@gmail.com
        </a>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/8 dark:border-slate-800 mx-4 sm:mx-10 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Dimpal Gogoi — All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {[
              { label: 'GitHub', href: 'https://github.com/dkg1212' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/dimpalgogoi' },
              { label: 'Twitter', href: 'https://twitter.com/dimpalgogoi' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer"
                  className="text-slate-500 text-xs sm:text-sm font-medium hover:text-cyan-400 transition-colors duration-200">
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
