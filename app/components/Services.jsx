import { Code2, MonitorSmartphone, Server, Database, Cpu, Network } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skills } from '@/assets/assets'

const serviceData = [
  { icon: <Code2 className="w-7 h-7" />, title: 'Full-Stack Web Apps', description: 'MERN stack & MySQL apps with clean architecture, performance, and accessibility in focus.', iconBg: 'bg-violet-100 dark:bg-violet-900/40', iconColor: 'text-violet-600 dark:text-violet-400', borderHover: 'hover:border-violet-400 dark:hover:border-violet-500', bar: 'from-violet-500 to-violet-300' },
  { icon: <MonitorSmartphone className="w-7 h-7" />, title: 'Frontend UI/UX', description: 'Responsive, mobile-first layouts with React & Tailwind delivering smooth experiences.', iconBg: 'bg-blue-100 dark:bg-blue-900/40', iconColor: 'text-blue-600 dark:text-blue-400', borderHover: 'hover:border-blue-400 dark:hover:border-blue-500', bar: 'from-blue-500 to-blue-300' },
  { icon: <Server className="w-7 h-7" />, title: 'Backend & APIs', description: 'Secure REST APIs with Node.js, Express, JWT auth, validation, and error handling.', iconBg: 'bg-emerald-100 dark:bg-emerald-900/40', iconColor: 'text-emerald-600 dark:text-emerald-400', borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500', bar: 'from-emerald-500 to-emerald-300' },
  { icon: <Database className="w-7 h-7" />, title: 'Databases & Modeling', description: 'MySQL schema design, efficient queries, migrations, and MongoDB data management.', iconBg: 'bg-orange-100 dark:bg-orange-900/40', iconColor: 'text-orange-600 dark:text-orange-400', borderHover: 'hover:border-orange-400 dark:hover:border-orange-500', bar: 'from-orange-500 to-orange-300' },
  { icon: <Cpu className="w-7 h-7" />, title: 'IoT & Embedded', description: 'ESP32/NodeMCU projects, sensor integrations, and real-time alert systems.', iconBg: 'bg-pink-100 dark:bg-pink-900/40', iconColor: 'text-pink-600 dark:text-pink-400', borderHover: 'hover:border-pink-400 dark:hover:border-pink-500', bar: 'from-pink-500 to-pink-300' },
  { icon: <Network className="w-7 h-7" />, title: 'Networks & Systems', description: 'Computer networks, routing concepts, and system programming fundamentals.', iconBg: 'bg-indigo-100 dark:bg-indigo-900/40', iconColor: 'text-indigo-600 dark:text-indigo-400', borderHover: 'hover:border-indigo-400 dark:hover:border-indigo-500', bar: 'from-indigo-500 to-indigo-300' },
]

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skills)[0])

  return (
    <section
      id="services"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-16 sm:py-20 scroll-mt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern dark:opacity-0 opacity-100 pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-64 bg-pink-300/12 dark:bg-pink-500/8 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center text-xs font-semibold mb-2 text-violet-500 dark:text-purple-400 uppercase tracking-[0.2em]"
      >
        What I Do
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        Skills & Interests
      </motion.h2>

      <div className="flex justify-center mt-3 mb-10 sm:mb-14">
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14 sm:mb-20">
        {serviceData.map(({ icon, title, description, iconBg, iconColor, borderHover, bar }, i) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`light-card glow-card group rounded-2xl p-6
            border border-gray-200 dark:border-purple-800/50 ${borderHover}
            bg-white dark:bg-purple-950/30
            transition-all duration-300 relative overflow-hidden`}
          >
            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${bar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className={`mb-4 p-2.5 rounded-xl ${iconBg} ${iconColor} inline-block`}>{icon}</div>
            <h3 className="text-sm sm:text-base font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills heading */}
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-Ovo text-gray-800 dark:text-white mb-2">My Skills</h3>
        <div className="flex justify-center">
          <div className="h-1 w-10 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
        </div>
      </div>

      {/* Category tabs — scroll horizontally on tiny screens */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-8 flex-wrap">
        {Object.keys(skills).map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-md shadow-violet-400/30'
                : 'bg-white dark:bg-purple-950/50 border border-violet-200 dark:border-purple-800/60 text-gray-600 dark:text-purple-300 hover:border-violet-400 hover:text-violet-600'
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-5 justify-items-center"
        >
          {skills[activeCategory].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex flex-col items-center gap-1.5 group cursor-pointer"
            >
              <div className="light-card glow-card w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl
                border border-violet-200 dark:border-purple-800/60
                bg-white dark:bg-purple-950/60
                group-hover:border-violet-400 dark:group-hover:border-pink-500/60
                transition-all duration-200"
              >
                <img src={skill.logo} alt={skill.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" loading="lazy" />
              </div>
              <p className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-purple-300 transition-colors text-center leading-tight max-w-[56px]">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="mt-12 text-center text-xs text-gray-400 dark:text-gray-500">
        * Currently open to internships and entry-level opportunities.
      </p>
    </section>
  )
}

export default Services
