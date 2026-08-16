'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const ROLES = ['Full-Stack Developer', 'MERN Stack Engineer', 'Backend Developer', 'CS Student']

const Header = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const y1      = useSpring(useTransform(scrollYProgress, [0,1], [0, -100]), { stiffness:80, damping:20 })
  const y2      = useSpring(useTransform(scrollYProgress, [0,1], [0,  -60]), { stiffness:80, damping:20 })
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const scale   = useTransform(scrollYProgress, [0, 0.55], [1, 0.94])

  // Spotlight on mouse move
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    }
    el.addEventListener('mousemove', move)
    return () => el.removeEventListener('mousemove', move)
  }, [])

  // Typed role cycling
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const target = ROLES[roleIdx]
    let timeout
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section
      ref={ref}
      id="home"
      className="spotlight relative w-full min-h-screen flex flex-col items-center justify-center
      text-center px-4 sm:px-6 gap-5 sm:gap-6 overflow-hidden pt-20
      bg-slate-50 dark:bg-[#020817]"
    >
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Parallax orbs */}
      <motion.div style={{ y: y1 }}
        className="orb w-[500px] h-[500px] top-[-120px] left-[-120px] bg-cyan-400/12 dark:bg-cyan-500/8" />
      <motion.div style={{ y: y2 }}
        className="orb w-[500px] h-[500px] bottom-[-120px] right-[-120px] bg-teal-400/10 dark:bg-teal-500/7" />

      {/* Decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10" aria-hidden>
        <div className="w-[520px] h-[520px] rounded-full border border-dashed border-cyan-300/12 dark:border-cyan-800/20 animate-spin-slow" />
        <div className="absolute inset-10 rounded-full border border-dashed border-teal-300/8 dark:border-teal-800/15"
          style={{ animation: 'spin-slow 22s linear infinite reverse' }} />
      </div>

      {/* Content fades/scales on scroll */}
      <motion.div style={{ opacity, scale }} className="relative z-10 flex flex-col items-center gap-5 sm:gap-6">

        {/* Status badge */}
        <motion.div initial={{ opacity:0, y:-14 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
          border border-emerald-200 dark:border-emerald-800/60
          bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ scale:0.78, opacity:0 }} animate={{ scale:1, opacity:1 }}
          transition={{ duration:0.65, type:'spring', stiffness:110, delay:0.1 }}
          className="animate-pulse-glow rounded-full"
        >
          <div className="relative rounded-full p-[3px] bg-gradient-to-br from-cyan-400/40 via-teal-400/20 to-transparent">
            <Image src={assets.profile_img} alt="Dimpal Gogoi"
              className="rounded-full w-28 sm:w-36 md:w-44
              ring-2 ring-white dark:ring-slate-800
              shadow-2xl shadow-slate-300/40 dark:shadow-black/70"
              priority />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p initial={{ y:-10, opacity:0 }} animate={{ y:0, opacity:1 }}
          transition={{ duration:0.4, delay:0.3 }}
          className="flex items-center justify-center flex-wrap gap-2 text-base sm:text-lg text-slate-500 dark:text-slate-400">
          Hi, I&apos;m
          <span className="font-bold text-slate-900 dark:text-white">Dimpal Gogoi</span>
          <motion.span
            animate={{ rotate:[0,18,-8,18,0] }}
            transition={{ duration:1.4, delay:1.2, repeat:Infinity, repeatDelay:3.5 }}
            className="inline-block">
            <Image src={assets.hand_icon} alt="wave" className="w-5 sm:w-6" />
          </motion.span>
        </motion.p>

        {/* Heading + typed role */}
        <motion.div initial={{ y:-10, opacity:0 }} animate={{ y:0, opacity:1 }}
          transition={{ duration:0.4, delay:0.4 }}
          className="w-full max-w-2xl">
          <h1 className="font-bold leading-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white">
              CS Student &amp;
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl shimmer-text mt-1 min-h-[1.25em]">
              {displayed}<span className="cursor-blink text-cyan-500">|</span>
            </span>
            <span className="block text-sm sm:text-base md:text-lg font-medium text-slate-400 dark:text-slate-500 mt-2 tracking-wide">
              @ Tezpur University
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:0.4, delay:0.55 }}
          className="w-full max-w-lg text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Building{' '}
          <span className="text-slate-700 dark:text-slate-200 font-medium">real-world solutions</span>{' '}
          with the MERN stack, databases, IoT systems, and computer networks.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ y:10, opacity:0 }} animate={{ y:0, opacity:1 }}
          transition={{ duration:0.4, delay:0.65 }}
          className="flex flex-col sm:flex-row gap-3 items-center">
          <motion.a href="#contact"
            whileHover={{ scale:1.05, y:-2 }} whileTap={{ scale:0.97 }}
            className="px-7 py-3 rounded-full font-semibold text-sm
            bg-cyan-500 hover:bg-cyan-400 text-white
            shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50
            transition-colors duration-200 flex items-center gap-2">
            Contact Me <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.a>
          <motion.a href="/sample-resume.pdf" download
            whileHover={{ scale:1.05, y:-2 }} whileTap={{ scale:0.97 }}
            className="px-7 py-3 rounded-full font-semibold text-sm
            border border-slate-300 dark:border-slate-700
            text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/80
            hover:border-cyan-400 dark:hover:border-cyan-600
            hover:text-cyan-600 dark:hover:text-cyan-400
            transition-all duration-200 flex items-center gap-2">
            My Resume <Image src={assets.download_icon} alt="" className="w-4" />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.4, delay:0.8 }}
          className="flex items-center divide-x divide-slate-200 dark:divide-slate-700/60
          bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60
          rounded-2xl px-2 py-1 shadow-sm mt-1">
          {[
            { value:'6+', label:'Projects' },
            { value:'1',  label:'Internship' },
            { value:'4+', label:'Certs' },
          ].map(({ value, label }) => (
            <motion.div key={label} whileHover={{ y:-2 }}
              className="px-5 py-2 text-center cursor-default">
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white counter-text">{value}</div>
              <div className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 font-medium">{label}</div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
        transition={{ delay:1.5, duration:0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
        <span className="text-[9px] text-slate-400 dark:text-slate-600 tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y:[0,6,0] }} transition={{ repeat:Infinity, duration:1.6, ease:'easeInOut' }}
          className="w-5 h-8 border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-cyan-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Header
