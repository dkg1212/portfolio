'use client'
import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGoogle, FaGithub, FaUserGraduate, FaCertificate, FaHandsHelping, FaBriefcase } from 'react-icons/fa'

const internships = [
  { role:'Backend Developer Intern', organization:'VrixaaLabs (VConnect)', duration:'June 2025 – August 2025', type:'Remote', description:'Contributed to backend of VConnect v48 platform — Chat modules. Built scalable APIs with Next.js & GraphQL, integrated Auth0 for authentication and access control, and optimized chat messaging logic with the core team.', links:{ certificate:'https://drive.google.com/file/d/1u-mHd64qxOFMTIKzPn8SzAMlN2gwGe2q/view' }, icon:<FaBriefcase className="text-base text-cyan-600 dark:text-cyan-400" />, iconBg:'bg-cyan-50 dark:bg-cyan-950/40', grad:'from-cyan-500 to-teal-500', hex:'#06b6d4' },
]
const activities = [
  { role:'Core Team Member (Programming)', organization:'GDG Tezpur University', duration:'Aug 2024 – Present', description:'Organized coding workshops and hackathons. Mentored juniors in programming and web development.', icon:<FaGoogle className="text-base text-violet-600 dark:text-violet-400" />, iconBg:'bg-violet-50 dark:bg-violet-950/40', grad:'from-violet-500 to-purple-500', hex:'#8b5cf6' },
  { role:'Registration Committee Member', organization:"Techxetra '24, Tezpur University", duration:'Nov 2024', description:'Managed event registrations and coordinated participant queries during the Techxetra festival.', icon:<FaUserGraduate className="text-base text-blue-600 dark:text-blue-400" />, iconBg:'bg-blue-50 dark:bg-blue-950/40', grad:'from-blue-500 to-indigo-500', hex:'#3b82f6' },
  { role:'Member', organization:'Google Developer Groups, Tezpur University', duration:'Aug 2023 – June 2024', description:'Participated in GDG meetups and contributed to the tech community.', icon:<FaGithub className="text-base text-slate-700 dark:text-slate-300" />, iconBg:'bg-slate-100 dark:bg-slate-800/60', grad:'from-slate-500 to-slate-400', hex:'#64748b' },
  { role:'Student Volunteer', organization:'National Service Scheme (NSS)', duration:'Nov 2022 – June 2024', description:'Assisted in community service programs, awareness campaigns, and social initiatives.', icon:<FaHandsHelping className="text-base text-emerald-600 dark:text-emerald-400" />, iconBg:'bg-emerald-50 dark:bg-emerald-950/40', grad:'from-emerald-500 to-teal-500', hex:'#10b981' },
]
const certificates = [
  { title:'Introduction to C++', issuer:'Coding Ninjas', links:{ completion:'https://certificate.codingninjas.com/view/789daa4be35d9b11', excellence:'https://certificate.codingninjas.com/view/15fdff9a778e534b' }, icon:<FaCertificate className="text-base text-amber-600 dark:text-amber-400" />, iconBg:'bg-amber-50 dark:bg-amber-950/40', grad:'from-amber-500 to-orange-500', hex:'#f59e0b' },
  { title:'The Joy of Computing using Python', issuer:'NPTEL', links:{ certificate:'https://drive.google.com/file/d/1qJyi8DRxzUOgFuCJOGPXdYFq-3_OArlm/view?usp=drive_link' }, icon:<FaCertificate className="text-base text-orange-600 dark:text-orange-400" />, iconBg:'bg-orange-50 dark:bg-orange-950/40', grad:'from-orange-500 to-red-500', hex:'#f97316' },
  { title:'Programming in Java', issuer:'NPTEL', links:{ certificate:'https://drive.google.com/file/d/1gnCogkuQAevKHOjuDrV1zAPF_1k9WNjw/view?usp=drive_link' }, icon:<FaCertificate className="text-base text-red-600 dark:text-red-400" />, iconBg:'bg-red-50 dark:bg-red-950/40', grad:'from-red-500 to-rose-500', hex:'#ef4444' },
  { title:'Cloud Computing & Distributed Systems', issuer:'NPTEL', links:{ certificate:'https://drive.google.com/file/d/19lRzjfY-EaeWJsBhmrgKVlJTGdQ0W2Mw/view?usp=drive_link' }, icon:<FaCertificate className="text-base text-sky-600 dark:text-sky-400" />, iconBg:'bg-sky-50 dark:bg-sky-950/40', grad:'from-sky-500 to-blue-500', hex:'#0ea5e9' },
]

const InfoCard = ({ children, grad, hex, delay = 0 }) => {
  const cardRef = useRef(null)
  const [hovered, setHovered] = React.useState(false)
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
      initial={{ opacity:0, y:18 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:'-30px' }}
      transition={{ duration:0.4, delay, ease:'easeOut' }}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative h-full rounded-xl p-5 overflow-hidden
        border border-slate-200 dark:border-slate-700/60
        bg-white dark:bg-slate-900
        transition-all duration-250"
        style={{
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered ? `0 12px 32px ${hex}18, 0 0 0 1px ${hex}20` : '0 1px 3px rgba(15,23,42,0.05)',
        }}
      >
        {/* Mouse spotlight overlay */}
        {hovered && (
          <div className="absolute inset-0 pointer-events-none z-0 rounded-xl"
            style={{ background: `radial-gradient(circle 160px at var(--cx,50%) var(--cy,50%), ${hex}0a, transparent 60%)` }} />
        )}
        {/* Top gradient on hover */}
        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${grad}
          transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
        {children}
      </div>
    </motion.div>
  )
}

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">{children}</span>
    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
  </div>
)

const Activities = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:['start end','end start'] })
  const orbY = useTransform(scrollYProgress, [0,1], [50,-50])

  return (
    <section ref={ref} id="extracurricular"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-20 sm:py-28 scroll-mt-20 relative overflow-hidden
      bg-slate-50 dark:bg-[#020817]">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <motion.div style={{ y:orbY }} className="orb w-72 h-64 -top-10 right-0 bg-cyan-400/8 dark:bg-cyan-500/5" />

      <motion.p initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.4 }}
        className="text-center text-xs font-semibold mb-2 text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.25em]">
        Beyond Code
      </motion.p>
      <motion.h2 initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.4, delay:0.08 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
        Activities &amp; Credentials
      </motion.h2>
      <div className="flex justify-center mt-3 mb-14">
        <motion.div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400"
          initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }}
          transition={{ duration:0.5, delay:0.18 }} style={{ transformOrigin:'left' }} />
      </div>

      <div className="relative z-10">
        <SectionLabel>Internships &amp; Training</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {internships.map((item, i) => (
            <InfoCard key={i} grad={item.grad} hex={item.hex} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{item.role}</h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">{item.type}</span>
                  </div>
                  <p className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-0.5">{item.organization}</p>
                  <p className="text-slate-400 text-xs mb-2">{item.duration}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">{item.description}</p>
                  {item.links && Object.entries(item.links).map(([key, href]) => (
                    <a key={key} href={href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-teal-600 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />{key.charAt(0).toUpperCase()+key.slice(1)} ↗
                    </a>
                  ))}
                </div>
              </div>
            </InfoCard>
          ))}
        </div>

        <SectionLabel>Extracurricular</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {activities.map((item, i) => (
            <InfoCard key={i} grad={item.grad} hex={item.hex} delay={i * 0.07}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>{item.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{item.role}</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold mt-0.5">{item.organization}</p>
                  <p className="text-slate-400 text-xs mt-0.5 mb-2">{item.duration}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </InfoCard>
          ))}
        </div>

        <SectionLabel>Certifications</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((cert, i) => (
            <InfoCard key={i} grad={cert.grad} hex={cert.hex} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${cert.iconBg}`}>{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-0.5">{cert.title}</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-3">{cert.issuer}</p>
                  <div className="flex flex-col gap-1.5">
                    {Object.keys(cert.links).map((key, j) => (
                      <a key={j} href={cert.links[key]} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />{key.charAt(0).toUpperCase()+key.slice(1)} Certificate ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities
