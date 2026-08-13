import React from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaGithub, FaUserGraduate, FaCertificate, FaHandsHelping } from 'react-icons/fa'

const activities = [
  {
    role: 'Core Team Member (Programming)',
    organization: 'GDG Tezpur University',
    duration: 'Aug 2024 – Present',
    description: 'Organized coding workshops and hackathons. Mentored juniors in programming and web development.',
    icon: <FaGoogle className="text-2xl text-violet-600 dark:text-violet-400" />,
    iconBg: 'bg-violet-100 dark:bg-violet-900/40',
    accent: 'hover:border-violet-400 dark:hover:border-violet-500',
    bar: 'from-violet-500 to-violet-300',
  },
  {
    role: 'Registration Committee Member',
    organization: "Techxetra '24, Tezpur University",
    duration: 'Nov 2024',
    description: 'Managed event registrations and coordinated participant queries during the Techxetra festival.',
    icon: <FaUserGraduate className="text-2xl text-blue-600 dark:text-blue-400" />,
    iconBg: 'bg-blue-100 dark:bg-blue-900/40',
    accent: 'hover:border-blue-400 dark:hover:border-blue-500',
    bar: 'from-blue-500 to-blue-300',
  },
  {
    role: 'Member',
    organization: 'Google Developer Groups, Tezpur University',
    duration: 'Aug 2023 – June 2024',
    description: 'Participated in GDG meetups and contributed to the tech community.',
    icon: <FaGithub className="text-2xl text-gray-700 dark:text-gray-300" />,
    iconBg: 'bg-gray-100 dark:bg-gray-800/60',
    accent: 'hover:border-gray-400 dark:hover:border-gray-500',
    bar: 'from-gray-500 to-gray-300',
  },
  {
    role: 'Student Volunteer',
    organization: 'National Service Scheme (NSS)',
    duration: 'Nov 2022 – June 2024',
    description: 'Assisted in community service programs, awareness campaigns, and social initiatives.',
    icon: <FaHandsHelping className="text-2xl text-emerald-600 dark:text-emerald-400" />,
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
    accent: 'hover:border-emerald-400 dark:hover:border-emerald-500',
    bar: 'from-emerald-500 to-emerald-300',
  },
]

const certificates = [
  {
    title: 'Introduction to C++',
    issuer: 'Coding Ninjas',
    links: {
      completion: 'https://certificate.codingninjas.com/view/789daa4be35d9b11',
      excellence: 'https://certificate.codingninjas.com/view/15fdff9a778e534b',
    },
    icon: <FaCertificate className="text-2xl text-yellow-600 dark:text-yellow-400" />,
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/40',
    accent: 'hover:border-yellow-400 dark:hover:border-yellow-500',
    bar: 'from-yellow-500 to-yellow-300',
  },
  {
    title: 'The Joy of Computing using Python',
    issuer: 'NPTEL',
    links: {
      certificate: 'https://drive.google.com/file/d/1qJyi8DRxzUOgFuCJOGPXdYFq-3_OArlm/view?usp=drive_link',
    },
    icon: <FaCertificate className="text-2xl text-orange-600 dark:text-orange-400" />,
    iconBg: 'bg-orange-100 dark:bg-orange-900/40',
    accent: 'hover:border-orange-400 dark:hover:border-orange-500',
    bar: 'from-orange-500 to-orange-300',
  },
]

const Card = ({ children, accent, bar }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`light-card glow-card group rounded-2xl p-6 flex flex-col gap-4
    border border-gray-200 dark:border-purple-800/50 ${accent}
    bg-white dark:bg-purple-950/30
    transition-all duration-300 relative overflow-hidden`}
  >
    {/* Gradient left bar on hover */}
    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${bar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    {children}
  </motion.div>
)

const Activities = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="extracurricular"
      className="w-full px-[10%] py-20 scroll-mt-20 relative"
    >
      {/* Dot pattern — light mode */}
      <div className="absolute inset-0 dot-pattern dark:opacity-0 opacity-100 pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet-300/15 dark:bg-fuchsia-500/8 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center text-xs font-semibold mb-3 text-violet-500 dark:text-purple-400 uppercase tracking-[0.2em]"
      >
        Beyond Code
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-4xl sm:text-5xl font-Ovo bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
      >
        Activities & Certificates
      </motion.h2>

      <div className="flex justify-center mt-4 mb-14">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
      </div>

      {/* Activities */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-lg font-bold text-gray-700 dark:text-white">Extracurricular</span>
        <div className="flex-1 h-px bg-gradient-to-r from-violet-200 to-transparent dark:from-purple-800/40" />
      </div>

      <div className="grid gap-5 mb-14" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {activities.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card accent={item.accent} bar={item.bar}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconBg}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800 dark:text-white">{item.role}</h3>
                <p className="text-violet-600 dark:text-purple-400 text-xs font-semibold mt-0.5">{item.organization}</p>
                <p className="text-gray-400 text-xs mt-0.5 mb-2">{item.duration}</p>
                <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Certificates */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-lg font-bold text-gray-700 dark:text-white">Certifications</span>
        <div className="flex-1 h-px bg-gradient-to-r from-pink-200 to-transparent dark:from-pink-800/40" />
      </div>

      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card accent={cert.accent} bar={cert.bar}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cert.iconBg}`}>
                {cert.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800 dark:text-white">{cert.title}</h3>
                <p className="text-violet-600 dark:text-purple-400 text-xs font-semibold mt-0.5 mb-3">{cert.issuer}</p>
                <div className="flex flex-col gap-1.5">
                  {Object.keys(cert.links).map((key, j) => (
                    <a
                      key={j}
                      href={cert.links[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {key.charAt(0).toUpperCase() + key.slice(1)} Certificate ↗
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Activities
