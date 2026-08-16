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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navItems = ['Home', 'About', 'Services', 'Work', 'Contact']

  return (
    <>
      {/* ── Main navbar ── */}
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 xl:px-[8%] py-4
        flex items-center justify-between transition-all duration-300 ${
          isScroll
            ? 'bg-white/95 dark:bg-[#020817]/95 backdrop-blur-xl shadow-sm border-b border-slate-200 dark:border-slate-800'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex-shrink-0">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="DKG logo"
            className="w-20 sm:w-24 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          />
        </a>

        {/* Desktop nav links */}
        <ul
          className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 ${
            isScroll
              ? ''
              : 'bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 shadow-sm backdrop-blur-md'
          }`}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 rounded-full text-sm font-medium
                text-slate-600 dark:text-slate-300
                hover:text-cyan-600 dark:hover:text-cyan-400
                hover:bg-cyan-50 dark:hover:bg-cyan-950/40
                transition-all duration-200"
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
            bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
            hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-200"
          >
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="theme" className="w-4.5" />
          </button>

          {/* Contact CTA — desktop */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm
            bg-cyan-500 hover:bg-cyan-400 text-white
            shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105
            transition-all duration-200"
          >
            Contact me
          </a>

          {/* Hamburger — mobile */}
          <button
            className="flex md:hidden items-center justify-center w-9 h-9"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="open menu" className="w-6" />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay backdrop ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* ── Mobile slide-in panel ── */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] z-[80]
        bg-white dark:bg-slate-950
        border-l border-slate-200 dark:border-slate-800
        shadow-2xl flex flex-col
        transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cyan top accent */}
        <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 to-teal-400 flex-shrink-0" />

        {/* Header row */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="DKG" className="w-20" />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-full
            bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close" className="w-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold
              text-slate-700 dark:text-slate-200
              hover:bg-cyan-50 dark:hover:bg-cyan-950/40
              hover:text-cyan-600 dark:hover:text-cyan-400
              transition-all duration-200"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
              {item}
            </a>
          ))}
        </nav>

        {/* Contact CTA */}
        <div className="px-6 pb-8 flex-shrink-0">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-6 py-3 rounded-full font-bold text-sm
            bg-cyan-500 hover:bg-cyan-400 text-white
            shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all duration-200"
          >
            Contact me →
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
