import { Code2, MonitorSmartphone, Server, Database, Cpu, Network } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skills } from '@/assets/assets'

const serviceData = [
  {
    icon: <Code2 className="w-9 h-9 text-purple-500 dark:text-purple-400" />,
    title: 'Full-Stack Web Apps',
    description: 'Building modern applications using the MERN stack and MySQL with focus on performance, clean architecture, and accessibility.',
    accent: 'from-purple-500/10 to-purple-600/5 dark:from-purple-600/20 dark:to-purple-800/10',
    border: 'border-purple-200 dark:border-purple-800/60 hover:border-purple-400 dark:hover:border-purple-500',
  },
  {
    icon: <MonitorSmartphone className="w-9 h-9 text-blue-500 dark:text-blue-400" />,
    title: 'Frontend UI/UX',
    description: 'Creating responsive, mobile-first layouts with React and Tailwind, delivering smooth and engaging user experiences.',
    accent: 'from-blue-500/10 to-blue-600/5 dark:from-blue-600/20 dark:to-blue-800/10',
    border: 'border-blue-200 dark:border-blue-800/60 hover:border-blue-400 dark:hover:border-blue-500',
  },
  {
    icon: <Server className="w-9 h-9 text-emerald-500 dark:text-emerald-400" />,
    title: 'Backend & APIs',
    description: 'Designing secure RESTful APIs with Node.js and Express, including authentication (JWT), validation, and error handling.',
    accent: 'from-emerald-500/10 to-emerald-600/5 dark:from-emerald-600/20 dark:to-emerald-800/10',
    border: 'border-emerald-200 dark:border-emerald-800/60 hover:border-emerald-400 dark:hover:border-emerald-500',
  },
  {
    icon: <Database className="w-9 h-9 text-orange-500 dark:text-orange-400" />,
    title: 'Databases & Modeling',
    description: 'Working with MySQL to design relational schemas, write efficient queries, and manage migrations and backups.',
    accent: 'from-orange-500/10 to-orange-600/5 dark:from-orange-600/20 dark:to-orange-800/10',
    border: 'border-orange-200 dark:border-orange-800/60 hover:border-orange-400 dark:hover:border-orange-500',
  },
  {
    icon: <Cpu className="w-9 h-9 text-pink-500 dark:text-pink-400" />,
    title: 'IoT & Embedded',
    description: 'Developing IoT projects with ESP32/NodeMCU, integrating sensors, and creating real-time alert systems.',
    accent: 'from-pink-500/10 to-pink-600/5 dark:from-pink-600/20 dark:to-pink-800/10',
    border: 'border-pink-200 dark:border-pink-800/60 hover:border-pink-400 dark:hover:border-pink-500',
  },
  {
    icon: <Network className="w-9 h-9 text-indigo-500 dark:text-indigo-400" />,
    title: 'Networks & Systems',
    description: 'Exploring computer networks, routing concepts, and system programming fundamentals.',
    accent: 'from-indigo-500/10 to-indigo-600/5 dark:from-indigo-600/20 dark:to-indigo-800/10',
    border: 'border-indigo-200 dark:border-indigo-800/60 hover:border-indigo-400 dark:hover:border-indigo-500',
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
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-pink-600/8 dark:bg-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.h4
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-sm mb-2 font-Ovo text-purple-500 dark:text-purple-400 uppercase tracking-widest"
      >
        What I Do
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        Skills & Interests
      </motion.h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo text-gray-500 dark:text-gray-400">
        Focused on full-stack web development, secure backends, responsive UIs, and IoT systems.
        Always exploring new tech to expand my toolkit.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {serviceData.map(({ icon, title, description, accent, border }, i) => (
          <motion.div
            whileHover={{ y: -6 }}
            key={i}
            className={`glow-card rounded-2xl p-7 border ${border}
            bg-gradient-to-br ${accent}
            bg-white dark:bg-transparent
            shadow-sm transition-all duration-300 cursor-default`}
          >
            <div className="mb-5 p-3 rounded-xl bg-white/80 dark:bg-purple-900/40 border border-transparent dark:border-purple-700/30 inline-block">
              {icon}
            </div>
            <h3 className="text-base font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-6">{description}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <h3 className="text-center text-3xl font-Ovo mb-8 text-gray-800 dark:text-white">My Skills</h3>

      {/* Category Tabs */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {Object.keys(skills).map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                : 'bg-white dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/60 text-gray-700 dark:text-purple-300 hover:border-purple-400 dark:hover:border-purple-500'
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
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="glow-card w-14 h-14 flex items-center justify-center rounded-xl
                border border-purple-100 dark:border-purple-800/60
                bg-white dark:bg-purple-950/60
                shadow-sm group-hover:shadow-md
                group-hover:border-purple-300 dark:group-hover:border-pink-500/60
                transition-all duration-200"
              >
                <img src={skill.logo} alt={skill.name} className="w-9 h-9 object-contain" loading="lazy" />
              </div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="mt-12 text-center text-sm text-gray-400 dark:text-gray-500">
        * Currently open to internships and entry-level opportunities.
      </p>
    </motion.div>
  )
}

export default Services
