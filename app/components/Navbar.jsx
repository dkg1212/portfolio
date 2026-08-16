'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
      // Update active section
      const sections = ['home','about','services','work','contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
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
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`w-full fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 xl:px-[8%] py-3
        flex items-center justify-between transition-all duration-300 ${
          isScroll
            ? 'bg-white/95 dark:bg-[#020817]/95 backdrop-blur-xl shadow-sm border-b border-slate-200 dark:border-slate-800'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <motion.a href="#top" whileHover={{ scale: 1.04 }} className="flex-shrink-0">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="DKG logo"
            className="w-20 sm:w-24 cursor-pointer"
          />
        </motion.a>

        {/* Desktop nav */}
        <ul
          className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 ${
            isScroll
              ? ''
              : 'bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 shadow-sm backdrop-blur-md'
          }`}
        >
          {navItems.map((item) => (
            <li key={item} className="relative">
              <a
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 rounded-full text-sm font-medium block
                transition-all duration-200
                ${active === item.toLowerCase()
                  ? 'text-cyan-600 dark:text-cyan-400'
                  : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
              >
                {active === item.toLowerCase() && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-cyan-50 dark:bg-cyan-950/50"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <motion.button
            onClick={() => setIsDarkMode(p => !p)}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full flex items-center justify-center
            bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
            hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
          >
            <motion.div
              key={isDarkMode ? 'sun' : 'moon'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0,   opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="theme" className="w-4.5" />
            </motion.div>
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm
            bg-cyan-500 hover:bg-cyan-400 text-white
            shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40
            transition-colors duration-200"
          >
            Contact me
          </motion.a>

          <button
            className="flex md:hidden items-center justify-center w-9 h-9"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="open menu" className="w-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
          />
        )}
      </AnimatePresence>

      {/* Mobile panel */}
      <motion.div
        initial={false}
        animate={{ x: menuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 35 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] z-[80]
        bg-white dark:bg-slate-950
        border-l border-slate-200 dark:border-slate-800
        shadow-2xl flex flex-col"
      >
        <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500 to-teal-400 flex-shrink-0" />
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="DKG" className="w-20" />
          <button onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close" className="w-4" />
          </button>
        </div>
        <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.06 + 0.1 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold
              transition-all duration-200
              ${active === item.toLowerCase()
                ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${active === item.toLowerCase() ? 'bg-cyan-500' : 'bg-slate-300 dark:bg-slate-600'}`} />
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="px-6 pb-8 flex-shrink-0">
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-6 py-3 rounded-full font-bold text-sm
            bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/30 transition-colors duration-200">
            Contact me →
          </a>
        </div>
      </motion.div>
    </>
  )
}

export default Navbar
