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
      if (window.scrollY > 50) setIsScroll(true);
      else setIsScroll(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Glow Effect */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ${
          isScroll
            ? "bg-white/70 dark:bg-[#11001F]/70 backdrop-blur-lg shadow-lg border-b border-white/20 dark:shadow-white/20"
            : ""
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
          className={`hidden md:flex items-center gap-6 lg:gap-10 rounded-full px-12 py-3 transition-all duration-500 ${
            isScroll
              ? ""
              : "bg-white/60 shadow-md backdrop-blur-md dark:border dark:border-white/30 dark:bg-[#1a002a]/40"
          }`}
        >
          {["Home", "About", "Services", "Work", "Contact"].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative font-medium text-gray-700 dark:text-white hover:text-pink-500 transition-colors duration-300"
              >
                {item}
                {/* Sexy underline hover */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 hover:w-full"></span>
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
            className="hidden lg:flex items-center gap-3 px-8 py-2 border border-gray-400 
            rounded-full ml-4 font-medium text-gray-700 dark:text-white 
            hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white 
            transition-all duration-500"
          >
            Contact me
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow"
              className="w-3"
            />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-4" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-7 hover:scale-110 transition-transform duration-300"
            />
          </button>
        </div>

        {/* ---------- Mobile Menu ---------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 right-0 
          w-64 h-screen bg-white/90 dark:bg-[#1a002a]/95 dark:text-white 
          shadow-2xl backdrop-blur-xl transition-transform duration-500 translate-x-full z-50"
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer hover:scale-125 transition-transform duration-300"
            />
          </div>

          {["Home", "About", "Services", "Work", "Contact"].map((item, i) => (
            <li key={i}>
              <a
                onClick={closeMenu}
                href={`#${item.toLowerCase()}`}
                className="block text-lg font-medium hover:text-pink-500 transition-colors duration-300"
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
