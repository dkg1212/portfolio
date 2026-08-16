'use client'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const About = ({ isDarkMode }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgX  = useSpring(useTransform(scrollYProgress, [0, 0.5], [-28, 0]), { stiffness:70, damping:18 })
  const textX = useSpring(useTransform(scrollYProgress, [0, 0.5], [28, 0]),  { stiffness:70, damping:18 })

  // Spotlight on card grid
  const gridRef = useRef(null)
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = grid.querySelectorAll('.spotlight-card')
    const move = (e) => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--cx', `${e.clientX - rect.left}px`)
        card.style.setProperty('--cy', `${e.clientY - rect.top}px`)
      })
    }
    grid.addEventListener('mousemove', move)
    return () => grid.removeEventListener('mousemove', move)
  }, [])

  return (
    <section ref={ref} id="about"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-20 sm:py-28 scroll-mt-20 relative overflow-hidden
      bg-white dark:bg-[#0a1628]">
      <div className="orb w-80 h-80 -top-10 right-0 bg-cyan-400/7 dark:bg-cyan-500/5" />
      <div className="orb w-80 h-80 bottom-0 -left-10 bg-teal-400/7 dark:bg-teal-500/5" />

      {/* Heading */}
      <motion.p className="text-center text-xs font-semibold mb-2 text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.25em]"
        initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4 }}>
        Introduction
      </motion.p>
      <motion.h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
        initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:0.08 }}>
        About Me
      </motion.h2>
      <div className="flex justify-center mt-3 mb-14">
        <motion.div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400"
          initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }}
          transition={{ duration:0.5, delay:0.18 }} style={{ transformOrigin:'left' }} />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 relative z-10">

        {/* Profile image */}
        <motion.div style={{ x: imgX }} className="flex-shrink-0 mx-auto lg:mx-0">
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.5, ease:'easeOut' }}
            className="relative w-52 sm:w-64 lg:w-72">
            {/* Glow border */}
            <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-cyan-400/40 via-teal-400/20 to-transparent blur-sm" />
            <Image src={assets.user_image} alt="Dimpal Gogoi"
              className="w-full rounded-2xl relative z-10
              shadow-2xl shadow-slate-200/80 dark:shadow-black/60
              ring-1 ring-slate-200 dark:ring-slate-700/60" />
            {/* Floating chips */}
            <motion.div animate={{ y:[0,-7,0] }} transition={{ duration:3.5, repeat:Infinity, ease:'easeInOut' }}
              className="absolute -bottom-5 -right-5 z-20 flex items-center gap-1.5 px-3 py-2 rounded-xl
              bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80
              shadow-lg shadow-slate-200/60 dark:shadow-black/40 text-xs font-bold text-slate-700 dark:text-slate-200">
              
            </motion.div>
            <motion.div animate={{ y:[0,-9,0] }} transition={{ duration:4.2, delay:1.6, repeat:Infinity, ease:'easeInOut' }}
              className="absolute -top-5 -left-5 z-20 flex items-center gap-1.5 px-3 py-2 rounded-xl
              bg-cyan-500 text-white shadow-lg shadow-cyan-500/35 text-xs font-bold">
              MERN Stack 
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div style={{ x: textX }} className="flex-1 w-full">
          <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.45, delay:0.1 }}
            className="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            Hi, I&apos;m <span className="font-bold text-slate-900 dark:text-white">Dimpal Gogoi</span>,
            a Computer Science student at Tezpur University. My core interests lie in{' '}
            <span className="text-cyan-600 dark:text-cyan-400 font-medium">web development (MERN stack)</span>,
            databases, IoT systems, and computer networks.
          </motion.p>
          <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.45, delay:0.18 }}
            className="mb-8 text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            I&apos;ve built projects like <span className="font-medium text-slate-700 dark:text-slate-200">NextLab</span>{' '}
            (online exam platform) and an <span className="font-medium text-slate-700 dark:text-slate-200">IoT fire alarm</span>.
            Outside tech, I play guitar 🎸 — keeps the creativity alive.
          </motion.p>

          {/* Info cards — spotlight effect */}
          <ul ref={gridRef} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li key={index}
                initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.4, delay:index * 0.1 + 0.2 }}
                whileHover={{ y:-5 }}
                className="spotlight-card card-hover group relative h-full rounded-xl p-5 cursor-pointer overflow-hidden
                border border-slate-200 dark:border-slate-700/60
                bg-white dark:bg-slate-800/50
                hover:border-cyan-400/60 dark:hover:border-cyan-600/60"
              >
                {/* Mouse spotlight overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'radial-gradient(circle 120px at var(--cx,50%) var(--cy,50%), rgba(6,182,212,0.07), transparent 70%)' }} />
                {/* Gradient top line on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-500 to-teal-400
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mb-3 transition-transform duration-200 group-hover:scale-110" />
                <h3 className="font-bold text-slate-800 dark:text-white text-sm mb-1">{title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <motion.h4 initial={{ opacity:0 }} whileInView={{ opacity:1 }}
            viewport={{ once:true }} transition={{ duration:0.4, delay:0.5 }}
            className="mb-3 text-slate-500 dark:text-slate-400 text-xs font-bold tracking-widest uppercase">
            Tools I use
          </motion.h4>
          <ul className="flex flex-wrap gap-3">
            {toolsData.map((tool, index) => (
              <motion.li key={index}
                initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }} transition={{ duration:0.3, delay:index * 0.07 + 0.5, type:'spring' }}
                whileHover={{ scale:1.18, y:-5 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square rounded-xl cursor-pointer
                border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60
                hover:border-cyan-400/60 dark:hover:border-cyan-600/60
                hover:shadow-lg hover:shadow-cyan-500/15
                transition-all duration-200">
                <Image src={tool} alt="Tool" className="w-6 sm:w-8" />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About
