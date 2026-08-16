import React from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaGithub, FaUserGraduate, FaCertificate, FaHandsHelping, FaBriefcase } from 'react-icons/fa'

const internships = [
  {
    role: 'Backend Developer Intern',
    organization: 'VrixaaLabs (VConnect)',
    duration: 'June 2025 – August 2025',
    type: 'Remote',
    description: 'Contributed to backend of VConnect v48 platform — Chat modules. Built scalable APIs with Next.js & GraphQL, integrated Auth0 for authentication and access control, and optimized chat messaging logic with the core team.',
    links: { certificate: 'https://drive.google.com/file/d/1u-mHd64qxOFMTIKzPn8SzAMlN2gwGe2q/view' },
    icon: <FaBriefcase className="text-lg text-cyan-600 dark:text-cyan-400" />,
    iconBg: 'bg-cyan-50 dark:bg-cyan-950/40',
    borderHover: 'hover:border-cyan-300 dark:hover:border-cyan-700',
    bar: 'bg-cyan-500',
  },
]

const activities = [
  { role: 'Core Team Member (Programming)', organization: 'GDG Tezpur University', duration: 'Aug 2024 – Present', description: 'Organized coding workshops and hackathons. Mentored juniors in programming and web development.', icon: <FaGoogle className="text-lg text-violet-600 dark:text-violet-400" />, iconBg: 'bg-violet-50 dark:bg-violet-950/40', borderHover: 'hover:border-violet-300 dark:hover:border-violet-700', bar: 'bg-violet-500' },
  { role: 'Registration Committee Member', organization: "Techxetra '24, Tezpur University", duration: 'Nov 2024', description: 'Managed event registrations and coordinated participant queries during the Techxetra festival.', icon: <FaUserGraduate className="text-lg text-blue-600 dark:text-blue-400" />, iconBg: 'bg-blue-50 dark:bg-blue-950/40', borderHover: 'hover:border-blue-300 dark:hover:border-blue-700', bar: 'bg-blue-500' },
  { role: 'Member', organization: 'Google Developer Groups, Tezpur University', duration: 'Aug 2023 – June 2024', description: 'Participated in GDG meetups and contributed to the tech community.', icon: <FaGithub className="text-lg text-slate-700 dark:text-slate-300" />, iconBg: 'bg-slate-100 dark:bg-slate-800/60', borderHover: 'hover:border-slate-300 dark:hover:border-slate-600', bar: 'bg-slate-500' },
  { role: 'Student Volunteer', organization: 'National Service Scheme (NSS)', duration: 'Nov 2022 – June 2024', description: 'Assisted in community service programs, awareness campaigns, and social initiatives.', icon: <FaHandsHelping className="text-lg text-emerald-600 dark:text-emerald-400" />, iconBg: 'bg-emerald-50 dark:bg-emerald-950/40', borderHover: 'hover:border-emerald-300 dark:hover:border-emerald-700', bar: 'bg-emerald-500' },
]

const certificates = [
  { title: 'Introduction to C++', issuer: 'Coding Ninjas', links: { completion: 'https://certificate.codingninjas.com/view/789daa4be35d9b11', excellence: 'https://certificate.codingninjas.com/view/15fdff9a778e534b' }, icon: <FaCertificate className="text-lg text-amber-600 dark:text-amber-400" />, iconBg: 'bg-amber-50 dark:bg-amber-950/40', borderHover: 'hover:border-amber-300 dark:hover:border-amber-700', bar: 'bg-amber-500' },
  { title: 'The Joy of Computing using Python', issuer: 'NPTEL', links: { certificate: 'https://drive.google.com/file/d/1qJyi8DRxzUOgFuCJOGPXdYFq-3_OArlm/view?usp=drive_link' }, icon: <FaCertificate className="text-lg text-orange-600 dark:text-orange-400" />, iconBg: 'bg-orange-50 dark:bg-orange-950/40', borderHover: 'hover:border-orange-300 dark:hover:border-orange-700', bar: 'bg-orange-500' },
  { title: 'Programming in Java', issuer: 'NPTEL', links: { certificate: 'https://drive.google.com/file/d/1gnCogkuQAevKHOjuDrV1zAPF_1k9WNjw/view?usp=drive_link' }, icon: <FaCertificate className="text-lg text-red-600 dark:text-red-400" />, iconBg: 'bg-red-50 dark:bg-red-950/40', borderHover: 'hover:border-red-300 dark:hover:border-red-700', bar: 'bg-red-500' },
  { title: 'Cloud Computing & Distributed Systems', issuer: 'NPTEL', links: { certificate: 'https://drive.google.com/file/d/19lRzjfY-EaeWJsBhmrgKVlJTGdQ0W2Mw/view?usp=drive_link' }, icon: <FaCertificate className="text-lg text-sky-600 dark:text-sky-400" />, iconBg: 'bg-sky-50 dark:bg-sky-950/40', borderHover: 'hover:border-sky-300 dark:hover:border-sky-700', bar: 'bg-sky-500' },
]

const Card = ({ children, borderHover, bar }) => (
  <motion.div
    whileHover={{ y: -3 }}
    className={`light-card glow-card group rounded-xl p-5 flex flex-col gap-4
    border border-slate-200 dark:border-slate-700/60 ${borderHover}
    bg-white dark:bg-slate-900
    transition-all duration-200 relative overflow-hidden h-full`}
  >
    <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl ${bar} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
    {children}
  </motion.div>
)

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-4 mb-5">
    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">{children}</span>
    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
  </div>
)

const Activities = () => {
  return (
    <section
      id="extracurricular"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] py-20 sm:py-24 scroll-mt-20 relative overflow-hidden
      bg-slate-50 dark:bg-[#020817]"
    >
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="orb w-72 h-64 top-0 right-0 bg-cyan-400/8 dark:bg-cyan-500/5" />

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center text-xs font-semibold mb-2 text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.25em]"
      >
        Beyond Code
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
      >
        Activities &amp; Credentials
      </motion.h2>
      <div className="flex justify-center mt-3 mb-12 sm:mb-16">
        <div className="h-0.5 w-12 rounded-full bg-cyan-500" />
      </div>

      <div className="relative z-10">
        {/* Internships */}
        <SectionLabel>Internships &amp; Training</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {internships.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <Card borderHover={item.borderHover} bar={item.bar}>
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{item.role}</h3>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md
                      bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold">{item.organization}</p>
                    <p className="text-slate-400 text-xs mt-0.5 mb-2">{item.duration}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">{item.description}</p>
                    {item.links && (
                      <div className="flex flex-wrap gap-3">
                        {Object.entries(item.links).map(([key, href]) => (
                          <a key={key} href={href} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-teal-600 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                            {key.charAt(0).toUpperCase() + key.slice(1)} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Activities */}
        <SectionLabel>Extracurricular</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {activities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <Card borderHover={item.borderHover} bar={item.bar}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{item.role}</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold mt-0.5">{item.organization}</p>
                  <p className="text-slate-400 text-xs mt-0.5 mb-2">{item.duration}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <SectionLabel>Certifications</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <Card borderHover={cert.borderHover} bar={cert.bar}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${cert.iconBg}`}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{cert.title}</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold mt-0.5 mb-3">{cert.issuer}</p>
                  <div className="flex flex-col gap-1.5">
                    {Object.keys(cert.links).map((key, j) => (
                      <a key={j} href={cert.links[key]} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold
                        text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                        {key.charAt(0).toUpperCase() + key.slice(1)} Certificate ↗
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities
