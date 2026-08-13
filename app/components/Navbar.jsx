import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Light mode top gradient glow */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden pointer-events-none">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? 'bg-white/90 dark:bg-[#0d001a]/90 backdrop-blur-lg shadow-lg shadow-violet-100 dark:shadow-purple-900/30 border-b border-violet-100 dark:border-purple-900/50'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-24 sm:w-28 cursor-pointer sm:mr-14 hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-10 rounded-full px-12 py-3 transition-all duration-300 ${
            isScroll
              ? ''
              : 'bg-white/90 dark:bg-purple-950/60 border border-violet-200 dark:border-purple-700/40 shadow-sm shadow-violet-100 backdrop-blur-md'
          }`}
        >
          {['Home', 'About', 'Services', 'Work', 'Contact'].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative font-medium text-gray-600 dark:text-purple-200 hover:text-violet-600 dark:hover:text-pink-400 transition-colors duration-200
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-violet-500 after:to-pink-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={() => setIsDarkMode(p => !p)}
            className="w-9 h-9 rounded-full flex items-center justify-center
            bg-violet-50 dark:bg-purple-900/40 border border-violet-200 dark:border-purple-700/40
            hover:bg-violet-100 dark:hover:bg-purple-800/60 hover:scale-110
            transition-all duration-300"
            aria-label="Toggle theme"
          >
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="toggle" className="w-5" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm
            bg-gradient-to-r from-violet-600 to-pink-500 text-white
            shadow-md shadow-violet-400/30 dark:shadow-purple-800/40
            hover:shadow-lg hover:shadow-violet-400/50 hover:scale-105
            transition-all duration-300"
          >
            Contact me
            <Image src={assets.arrow_icon_dark} alt="arrow" className="w-3 invert" />
          </a>

          <button className="block md:hidden ml-2" onClick={openMenu} aria-label="Open menu">
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menu" className="w-7" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 right-0
          w-64 h-screen z-50
          bg-white dark:bg-[#130028]
          border-l border-violet-100 dark:border-purple-800/50
          shadow-2xl shadow-violet-100 dark:shadow-purple-900/50
          transition-transform duration-300 translate-x-full"
        >
          {/* Decorative top gradient in mobile menu */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400" />

          <div className="absolute top-6 right-6 cursor-pointer" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close" className="w-5" />
          </div>

          {['Home', 'About', 'Services', 'Work', 'Contact'].map((item, i) => (
            <li key={i}>
              <a
                onClick={closeMenu}
                href={`#${item.toLowerCase()}`}
                className="block text-lg font-medium text-gray-700 dark:text-purple-200 hover:text-violet-600 dark:hover:text-pink-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
