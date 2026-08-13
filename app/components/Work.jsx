import React from 'react'
import { motion } from 'motion/react'

const workData = [
  {
    title: 'Inter-Hostel Management System',
    description: 'A full-stack web app for managing hostel events, participants, and results with approval workflows for DSW & TUSC.',
    bgImage: '/work-3.png',
    tag: 'Full Stack',
    tagColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300',
    liveLink: null,
    repoLink: 'https://github.com/dkg1212/interHostelTournaumentManagementSystem',
  },
  {
    title: 'Task Manager App',
    description: 'Modern task management built with Next.js 14, JWT auth, drag & drop, priority sorting, and dark mode.',
    bgImage: '/work-1.png',
    tag: 'Next.js',
    tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300',
    liveLink: 'https://taskmangerwebapp.vercel.app/',
    repoLink: 'https://github.com/dkg1212/Task-Manger-App-UI',
    backendLink: 'https://github.com/dkg1212/task-manager-app',
  },
  {
    title: 'DevTinder – Tinder for Devs',
    description: 'A Tinder-inspired app for developers to connect and collaborate. React frontend + Node.js backend.',
    bgImage: '/work-4.png',
    tag: 'MERN',
    tagColor: 'bg-pink-100 text-pink-700 dark:bg-pink-900/60 dark:text-pink-300',
    liveLink: 'http://13.60.41.185/',
    repoLink: 'https://github.com/dkg1212/devtinder-UI',
    backendLink: 'https://github.com/dkg1212/Devtinder',
  },
  {
    title: 'YTShorts – YouTube Shorts Clone',
    description: 'Web app for creating and sharing short videos. Features Clerk auth, Prisma ORM, and shadcn/ui components.',
    bgImage: '/work-2.png',
    tag: 'React',
    tagColor: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/60 dark:text-cyan-300',
    liveLink: null,
    repoLink: 'https://github.com/dkg1212/YTShorts',
  },
]

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20 relative"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-fuchsia-600/8 dark:bg-fuchsia-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <motion.h4
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-sm mb-2 font-Ovo text-purple-500 dark:text-purple-400 uppercase tracking-widest"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        My Latest Work
      </motion.h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo text-gray-500 dark:text-gray-400 leading-relaxed">
        Projects blending{' '}
        <span className="text-purple-600 dark:text-purple-400 font-medium">design</span>,{' '}
        <span className="text-pink-500 font-medium">functionality</span>, and{' '}
        <span className="text-orange-500 font-medium">real-world impact</span>.
      </p>

      {/* Cards */}
      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {workData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="glow-card group rounded-2xl overflow-hidden flex flex-col
            border border-purple-100 dark:border-purple-800/50
            bg-white dark:bg-[#130028]
            shadow-sm dark:shadow-purple-900/30
            hover:border-purple-300 dark:hover:border-pink-600/50
            transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-48">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Tag */}
              <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${project.tagColor}`}>
                {project.tag}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 p-5 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-base text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-xs font-semibold rounded-full
                    bg-gradient-to-r from-purple-600 to-pink-500 text-white
                    shadow-md shadow-purple-500/20 hover:scale-105 hover:shadow-purple-500/40 transition-all duration-200"
                  >
                    Live ↗
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-xs font-semibold rounded-full
                    border border-purple-300 dark:border-purple-700
                    text-purple-700 dark:text-purple-300
                    hover:bg-purple-50 dark:hover:bg-purple-900/40
                    hover:border-purple-500 transition-all duration-200"
                  >
                    GitHub
                  </a>
                )}
                {project.backendLink && (
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-xs font-semibold rounded-full
                    border border-pink-300 dark:border-pink-700
                    text-pink-700 dark:text-pink-300
                    hover:bg-pink-50 dark:hover:bg-pink-900/40
                    hover:border-pink-500 transition-all duration-200"
                  >
                    Backend
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Work
