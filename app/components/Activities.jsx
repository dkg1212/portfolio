import React from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaGithub, FaUserGraduate, FaCertificate, FaHandsHelping } from 'react-icons/fa'

const activities = [
  {
    role: 'Core Team Member (Programming)',
    organization: 'GDG Tezpur University',
    duration: 'Aug 2024 – Present',
    description: 'Organized coding workshops and hackathons. Mentored juniors in programming and web development.',
    icon: <FaGoogle className="text-2xl text-purple-500 dark:text-purple-400" />,
    iconBg: 'bg-purple-100 dark:bg-purple-900/50',
  },
  {
    role: 'Registration Committee Member',
    organization: "Techxetra '24, Tezpur University",
    duration: 'Nov 2024',
    description: 'Managed event registrations and coordinated participant queries during the Techxetra festival.',
    icon: <FaUserGraduate className="text-2xl text-blue-500 dark:text-blue-400" />,
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
  },
  {
    role: 'Member',
    organization: 'Google Developer Groups, Tezpur University',
    duration: 'Aug 2023 – June 2024',
    description: 'Participated in GDG meetups and contributed to the developer community.',
    icon: <FaGithub className="text-2xl text-gray-700 dark:text-gray-300" />,
    iconBg: 'bg-gray-100 dark:bg-gray-800/60',
  },
  {
    role: 'Student Volunteer',
    organization: 'National Service Scheme (NSS)',
    duration: 'Nov 2022 – June 2024',
    description: 'Assisted in community service programs, awareness campaigns, and social initiatives.',
    icon: <FaHandsHelping className="text-2xl text-emerald-500 dark:text-emerald-400" />,
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
  },
]

const certificates = [
  {
    title: 'Introduction to C++',
    issuer: 'Coding Ninjas',
    links: {
      Completion: 'https://certificate.codingninjas.com/view/789daa4be35d9b11',
      Excellence: 'https://certificate.codingninjas.com/view/15fdff9a778e534b',
    },
    icon: <FaCertificate className="text-2xl text-yellow-500 dark:text-yellow-400" />,
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/40',
  },
  {
    title: 'The Joy of Computing using Python',
    issuer: 'NPTEL',
    links: {
      Certificate: 'https://drive.google.com/file/d/1qJyi8DRxzUOgFuCJOGPXdYFq-3_OArlm/view?usp=drive_link',
    },
    icon: <FaCertificate className="text-2xl text-orange-500 dark:text-orange-400" />,
    iconBg: 'bg-orange-100 dark:bg-orange-900/40',
  },
]

const Card = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ y: -5 }}
    className="glow-card rounded-2xl p-6 border
    border-purple-100 dark:border-purple-800/50
    bg-white dark:bg-[#130028]
    shadow-sm dark:shadow-purple-900/20
    hover:border-purple-300 dark:hover:border-pink-600/50
    transition-all duration-300"
  >
    {children}
  </motion.div>
)

const Activities = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    id="extracurricular"
    className="w-full px-[10%] py-20 scroll-mt-20 relative"
  >
    {/* Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/8 dark:bg-violet-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

    <motion.h4
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="text-center text-sm mb-2 font-Ovo text-purple-500 dark:text-purple-400 uppercase tracking-widest"
    >
      Beyond Code
    </motion.h4>

    <motion.h2
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="text-center text-4xl sm:text-5xl font-Ovo bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4"
    >
      Activities & Certificates
    </motion.h2>

    <p className="text-center text-gray-500 dark:text-gray-400 mb-16 max-w-xl mx-auto">
      Community involvement, events, and learning milestones alongside the tech journey.
    </p>

    {/* Activities */}
    <h3 className="text-lg font-bold text-gray-700 dark:text-purple-300 mb-5 flex items-center gap-2">
      <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full inline-block" />
      Extracurricular
    </h3>
    <div className="grid gap-5 mb-14" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
      {activities.map((item, i) => (
        <Card key={i} delay={i * 0.08}>
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${item.iconBg}`}>
            {item.icon}
          </div>
          <h3 className="font-bold text-sm text-gray-800 dark:text-white mb-1">{item.role}</h3>
          <p className="text-purple-600 dark:text-purple-400 text-xs font-semibold mb-1">{item.organization}</p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mb-3">{item.duration}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
        </Card>
      ))}
    </div>

    {/* Certificates */}
    <h3 className="text-lg font-bold text-gray-700 dark:text-purple-300 mb-5 flex items-center gap-2">
      <span className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full inline-block" />
      Certifications
    </h3>
    <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
      {certificates.map((cert, i) => (
        <Card key={i} delay={i * 0.1}>
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${cert.iconBg}`}>
            {cert.icon}
          </div>
          <h3 className="font-bold text-sm text-gray-800 dark:text-white mb-1">{cert.title}</h3>
          <p className="text-purple-600 dark:text-purple-400 text-xs font-semibold mb-4">{cert.issuer}</p>
          <div className="flex flex-col gap-2">
            {Object.entries(cert.links).map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium
                text-pink-600 dark:text-pink-400 hover:text-purple-600 dark:hover:text-purple-300
                transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {label} Certificate ↗
              </a>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </motion.div>
)

export default Activities
