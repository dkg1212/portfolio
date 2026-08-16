'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative overflow-hidden w-full bg-slate-900 dark:bg-[#020817]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-25 dark:opacity-15 pointer-events-none" />
      <div className="orb w-80 h-48 top-0 left-1/2 -translate-x-1/2 bg-cyan-500/6 dark:bg-cyan-500/4" />

      <div className="relative z-10 text-center pt-12 pb-8 px-4">
        <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.5 }}>
          <Image src={assets.logo_dark} alt="DKG" className="w-24 sm:w-28 mx-auto mb-5 opacity-90" />
          <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
            Building thoughtful software, one commit at a time.
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3 mb-6">
            {[
              { href:'https://github.com/dkg1212', icon:<FaGithub className="w-4 h-4" />, label:'GitHub' },
              { href:'https://linkedin.com/in/dimpalgogoi', icon:<FaLinkedin className="w-4 h-4" />, label:'LinkedIn' },
              { href:'https://twitter.com/dimpalgogoi', icon:<FaTwitter className="w-4 h-4" />, label:'Twitter' },
            ].map(({ href, icon, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale:1.15, y:-3 }} whileTap={{ scale:0.95 }}
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center
                bg-white/8 border border-white/12 text-slate-400
                hover:bg-cyan-500/20 hover:border-cyan-500/40 hover:text-cyan-400
                transition-all duration-200">
                {icon}
              </motion.a>
            ))}
          </div>

          <motion.a href="mailto:gogoidimpal546@gmail.com"
            whileHover={{ scale:1.04, y:-2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5
            bg-white/5 border border-white/10 rounded-full
            text-slate-300 font-medium text-xs sm:text-sm
            hover:bg-white/10 hover:text-white hover:border-cyan-500/30 transition-all duration-200">
            <Image src={assets.mail_icon_dark} alt="mail" className="w-4" />
            gogoidimpal546@gmail.com
          </motion.a>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-white/7 mx-4 sm:mx-10 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Dimpal Gogoi — All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
