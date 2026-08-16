import React from 'react'
import { motion } from 'motion/react'

const workData = [
  {
    title: 'NextLab – Online Programming Exam Platform',
    description: 'B.Tech Final Year Project. Full-stack coding assessment platform with role-based auth, Monaco Editor, Judge0 API for multi-language execution, real-time proctoring via Socket.IO, and PDF/Excel report generation.',
    bgImage: '/work-1.png',
    tag: 'Final Year Project',
    tagColor: 'bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800',
    liveLink: 'http://13.126.165.76/',
    repoLink: 'https://github.com/Anics35/NextLab',
    badge: '⭐ Featured',
  },
  {
    title: 'QR-Based Smart Attendance Manager',
    description: 'Secure QR attendance backend with device-binding, geolocation validation (Haversine formula) to prevent proxy attendance. REST APIs for session management with ~2–3s response time.',
    bgImage: '/work-2.png',
    tag: 'Node.js',
    tagColor: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
    liveLink: null,
    repoLink: 'https://github.com/dkg1212/QrBasedAttendenceManager-Backend',
  },
  {
    title: 'Inter-Hostel Management System',
    description: 'Full-stack app for managing hostel events, participants, and results with approval workflows for DSW & TUSC.',
    bgImage: '/work-3.png',
    tag: 'Full Stack',
    tagColor: 'bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800',
    liveLink: null,
    repoLink: 'https://github.com/dkg1212/interHostelTournaumentManagementSystem',
  },
  {
    title: 'Task Manager App',
    description: 'Next.js 14 task management with JWT auth, drag & drop, priority sorting, and full dark mode support.',
    bgImage: '/work-1.png',
    tag: 'Next.js',
    tagColor: 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
    liveLink: 'https://taskmangerwebapp.vercel.app/',
    repoLink: 'https://github.com/dkg1212/Task-Manger-App-UI',
    backendLink: 'https://github.com/dkg1212/task-manager-app',
  },
  {
    title: 'DevTinder – Tinder for Devs',
    description: 'Tinder-inspired platform for developers to connect. React frontend + Node.js/Express backend with swipe-based matching.',
    bgImage: '/work-4.png',
    tag: 'MERN',
    tagColor: 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800',
    liveLink: 'http://13.60.41.185/',
    repoLink: 'https://github.com/dkg1212/devtinder-UI',
    backendLink: 'https://github.com/dkg1212/Devtinder',
  },
  {
    title: 'YTShorts – YouTube Shorts Clone',
    description: 'Short video sharing platform with Clerk auth, Prisma ORM, and shadcn/ui components.',
    bgImage: '/work-2.png',
    tag: 'React',
    tagColor: 'bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800',
    liveLink: null,
    repoLink: 'https://github.com/dkg1212/YTShorts',
  },
]

const Work = () => {
  return (
    <section
      id="work"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-20 sm:py-24 scroll-mt-20 relative overflow-hidden
      bg-white dark:bg-[#0a1628]"
    >
      <div className="orb w-64 h-64 top-0 left-0 bg-cyan-400/8 dark:bg-cyan-500/5" />
      <div className="orb w-64 h-64 bottom-0 right-0 bg-teal-400/8 dark:bg-teal-500/5" />

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center text-xs font-semibold mb-2 text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.25em]"
      >
        My Portfolio
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
      >
        My Latest Work
      </motion.h2>
      <div className="flex justify-center mt-3 mb-12 sm:mb-16">
        <div className="h-0.5 w-12 rounded-full bg-cyan-500" />
      </div>

      {/* Cards grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {workData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            whileHover={{ y: -5 }}
            className="light-card glow-card group rounded-2xl overflow-hidden flex flex-col
            border border-slate-200 dark:border-slate-700/60
            bg-white dark:bg-slate-900
            hover:border-cyan-300 dark:hover:border-cyan-700
            transition-all duration-200"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-44 sm:h-48 bg-slate-100 dark:bg-slate-800">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Tag */}
              <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md ${project.tagColor}`}>
                {project.tag}
              </span>
              {/* Featured badge */}
              {project.badge && (
                <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-md
                bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 p-5 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2 leading-snug">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="h-px bg-slate-100 dark:bg-slate-800 my-4" />

              <div className="flex flex-wrap gap-2">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-semibold rounded-lg
                    bg-cyan-500 hover:bg-cyan-400 text-white
                    shadow-sm shadow-cyan-500/25 hover:scale-105 transition-all duration-200">
                    Live ↗
                  </a>
                )}
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-semibold rounded-lg
                    border border-slate-200 dark:border-slate-700
                    text-slate-700 dark:text-slate-300
                    bg-slate-50 dark:bg-slate-800
                    hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400
                    transition-all duration-200">
                    GitHub
                  </a>
                )}
                {project.backendLink && (
                  <a href={project.backendLink} target="_blank" rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-semibold rounded-lg
                    border border-slate-200 dark:border-slate-700
                    text-slate-700 dark:text-slate-300
                    bg-slate-50 dark:bg-slate-800
                    hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400
                    transition-all duration-200">
                    Backend
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Work
