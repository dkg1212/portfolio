import { Code2, MonitorSmartphone, Server, Database, Cpu, Network } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skills } from '@/assets/assets'

const serviceData = [
  { icon: <Code2 className="w-6 h-6" />, title: 'Full-Stack Web Apps', description: 'MERN stack & MySQL apps with clean architecture, performance, and accessibility in focus.', accent: 'cyan' },
  { icon: <MonitorSmartphone className="w-6 h-6" />, title: 'Frontend UI/UX', description: 'Responsive, mobile-first layouts with React & Tailwind delivering smooth experiences.', accent: 'blue' },
  { icon: <Server className="w-6 h-6" />, title: 'Backend & APIs', description: 'Secure REST APIs with Node.js, Express, JWT auth, validation, and error handling.', accent: 'emerald' },
  { icon: <Database className="w-6 h-6" />, title: 'Databases & Modeling', description: 'MySQL schema design, efficient queries, migrations, and MongoDB data management.', accent: 'orange' },
  { icon: <Cpu className="w-6 h-6" />, title: 'IoT & Embedded', description: 'ESP32/NodeMCU projects, sensor integrations, and real-time alert systems.', accent: 'violet' },
  { icon: <Network className="w-6 h-6" />, title: 'Networks & Systems', description: 'Computer networks, routing concepts, and system programming fundamentals.', accent: 'indigo' },
]

const accentMap = {
  cyan:    { bg: 'bg-cyan-50 dark:bg-cyan-950/30',    icon: 'text-cyan-600 dark:text-cyan-400',    border: 'hover:border-cyan-300 dark:hover:border-cyan-700',    bar: 'bg-cyan-500' },
  blue:    { bg: 'bg-blue-50 dark:bg-blue-950/30',    icon: 'text-blue-600 dark:text-blue-400',    border: 'hover:border-blue-300 dark:hover:border-blue-700',    bar: 'bg-blue-500' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', icon: 'text-emerald-600 dark:text-emerald-400', border: 'hover:border-emerald-300 dark:hover:border-emerald-700', bar: 'bg-emerald-500' },
  orange:  { bg: 'bg-orange-50 dark:bg-orange-950/30',  icon: 'text-orange-600 dark:text-orange-400',  border: 'hover:border-orange-300 dark:hover:border-orange-700',  bar: 'bg-orange-500' },
  violet:  { bg: 'bg-violet-50 dark:bg-violet-950/30',  icon: 'text-violet-600 dark:text-violet-400',  border: 'hover:border-violet-300 dark:hover:border-violet-700',  bar: 'bg-violet-500' },
  indigo:  { bg: 'bg-indigo-50 dark:bg-indigo-950/30',  icon: 'text-indigo-600 dark:text-indigo-400',  border: 'hover:border-indigo-300 dark:hover:border-indigo-700',  bar: 'bg-indigo-500' },
}

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skills)[0])

  return (
    <section
      id="services"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-20 sm:py-24 scroll-mt-20 relative overflow-hidden
      bg-slate-50 dark:bg-[#020817]"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="orb w-80 h-64 top-0 left-1/2 -translate-x-1/2 bg-cyan-400/8 dark:bg-cyan-500/6" />

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center text-xs font-semibold mb-2 text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.25em]"
      >
        What I Do
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
      >
        Skills &amp; Services
      </motion.h2>
      <div className="flex justify-center mt-3 mb-12 sm:mb-16">
        <div className="h-0.5 w-12 rounded-full bg-cyan-500" />
      </div>

      {/* Service cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 sm:mb-20">
        {serviceData.map(({ icon, title, description, accent }, i) => {
          const a = accentMap[accent]
          return (
            <motion.div
              whileHover={{ y: -4 }}
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className={`light-card glow-card group rounded-xl p-6
              border border-slate-200 dark:border-slate-700/60 ${a.border}
              bg-white dark:bg-slate-900/60
              transition-all duration-200 relative overflow-hidden`}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl ${a.bar} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
              <div className={`mb-4 p-2 rounded-lg ${a.bg} ${a.icon} inline-flex`}>{icon}</div>
              <h3 className="text-sm sm:text-base font-bold mb-1.5 text-slate-800 dark:text-white">{title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Skills heading */}
      <div className="relative z-10 text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">Tech Stack</h3>
        <div className="flex justify-center">
          <div className="h-0.5 w-10 rounded-full bg-cyan-500" />
        </div>
      </div>

      {/* Category tabs */}
      <div className="relative z-10 flex justify-center gap-2 sm:gap-2.5 mb-8 flex-wrap">
        {Object.keys(skills).map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold capitalize transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-cyan-400 hover:text-cyan-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-5 justify-items-center"
        >
          {skills[activeCategory].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex flex-col items-center gap-1.5 group cursor-pointer"
            >
              <div className="light-card glow-card w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl
                border border-slate-200 dark:border-slate-700/60
                bg-white dark:bg-slate-900/80
                group-hover:border-cyan-300 dark:group-hover:border-cyan-700
                transition-all duration-200"
              >
                <img src={skill.logo} alt={skill.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" loading="lazy" />
              </div>
              <p className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors text-center leading-tight max-w-[56px]">
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
