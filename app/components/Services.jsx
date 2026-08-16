'use client'
import { Code2, MonitorSmartphone, Server, Database, Cpu, Network } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { skills } from '@/assets/assets'

const serviceData = [
  { icon:<Code2 className="w-6 h-6" />,            title:'Full-Stack Web Apps',  description:'MERN stack & MySQL apps with clean architecture, performance, and accessibility in focus.', accent:'cyan',    accentHex:'#06b6d4' },
  { icon:<MonitorSmartphone className="w-6 h-6" />, title:'Frontend UI/UX',       description:'Responsive, mobile-first layouts with React & Tailwind delivering smooth experiences.',        accent:'blue',    accentHex:'#3b82f6' },
  { icon:<Server className="w-6 h-6" />,           title:'Backend & APIs',        description:'Secure REST APIs with Node.js, Express, JWT auth, validation, and error handling.',            accent:'emerald', accentHex:'#10b981' },
  { icon:<Database className="w-6 h-6" />,         title:'Databases & Modeling',  description:'MySQL schema design, efficient queries, migrations, and MongoDB data management.',             accent:'orange',  accentHex:'#f97316' },
  { icon:<Cpu className="w-6 h-6" />,              title:'IoT & Embedded',        description:'ESP32/NodeMCU projects, sensor integrations, and real-time alert systems.',                    accent:'violet',  accentHex:'#8b5cf6' },
  { icon:<Network className="w-6 h-6" />,          title:'Networks & Systems',    description:'Computer networks, routing concepts, and system programming fundamentals.',                    accent:'indigo',  accentHex:'#6366f1' },
]

const accentMap = {
  cyan:    { bg:'bg-cyan-50 dark:bg-cyan-950/40',    icon:'text-cyan-600 dark:text-cyan-400',    grad:'from-cyan-500 to-teal-500' },
  blue:    { bg:'bg-blue-50 dark:bg-blue-950/40',    icon:'text-blue-600 dark:text-blue-400',    grad:'from-blue-500 to-indigo-500' },
  emerald: { bg:'bg-emerald-50 dark:bg-emerald-950/40', icon:'text-emerald-600 dark:text-emerald-400', grad:'from-emerald-500 to-teal-500' },
  orange:  { bg:'bg-orange-50 dark:bg-orange-950/40',  icon:'text-orange-600 dark:text-orange-400',  grad:'from-orange-500 to-amber-500' },
  violet:  { bg:'bg-violet-50 dark:bg-violet-950/40',  icon:'text-violet-600 dark:text-violet-400',  grad:'from-violet-500 to-purple-500' },
  indigo:  { bg:'bg-indigo-50 dark:bg-indigo-950/40',  icon:'text-indigo-600 dark:text-indigo-400',  grad:'from-indigo-500 to-blue-500' },
}

const ServiceCard = ({ icon, title, description, accent, accentHex, i }) => {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)
  const a = accentMap[accent]

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const move = (e) => {
      const r = card.getBoundingClientRect()
      card.style.setProperty('--cx', `${e.clientX - r.left}px`)
      card.style.setProperty('--cy', `${e.clientY - r.top}px`)
    }
    card.addEventListener('mousemove', move)
    return () => card.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      initial={{ opacity:0, y:22 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:'-30px' }}
      transition={{ duration:0.4, delay:i * 0.07, ease:'easeOut' }}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative h-full rounded-xl p-6 cursor-pointer overflow-hidden
        border border-slate-200 dark:border-slate-700/60
        bg-white dark:bg-slate-900
        transition-all duration-250"
        style={{
          transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: hovered ? `0 16px 40px ${accentHex}18, 0 0 0 1px ${accentHex}25` : '0 1px 3px rgba(15,23,42,0.06)',
        }}
      >
        {/* Mouse spotlight overlay */}
        {hovered && (
          <div className="absolute inset-0 pointer-events-none z-0 rounded-xl"
            style={{ background: `radial-gradient(circle 180px at var(--cx,50%) var(--cy,50%), ${accentHex}0b, transparent 65%)` }} />
        )}
        {/* Top gradient line */}
        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${a.grad}
          transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-25'}`} />
        {/* Bottom sweep */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${a.grad}
          transition-all duration-400 ${hovered ? 'w-full' : 'w-0'}`} />

        <div className={`mb-4 w-11 h-11 rounded-xl flex items-center justify-center ${a.bg} ${a.icon}
          transition-transform duration-200 ${hovered ? 'scale-110' : 'scale-100'}`}>
          {icon}
        </div>
        <h3 className="text-sm sm:text-base font-bold mb-2 text-slate-800 dark:text-white">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skills)[0])
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const orbY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} id="services"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-20 sm:py-28 scroll-mt-20 relative overflow-hidden
      bg-slate-50 dark:bg-[#020817]">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <motion.div style={{ y:orbY }} className="orb w-80 h-64 -top-10 left-1/2 -translate-x-1/2 bg-cyan-400/8 dark:bg-cyan-500/5" />

      <motion.p initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.4 }}
        className="text-center text-xs font-semibold mb-2 text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.25em]">
        What I Do
      </motion.p>
      <motion.h2 initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.4, delay:0.08 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
        Skills &amp; Services
      </motion.h2>
      <div className="flex justify-center mt-3 mb-14">
        <motion.div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400"
          initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }}
          transition={{ duration:0.5, delay:0.18 }} style={{ transformOrigin:'left' }} />
      </div>

      {/* Service cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 sm:mb-20">
        {serviceData.map(({ icon, title, description, accent, accentHex }, i) => (
          <ServiceCard key={i} icon={icon} title={title} description={description} accent={accent} accentHex={accentHex} i={i} />
        ))}
      </div>

      {/* Tech stack */}
      <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.4 }}
        className="relative z-10 text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">Tech Stack</h3>
        <div className="flex justify-center">
          <div className="h-0.5 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400" />
        </div>
      </motion.div>

      {/* Category tabs */}
      <div className="relative z-10 flex justify-center gap-2 mb-8 flex-wrap">
        {Object.keys(skills).map((cat, i) => (
          <motion.button key={i} onClick={() => setActiveCategory(cat)}
            whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }}
            className={`relative px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold capitalize transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-cyan-400/60 hover:text-cyan-600 dark:hover:text-cyan-400'
            }`}>
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div key={activeCategory}
          initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-12 }}
          transition={{ duration:0.2 }}
          className="relative z-10 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 justify-items-center">
          {skills[activeCategory].map((skill, i) => (
            <motion.div key={i}
              initial={{ opacity:0, scale:0.72 }} animate={{ opacity:1, scale:1 }}
              transition={{ duration:0.22, delay:i * 0.03, type:'spring', stiffness:240 }}
              whileHover={{ scale:1.18, y:-5 }}
              className="flex flex-col items-center gap-1.5 group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl
                border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900
                group-hover:border-cyan-400/60 dark:group-hover:border-cyan-600/60
                group-hover:shadow-md group-hover:shadow-cyan-500/15
                transition-all duration-200">
                <img src={skill.logo} alt={skill.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" loading="lazy" />
              </div>
              <p className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400
                group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors text-center leading-tight max-w-[56px]">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="relative z-10 mt-12 text-center text-xs text-slate-400 dark:text-slate-600">
        * Currently open to internships and entry-level opportunities.
      </p>
    </section>
  )
}

export default Services
