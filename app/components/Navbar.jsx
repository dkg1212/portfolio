import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top glow only in light mode */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden pointer-events-none">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/80 dark:bg-[#11001F]/80 backdrop-blur-md shadow-sm border-b border-purple-100 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14 hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-10 rounded-full px-12 py-3 transition-all duration-300 ${
            isScroll
              ? ""
              : "bg-white/70 shadow-sm border border-purple-100 dark:border-white/20 dark:bg-[#1a002a]/50 backdrop-blur-sm"
          }`}
        >
          {["Home", "About", "Services", "Work", "Contact"].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-700 dark:text-white/90 hover:text-purple-600 dark:hover:text-pink-400 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="hover:scale-110 transition-transform duration-300"
            aria-label="Toggle dark mode"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="theme toggle"
              className="w-6"
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-2 border-2 border-purple-400 dark:border-purple-500
            rounded-full font-medium text-purple-600 dark:text-white 
            hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:text-white hover:border-transparent
            transition-all duration-300"
          >
            Contact me
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow"
              className="w-3"
            />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openMenu} aria-label="Open menu">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-7"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 right-0 
          w-64 h-screen bg-white dark:bg-[#1a002a] dark:text-white 
          shadow-2xl transition-transform duration-400 translate-x-full z-50"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>

          {["Home", "About", "Services", "Work", "Contact"].map((item, i) => (
            <li key={i}>
              <a
                onClick={closeMenu}
                href={`#${item.toLowerCase()}`}
                className="block text-lg font-medium text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-pink-400 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
