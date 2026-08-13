import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(0)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(100%)'
  }

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top glow — light mode only, non-interactive */}
      <div className="fixed top-0 right-0 w-full -z-10 translate-y-[-80%] dark:hidden pointer-events-none">
        <Image src={assets.header_bg_color} alt="" className="w-full" priority />
      </div>

      <nav
        className={`w-full fixed top-0 left-0 right-0 px-4 sm:px-6 lg:px-10 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? 'bg-white/90 dark:bg-[#0d001a]/90 backdrop-blur-lg shadow-md shadow-violet-100/60 dark:shadow-purple-900/30 border-b border-violet-100 dark:border-purple-900/40'
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
          {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
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

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Theme toggle */}
          <button
            onClick={() => setIsDarkMode(p => !p)}
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
            bg-violet-50 dark:bg-purple-900/40 border border-violet-200 dark:border-purple-700/40
            hover:bg-violet-100 dark:hover:bg-purple-800/60 hover:scale-110
            transition-all duration-300"
            aria-label="Toggle theme"
          >
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="toggle theme" className="w-5" />
          </button>

          {/* Contact button — desktop only */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm
            bg-gradient-to-r from-violet-600 to-pink-500 text-white flex-shrink-0
            shadow-md shadow-violet-400/30 hover:shadow-lg hover:shadow-violet-400/50 hover:scale-105
            transition-all duration-300"
          >
            Contact me
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="flex md:hidden items-center justify-center w-9 h-9"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>
      </nav>

      {/* ── Mobile slide-in menu ── */}
      {/* Backdrop */}
      <div
        ref={null}
        className="md:hidden fixed inset-0 z-[60] pointer-events-none"
        style={{ display: 'contents' }}
      />
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-5 pt-20 pb-10 px-8 fixed top-0 right-0
        w-64 h-screen z-[60]
        bg-white dark:bg-[#130028]
        border-l border-violet-100 dark:border-purple-800/50
        shadow-2xl
        transition-transform duration-300 ease-in-out translate-x-full"
        style={{ willChange: 'transform' }}
      >
        {/* Rainbow top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400" />

        {/* Close */}
        <button
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close" className="w-5" />
        </button>

        {/* Nav links */}
        {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => (
          <li key={item}>
            <a
              onClick={closeMenu}
              href={`#${item.toLowerCase()}`}
              className="block text-base font-semibold text-gray-700 dark:text-purple-200
              hover:text-violet-600 dark:hover:text-pink-400 transition-colors py-1"
            >
              {item}
            </a>
          </li>
        ))}

        {/* Contact CTA inside mobile menu */}
        <li className="mt-4">
          <a
            onClick={closeMenu}
            href="#contact"
            className="block text-center px-6 py-2.5 rounded-full font-semibold text-sm
            bg-gradient-to-r from-violet-600 to-pink-500 text-white
            shadow-md shadow-violet-400/30"
          >
            Contact me
          </a>
        </li>
      </ul>
    </>
  )
}

export default Navbar
