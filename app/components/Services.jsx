import { Code2, MonitorSmartphone, Server, Database, Cpu, Network } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skills } from '@/assets/assets'

const serviceData = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Full-Stack Web Apps',
    description: 'MERN stack & MySQL apps with clean architecture, performance, and accessibility in focus.',
    iconBg: 'bg-violet-100 dark:bg-violet-900/40',
    iconColor: 'text-violet-600 dark:text-violet-400',
    borderHover: 'hover:border-violet-400 dark:hover:border-violet-500',
    gradientBar: 'from-violet-500 to-violet-300',
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8" />,
    title: 'Frontend UI/UX',
    description: 'Responsive, mobile-first layouts with React & Tailwind delivering smooth experiences.',
    iconBg: 'bg-blue-100 dark:bg-blue-900/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
    borderHover: 'hover:border-blue-400 dark:hover:border-blue-500',
    gradientBar: 'from-blue-500 to-blue-300',
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Backend & APIs',
    description: 'Secure REST APIs with Node.js, Express, JWT auth, validation, and error handling.',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500',
    gradientBar: 'from-emerald-500 to-emerald-300',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Databases & Modeling',
    description: 'MySQL schema design, efficient queries, migrations, and MongoDB data management.',
    iconBg: 'bg-orange-100 dark:bg-orange-900/40',
    iconColor: 'text-orange-600 dark:text-orange-400',
    borderHover: 'hover:border-orange-400 dark:hover:border-orange-500',
    gradientBar: 'from-orange-500 to-orange-300',
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'IoT & Embedded',
    description: 'ESP32/NodeMCU projects, sensor integrations, and real-time alert systems.',
    iconBg: 'bg-pink-100 dark:bg-pink-900/40',
    iconColor: 'text-pink-600 dark:text-pink-400',
    borderHover: 'hover:border-pink-400 dark:hover:border-pink-500',
    gradientBar: 'from-pink-500 to-pink-300',
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: 'Networks & Systems',
    description: 'Computer networks, routing concepts, and system programming fundamentals.',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/40',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    borderHover: 'hover:border-indigo-400 dark:hover:border-indigo-500',
    gradientBar: 'from-indigo-500 to-indigo-300',
  },
]

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skills)[0])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="services"
      className="w-full px-[10%] py-20 scroll-mt-20 relative"
    >
      {/* dot pattern bg — light only */}
      <div className="absolute inset-0 dot-pattern dark:opacity-0 opacity-100 pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-300/15 dark:bg-pink-500/8 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-xs font-semibold mb-3 text-violet-500 dark:text-purple-400 uppercase tracking-[0.2em]"
      >
        What I Do
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        Skills & Interests
      </motion.h2>

      <div className="flex justify-center mt-4 mb-14">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {serviceData.map(({ icon, title, description, iconBg, iconColor, borderHover, gradientBar }, i) => (
          <motion.div
            whileHover={{ y: -6 }}
            key={i}
            className={`light-card glow-card group rounded-2xl p-7
            border border-gray-200 dark:border-purple-800/50 ${borderHover}
            bg-white dark:bg-purple-950/30
            transition-all duration-300 cursor-default overflow-hidden relative`}
          >
            {/* Coloured left border bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${gradientBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            {/* Icon badge */}
            <div className={`mb-5 p-3 rounded-xl ${iconBg} inline-block ${iconColor}`}>
              {icon}
            </div>
            <h3 className="text-base font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-6">{description}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills section */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-2">My Skills</h3>
        <div className="flex justify-center">
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {Object.keys(skills).map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-violet-600 to-pink-500 text-white shadow-lg shadow-violet-400/30'
                : 'bg-white dark:bg-purple-950/50 border border-violet-200 dark:border-purple-800/60 text-gray-600 dark:text-purple-300 hover:border-violet-400 hover:text-violet-600 dark:hover:border-purple-500 hover:shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-6 justify-items-center"
        >
          {skills[activeCategory].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.12, y: -5 }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="light-card glow-card w-14 h-14 flex items-center justify-center rounded-xl
                border border-violet-200 dark:border-purple-800/60
                bg-white dark:bg-purple-950/60
                group-hover:border-violet-400 dark:group-hover:border-pink-500/60
                group-hover:shadow-violet-200 dark:group-hover:shadow-purple-900/40
                transition-all duration-200"
              >
                <img src={skill.logo} alt={skill.name} className="w-9 h-9 object-contain" loading="lazy" />
              </div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-purple-300 transition-colors text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="mt-14 text-center text-xs text-gray-400 dark:text-gray-500 tracking-wide">
        * Currently open to internships and entry-level opportunities.
      </p>
    </motion.div>
  )
}

export default Services
