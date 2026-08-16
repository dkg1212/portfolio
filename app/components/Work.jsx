'use client'
import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const workData = [
  { title:'NextLab – Online Programming Exam Platform', description:'B.Tech Final Year Project. Full-stack coding assessment platform with role-based auth, Monaco Editor, Judge0 API for multi-language execution, real-time proctoring via Socket.IO, and PDF/Excel report generation.', bgImage:'/work-1.png', tag:'Final Year Project', tagColor:'bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300', accentColor:'from-violet-500 to-purple-500', accentSolid:'#8b5cf6', liveLink:'http://13.126.165.76/', repoLink:'https://github.com/Anics35/NextLab', badge:'⭐ Featured', stack:['React','Node.js','MongoDB','Socket.IO','Judge0'] },
  { title:'QR-Based Smart Attendance Manager', description:'Secure QR attendance backend with device-binding, geolocation validation (Haversine formula) to prevent proxy attendance. REST APIs for session management with ~2–3s response time.', bgImage:'/work-2.png', tag:'Node.js', tagColor:'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300', accentColor:'from-emerald-500 to-teal-500', accentSolid:'#10b981', liveLink:null, repoLink:'https://github.com/dkg1212/QrBasedAttendenceManager-Backend', stack:['Node.js','Express','MongoDB','JWT'] },
  { title:'Inter-Hostel Management System', description:'Full-stack app for managing hostel events, participants, and results with approval workflows for DSW & TUSC.', bgImage:'/work-3.png', tag:'Full Stack', tagColor:'bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300', accentColor:'from-cyan-500 to-sky-500', accentSolid:'#06b6d4', liveLink:null, repoLink:'https://github.com/dkg1212/interHostelTournaumentManagementSystem', stack:['MERN','MySQL'] },
  { title:'Task Manager App', description:'Next.js 14 task management with JWT auth, drag & drop, priority sorting, and full dark mode support.', bgImage:'/work-1.png', tag:'Next.js', tagColor:'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300', accentColor:'from-blue-500 to-indigo-500', accentSolid:'#3b82f6', liveLink:'https://taskmangerwebapp.vercel.app/', repoLink:'https://github.com/dkg1212/Task-Manger-App-UI', backendLink:'https://github.com/dkg1212/task-manager-app', stack:['Next.js','JWT','MongoDB'] },
  { title:'DevTinder – Tinder for Devs', description:'Tinder-inspired platform for developers to connect. React frontend + Node.js/Express backend with swipe-based matching.', bgImage:'/work-4.png', tag:'MERN', tagColor:'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300', accentColor:'from-rose-500 to-pink-500', accentSolid:'#f43f5e', liveLink:'http://13.60.41.185/', repoLink:'https://github.com/dkg1212/devtinder-UI', backendLink:'https://github.com/dkg1212/Devtinder', stack:['React','Node.js','MongoDB'] },
  { title:'YTShorts – YouTube Shorts Clone', description:'Short video sharing platform with Clerk auth, Prisma ORM, and shadcn/ui components.', bgImage:'/work-2.png', tag:'React', tagColor:'bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300', accentColor:'from-teal-500 to-cyan-500', accentSolid:'#14b8a6', liveLink:null, repoLink:'https://github.com/dkg1212/YTShorts', stack:['React','Prisma','Clerk'] },
]

const WorkCard = ({ project, i }) => {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)

  // Mouse-follow spotlight
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
      initial={{ opacity:0, y:24 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:'-40px' }}
      transition={{ duration:0.4, delay:i * 0.08, ease:'easeOut' }}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer
        border border-slate-200 dark:border-slate-700/60
        bg-white dark:bg-slate-900
        transition-all duration-300"
        style={{
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered
            ? `0 20px 60px rgba(0,0,0,0.1), 0 0 0 1.5px ${project.accentSolid}40`
            : '0 1px 3px rgba(15,23,42,0.06)',
          '--spotlight': hovered ? `radial-gradient(circle 220px at var(--cx,50%) var(--cy,50%), ${project.accentSolid}08, transparent 70%)` : 'none',
        }}
      >
        {/* Mouse spotlight overlay — doesn't touch base bg */}
        {hovered && (
          <div className="absolute inset-0 pointer-events-none z-0 rounded-2xl transition-opacity duration-300"
            style={{ background: `radial-gradient(circle 220px at var(--cx,50%) var(--cy,50%), ${project.accentSolid}09, transparent 70%)` }} />
        )}
        {/* Animated top border */}
        <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${project.accentColor}
          transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

        {/* Image */}
        <div className="relative overflow-hidden h-48 sm:h-52 bg-slate-100 dark:bg-slate-800 flex-shrink-0">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-600"
            style={{
              backgroundImage:`url(${project.bgImage})`,
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
            }}
          />
          <div className={`absolute inset-0 transition-all duration-300
            ${hovered ? 'bg-gradient-to-t from-black/50 via-black/5 to-transparent' : 'bg-gradient-to-t from-black/65 via-black/15 to-transparent'}`} />
          <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm ${project.tagColor}`}>
            {project.tag}
          </span>
          {project.badge && (
            <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-lg
            bg-amber-100/90 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 backdrop-blur-sm">
              {project.badge}
            </span>
          )}
          {/* Title slides up into image on hover */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-2'}`}>
            <h2 className="font-bold text-sm sm:text-base text-white leading-snug drop-shadow-sm">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col gap-3">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          {/* Stack chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded-md
              bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400
              border border-slate-200/80 dark:border-slate-700/60 transition-colors duration-200
              group-hover:border-slate-300 dark:group-hover:border-slate-600">
                {s}
              </span>
            ))}
          </div>
          <div className="h-px bg-slate-100 dark:bg-slate-800" />
          {/* Buttons */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg
                bg-cyan-500 hover:bg-cyan-400 text-white
                hover:shadow-md hover:shadow-cyan-500/30 transition-all duration-200">
                Live ↗
              </a>
            )}
            {project.repoLink && (
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg
                border border-slate-200 dark:border-slate-700
                text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800
                hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-200">
                GitHub
              </a>
            )}
            {project.backendLink && (
              <a href={project.backendLink} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg
                border border-slate-200 dark:border-slate-700
                text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800
                hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-200">
                Backend
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Work = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const orbY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} id="work"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-20 sm:py-28 scroll-mt-20 relative overflow-hidden
      bg-white dark:bg-[#0a1628]">
      <motion.div style={{ y: orbY }} className="orb w-96 h-96 -top-16 -right-16 bg-violet-400/6 dark:bg-violet-500/4" />
      <motion.div style={{ y: orbY }} className="orb w-96 h-96 -bottom-16 -left-16 bg-cyan-400/6 dark:bg-cyan-500/4" />

      <motion.p initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.4 }}
        className="text-center text-xs font-semibold mb-2 text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.25em]">
        My Portfolio
      </motion.p>
      <motion.h2 initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.4, delay:0.08 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
        My Latest Work
      </motion.h2>
      <div className="flex justify-center mt-3 mb-14">
        <motion.div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400"
          initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }}
          transition={{ duration:0.5, delay:0.18 }} style={{ transformOrigin:'left' }} />
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {workData.map((project, i) => <WorkCard key={i} project={project} i={i} />)}
      </div>
    </section>
  )
}

export default Work
