import React from 'react'
import { motion } from 'motion/react'

const workData = [
  {
    title: 'Inter-Hostel Management System',
    description: 'Full-stack app for managing hostel events, participants, and results with approval workflows for DSW & TUSC.',
    bgImage: '/work-3.png',
    tag: 'Full Stack',
    tagGradient: 'from-violet-500 to-purple-400',
    liveLink: null,
    repoLink: 'https://github.com/dkg1212/interHostelTournaumentManagementSystem',
  },
  {
    title: 'Task Manager App',
    description: 'Next.js 14 task management with JWT auth, drag & drop, priority sorting, and full dark mode support.',
    bgImage: '/work-1.png',
    tag: 'Next.js',
    tagGradient: 'from-blue-500 to-cyan-400',
    liveLink: 'https://taskmangerwebapp.vercel.app/',
    repoLink: 'https://github.com/dkg1212/Task-Manger-App-UI',
    backendLink: 'https://github.com/dkg1212/task-manager-app',
  },
  {
    title: 'DevTinder – Tinder for Devs',
    description: 'Tinder-inspired app for developers to connect. React frontend + Node.js backend with real-time matching.',
    bgImage: '/work-4.png',
    tag: 'MERN',
    tagGradient: 'from-pink-500 to-rose-400',
    liveLink: 'http://13.60.41.185/',
    repoLink: 'https://github.com/dkg1212/devtinder-UI',
    backendLink: 'https://github.com/dkg1212/Devtinder',
  },
  {
    title: 'YTShorts – YouTube Shorts Clone',
    description: 'Short video sharing platform with Clerk auth, Prisma ORM, and beautiful shadcn/ui components.',
    bgImage: '/work-2.png',
    tag: 'React',
    tagGradient: 'from-cyan-500 to-teal-400',
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
      className="w-full px-[12%] py-20 scroll-mt-20 relative section-bg-light dark:bg-transparent"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-300/15 dark:bg-fuchsia-500/8 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/15 dark:bg-purple-500/8 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-xs font-semibold mb-3 text-violet-500 dark:text-purple-400 uppercase tracking-[0.2em]"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-5xl font-Ovo bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        My Latest Work
      </motion.h2>

      <div className="flex justify-center mt-4 mb-14">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
      </div>

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
            className="light-card glow-card group rounded-2xl overflow-hidden flex flex-col
            border border-gray-200 dark:border-purple-800/50
            bg-white dark:bg-[#130028]
            hover:border-violet-300 dark:hover:border-pink-600/50
            transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-48">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              {/* Tag */}
              <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${project.tagGradient} shadow-md`}>
                {project.tag}
              </span>
              {/* Hover shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400/0 to-pink-400/0 group-hover:from-violet-400/10 group-hover:to-pink-400/10 transition-all duration-500" />
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

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-violet-200 to-pink-200 dark:from-purple-800/40 dark:to-pink-800/40 my-4 opacity-60" />

              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-xs font-bold rounded-full
                    bg-gradient-to-r from-violet-600 to-pink-500 text-white
                    shadow-sm shadow-violet-400/30 hover:shadow-md hover:shadow-violet-400/50 hover:scale-105 transition-all duration-200"
                  >
                    Live ↗
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-xs font-bold rounded-full
                    border-2 border-violet-300 dark:border-purple-700
                    text-violet-700 dark:text-purple-300
                    bg-violet-50 dark:bg-transparent
                    hover:bg-violet-100 hover:border-violet-500 dark:hover:bg-purple-900/40
                    transition-all duration-200"
                  >
                    GitHub
                  </a>
                )}
                {project.backendLink && (
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-xs font-bold rounded-full
                    border-2 border-pink-300 dark:border-pink-700
                    text-pink-700 dark:text-pink-300
                    bg-pink-50 dark:bg-transparent
                    hover:bg-pink-100 hover:border-pink-500 dark:hover:bg-pink-900/40
                    transition-all duration-200"
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
