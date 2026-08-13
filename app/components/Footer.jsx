import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative mt-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 dark:from-purple-900 dark:via-[#1a002a] dark:to-blue-900">

      <div className="text-center py-10">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="DKG Logo"
          className="w-36 mx-auto mb-5"
        />

        <a
          href="mailto:gogoidimpal546@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 
          backdrop-blur-sm rounded-full text-white font-medium 
          hover:bg-white/30 transition-all duration-300"
        >
          <Image
            src={assets.mail_icon_dark}
            alt="mail"
            className="w-5"
          />
          gogoidimpal546@gmail.com
        </a>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-white/20 mx-10 py-6">
        <p className="text-white/80 mb-4 sm:mb-0 text-sm">
          © {new Date().getFullYear()} Dimpal Gogoi. All rights reserved.
        </p>

        <ul className="flex items-center justify-center gap-8">
          {[
            { label: "GitHub", href: "https://github.com/dkg1212" },
            { label: "LinkedIn", href: "https://linkedin.com/in/dimpalgogoi" },
            { label: "Twitter", href: "https://twitter.com/dimpalgogoi" },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-sm transition-colors duration-200"
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
