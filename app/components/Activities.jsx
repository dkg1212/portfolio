import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaGithub, FaUserGraduate, FaCertificate, FaHandsHelping } from 'react-icons/fa';

const Activities = () => {
  const activities = [
    {
      role: "Core Team Member (Programming)",
      organization: "GDG Tezpur University",
      duration: "Aug 2024 – Present",
      description: "Organized coding workshops and hackathons. Mentored juniors in programming and web development.",
      icon: <FaGoogle className="text-3xl text-purple-500" />
    },
    {
      role: "Registration Committee Member",
      organization: "Techxetra '24, Tezpur University",
      duration: "Nov 2024",
      description: "Managed event registrations and coordinated participant queries during the Techxetra festival.",
      icon: <FaUserGraduate className="text-3xl text-blue-500" />
    },
    {
      role: "Member",
      organization: "Google Developer Groups, Tezpur University",
      duration: "Aug 2023 – June 2024",
      description: "Participated in Google Developer Group meetups and contributed to community.",
      icon: <FaGithub className="text-3xl text-gray-700 dark:text-white" />
    },
    {
      role: "Student Volunteer",
      organization: "National Service Scheme (NSS)",
      duration: "Nov 2022 – June 2024",
      description: "Assisted in community service programs, awareness campaigns, and social initiatives.",
      icon: <FaHandsHelping className="text-3xl text-green-500" />
    },
  ];

  const certificates = [
    {
      title: "Introduction to C++",
      issuer: "Coding Ninjas",
      links: {
        completion: "https://certificate.codingninjas.com/view/789daa4be35d9b11",
        excellence: "https://certificate.codingninjas.com/view/15fdff9a778e534b"
      },
      icon: <FaCertificate className="text-3xl text-yellow-500" />
    },
    {
      title: "The Joy of Computing using Python",
      issuer: "NPTEL",
      links: {
        certificate: "https://drive.google.com/file/d/1qJyi8DRxzUOgFuCJOGPXdYFq-3_OArlm/view?usp=drive_link"
      },
      icon: <FaCertificate className="text-3xl text-orange-500" />
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="extracurricular"
      className="w-full px-[10%] py-20 scroll-mt-20 relative"
    >
      {/* Static background glow */}
      <div className="absolute inset-0 -z-10 opacity-20 blur-3xl bg-gradient-to-r from-fuchsia-400/30 
      via-purple-300/20 to-cyan-300/30 rounded-full pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-3xl sm:text-5xl font-Ovo bg-gradient-to-r from-purple-600 
        via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4"
      >
        Activities & Certificates
      </motion.h2>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
        Beyond code — community involvement, events, and learning milestones.
      </p>

      {/* Activities Grid */}
      <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-6">Extracurricular</h3>
      <div
        className="grid gap-5 mb-14"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
      >
        {activities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-xl shadow-sm hover:shadow-md border border-purple-100 dark:border-gray-700/50 
            bg-white dark:bg-gray-900/50 p-6 flex flex-col gap-3 transition-all duration-300"
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="text-base font-semibold text-gray-800 dark:text-white">{item.role}</h3>
              <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">{item.organization}</p>
              <p className="text-gray-400 text-xs mb-2">{item.duration}</p>
              <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificates Grid */}
      <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-6">Certifications</h3>
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
      >
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-xl shadow-sm hover:shadow-md border border-purple-100 dark:border-gray-700/50 
            bg-white dark:bg-gray-900/50 p-6 flex flex-col gap-3 transition-all duration-300"
          >
            <div>{cert.icon}</div>
            <div>
              <h3 className="text-base font-semibold text-gray-800 dark:text-white">{cert.title}</h3>
              <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-3">{cert.issuer}</p>
              <div className="flex flex-col gap-1">
                {Object.keys(cert.links).map((key, i) => (
                  <a
                    key={i}
                    href={cert.links[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-purple-600 dark:text-pink-400 dark:hover:text-pink-300 underline transition-colors"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)} Certificate ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Activities;
