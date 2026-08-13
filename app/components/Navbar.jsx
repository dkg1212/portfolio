import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navItems = ['Home', 'About', 'Services', 'Work', 'Contact']

  return (
    <>
      {/* Light mode top glow */}
      <div className="fixed top-0 right-0 w-full -z-10 translate-y-[-80%] dark:hidden pointer-events-none">
        <Image src={assets.header_bg_color} alt="" className="w-full" priority />
      </div>

      {/* ── Main navbar ── */}
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 xl:px-[8%] py-4
        flex items-center justify-between transition-all duration-300 ${
          isScroll
            ? 'bg-white/90 dark:bg-[#0d001a]/90 backdrop-blur-lg shadow-md border-b border-violet-100 dark:border-purple-900/40'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex-shrink-0">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="DKG logo"
            className="w-20 sm:w-24 cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop nav links */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 lg:px-12 py-3 transition-all duration-300 ${
            isScroll
              ? ''
              : 'bg-white/90 dark:bg-purple-950/60 border border-violet-200 dark:border-purple-700/40 shadow-sm backdrop-blur-md'
          }`}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative font-medium text-sm text-gray-600 dark:text-purple-200
                hover:text-violet-600 dark:hover:text-pink-400 transition-colors duration-200
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                after:bg-gradient-to-r after:from-violet-500 after:to-pink-500
                after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Theme toggle */}
          <button
            onClick={() => setIsDarkMode(p => !p)}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center
            bg-violet-50 dark:bg-purple-900/40 border border-violet-200 dark:border-purple-700/40
            hover:bg-violet-100 dark:hover:bg-purple-800/60 hover:scale-110 transition-all duration-300"
          >
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="theme" className="w-5" />
          </button>

          {/* Contact — desktop only */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm
            bg-gradient-to-r from-violet-600 to-pink-500 text-white
            shadow-md shadow-violet-400/30 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contact me
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="flex md:hidden items-center justify-center w-9 h-9"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="open menu" className="w-6" />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      {/* Dark backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/40 z-[70] transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in panel — state-driven, no ref transform tricks */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] z-[80]
        bg-white dark:bg-[#130028]
        border-l border-violet-100 dark:border-purple-800/50
        shadow-2xl flex flex-col
        transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Rainbow top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 flex-shrink-0" />

        {/* Header row inside menu */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-violet-100 dark:border-purple-800/40">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="DKG"
            className="w-20"
          />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-full
            bg-violet-50 dark:bg-purple-900/40 border border-violet-200 dark:border-purple-700/40"
          >
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close" className="w-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 py-6 gap-1 flex-1">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-semibold
              text-gray-700 dark:text-purple-200
              hover:bg-violet-50 dark:hover:bg-purple-900/40
              hover:text-violet-600 dark:hover:text-pink-400
              transition-all duration-200"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex-shrink-0" />
              {item}
            </a>
          ))}
        </nav>

        {/* Contact CTA at bottom */}
        <div className="px-6 pb-8 flex-shrink-0">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-6 py-3 rounded-full font-bold text-sm
            bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 text-white
            shadow-lg shadow-violet-400/30 hover:shadow-violet-400/50 hover:scale-105
            transition-all duration-300"
          >
            Contact me →
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
